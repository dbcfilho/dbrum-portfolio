"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/components/i18n/language-provider"

export default function Contact() {
  const { t } = useI18n()
  const k = t.contact
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: k.form.successTitle,
          description: k.form.successDesc,
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch {
      toast({
        title: k.form.errorTitle,
        description: k.form.errorDesc,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-brand-light to-brand-cyan bg-clip-text text-transparent">
            {k.heading}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">{k.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Lado Esquerdo - Informações */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="glass-card rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{k.cardTitle}</h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{k.cardP1}</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{k.cardP2}</p>
            </div>

            {/* Formas de Contato */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:dbcfilho01@gmail.com"
                className="glass-card rounded-lg p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-brand/50 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-brand/10 border border-brand/30 group-hover:bg-brand/20 transition-colors shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">{k.emailLabel}</p>
                  <p className="text-white font-medium text-sm sm:text-base truncate">dbcfilho01@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dbcfilho/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-brand-light/50 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-brand-light/10 border border-brand-light/30 group-hover:bg-brand-light/20 transition-colors shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-light" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">LinkedIn</p>
                  <p className="text-white font-medium text-sm sm:text-base">/in/dbcfilho</p>
                </div>
              </a>

              <div className="glass-card rounded-lg p-5 sm:p-6 flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan-light" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">{k.locationLabel}</p>
                  <p className="text-white font-medium text-sm sm:text-base">{k.locationValue}</p>
                  <p className="text-xs text-gray-500 mt-1">{k.remoteNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <form onSubmit={handleSubmit} className="glass-card rounded-lg p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {k.form.name} <span className="text-red-400">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-brand/30 focus:border-brand-cyan"
                  placeholder={k.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {k.form.email} <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-brand/30 focus:border-brand-cyan"
                  placeholder={k.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {k.form.company}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-brand/30 focus:border-brand-cyan"
                  placeholder={k.form.companyPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  {k.form.subject} <span className="text-red-400">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-brand/30 focus:border-brand-cyan"
                  placeholder={k.form.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {k.form.message} <span className="text-red-400">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-900/50 border-brand/30 focus:border-brand-cyan resize-none"
                  placeholder={k.form.messagePlaceholder}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand to-brand-cyan hover:from-brand/90 hover:to-brand-cyan/90 glow-brand"
              >
                {isSubmitting ? (
                  k.form.submitting
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {k.form.submit}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
