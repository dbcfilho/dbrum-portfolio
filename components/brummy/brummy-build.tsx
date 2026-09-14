"use client"

import { AlertTriangle } from "lucide-react"
import {
  BRUMMY_HELP,
  BRUMMY_MODULES,
  BRUMMY_SCREENSHOT,
} from "@/lib/brummy/data"
import { RevealSection, RichText, SectionHead, useBrummy } from "@/components/brummy/primitives"

/**
 * 03 — o que existe hoje.
 *
 * Cada cartão aponta um caminho real do repositório. O bloco de terminal mostra
 * a saída de `brummy help` como ela é, sem tradução: é o que a máquina imprime.
 * O que não foi testado tem bloco próprio, e não uma nota de rodapé.
 */
export default function BrummyBuild() {
  const t = useBrummy()

  return (
    <RevealSection className="bx-shell" ariaLabelledby="bx-now-title">
      <SectionHead index="03" label={t.now.label} heading={t.now.heading} headingId="bx-now-title" />
      <p className="bx-lede">{t.now.lede}</p>

      <div className="bx-modules">
        {BRUMMY_MODULES.map((mod) => {
          const copy = t.now.modules[mod.id]
          const pending = mod.state === "pending"
          return (
            <article className="bx-module bx-panel" key={mod.id}>
              <div className="bx-module-top">
                <span className="bx-module-path">{mod.path}</span>
                {pending && (
                  <span className="bx-chip is-pending">
                    <i aria-hidden="true" />
                    {t.now.untestedLabel}
                  </span>
                )}
              </div>
              <h3>{copy.title}</h3>
              <p>
                <RichText text={copy.body} />
              </p>
              <p className="bx-module-meta">{mod.meta}</p>
            </article>
          )
        })}
      </div>

      <div className="bx-terminal bx-panel">
        <div className="bx-terminal-top">
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <small>{t.now.terminalTitle}</small>
        </div>
        <div className="bx-terminal-body">
          <p className="bx-terminal-prompt">$ brummy help</p>
          <dl>
            {BRUMMY_HELP.map((row) => (
              <div key={row.cmd} style={{ display: "contents" }}>
                <dt>{row.cmd}</dt>
                <dd>{row.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {BRUMMY_SCREENSHOT && (
        <figure className="bx-shot bx-panel">
          {/* eslint-disable-next-line @next/next/no-img-element --
              next.config.mjs define images.unoptimized: true, então <Image /> não
              otimizaria nada aqui — só acrescentaria runtime. O WebP já sai pronto. */}
          <img
            src={BRUMMY_SCREENSHOT.src}
            alt={t.now.heading}
            width={BRUMMY_SCREENSHOT.width}
            height={BRUMMY_SCREENSHOT.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Brummy Linux · Hyprland · Waybar</figcaption>
        </figure>
      )}

      <div className="bx-untested">
        <h3>
          <AlertTriangle size={14} aria-hidden="true" />
          {t.now.untestedHeading}
        </h3>
        <ul>
          {t.now.untested.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
        <p>{t.now.untestedNote}</p>
      </div>
    </RevealSection>
  )
}
