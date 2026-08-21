"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"

export default function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer section-shell">
      <span>
        © {currentYear} Douglas Brum · {t.footer.rights}
      </span>
      <span>{t.footer.tagline}</span>
      <div>
        <a href="https://github.com/dbcfilho" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/dbcfilho/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:dbcfilho01@gmail.com" aria-label="E-mail">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  )
}
