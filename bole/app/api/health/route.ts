import { NextResponse } from "next/server";

/** bole 자체 헬스 — meta 연결과 별개 */
export async function GET() {
  return NextResponse.json({ status: "ok", service: "bole" });
}
