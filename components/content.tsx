"use client"

import { useEffect, useState } from "react"
import { ExternalLink, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n/language-provider"
import { SectionMeta } from "@/components/section-meta"

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
          const sorted = [...data].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
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
    <section id="content" className="py-s-12 sm:py-s-24 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4">
        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.content}>
            <div className="text-center animate-in fade-in slide-in-from-bottom duration-700">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-gradient-brand tracking-wide">
                {c.heading}
              </h2>
              <p className="text-ink-2 text-sm sm:text-base max-w-2xl mx-auto px-4">{c.subtitle}</p>
            </div>
          </SectionMeta>
        </div>

        {/* Artigos do Medium */}
        {showArticles && (
        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.content} meta={c.articlesHeading}>
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2" />
            <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-wide">{c.articlesHeading}</h3>
          </div>

          {articlesLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-ledger animate-spin" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {articles.map((article, index) => (
                <div
                  key={article.link}
                  className="group relative glass-card rounded-sm overflow-hidden hover:border-ledger transition-colors duration-300 animate-in fade-in slide-in-from-bottom flex flex-col max-h-[420px]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {article.thumbnail ? (
                    <div className="relative h-44 w-full overflow-hidden border-b border-rule">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative h-44 w-full bg-panel border-b border-rule flex items-center justify-center overflow-hidden">
                      <BookOpen className="w-16 h-16 text-ink-3" />
                    </div>
                  )}

                  <div className="relative p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="label px-2 py-0.5 rounded-sm border border-rule">
                        {new Date(article.pubDate).toLocaleDateString(dateLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-ink mb-3 leading-tight text-balance">
                      {article.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-ink-3 leading-normal mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full border-ink-3 text-ink hover:border-ledger hover:bg-panel bg-transparent transition-all duration-300"
                    >
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="font-semibold text-sm">{c.readMedium}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          </SectionMeta>
        </div>
        )}

        {/* Recomendações do LinkedIn */}
        {showRecs && (
        <div>
          <SectionMeta label={t.sectionLabels.content} meta={c.recsHeading}>
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-wide">{c.recsHeading}</h3>
          </div>

          {recsLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-ledger animate-spin" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {recommendations.map((rec, index) => (
                <div
                  key={rec.id}
                  className="glass-card rounded-sm p-4 sm:p-5 hover:border-ledger transition-all duration-300 group animate-in fade-in slide-in-from-bottom flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="mb-2.5 sm:mb-3">
                      <div className="flex items-start gap-3">
                        {rec.authorAvatar ? (
                          <img
                            src={rec.authorAvatar}
                            alt={rec.author}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-rule"
                          />
                        ) : (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-rule bg-panel" />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg font-bold text-ink mb-0.5">{rec.author}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            {rec.company && <span className="text-xs sm:text-sm text-ink-2">{rec.company}</span>}
                            {rec.role && <span className="text-xs sm:text-sm text-ledger">{rec.role}</span>}
                            <span className="label px-2 py-0.5 rounded-sm border border-rule">
                              {new Date(rec.date).toLocaleDateString(dateLocale, { month: "short", year: "numeric" })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-2 leading-normal italic mb-3 line-clamp-4">
                      &quot;{rec.text}&quot;
                    </p>
                  </div>
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm text-ledger hover:opacity-80 transition-opacity mt-auto"
                  >
                    {c.viewLinkedin}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
          </SectionMeta>
        </div>
        )}
      </div>
    </section>
  )
}
