"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
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
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Let's build something great together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Side - Information */}
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="glass-card rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let's Work Together</h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                I'm actively seeking backend developer roles at junior to mid-level, freelance projects, and remote
                opportunities. If you're building secure, scalable systems and need someone who brings both technical
                depth and a security-conscious mindset, I'd love to hear from you.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Whether it's a full-time position, contract work, or collaboration on an exciting project, I'm open to
                discussing how I can contribute to your team.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:dbcfilho01@gmail.com"
                className="glass-card rounded-lg p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-purple-500/50 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base truncate">dbcfilho01@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dbcfilho/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg p-5 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">LinkedIn</p>
                  <p className="text-white font-medium text-sm sm:text-base">/in/dbcfilho</p>
                </div>
              </a>

              <div className="glass-card rounded-lg p-5 sm:p-6 flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium text-sm sm:text-base">Rio de Janeiro, Brazil</p>
                  <p className="text-xs text-gray-500 mt-1">Open to remote work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <form onSubmit={handleSubmit} className="glass-card rounded-lg p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-purple-500/30 focus:border-purple-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-purple-500/30 focus:border-purple-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-purple-500/30 focus:border-purple-400"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-900/50 border-purple-500/30 focus:border-purple-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-900/50 border-purple-500/30 focus:border-purple-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
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
