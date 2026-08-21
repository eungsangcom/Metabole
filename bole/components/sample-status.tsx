"use client";

import { useEffect, useState } from "react";
import { backendFetch, BACKEND_CONNECT_ERROR, parseBackendErrorDetail } from "@/lib/backend-api";

type Sample = {
  id: number;
  name: string;
  channel: string;
  role_label: string;
  description: string;
};

export function SampleStatus() {
  const [data, setData] = useState<Sample | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await backendFetch("/api/sample/myself");
        const json = (await res.json()) as Sample & { detail?: unknown; error?: unknown };
        if (!res.ok) {
          throw new Error(parseBackendErrorDetail(json, `HTTP ${res.status}`));
        }
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : BACKEND_CONNECT_ERROR);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-card/80 p-5">
      <p className="text-[11px] tracking-[0.16em] text-primary uppercase">
        /api/sample/myself
      </p>
      {error ? (
        <p className="mt-3 text-sm text-red-300">{error}</p>
      ) : data ? (
        <div className="mt-3 space-y-1 text-sm">
          <p className="font-medium text-foreground">{data.name}</p>
          <p className="text-muted-foreground">{data.role_label}</p>
          <p className="text-xs text-muted-foreground">{data.description}</p>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">확인 중…</p>
      )}
    </div>
  );
}
