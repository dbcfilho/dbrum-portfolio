"use client"

import { Github } from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"

// Dados neutros: id, stack e repositório.
const caseStudies = [
  {
    id: "corefood",
    stack: ["Java 25", "Spring Boot 4", "Spring Modulith", "PostgreSQL", "Redis", "JWT", "Docker", "Testcontainers"],
  },
  {
    id: "bi",
    stack: ["Django 4", "Django REST Framework", "Vue.js 3", "Vite", "Plotly.js", "Leaflet", "JWT", "MySQL", "SQLite", "Python"],
    github: "https://github.com/dbcfilho/plataforma-diagnostico",
  },
  {
    id: "culturehouse",
    stack: ["Python", "Django", "MySQL", "Docker", "Bootstrap 5", "WhatsApp API"],
    github: "https://github.com/dbcfilho/casa-da-cultura-v3",
  },
] as const

export default function CaseStudies() {
  const { t } = useI18n()
  const c = t.caseStudies

  return (
    <div style={{ marginTop: 60 }}>
      <h3 style={{ fontSize: 21, fontWeight: 500, marginBottom: 6 }}>{c.heading}</h3>
      <p style={{ color: "var(--muted-foreground)", marginTop: 0, marginBottom: 32 }}>{c.subtitle}</p>

      {caseStudies.map((study) => {
        const s = c.items[study.id]
        return (
          <div className="project-card standalone" key={study.id}>
            <div className="project-head">
              <h3>{s.title}</h3>
            </div>
            {s.role && <p className="project-tagline">{c.roleLabel}: {s.role}</p>}
            {s.projectType && <p className="project-desc">{c.projectTypeLabel}: {s.projectType}</p>}
            <div className="tags">
              {study.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-summary">
              <div>
                <h4>{c.problemLabel}</h4>
                <p>{s.problem}</p>
              </div>
              <div>
                <h4>{c.solutionLabel}</h4>
                <p style={{ whiteSpace: "pre-line" }}>{s.solution}</p>
              </div>
            </div>

            <h4 style={{ fontSize: 12, fontFamily: "var(--font-plex-mono), monospace", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              {c.featuresLabel}
            </h4>
            <ul className="feature-list">
              {s.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {"github" in study && study.github && (
              <div className="project-foot">
                <div className="project-links">
                  <a href={study.github} target="_blank" rel="noopener noreferrer" className="button button-ghost">
                    <Github size={15} /> {c.viewRepo}
                  </a>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
