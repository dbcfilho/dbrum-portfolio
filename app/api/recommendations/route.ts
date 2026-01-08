import { NextResponse } from "next/server"
import { recommendations } from "./data"

export const dynamic = "force-dynamic"

export async function GET() {
  console.log(
    "[API recommendations] total:",
    recommendations.length
  )

  return NextResponse.json({
    recommendations,
  })
}
