import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    status: "ok",
    version: process.env.NEXT_PUBLIC_GIT_SHA || "unknown",
  })
}
