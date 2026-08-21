"use client"

import { ArrowUpRight, Download } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"

const CV_URL = "/Douglas-Brum-Desenvolvedor-Backend.pdf"

export default function Hero() {
  const { t } = useI18n()
  const h = t.hero

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="pulse" /> {h.badge}
        </p>
        <p className="kicker">Douglas Brum · {h.role}</p>
        <h1>{h.headline}</h1>
        <p className="hero-intro" dangerouslySetInnerHTML={{ __html: h.intro }} />
        <div className="hero-actions">
          <a href="#contact" className="button button-primary">
            {h.ctaPrimary} <ArrowUpRight size={17} />
          </a>
          <a href="#portfolio" className="button button-ghost">
            {h.ctaSecondary}
          </a>
          <a href={CV_URL} download target="_blank" rel="noopener noreferrer" className="button button-ghost">
            <Download size={16} /> {h.ctaCv}
          </a>
        </div>
      </div>

      <div className="terminal-card">
        <div className="terminal-top">
          <span />
          <span />
          <span />
          <small>{h.terminal.fileLabel}</small>
        </div>
        <div className="terminal-body">
          <p>
            <span className="code-dim">01</span> <span className="code-blue">const</span> backend = {"{"}
          </p>
          {h.terminal.lines.map((line, i) => (
            <p key={line.key}>
              <span className="code-dim">{String(i + 2).padStart(2, "0")}</span> {line.key}: <b>&ldquo;{line.value}&rdquo;</b>
              {i < h.terminal.lines.length - 1 ? "," : ""}
            </p>
          ))}
          <p>
            <span className="code-dim">{String(h.terminal.lines.length + 2).padStart(2, "0")}</span> {"};"}
          </p>
          <p className="terminal-result">
            <span>→</span> {h.terminal.result}
          </p>
        </div>
      </div>

      <div className="hero-metrics">
        {h.stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
