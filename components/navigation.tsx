"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

const navItems = [
  { href: "#home", id: "home", key: "home" },
  { href: "#about", id: "about", key: "about" },
  { href: "#portfolio", id: "portfolio", key: "portfolio" },
  { href: "#content", id: "content", key: "content" },
  { href: "#contact", id: "contact", key: "contact" },
] as const

const CV_URL = "/Douglas-Brum-Desenvolvedor-Backend.pdf"

export default function Navigation() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll-spy: destaca o item da seção visível
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper border-b border-rule" : "bg-transparent"
      }`}
    >
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="wordmark text-lg flex-shrink-0 py-2" aria-label="Douglas Brum — Início">
            Douglas Brum
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm transition-colors ${
                  active === item.id ? "text-ledger" : "text-ink-2 hover:text-ledger"
                }`}
              >
                {t.nav[item.key]}
                <span
                  className={`absolute bottom-1 left-0 h-0.5 bg-ledger transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild size="sm" className="bg-gradient-brand text-paper hover:opacity-90 transition-all">
              <a href={CV_URL} download target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                {t.nav.downloadCv}
              </a>
            </Button>
          </div>

          {/* Botão do Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-1 rounded-sm text-ink-2 hover:text-ledger hover:bg-panel transition-colors flex-shrink-0"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navegação Mobile */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b border-rule">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center min-h-11 px-2 rounded-sm transition-colors ${
                  active === item.id ? "text-ledger bg-ledger-dim" : "text-ink-2 hover:text-ledger hover:bg-panel"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="pt-3">
              <LanguageSwitcher variant="full" />
            </div>
            <Button asChild size="sm" className="w-full mt-3 bg-gradient-brand text-paper hover:opacity-90">
              <a href={CV_URL} download target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Download className="w-4 h-4 mr-2" />
                {t.nav.downloadCvLong}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
