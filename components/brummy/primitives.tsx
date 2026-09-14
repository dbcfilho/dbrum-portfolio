"use client"

import { Fragment, useEffect, useRef, type ReactNode } from "react"
import { useI18n } from "@/components/i18n/language-provider"
import { brummyDictionaries, type BrummyDictionary } from "@/lib/i18n/brummy"

/** Conteúdo do Brummy no idioma ativo do site (mesmo provider do portfólio). */
export function useBrummy(): BrummyDictionary {
  const { lang } = useI18n()
  return brummyDictionaries[lang]
}

/**
 * Renderiza `trechos entre crases` como <code>, sem HTML cru.
 * Preferido a dangerouslySetInnerHTML: o dicionário nunca vira vetor de injeção.
 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 === 1 ? <code key={i}>{part}</code> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  )
}

/**
 * Entrada suave quando o elemento aparece na viewport.
 *
 * O estado escondido só existe quando `data-bx-js="on"` está no <html> (ver
 * brummy.css). Sem JavaScript, nada fica invisível — o conteúdo é o produto.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in")
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-in")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Parallax por camadas, sem biblioteca.
 *
 * Marca o progresso da cena (0 no topo, 1 quando ela terminou de sair) numa
 * custom property, e o CSS decide quanto cada camada se atrasa via
 * `--bx-depth`. Camada mais funda = mais atraso = mais distante.
 *
 * Por que não GSAP + Lenis, que é o que o snippet original usa: são duas
 * dependências para um efeito de trinta linhas, e o Lenis troca a rolagem
 * nativa do site inteiro, o que brigaria com o `scroll-behavior: smooth` e com
 * a navegação por âncora do portfólio. Aqui a rolagem continua sendo a do
 * navegador: uma leitura por quadro, uma escrita de variável, nada de layout.
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
      el.style.setProperty("--bx-p", progress.toFixed(4))
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

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  ariaLabelledby?: string
}

export function RevealSection({ id, className, children, ariaLabelledby }: SectionProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={ariaLabelledby}
      className={`bx-section bx-reveal${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  )
}

export function RevealBlock({
  className,
  delay = 0,
  children,
}: {
  className?: string
  delay?: number
  children: ReactNode
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`bx-reveal${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/** Linha da filosofia: acende ao entrar em cena (cor, não movimento). */
export function RevealLine({ children }: { children: ReactNode }) {
  const ref = useReveal<HTMLLIElement>()
  return <li ref={ref}>{children}</li>
}

export function SectionHead({
  index,
  label,
  heading,
  headingId,
}: {
  index: string
  label: string
  heading: string
  headingId: string
}) {
  return (
    <>
      <p className="bx-head">
        <span className="bx-head-index">{index}</span>
        <span className="bx-head-label">{label}</span>
        <span className="bx-head-rule" aria-hidden="true" />
      </p>
      <h2 id={headingId}>{heading}</h2>
    </>
  )
}
