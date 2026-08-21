"use client"

import { useI18n } from "@/components/i18n/language-provider"

// Dados neutros (independentes de idioma): chips de tecnologia, empresas, períodos.
const skillGroups = [
  { id: "backend", skills: ["Java", "Python", "JavaScript", "TypeScript", "Go", "C/C++"] },
  { id: "frameworks", skills: ["Spring Boot", "Django", "Node.js", "React"] },
  { id: "databases", skills: ["MySQL", "SQLite", "MongoDB"] },
  { id: "infra", skills: ["Docker", "AWS (fundamentos)", "Linux", "RESTful APIs", "HTML", "CSS", "Bootstrap"] },
] as const

// `end: null` => usa a tradução de "Presente/Present" (cargo em andamento).
const experiences = [
  { id: "coreon", company: "Coreon Systems", start: "Jan 2025", end: null },
  { id: "dbrum", company: "Dbrum Labs", start: "Jan 2020", end: "Jan 2025" },
  { id: "a4pm", company: "A4PM", start: "Jul 2025", end: "Jul 2026" },
  { id: "fundec", company: "FUNDEC", start: "Ago 2022", end: "Dez 2025" },
] as const

export default function Experience() {
  const { t } = useI18n()
  const a = t.about

  return (
    <section id="experience" className="section-shell content-section">
      <div className="section-heading">
        <span className="section-index">01</span>
        <div>
          <h2>{a.experienceHeading}</h2>
          <p>{a.experienceSubtitle}</p>
        </div>
      </div>

      <div className="about-copy">
        {a.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const g = a.skillGroups[group.id]
          return (
            <div key={group.id} className="skill-group">
              <h4>{g.title}</h4>
              <p>{g.description}</p>
              <div className="tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="timeline">
        {experiences.map((exp) => {
          const e = a.experiences[exp.id]
          const period = `${exp.start} — ${exp.end ?? a.present}`
          return (
            <article className="timeline-item" key={exp.id}>
              <div className="date">{period}</div>
              <div>
                <h3>{e.role}</h3>
                <p className="company">{exp.company}</p>
                <ul>
                  {e.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
