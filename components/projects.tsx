"use client"

import { ArrowUpRight, Clock, ExternalLink, Globe, Star } from "lucide-react"
import CaseStudies from "@/components/case-studies"
import { useI18n } from "@/components/i18n/language-provider"

// Dados neutros (stack, URLs, destaque). Textos vêm do dicionário via id.
const coreonProjects = [
  {
    id: "corefarma",
    featured: true,
    stack: ["TypeScript", "NestJS", "Node.js", "React", "PostgreSQL", "Prisma", "Supabase", "Nginx", "Swagger", "Winston"],
    liveUrl: "https://corefarma.com",
    appUrl: "https://app.corefarma.com",
  },
  {
    id: "corefood",
    featured: true,
    inDevelopment: true,
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Multi-tenant", "Row-Level Security", "JWT"],
  },
] as const

const standaloneProjects = [
  {
    id: "simmias",
    featured: true,
    stack: ["Django 5", "Django REST Framework", "React 18", "Vite", "PostgreSQL", "Baileys", "Docker Compose"],
    liveUrl: "https://simmias.vercel.app",
  },
] as const

const otherProjects = [
  { id: "crudjava", github: "https://github.com/dbcfilho/CRUD-Java" },
  { id: "userreg", github: "https://github.com/dbcfilho/User-registration" },
] as const

type CoreonProject = (typeof coreonProjects)[number]
type StandaloneProject = (typeof standaloneProjects)[number]

export default function Projects() {
  const { t } = useI18n()
  const p = t.projects

  const renderProject = (project: CoreonProject | StandaloneProject, className: string) => {
    const info = p.items[project.id]
    return (
      <div className={className} key={project.id}>
        {(("inDevelopment" in project && project.inDevelopment) || ("featured" in project && project.featured)) && (
          <div className="project-badges">
            {"inDevelopment" in project && project.inDevelopment ? (
              <span className="project-badge dev">
                <Clock size={12} /> {p.inDevelopment}
              </span>
            ) : (
              "featured" in project &&
              project.featured && (
                <span className="project-badge">
                  <Star size={12} /> {p.featuredBadge}
                </span>
              )
            )}
          </div>
        )}
        <div className="project-head">
          <h3>{info.title}</h3>
        </div>
        <p className="project-tagline">{info.tagline}</p>
        <p className="project-desc">{info.description}</p>
        <div className="tags">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-foot">
          <div className="project-links">
            {"liveUrl" in project && project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                <Globe size={15} /> {p.viewSite}
              </a>
            )}
            {"appUrl" in project && project.appUrl && (
              <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="button button-ghost">
                <ExternalLink size={15} /> {p.accessSystem}
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="portfolio" className="section-shell content-section">
      <div className="section-heading">
        <span className="section-index">02</span>
        <div>
          <h2>{p.heading}</h2>
          <p>{p.subtitle}</p>
        </div>
      </div>

      {/* Região comum: produtos Coreon Systems agrupados */}
      <div className="projects-group">
        <div className="projects-group-label">
          <span className="mini-label">{p.coreonProduct}</span>
        </div>
        {coreonProjects.map((project) => renderProject(project, "project-card"))}
      </div>

      {/* Soltos, fora do bloco */}
      {standaloneProjects.map((project) => renderProject(project, "project-card standalone"))}

      <CaseStudies />

      <h3 style={{ margin: "60px 0 20px", fontSize: 21, fontWeight: 500 }}>{p.otherProjectsTitle}</h3>
      <div className="other-projects">
        {otherProjects.map((project) => {
          const info = p.items[project.id]
          return (
            <a key={project.id} href={project.github} target="_blank" rel="noopener noreferrer" className="other-project-row">
              <div>
                <h4>{info.title}</h4>
                <p>{info.tagline}</p>
              </div>
              <ArrowUpRight size={18} />
            </a>
          )
        })}
      </div>
    </section>
  )
}
