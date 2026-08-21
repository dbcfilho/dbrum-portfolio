"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"

const links = [
  { href: "#about", key: "about" },
  { href: "#portfolio", key: "portfolio" },
  { href: "#content", key: "content" },
  { href: "#contact", key: "contact" },
] as const

export default function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-rule bg-paper">
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4 py-s-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-s-4">
          <div className="max-w-sm text-center md:text-left">
            <Link href="#home" aria-label="Douglas Brum — Início" className="wordmark text-base inline-block">
              Douglas Brum
            </Link>
            <p className="text-ink-3 text-sm mt-3 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-col items-center md:items-start gap-2" aria-label={t.footer.navHeading}>
            <span className="label">{t.footer.navHeading}</span>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-ink-3 hover:text-ledger transition-colors">
                {t.nav[l.key]}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="label">{t.footer.connectHeading}</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/dbcfilho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-rule hover:border-ledger hover:bg-panel transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-ink-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/dbcfilho/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-rule hover:border-ledger hover:bg-panel transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-ink-3" />
              </a>
              <a
                href="mailto:dbcfilho01@gmail.com"
                className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-rule hover:border-ledger hover:bg-panel transition-all"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4 text-ink-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-s-4 pt-s-3 border-t border-rule text-center md:text-left">
          <p className="text-ink-3 text-xs">
            © {currentYear} Douglas Brum · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
