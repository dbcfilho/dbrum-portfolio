import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-purple-500/20 bg-[oklch(0.08_0.02_280)]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">© {currentYear} Douglas Brum | Backend & Cibersecurity-Oriented</p>
            <p className="text-gray-500 text-xs mt-1"></p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dbcfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/dbcfilho/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800/50 border border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
