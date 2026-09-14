"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Copy, Github } from "lucide-react"
import { BRUMMY_FACTS, BRUMMY_REPO } from "@/lib/brummy/data"
import { RevealSection, SectionHead, useBrummy } from "@/components/brummy/primitives"

const CLONE_COMMAND = `git clone ${BRUMMY_REPO}.git`

/** 07 — o código, e a saída da experiência. */
export default function BrummySource() {
  const t = useBrummy()
  const [copied, setCopied] = useState(false)

  async function copyClone() {
    try {
      await navigator.clipboard.writeText(CLONE_COMMAND)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard bloqueado: o comando continua visível e selecionável */
    }
  }

  return (
    <>
      <RevealSection className="bx-shell" ariaLabelledby="bx-source-title">
        <SectionHead index="07" label={t.source.label} heading={t.source.heading} headingId="bx-source-title" />

        <div className="bx-source">
          <div>
            <p className="bx-lede" style={{ marginBottom: 32 }}>
              {t.source.body}
            </p>
            <a className="bx-button" href={BRUMMY_REPO} target="_blank" rel="noopener noreferrer">
              <Github size={16} aria-hidden="true" />
              {t.source.cta}
            </a>
            <p className="bx-source-note">{t.source.ctaNote}</p>
          </div>

          <div>
            <div className="bx-clone">
              <span aria-hidden="true">$</span>
              <code>{CLONE_COMMAND}</code>
              <button type="button" onClick={copyClone} aria-label={`${t.source.copy}: ${CLONE_COMMAND}`}>
                {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
                {copied ? t.source.copied : t.source.copy}
              </button>
            </div>

            <div className="bx-source-stats" style={{ marginTop: 18 }}>
              <div>
                <strong>{BRUMMY_FACTS.trackedFiles}</strong>
                <span>{t.source.statFiles}</span>
              </div>
              <div>
                <strong>{BRUMMY_FACTS.packages}</strong>
                <span>{t.source.statPackages}</span>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <footer className="bx-shell bx-footer">
        <span>{t.footer.by}</span>
        <Link href="/">
          <ArrowLeft size={13} aria-hidden="true" />
          {t.footer.back}
        </Link>
      </footer>
    </>
  )
}
