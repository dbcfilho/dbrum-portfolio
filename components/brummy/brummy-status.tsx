"use client"

import { BRUMMY_ASCII } from "@/lib/brummy/data"
import { RevealSection, SectionHead, useBrummy } from "@/components/brummy/primitives"

/**
 * 06 — status do sistema.
 *
 * O painel imita um `fastfetch`, e o desenho à esquerda é literalmente o logo
 * ASCII que o sistema usa (config/fastfetch/brummy.txt), sem os códigos de cor.
 * Em telas estreitas ele dá lugar à marca — 53 colunas de mono não cabem ali.
 */
export default function BrummyStatus() {
  const t = useBrummy()

  return (
    <RevealSection className="bx-shell" ariaLabelledby="bx-status-title">
      <SectionHead index="06" label={t.status.label} heading={t.status.heading} headingId="bx-status-title" />

      <div className="bx-status bx-panel">
        <pre className="bx-ascii" aria-hidden="true">
          {BRUMMY_ASCII}
        </pre>
        {/* eslint-disable-next-line @next/next/no-img-element --
            next.config.mjs define images.unoptimized: true, então <Image /> não
            otimizaria nada aqui — só acrescentaria runtime. O WebP já sai pronto. */}
        <img
          className="bx-status-mark"
          src="/brummy/brummy-mark-sm.webp"
          alt=""
          aria-hidden="true"
          width={120}
          height={79}
          loading="lazy"
        />

        <div>
          <dl className="bx-status-rows">
            {t.status.rows.map((row, i) => (
              <div key={row.k} style={{ display: "contents" }}>
                <dt>{row.k}</dt>
                {/* a linha 2 é o estado do projeto — o único valor em destaque */}
                <dd>{i === 2 ? <b>{row.v}</b> : row.v}</dd>
              </div>
            ))}
          </dl>
          <p className="bx-status-note">{t.status.note}</p>
        </div>
      </div>
    </RevealSection>
  )
}
