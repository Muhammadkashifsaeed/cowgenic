import { NextResponse } from "next/server";
import type { HealthStatus } from "@/types";

export async function GET() {
  const payload: HealthStatus = {
    ok: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV ?? "development",
  };

  return NextResponse.json(payload, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}
