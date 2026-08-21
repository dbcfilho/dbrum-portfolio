"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Check, Mail } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"

export default function Contact() {
  const { t } = useI18n()
  const k = t.contact
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-copy">
        <span className="section-index">05</span>
        <h2>{k.heading}</h2>
        <p>{k.cardP1}</p>
        <p>{k.cardP2}</p>
        <a href="mailto:dbcfilho01@gmail.com">
          <Mail size={17} /> dbcfilho01@gmail.com
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {k.form.name} <span className="required-mark">*</span>
          <input name="name" required value={formData.name} onChange={handleChange} placeholder={k.form.namePlaceholder} />
        </label>
        <label>
          {k.form.email} <span className="required-mark">*</span>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={k.form.emailPlaceholder} />
        </label>
        <label>
          {k.form.company}
          <input name="company" value={formData.company} onChange={handleChange} placeholder={k.form.companyPlaceholder} />
        </label>
        <label>
          {k.form.subject} <span className="required-mark">*</span>
          <input name="subject" required value={formData.subject} onChange={handleChange} placeholder={k.form.subjectPlaceholder} />
        </label>
        <label>
          {k.form.message} <span className="required-mark">*</span>
          <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={k.form.messagePlaceholder} />
        </label>
        <button className="button button-primary" disabled={status === "sending"}>
          {status === "sending" ? k.form.submitting : k.form.submit} <ArrowUpRight size={17} />
        </button>
        {status === "success" && (
          <p className="form-message success">
            <Check size={16} /> {k.form.successDesc}
          </p>
        )}
        {status === "error" && <p className="form-message error">{k.form.errorDesc}</p>}
      </form>
    </section>
  )
}
