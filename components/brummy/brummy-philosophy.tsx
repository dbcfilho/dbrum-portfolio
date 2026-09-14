"use client"

import { RevealLine, RevealSection, useBrummy } from "@/components/brummy/primitives"

/**
 * 05 — filosofia.
 *
 * Quatro linhas que acendem conforme entram em cena. A citação é do README do
 * próprio projeto: quem fala aqui é o repositório, não o site.
 */
export default function BrummyPhilosophy() {
  const t = useBrummy()

  return (
    <RevealSection className="bx-shell bx-philosophy" ariaLabelledby="bx-philosophy-title">
      <h2 id="bx-philosophy-title" className="bx-visually-hidden">
        {t.philosophy.label}
      </h2>
      <ul>
        {t.philosophy.lines.map((line) => (
          <RevealLine key={line}>{line}</RevealLine>
        ))}
      </ul>

      <blockquote>
        <p>&ldquo;{t.philosophy.quote}&rdquo;</p>
        <cite>{t.philosophy.quoteSource}</cite>
      </blockquote>
    </RevealSection>
  )
}
