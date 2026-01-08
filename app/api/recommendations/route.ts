import { NextResponse } from "next/server"
import { recommendations } from "./data"

export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json({
    recommendations: recommendations.sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ),
  })
}
