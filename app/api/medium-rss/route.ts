import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const MEDIUM_RSS_URL = "https://medium.com/feed/@dbrum_"
const ARTICLES_LIMIT = 3

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim()
}

function extractThumbnail(content: string): string | null {
  const match = content.match(/<img[^>]+src="([^">]+)"/i)
  return match?.[1] ?? null
}

export async function GET() {
  try {
    const response = await fetch(MEDIUM_RSS_URL, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
    })

    if (!response.ok) {
      throw new Error(`Medium RSS fetch failed: ${response.status}`)
    }

    const xml = await response.text()
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

    const articles = items.slice(0, ARTICLES_LIMIT).map((item) => {
      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? ""

      const link =
        item.match(/<link>(.*?)<\/link>/)?.[1] ?? ""

      const pubDate =
        item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? ""

      const description =
        item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ??
        ""

      const content =
        item.match(
          /<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/
        )?.[1] ?? description

      return {
        title,
        link,
        pubDate,
        excerpt: `${stripHtml(content).slice(0, 150)}...`,
        thumbnail: extractThumbnail(content),
      }
    })

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("[API][Medium RSS]", error)

    return NextResponse.json(
      { articles: [], error: "Failed to fetch Medium articles" },
      { status: 500 }
    )
  }
}
