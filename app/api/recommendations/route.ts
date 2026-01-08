import { NextResponse } from "next/server"
import fs from "node:fs/promises"
import path from "node:path"

export const dynamic = "force-dynamic"

type Recommendation = {
  id: string
  author: string
  role: string
  text: string
  linkedinUrl: string
  date: string
  authorAvatar?: string
  company?: string
}

const FILE_PATH = path.join(
  process.cwd(),
  "public",
  "recommendations.json"
)

function normalize(list: any[]): Recommendation[] {
  return (list ?? [])
    .filter(
      (item) =>
        item &&
        item.id &&
        item.author &&
        item.text &&
        item.linkedinUrl &&
        item.date
    )
    .map((item) => ({
      id: String(item.id),
      author: String(item.author),
      role: item.role ? String(item.role) : "",
      text: String(item.text),
      linkedinUrl: String(item.linkedinUrl),
      date: new Date(item.date).toISOString(),
      authorAvatar: item.authorAvatar
        ? String(item.authorAvatar)
        : undefined,
      company: item.company ? String(item.company) : undefined,
    }))
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
}

export async function GET() {
  try {
    const file = await fs.readFile(FILE_PATH, "utf-8")
    const json = JSON.parse(file)

    const recommendations = normalize(json)

    if (!recommendations.length) {
      throw new Error("No valid recommendations found")
    }

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error("[API][recommendations]", error)

    return NextResponse.json(
      {
        recommendations: [],
        error: "Failed to load recommendations",
      },
      { status: 500 }
    )
  }
}
