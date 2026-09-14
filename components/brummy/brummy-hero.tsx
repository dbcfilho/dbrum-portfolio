"use client"

import { BOOT_LOG, BRUMMY_FACTS } from "@/lib/brummy/data"
import { useBrummy, useParallaxScene } from "@/components/brummy/primitives"

/**
 * O herói é uma tela de boot com profundidade.
 *
 * As medidas vêm do tema Plymouth real do projeto: barra de 440px, cinco
 * pontos, halo respirando. O log é saída literal do install.sh.
 *
 * As camadas se afastam em velocidades diferentes conforme a rolagem: estrelas
 * ao fundo, depois o halo, a marca, e o texto quase junto com a página. Cada
 * camada declara sua profundidade em `--bx-depth`, e o CSS faz o resto.
 */
export default function BrummyHero() {
  const t = useBrummy()
  const scene = useParallaxScene<HTMLElement>()

  return (
    <section className="bx-hero bx-shell" aria-labelledby="bx-hero-title" ref={scene}>
      <span className="bx-hero-stars bx-layer" aria-hidden="true" />

      <p className="bx-hero-tag bx-layer">
        Brummy Linux · {BRUMMY_FACTS.version} · <b>{BRUMMY_FACTS.status}</b>
      </p>

      <div className="bx-hero-mark bx-layer">
        <span className="bx-hero-halo" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element --
            next.config.mjs define images.unoptimized: true, então <Image /> não
            otimizaria nada aqui, só acrescentaria runtime. O WebP já sai pronto. */}
        <img
          src="/brummy/brummy-mark.webp"
          alt={t.hero.logoAlt}
          width={760}
          height={504}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="bx-hero-text bx-layer">
        <h1 id="bx-hero-title">{t.hero.headline}</h1>
        <p className="bx-hero-lede">{t.hero.lede}</p>
      </div>

      <div className="bx-boot" aria-hidden="true">
        <div className="bx-boot-dots">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="bx-boot-bar">
          <div className="bx-boot-fill" />
        </div>
        <p className="bx-boot-label">
          <span>{t.hero.bootLabel}</span>
          <span>{t.hero.scroll}</span>
        </p>
      </div>

      <ul className="bx-bootlog" aria-hidden="true">
        {BOOT_LOG.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  )
}
