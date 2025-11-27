"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[oklch(0.12_0.05_250)]/80 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="group -ml-2">
            <Image
              src="/images/dbrum-logo.png"
              alt="Douglas Brum Logo"
              width={150}
              height={50}
              className="transition-transform group-hover:scale-105 h-auto w-[120px] sm:w-[140px] md:w-[160px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 hover:glow-purple transition-all bg-transparent"
            >
              <a
                href="https://drive.google.com/file/d/1zpvyQ02nPA1HpEHiJemkkSR_uWBcIEQr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[oklch(0.12_0.05_250)]/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-purple-400 transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent"
            >
              <a
                href="https://drive.google.com/file/d/1zpvyQ02nPA1HpEHiJemkkSR_uWBcIEQr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
