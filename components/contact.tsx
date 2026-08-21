"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/components/i18n/language-provider"
import { SectionMeta } from "@/components/section-meta"

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
    <section id="contact" className="py-s-12 sm:py-s-24 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4">
        <SectionMeta label={t.sectionLabels.contact}>
        <div className="text-center mb-s-8 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient-brand">
            {k.heading}
          </h2>
          <p className="text-ink-2 text-base sm:text-lg max-w-2xl mx-auto px-4">{k.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Lado Esquerdo - Informações */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="glass-card rounded-sm p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 sm:mb-4">{k.cardTitle}</h3>
              <p className="text-ink-2 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{k.cardP1}</p>
              <p className="text-ink-2 leading-relaxed text-sm sm:text-base">{k.cardP2}</p>
            </div>

            {/* Formas de Contato */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:dbcfilho01@gmail.com"
                className="glass-card rounded-sm p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-ledger transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-sm bg-panel border border-rule shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-ink-3">{k.emailLabel}</p>
                  <p className="text-ink font-medium text-sm sm:text-base truncate">dbcfilho01@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dbcfilho/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-sm p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-ledger transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-sm bg-panel border border-rule shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-ink-3">LinkedIn</p>
                  <p className="text-ink font-medium text-sm sm:text-base">/in/dbcfilho</p>
                </div>
              </a>

              <div className="glass-card rounded-sm p-5 sm:p-6 flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-sm bg-panel border border-rule shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-ink-3">{k.locationLabel}</p>
                  <p className="text-ink font-medium text-sm sm:text-base">{k.locationValue}</p>
                  <p className="text-xs text-ink-3 mt-1">{k.remoteNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <form onSubmit={handleSubmit} className="glass-card rounded-sm p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink-2 mb-2">
                  {k.form.name} <span className="text-signal">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-ink-3 focus:border-ledger"
                  placeholder={k.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-2 mb-2">
                  {k.form.email} <span className="text-signal">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-ink-3 focus:border-ledger"
                  placeholder={k.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink-2 mb-2">
                  {k.form.company}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-ink-3 focus:border-ledger"
                  placeholder={k.form.companyPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink-2 mb-2">
                  {k.form.subject} <span className="text-signal">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-ink-3 focus:border-ledger"
                  placeholder={k.form.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-2 mb-2">
                  {k.form.message} <span className="text-signal">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="border-ink-3 focus:border-ledger resize-none"
                  placeholder={k.form.messagePlaceholder}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-brand text-paper hover:opacity-90">
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
        </SectionMeta>
      </div>
    </section>
  )
}
