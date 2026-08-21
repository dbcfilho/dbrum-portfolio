"use client"

import { useEffect, useState } from "react"
import { ExternalLink, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <section id="content" className="py-12 sm:py-16 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-brand-light to-brand-cyan bg-clip-text text-transparent tracking-wide">
            {c.heading}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">{c.subtitle}</p>
        </div>

        {/* Artigos do Medium */}
        {showArticles && (
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{c.articlesHeading}</h3>
          </div>

          {articlesLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-brand-cyan animate-spin" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {articles.map((article, index) => (
                <div
                  key={article.link}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-brand/30 hover:border-brand-cyan/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-brand/20 animate-in fade-in slide-in-from-bottom flex flex-col max-h-[420px]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.12)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand-cyan/0 group-hover:from-brand/10 group-hover:via-brand/5 group-hover:to-brand-cyan/10 transition-all duration-500 pointer-events-none" />

                  {article.thumbnail ? (
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/10 to-transparent animate-scan" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-44 w-full bg-gradient-to-br from-slate-900 via-brand/20 to-slate-900 flex items-center justify-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <div className="relative">
                        <BookOpen className="w-16 h-16 text-brand-cyan/40 group-hover:text-brand-cyan-light/60 transition-colors duration-500" />
                        <div className="absolute -inset-4 bg-brand/20 blur-2xl group-hover:bg-brand-cyan/30 transition-all duration-500" />
                      </div>
                    </div>
                  )}

                  <div className="relative p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-brand-cyan-light bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/30">
                        {new Date(article.pubDate).toLocaleDateString(dateLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-light group-hover:to-brand-cyan-light group-hover:bg-clip-text transition-all duration-300 text-balance">
                      {article.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-400 leading-normal mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-brand/20 to-brand-cyan/20 border border-brand/50 hover:border-brand-cyan/70 hover:from-brand/30 hover:to-brand-cyan/30 text-white hover:text-white shadow-lg hover:shadow-brand/30 transition-all duration-300 group/btn"
                    >
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="font-semibold text-sm">{c.readMedium}</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/20 to-transparent blur-2xl group-hover:from-brand-cyan/30 transition-all duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
        )}

        {/* Recomendações do LinkedIn */}
        {showRecs && (
        <div>
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-brand-light"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{c.recsHeading}</h3>
          </div>

          {recsLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-brand-cyan animate-spin" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {recommendations.map((rec, index) => (
                <div
                  key={rec.id}
                  className="glass-card rounded-lg p-4 sm:p-5 hover:border-brand/50 transition-all duration-300 group animate-in fade-in slide-in-from-bottom flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="mb-2.5 sm:mb-3">
                      <div className="flex items-start gap-3">
                        {rec.authorAvatar ? (
                          <img
                            src={rec.authorAvatar}
                            alt={rec.author}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand/30"
                          />
                        ) : (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand/30 bg-brand/10" />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">{rec.author}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            {rec.company && (
                              <span className="text-xs sm:text-sm text-gray-300">{rec.company}</span>
                            )}
                            {rec.role && (
                              <span className="text-xs sm:text-sm text-brand-cyan">{rec.role}</span>
                            )}
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light">
                              {new Date(rec.date).toLocaleDateString(dateLocale, { month: "short", year: "numeric" })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-normal italic mb-3 line-clamp-4">
                      &quot;{rec.text}&quot;
                    </p>
                  </div>
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm text-brand-light hover:text-brand-light transition-colors mt-auto"
                  >
                    {c.viewLinkedin}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        )}
      </div>
    </section>
  )
}
