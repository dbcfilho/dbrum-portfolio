"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import {
  DEFAULT_LANG,
  STORAGE_KEY,
  detectBrowserLang,
  normalizeLang,
  type Lang,
} from "@/lib/i18n/config"
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries"

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

function persist(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
  // Cookie ajuda caso um dia se queira ler no servidor.
  document.cookie = `${STORAGE_KEY}=${lang};path=/;max-age=31536000;SameSite=Lax`
  document.documentElement.lang = lang
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Inicia no idioma padrão (igual ao SSR) para evitar hydration mismatch.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    // Prioridade: preferência salva > idioma do navegador.
    let stored: Lang | null = null
    try {
      stored = normalizeLang(localStorage.getItem(STORAGE_KEY))
    } catch {
      stored = null
    }
    const initial = stored ?? detectBrowserLang()
    // Detecção pós-montagem é intencional: o SSR renderiza no idioma padrão
    // e o cliente ajusta para o idioma do navegador/preferência salva.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(initial)
    document.documentElement.lang = initial
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    persist(next)
  }, [])

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n deve ser usado dentro de <LanguageProvider>")
  return ctx
}
