"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"
import { LOCALES, LANG_LABELS } from "@/lib/i18n/config"

/**
 * Seletor de idioma (PT/EN/ES) — dropdown custom (sem lock de scroll) para
 * NÃO deslocar a página ao abrir.
 */
export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="language">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`${t.langSwitcher.label}: ${LANG_LABELS[lang].short}`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {LANG_LABELS[lang].short} <ChevronDown size={14} />
      </button>

      {open && (
        <div role="menu" className="language-menu">
          {LOCALES.map((l) => (
            <button
              key={l}
              role="menuitemradio"
              aria-checked={lang === l}
              onClick={() => {
                setLang(l)
                setOpen(false)
              }}
            >
              <span aria-hidden>{LANG_LABELS[l].flag}</span>
              {LANG_LABELS[l].label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
