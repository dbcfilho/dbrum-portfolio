"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { BRUMMY_FACTS } from "@/lib/brummy/data"
import { useBrummy } from "@/components/brummy/primitives"

/**
 * Dentro da experiência, a identidade do projeto ocupa o lugar da identidade
 * pessoal. O retorno ao portfólio existe com o peso de um metadado, não de um
 * botão — sair é possível, mas a imersão continua de pé.
 */
export default function BrummyHeader() {
  const t = useBrummy()

  return (
    <header className="bx-header">
      <div className="bx-shell bx-header-inner">
        <span className="bx-brand">
          {/* eslint-disable-next-line @next/next/no-img-element --
              next.config.mjs define images.unoptimized: true, então <Image /> não
              otimizaria nada aqui — só acrescentaria runtime. O WebP já sai pronto. */}
          <img src="/brummy/brummy-mark-sm.webp" alt="" aria-hidden="true" width={34} height={22} />
          <span className="bx-brand-name">Brummy</span>
          <span className="bx-brand-version" aria-label={`versão ${BRUMMY_FACTS.version}`}>
            {BRUMMY_FACTS.version}
          </span>
        </span>

        <div className="bx-header-right">
          <Link href="/" className="bx-back" aria-label={t.header.backLabel}>
            <ArrowLeft size={14} aria-hidden="true" />
            <span>{t.header.back}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
