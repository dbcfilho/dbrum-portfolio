import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const res = await fetch("/recommendations-v2.json", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to load recommendations-v2.json")
    }

    const recommendations = await res.json()

    return NextResponse.json({
      recommendations,
      source: "/recommendations-v2.json",
    })
  } catch (error) {
    console.error("[API][recommendations]", error)

    return NextResponse.json(
      { recommendations: [], error: "Failed to load recommendations" },
      { status: 500 }
    )
  }
}
