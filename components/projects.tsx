"use client"

import { ExternalLink, Github, Globe, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import CaseStudies from "@/components/case-studies"
import { useI18n } from "@/components/i18n/language-provider"
import { SectionMeta } from "@/components/section-meta"

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
    id: "corefood",
    featured: true,
    coreonProduct: true,
    inDevelopment: true,
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Multi-tenant", "Row-Level Security", "JWT"],
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

type Project = (typeof projects)[number]

export default function Projects() {
  const { t } = useI18n()
  const p = t.projects
  const reduce = useReducedMotion()

  const card = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  }

  const coreonProjects = projects.filter((project) => "coreonProduct" in project && project.coreonProduct)
  const standaloneProjects = projects.filter((project) => !("coreonProduct" in project && project.coreonProduct))

  const renderProject = (project: Project) => {
    const info = p.items[project.id]
    return (
      <motion.div key={project.id} variants={card} className="py-s-4 first:pt-0 last:pb-0">
        {(("inDevelopment" in project && project.inDevelopment) || project.featured) && (
          <div className="mb-1.5">
            {"inDevelopment" in project && project.inDevelopment ? (
              <span className="label inline-flex items-center gap-1.5 rounded-sm bg-signal px-2 py-0.5 text-paper">
                <Clock className="w-3 h-3" />
                {p.inDevelopment}
              </span>
            ) : (
              project.featured && (
                <span className="label inline-flex items-center gap-1.5 rounded-sm bg-ledger px-2 py-0.5 text-paper">
                  <Star className="w-3 h-3 fill-current" />
                  {p.featuredBadge}
                </span>
              )
            )}
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-5">
          <div className="flex-1 min-w-0">
            <h4 className="text-lg sm:text-xl font-bold text-ink mb-1.5">{info.title}</h4>
            <p className="text-ledger font-medium text-sm mb-3">{info.tagline}</p>
            <p className="text-ink-2 leading-normal mb-4 text-sm sm:text-base">{info.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="label px-2 py-0.5 rounded-sm border border-rule">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            {"liveUrl" in project && project.liveUrl && (
              <Button asChild size="sm" className="bg-gradient-brand text-paper hover:opacity-90 w-full lg:w-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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
                className="border-ink-3 text-ink hover:border-ledger hover:bg-panel bg-transparent w-full lg:w-auto"
              >
                <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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
                className="border-ink-3 text-ink hover:border-ledger hover:bg-panel bg-transparent w-full lg:w-auto"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  {p.viewGithub}
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="portfolio" className="py-s-12 sm:py-s-24 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4">
        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.projects}>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-gradient-brand tracking-wide">{p.heading}</h2>
              <p className="text-ink-2 text-sm sm:text-base max-w-2xl mx-auto px-4">{p.subtitle}</p>
            </div>
          </SectionMeta>
        </div>

        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.featured}>
          <h3 className="text-xl sm:text-2xl font-bold text-ink mb-5 sm:mb-6 tracking-wide">{p.featuredTitle}</h3>

          {/* Região comum: produtos Coreon Systems agrupados num bloco só */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="bg-panel border border-rule rounded-sm px-s-3 sm:px-s-4 mb-s-6"
          >
            <div className="py-s-3 border-b border-rule">
              <span className="label">{p.coreonProduct}</span>
            </div>
            <div className="divide-y divide-rule">{coreonProjects.map(renderProject)}</div>
          </motion.div>

          {/* Soltos, fora do bloco — em papel */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="divide-y divide-rule"
          >
            {standaloneProjects.map(renderProject)}
          </motion.div>
          </SectionMeta>
        </div>

        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.caseStudies}>
            <CaseStudies />
          </SectionMeta>
        </div>

        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.otherProjects}>
          <h3 className="text-lg sm:text-xl font-bold text-ink mb-4 sm:mb-5 tracking-wide">{p.otherProjectsTitle}</h3>
          <div>
            {otherProjects.map((project) => {
              const info = p.items[project.id]
              return (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project flex items-center justify-between gap-3 py-s-3 first:pt-0 last:pb-0 last:border-b-0"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-ink truncate">{info.title}</h4>
                    <p className="text-ink-2 text-xs sm:text-sm">{info.tagline}</p>
                  </div>
                  <Github className="w-4 h-4 text-ink-3 shrink-0" aria-hidden />
                </a>
              )
            })}
          </div>
          </SectionMeta>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://github.com/dbcfilho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ledger hover:opacity-80 transition-opacity text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            {p.moreProjects}
          </a>
        </div>
      </div>
    </section>
  )
}
