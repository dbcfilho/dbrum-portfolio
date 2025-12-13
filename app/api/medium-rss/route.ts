import { NextResponse } from "next/server"

const MEDIUM_RSS_URL = "https://medium.com/feed/@dbrum_"
const CACHE_DURATION = 6 * 60 * 60 * 1000 // 6 hours in milliseconds

let cachedData: { articles: any[]; timestamp: number } | null = null

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
  // Try to find og:image or first img tag in content
  const ogImageMatch = content.match(/<img[^>]+src="([^">]+)"/i)
  if (ogImageMatch && ogImageMatch[1]) {
    return ogImageMatch[1]
  }
  return null
}

export async function GET() {
  try {
    // Check cache
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json({ articles: cachedData.articles })
    }

    // Fetch RSS feed
    const response = await fetch(MEDIUM_RSS_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed")
    }

    const xmlText = await response.text()

    // Simple XML parsing for RSS
    const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || []

    const articles = items.slice(0, 3).map((item) => {
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || ""
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || ""
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ""
      const description = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || ""
      const content = item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/)?.[1] || description

      // Strip HTML and limit excerpt
      const excerpt = stripHtml(description).substring(0, 150) + "..."
      const thumbnail = extractThumbnail(content)

      return {
        title,
        link,
        pubDate,
        excerpt,
        thumbnail, // Added thumbnail field
      }
    })

    // Update cache
    cachedData = {
      articles,
      timestamp: Date.now(),
    }

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("[v0] Error fetching Medium RSS:", error)
    return NextResponse.json({ articles: [], error: "Failed to fetch articles" }, { status: 500 })
  }
}
