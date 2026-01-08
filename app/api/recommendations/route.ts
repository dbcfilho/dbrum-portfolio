import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const res = await fetch(
      `/recommendations.json?v=${Date.now()}`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch recommendations.json")
    }

    const recommendations = await res.json()

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("[API][recommendations]", error)

    return NextResponse.json(
      { recommendations: [], error: "Failed to load recommendations" },
      { status: 500 }
    )
  }
}
