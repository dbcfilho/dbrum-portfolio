"use client"

import { ExternalLink, Github, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import CaseStudies from "@/components/case-studies"
import { useI18n } from "@/components/i18n/language-provider"

// Dados neutros (stack, URLs, destaque). Textos vêm do dicionário via id.
const projects = [
  {
    id: "corefarma",
    featured: true,
    coreonProduct: true,
    stack: ["TypeScript", "NestJS", "Node.js", "React", "PostgreSQL", "Prisma", "Supabase", "Nginx", "Swagger", "Winston"],
    liveUrl: "https://corefarma.com",
    appUrl: "https://app.corefarma.com",
  },
  {
    id: "culturehouse",
    featured: false,
    stack: ["Python", "Django 4+", "MySQL 8+", "Bootstrap 5", "Docker", "Docker Compose"],
    github: "https://github.com/dbcfilho/casa-da-cultura-v3",
  },
] as const

// Projetos de nível tutorial — exibidos em destaque reduzido na subseção "Outros projetos".
const otherProjects = [
  {
    id: "crudjava",
    github: "https://github.com/dbcfilho/CRUD-Java",
  },
  {
    id: "userreg",
    github: "https://github.com/dbcfilho/User-registration",
  },
] as const

export default function Projects() {
  const { t } = useI18n()
  const p = t.projects
  const reduce = useReducedMotion()

  const card = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-gradient-brand tracking-wide">{p.heading}</h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">{p.subtitle}</p>
        </div>

        <div className="mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 tracking-wide">{p.featuredTitle}</h3>
          <motion.div
            className="space-y-5 sm:space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {projects.map((project) => {
              const info = p.items[project.id]
              return (
              <motion.div
                key={project.id}
                variants={card}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative glass-card rounded-xl p-5 sm:p-6 transition-colors duration-300 ${
                  project.featured
                    ? "border-brand-cyan/50 ring-1 ring-brand-cyan/30 shadow-lg shadow-brand/10"
                    : "hover:border-brand/50"
                }`}
              >
                {project.featured && (
                  <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {p.featuredBadge}
                  </span>
                )}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-5">
                  <div className="flex-1 min-w-0">
                    <div className="mb-3 mt-1">
                      {"coreonProduct" in project && project.coreonProduct && (
                        <div className="flex items-center gap-2 mb-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/images/coreon-logo.png" alt="Coreon Systems" className="h-3 w-auto opacity-80" />
                          <span className="text-xs text-gray-400">{p.coreonProduct}</span>
                        </div>
                      )}
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">{info.title}</h4>
                      <p className="text-brand-cyan font-medium text-sm">{info.tagline}</p>
                    </div>
                    <p className="text-gray-300 leading-normal mb-4 text-sm sm:text-base">{info.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    {"liveUrl" in project && project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-brand text-white hover:opacity-90 w-full lg:w-auto"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Globe className="w-4 h-4" />
                          {p.viewSite}
                        </a>
                      </Button>
                    )}
                    {"appUrl" in project && project.appUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-brand/50 text-white hover:border-brand-cyan hover:bg-brand/10 bg-transparent w-full lg:w-auto"
                      >
                        <a
                          href={project.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {p.accessSystem}
                        </a>
                      </Button>
                    )}
                    {"github" in project && project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-brand/50 text-white hover:border-brand-cyan hover:bg-brand/10 bg-transparent w-full lg:w-auto"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          {p.viewGithub}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
              )
            })}
          </motion.div>
        </div>

        <CaseStudies />

        <div className="mt-10 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 tracking-wide">{p.otherProjectsTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {otherProjects.map((project) => {
              const info = p.items[project.id]
              return (
                <div
                  key={project.id}
                  className="glass-card rounded-lg p-4 hover:border-brand/40 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-white truncate">{info.title}</h4>
                      <p className="text-brand-cyan text-xs sm:text-sm">{info.tagline}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={p.viewGithub}
                      className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-300 hover:text-brand-cyan hover:bg-brand/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://github.com/dbcfilho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-cyan-light transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            {p.moreProjects}
          </a>
        </div>
      </div>
    </section>
  )
}
