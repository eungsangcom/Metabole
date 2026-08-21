"use client";

import { useEffect, useState } from "react";
import { backendFetch, BACKEND_CONNECT_ERROR } from "@/lib/backend-api";
import { cn } from "@/lib/utils";

type Health = { status?: string; service?: string };

export function HealthStatus() {
  const [data, setData] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await backendFetch("/health");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as Health;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setError(BACKEND_CONNECT_ERROR);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-card/80 p-5">
      <p className="text-[11px] tracking-[0.16em] text-primary uppercase">meta /health</p>
      <p
        className={cn(
          "mt-3 text-sm",
          error ? "text-red-300" : "text-foreground",
        )}
      >
        {error ?? (data ? `${data.service ?? "meta"} · ${data.status ?? "?"}` : "확인 중…")}
      </p>
    </div>
  );
}
