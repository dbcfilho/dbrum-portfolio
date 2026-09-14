"use client"

import { useEffect, useRef } from "react"

/**
 * Parallax por camadas para o portfólio claro, sem dependências.
 *
 * Mesmo padrão da seção Brummy (`--bx-p`/`--bx-depth`), com variável própria
 * (`--px-p`) para não acoplar a home ao módulo do Brummy: a cena publica o
 * progresso (0 no topo, 1 quando terminou de sair) e o CSS atrasa cada camada
 * via `--px-depth` (em vh, escala comum da viewport).
 *
 * Uma leitura (`getBoundingClientRect`) por quadro via rAF, uma escrita
 * (`setProperty`), rolagem nativa preservada — sem Lenis/GSAP, sem brigar
 * com `scroll-behavior: smooth` nem com as âncoras da home.
 *
 * Sem JS ou com `prefers-reduced-motion: reduce`, `--px-p` nunca é escrita e
 * o fallback do CSS (`0`) mantém tudo onde o layout pôs.
 */
export function useParallaxScene<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const span = rect.height || 1
      const progress = Math.min(Math.max(-rect.top / span, 0), 1)
      el.style.setProperty("--px-p", progress.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
