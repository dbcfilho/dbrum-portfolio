"use client"

import { useEffect, useState } from "react"
import { ExternalLink, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  return (
    <section id="content" className="py-12 sm:py-16 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
            Publicações
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Artigos técnicos e recomendações da comunidade
          </p>
        </div>

        {/* Artigos do Medium */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Artigos no Medium</h3>
          </div>

          {articlesLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
            </div>
          ) : articlesError || articles.length === 0 ? (
            <div className="glass-card rounded-lg p-8 text-center">
              <p className="text-gray-400">Os artigos aparecerão aqui quando disponíveis.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {articles.map((article, index) => (
                <div
                  key={article.link}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-purple-500/20 animate-in fade-in slide-in-from-bottom flex flex-col max-h-[420px]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.1)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />

                  {article.thumbnail ? (
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scan" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-44 w-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <div className="relative">
                        <BookOpen className="w-16 h-16 text-purple-400/40 group-hover:text-cyan-400/60 transition-colors duration-500" />
                        <div className="absolute -inset-4 bg-purple-500/20 blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />
                      </div>
                    </div>
                  )}

                  <div className="relative p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/30">
                        {new Date(article.pubDate).toLocaleDateString("pt-BR", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 text-balance">
                      {article.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-400 leading-normal mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/50 hover:border-cyan-400/70 hover:from-purple-600/30 hover:to-cyan-600/30 text-white hover:text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group/btn"
                    >
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="font-semibold text-sm">Ler no Medium</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl group-hover:from-cyan-500/30 transition-all duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recomendações do LinkedIn */}
        <div>
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Recomendações do LinkedIn</h3>
          </div>

          {recsLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
            </div>
          ) : recsError || recommendations.length === 0 ? (
            <div className="glass-card rounded-lg p-8 text-center">
              <p className="text-gray-400">Ainda não há recomendações disponíveis.</p>
              <p className="text-gray-500 text-xs mt-2">Usando cache local ou a fonte de dados pode estar vazia.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {recommendations.map((rec, index) => (
                <div
                  key={rec.id}
                  className="glass-card rounded-lg p-4 sm:p-5 hover:border-purple-500/50 transition-all duration-300 group animate-in fade-in slide-in-from-bottom flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="mb-2.5 sm:mb-3">
                      <div className="flex items-start gap-3">
                        {rec.authorAvatar ? (
                          <img
                            src={rec.authorAvatar}
                            alt={rec.author}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-purple-500/30"
                          />
                        ) : (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-purple-500/30 bg-purple-500/10" />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">{rec.author}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            {rec.company && (
                              <span className="text-xs sm:text-sm text-gray-300">{rec.company}</span>
                            )}
                            {rec.role && (
                              <span className="text-xs sm:text-sm text-purple-400">{rec.role}</span>
                            )}
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                              {new Date(rec.date).toLocaleDateString("pt-BR", { month: "short", year: "numeric" })}
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
                    className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                  >
                    Ver no LinkedIn
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
