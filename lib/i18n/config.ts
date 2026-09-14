export const LOCALES = ["pt", "en", "es"] as const
export type Lang = (typeof LOCALES)[number]

export const DEFAULT_LANG: Lang = "pt"
export const STORAGE_KEY = "dbrum-lang"

/** Nomes exibidos no seletor de idioma. */
export const LANG_LABELS: Record<Lang, { label: string; short: string; flag: string }> = {
  pt: { label: "Português", short: "PT", flag: "🇧🇷" },
  en: { label: "English", short: "EN", flag: "🇺🇸" },
  es: { label: "Español", short: "ES", flag: "🇪🇸" },
}

/** Mapeia um código de idioma do navegador (ex.: "en-US", "pt-BR", "es-419") para um Lang suportado. */
export function normalizeLang(input?: string | null): Lang | null {
  if (!input) return null
  const base = input.toLowerCase().split("-")[0]
  if (base === "pt") return "pt"
  if (base === "en") return "en"
  if (base === "es") return "es"
  return null
}

/** Detecta o melhor idioma a partir das preferências do navegador. */
export function detectBrowserLang(): Lang {
  if (typeof navigator === "undefined") return DEFAULT_LANG
  const candidates: (string | undefined)[] = [
    ...(navigator.languages ?? []),
    navigator.language,
  ]
  for (const c of candidates) {
    const l = normalizeLang(c)
    if (l) return l
  }
  return DEFAULT_LANG
}
