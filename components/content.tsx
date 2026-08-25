"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"

const DATE_LOCALE: Record<string, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" }

interface MediumArticle {
  title: string
  link: string
  pubDate: string
  excerpt: string
  thumbnail?: string
}

interface LinkedInRecommendation {
  id: string
  author: string
  role: string
  text: string
  linkedinUrl: string
  date: string
  authorAvatar?: string
  company?: string
}

export default function Content() {
  const { lang, t } = useI18n()
  const c = t.content
  const dateLocale = DATE_LOCALE[lang] ?? "pt-BR"
  const [articles, setArticles] = useState<MediumArticle[]>([])
  const [recommendations, setRecommendations] = useState<LinkedInRecommendation[]>([])
  const [articlesLoading, setArticlesLoading] = useState(true)
  const [recsLoading, setRecsLoading] = useState(true)
  const [articlesError, setArticlesError] = useState(false)
  const [recsError, setRecsError] = useState(false)
  const [expandedRecs, setExpandedRecs] = useState<Set<string>>(new Set())

  const toggleRec = (id: string) => {
    setExpandedRecs((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  useEffect(() => {
    fetch("/api/medium-rss", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles.slice(0, 3))
        } else {
          setArticlesError(true)
        }
      })
      .catch(() => setArticlesError(true))
      .finally(() => setArticlesLoading(false))

    fetch("/api/recommendations", { cache: "no-store" })
      .then((res) => res.json())
      .then((payload) => {
        const data: LinkedInRecommendation[] = payload?.recommendations || payload
        if (Array.isArray(data) && data.length > 0) {
          const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          setRecommendations(sorted.slice(0, 3))
        } else {
          setRecsError(true)
        }
      })
      .catch(() => setRecsError(true))
      .finally(() => setRecsLoading(false))
  }, [])

  const showArticles = articlesLoading || (!articlesError && articles.length > 0)
  const showRecs = recsLoading || (!recsError && recommendations.length > 0)

  if (!showArticles && !showRecs) return null

  return (
    <>
      {showArticles && (
        <section id="content" className="section-shell content-section split-section">
          <div className="section-heading">
            <span className="section-index">03</span>
            <div>
              <h2>{c.articlesHeading}</h2>
              <p>{c.subtitle}</p>
            </div>
          </div>

          {articlesLoading ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "48px 0" }}>
              <Loader2 className="spin" size={28} color="var(--primary)" />
            </div>
          ) : (
            <div className="article-list">
              {articles.map((article, i) => (
                <a className="article-row" href={article.link} target="_blank" rel="noopener noreferrer" key={article.link}>
                  <span className="article-no">0{i + 1}</span>
                  <div>
                    <span className="article-type">
                      {new Date(article.pubDate).toLocaleDateString(dateLocale, { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <h3>{article.title}</h3>
                  </div>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {showRecs && (
        <section id="recommendations" className="section-shell content-section recommendations">
          <div className="section-heading">
            <span className="section-index">04</span>
            <div>
              <h2>{c.recsHeading}</h2>
            </div>
          </div>

          {recsLoading ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "48px 0" }}>
              <Loader2 className="spin" size={28} color="var(--primary)" />
            </div>
          ) : (
            <div className="quote-grid">
              {recommendations.map((rec) => {
                const expanded = expandedRecs.has(rec.id)
                const isLong = rec.text.length > 260
                return (
                  <blockquote key={rec.id}>
                    <span className="quote-mark">&ldquo;</span>
                    <p className={!expanded && isLong ? "clamped" : undefined}>{rec.text}</p>
                    {isLong && (
                      <button className="quote-more" onClick={() => toggleRec(rec.id)}>
                        {expanded ? c.readLess : c.readMore}
                      </button>
                    )}
                    <footer>
                      <strong>{rec.author}</strong>
                      <span>
                        {rec.role}
                        {rec.company ? ` · ${rec.company}` : ""}
                      </span>
                    </footer>
                  </blockquote>
                )
              })}
            </div>
          )}
        </section>
      )}
    </>
  )
}
