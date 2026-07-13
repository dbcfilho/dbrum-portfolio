"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"
import { LOCALES, LANG_LABELS } from "@/lib/i18n/config"

/**
 * Seletor de idioma (PT/EN/ES).
 * `variant="full"` mostra a lista empilhada (menu mobile);
 * `variant="compact"` (padrão) é o botão-globo com dropdown próprio (desktop).
 *
 * Usa um dropdown custom (sem lock de scroll) para NÃO deslocar a página
 * ao abrir — o menu do Radix removia a barra de rolagem e empurrava o layout.
 */
export function LanguageSwitcher({ variant = "compact" }: { variant?: "compact" | "full" }) {
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

  if (variant === "full") {
    return (
      <div>
        <span className="block text-xs uppercase tracking-wider text-gray-500 mb-2 px-2">
          {t.langSwitcher.label}
        </span>
        <div className="grid grid-cols-3 gap-2">
          {LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex items-center justify-center gap-1.5 min-h-11 rounded-lg border text-sm transition-colors ${
                lang === l
                  ? "border-brand-cyan/50 bg-brand/10 text-brand-cyan"
                  : "border-brand/20 text-gray-300 hover:border-brand-cyan hover:bg-brand/5"
              }`}
              aria-pressed={lang === l}
            >
              <span aria-hidden>{LANG_LABELS[l].flag}</span>
              {LANG_LABELS[l].short}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-lg text-sm text-gray-300 hover:text-brand-cyan hover:bg-brand/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        aria-label={t.langSwitcher.label}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{LANG_LABELS[lang].short}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 min-w-[9.5rem] rounded-lg border border-brand/20 bg-[oklch(0.15_0.02_260)]/95 backdrop-blur-md shadow-xl shadow-black/30 p-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {LOCALES.map((l) => (
            <button
              key={l}
              role="menuitem"
              onClick={() => {
                setLang(l)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors ${
                lang === l ? "text-brand-cyan bg-brand/10" : "text-gray-200 hover:bg-brand/10 hover:text-brand-cyan"
              }`}
            >
              <span aria-hidden>{LANG_LABELS[l].flag}</span>
              <span className="flex-1 text-left">{LANG_LABELS[l].label}</span>
              {lang === l && <Check className="w-4 h-4 text-brand-cyan" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
