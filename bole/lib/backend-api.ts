/** FastAPI same-origin proxy (`/backend-api/*` → `BACKEND_URL` = meta) */
export const BACKEND_API_PREFIX = "/backend-api";

export const BACKEND_CONNECT_ERROR =
  "백엔드(meta)에 연결할 수 없습니다. BACKEND_URL과 meta 서버(8100) 실행 여부를 확인하세요.";

export function backendApiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BACKEND_API_PREFIX}${normalized}`;
}

export function parseBackendErrorDetail(data: unknown, fallback: string): string {
  if (typeof data !== "object" || data === null) return fallback;
  const record = data as { error?: unknown; detail?: unknown };
  if (typeof record.error === "string" && record.error.trim()) return record.error;
  const detail = record.detail;
  if (typeof detail === "string" && detail.trim()) return detail;
  if (Array.isArray(detail)) {
    const messages = detail
      .map((item) => {
        if (typeof item === "object" && item !== null && "msg" in item) {
          return String((item as { msg?: unknown }).msg ?? "");
        }
        return String(item);
      })
      .filter(Boolean);
    if (messages.length > 0) return messages.join(" ");
  }
  return fallback;
}

export async function backendFetch(
  path: string,
  init?: RequestInit,
): Promise<Response> {
  return fetch(backendApiUrl(path), {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
}
