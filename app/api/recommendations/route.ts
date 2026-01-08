import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://localhost:3000"
}

export async function GET() {
  try {
    const baseUrl = getBaseUrl()

    const res = await fetch(
      `${baseUrl}/recommendations.json?v=${Date.now()}`,
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
