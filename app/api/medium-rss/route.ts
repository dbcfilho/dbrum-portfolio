import { NextResponse } from "next/server"

// Revalida a cada 1h (ISR) — evita marteladas no Medium e serve rápido do cache.
export const revalidate = 3600

const MEDIUM_RSS_URL = "https://medium.com/feed/@dbrum_"
const ARTICLES_LIMIT = 3

type Article = {
  title: string
  link: string
  pubDate: string
  excerpt: string
  thumbnail: string | null
}

/**
 * Fallback com os artigos reais mais recentes do Medium.
 * O Medium costuma bloquear requisições de servidor (IP de datacenter / User-Agent),
 * então, se a busca ao vivo falhar, a seção continua exibindo conteúdo real
 * em vez de ficar vazia.
 */
const FALLBACK_ARTICLES: Article[] = [
  {
    title: "Adults Don’t Learn Like Children and Tech Degrees Still Haven’t Figured That Out",
    link: "https://medium.com/@dbrum_/adults-dont-learn-like-children-and-tech-degrees-still-haven-t-figured-that-out-e2c35ac75376",
    pubDate: "Sun, 15 Mar 2026 20:07:40 GMT",
    excerpt:
      "Most tech degrees were built on the same logic as high school: the student arrives empty, the teacher fills them up. With adults, that logic starts falling apart by the first semester...",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*C6Oieaktynp_6lOnJCtGlQ.png",
  },
  {
    title: "Software That Only “Works” Is Not Enough",
    link: "https://medium.com/@dbrum_/software-that-only-works-is-not-enough-4e3cacb833af",
    pubDate: "Thu, 08 Jan 2026 13:15:10 GMT",
    excerpt:
      "Quality Assurance is not support — it is engineering. In a world dominated by SaaS products, quality and security are no longer competitive advantages. They are survival requirements...",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*asmpQagy_eEkzJCvpq-VlQ.png",
  },
  {
    title: "Beyond Spreadsheets: Open Source Management for Social Impact",
    link: "https://medium.com/@dbrum_/beyond-spreadsheets-open-source-management-for-social-impact-d464c17933a2",
    pubDate: "Thu, 11 Dec 2025 16:51:16 GMT",
    excerpt:
      "An architectural review of “Casa da Cultura v3”, a Django-based platform helping social projects move from paper chaos to digital efficiency...",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*ps8oGg9Wk7Rzr1WuLaqDeg.png",
  },
]

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
}

function firstMatch(source: string, regex: RegExp): string | null {
  return source.match(regex)?.[1] ?? null
}

function parseFeed(xml: string): Article[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

  return items.slice(0, ARTICLES_LIMIT).map((item) => {
    const title =
      firstMatch(item, /<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) ?? ""
    const link = firstMatch(item, /<link>([\s\S]*?)<\/link>/) ?? ""
    const pubDate = firstMatch(item, /<pubDate>([\s\S]*?)<\/pubDate>/) ?? ""

    // `[\s\S]` garante casar conteúdo multi-linha (o CDATA do Medium tem várias linhas).
    const content =
      firstMatch(item, /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) ??
      firstMatch(item, /<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) ??
      ""

    const text = stripHtml(content)
    const thumbnail = firstMatch(content, /<img[^>]+src="([^">]+)"/i)

    return {
      title: title.trim(),
      link: link.trim(),
      pubDate: pubDate.trim(),
      excerpt: text ? `${text.slice(0, 150)}...` : "",
      thumbnail,
    }
  })
}

export async function GET() {
  try {
    const response = await fetch(MEDIUM_RSS_URL, {
      // Cabeçalhos de navegador reduzem o bloqueio do Medium a bots/servidores.
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml; q=0.9, */*; q=0.8",
        "Accept-Language": "en-US,en;q=0.9,pt-BR;q=0.8",
      },
      next: { revalidate },
    })

    if (!response.ok) throw new Error(`Medium RSS fetch failed: ${response.status}`)

    const xml = await response.text()
    const articles = parseFeed(xml)

    if (articles.length === 0) throw new Error("Medium RSS returned no items")

    return NextResponse.json({ articles })
  } catch (error) {
    console.error("[API][Medium RSS] usando fallback:", error)
    // Nunca deixa a seção vazia: devolve os artigos reais mais recentes.
    return NextResponse.json({ articles: FALLBACK_ARTICLES, fallback: true })
  }
}
