"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight, Download, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/components/i18n/language-provider"

const CV_URL = "/Douglas-Brum-Desenvolvedor-Backend.pdf"

export default function Hero() {
  const { t } = useI18n()
  const reduce = useReducedMotion()
  const h = t.hero

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  }
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo — Conteúdo */}
          <motion.div className="space-y-5" variants={container} initial="hidden" animate="show">
            {/* Badge de disponibilidade (prova de confiança) */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-3 py-1 text-xs sm:text-sm text-brand-cyan-light font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
                </span>
                {h.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-[1.05]"
            >
              <span className="text-white">Douglas Brum</span>
              <span className="mt-2 block text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-brand">
                {h.headline}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl [&_strong]:text-white [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: h.intro }}
            />

            {/* Botões CTA */}
            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-gradient-brand text-white font-semibold hover:opacity-90 hover:glow-brand transition-all w-full sm:w-auto group"
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
                className="border-brand/50 text-white hover:border-brand-cyan hover:bg-brand/10 bg-transparent w-full sm:w-auto"
              >
                <Link href="#portfolio">{h.ctaSecondary}</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-brand-cyan hover:bg-brand/5 w-full sm:w-auto"
              >
                <a href={CV_URL} download target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  {h.ctaCv}
                </a>
              </Button>
            </motion.div>

            {/* Métricas de confiança */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3 pt-4 max-w-md">
              {h.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-lg px-3 py-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient-brand">{s.value}</div>
                  <div className="text-[11px] sm:text-xs text-gray-400 leading-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Redes Sociais */}
            <motion.div variants={item} className="flex gap-3 pt-1">
              <a
                href="https://github.com/dbcfilho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gray-800/50 border border-brand/20 hover:border-brand-cyan hover:bg-brand/10 transition-all hover:glow-brand"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/dbcfilho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gray-800/50 border border-brand-light/20 hover:border-brand-light hover:bg-brand-light/10 transition-all hover:glow-cyan"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Lado Direito — Terminal de Código */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="glass-card rounded-xl overflow-hidden border border-brand/30 shadow-2xl">
              {/* Cabeçalho do Terminal */}
              <div className="bg-gray-900/80 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-brand/20">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 ml-2 font-mono">developer-profile.ts</span>
              </div>

              {/* Conteúdo do Código */}
              <div className="p-3 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-brand-light">const</span>{" "}
                    <span className="text-brand-cyan-light">developerProfile</span> = {"{\n"}
                    {"  "}
                    <span className="text-brand-cyan">name</span>:{" "}
                    <span className="text-green-400">&quot;Douglas Brum&quot;</span>,{"\n"}
                    {"  "}
                    <span className="text-brand-cyan">role</span>:{" "}
                    <span className="text-green-400">&quot;{h.terminal.role}&quot;</span>,{"\n"}
                    {"  "}
                    <span className="text-brand-cyan">location</span>:{" "}
                    <span className="text-green-400">&quot;{h.terminal.location}&quot;</span>,{"\n"}
                    {"  "}
                    <span className="text-brand-cyan">favoriteStack</span>: [{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;Java + Spring Boot&quot;</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;Python + Django&quot;</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;MySQL&quot;</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;Docker&quot;</span>
                    {"\n"}
                    {"  "}]{",\n"}
                    {"  "}
                    <span className="text-brand-cyan">currentlyLearning</span>:{" "}
                    <span className="text-green-400">&quot;{h.terminal.learning}&quot;</span>,{"\n"}
                    {"  "}
                    <span className="text-brand-cyan">openTo</span>: [{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;{h.terminal.openTo[0]}&quot;</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;{h.terminal.openTo[1]}&quot;</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">&quot;{h.terminal.openTo[2]}&quot;</span>
                    {"\n"}
                    {"  "}]{",\n"}
                    {"};"}
                  </code>
                </pre>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="mt-3 sm:mt-5 space-y-2">
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Django", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-brand/10 border border-brand/30 text-brand-cyan-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS Fundamentals", "Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan-light">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {h.secureBadge}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
