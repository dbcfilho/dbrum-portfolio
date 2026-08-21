"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, Menu, X } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"

const navItems = [
  { href: "#home", id: "home", key: "home" },
  { href: "#experience", id: "experience", key: "about" },
  { href: "#portfolio", id: "portfolio", key: "portfolio" },
  { href: "#content", id: "content", key: "content" },
  { href: "#contact", id: "contact", key: "contact" },
] as const

const CV_URL = "/Douglas-Brum-Desenvolvedor-Backend.pdf"

export default function Navigation() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("home")

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
    <header className="site-header">
      <Link href="#home" className="brand" aria-label="Douglas Brum — Início">
        <span className="brand-mark">/</span> douglas<span className="brand-dot">.</span>brum
      </Link>

      <button className="menu-trigger" onClick={() => setIsOpen((v) => !v)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <nav className={isOpen ? "nav open" : "nav"}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            style={active === item.id ? { color: "var(--primary)" } : undefined}
          >
            {t.nav[item.key]}
          </Link>
        ))}
        <a href={CV_URL} download target="_blank" rel="noopener noreferrer" className="cv-link">
          <Download size={15} /> {t.nav.downloadCv}
        </a>
        <LanguageSwitcher />
      </nav>
    </header>
  )
}
