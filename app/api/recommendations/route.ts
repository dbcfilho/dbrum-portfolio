import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    ACTIVE_ROUTE: true,
    MESSAGE: "THIS IS THE ACTIVE recommendations ROUTE",
    TIMESTAMP: Date.now(),
  })
}
