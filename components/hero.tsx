"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/language-provider"
import { PlatformDiagram } from "@/components/platform-diagram"

const CV_URL = "/Douglas-Brum-Desenvolvedor-Backend.pdf"

export default function Hero() {
  const { t } = useI18n()
  const reduce = useReducedMotion()
  const h = t.hero
  const diagramNodes = [h.diagram.nodes.corefarma, h.diagram.nodes.corefood, h.diagram.nodes.simmias]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-s-8 overflow-x-hidden">
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4 py-s-6 sm:py-s-8 w-full">
        {/* Cabeçalho reduzido — nome, cargo e status, como cabeçalho de documento.
            Animação em CSS puro (tw-animate-css), não Framer Motion: o <h1> é o
            elemento de LCP da página, e uma entrada controlada por JS empurra o
            paint para depois da hidratação — prefers-reduced-motion já é tratado
            pela regra global em globals.css. */}
        <div className="text-center mb-s-8 sm:mb-s-12 animate-in fade-in slide-in-from-top-2 duration-500">
          <span className="inline-flex items-center gap-2 rounded-sm border border-rule px-3 py-1 text-xs sm:text-sm text-ink-2 font-medium mb-s-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ledger opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ledger" />
            </span>
            {h.badge}
          </span>
          <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
            <h1 className="wordmark text-2xl sm:text-3xl">Douglas Brum</h1>
            <span className="label">{h.role}</span>
          </div>
        </div>

        {/* Diagrama da plataforma — protagonista da primeira dobra */}
        <div className="max-w-3xl mx-auto mb-s-8 sm:mb-s-12">
          <PlatformDiagram
            coreLabel={h.diagram.coreLabel}
            coreLines={h.diagram.coreLines}
            nodes={diagramNodes}
            reduce={!!reduce}
          />
        </div>

        {/* Conteúdo de apoio: intro, CTAs, métricas e redes */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <p
            className="body text-ink-2 mx-auto [&_strong]:text-ink [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: h.intro }}
          />

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-s-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand text-paper font-semibold hover:opacity-90 transition-all w-full sm:w-auto group"
            >
              <Link href="#contact">
                {h.ctaPrimary}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ink-3 text-ink hover:border-ledger hover:bg-panel bg-transparent w-full sm:w-auto"
            >
              <Link href="#portfolio">{h.ctaSecondary}</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-ink-2 hover:text-ledger hover:bg-panel w-full sm:w-auto"
            >
              <a href={CV_URL} download target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                {h.ctaCv}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-s-6 max-w-md mx-auto">
            {h.stats.map((s) => (
              <div key={s.label} className="glass-card rounded-sm px-3 py-3 text-center">
                <div className="text-xl sm:text-2xl font-bold text-ink">{s.value}</div>
                <div className="text-xs text-ink-3 leading-tight mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-s-4">
            <a
              href="https://github.com/dbcfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-ink-3 hover:border-ledger hover:bg-panel transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-ink-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/dbcfilho/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-ink-3 hover:border-ledger hover:bg-panel transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-ink-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
