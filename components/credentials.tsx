"use client"

import { useI18n } from "@/components/i18n/language-provider"

const certifications = [
  { title: "Rest API (Intermediate)", issuer: "HackerRank", year: "2026" },
  { title: "SQL (Advanced)", issuer: "HackerRank", year: "2026" },
  { title: "Software Engineer", issuer: "HackerRank", year: "2026" },
  { title: "Google Cybersecurity Certificate", issuer: "Google", year: "2024" },
  { title: "Introduction to IoT", issuer: "Cisco", year: "2023" },
  { title: "Computing Science with Python", issuer: "USP", year: "2023" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", year: "2023" },
  { title: "NDG Linux Unhatched Certificate", issuer: "Cisco", year: "2023" },
] as const

const education = [
  { id: "anhanguera", institution: "Anhanguera", period: "Mar 2026 – Ago 2026" },
  { id: "uniasselvi", institution: "UNIASSELVI", period: "Ago 2022 – Jul 2025" },
] as const

const coreStack = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Go",
  "C/C++",
  "Flutter",
  "Spring Boot",
  "Django",
  "Node.js",
  "NestJS",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Vite",
  "MySQL",
  "SQLite",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS (Foundations)",
  "Linux",
  "Gradle",
  "RESTful APIs",
  "HTML",
  "CSS",
  "Bootstrap",
]

export default function Credentials() {
  const { t } = useI18n()
  const a = t.about

  return (
    <section className="section-shell credentials">
      <div>
        <span className="mini-label">{a.certsHeading}</span>
        <h3>
          {certifications.length}
          <br />
          <em>{a.certsHeading}</em>
        </h3>
        <ul className="cred-list">
          {certifications.map((cert) => (
            <li key={cert.title}>
              <span>
                {cert.title} — {cert.issuer}
              </span>
              <span>{cert.year}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="mini-label">{a.educationHeading}</span>
        <h3>
          {education.length}
          <br />
          <em>{a.educationHeading}</em>
        </h3>
        <ul className="cred-list">
          {education.map((edu) => (
            <li key={edu.id}>
              <span>
                {a.education[edu.id].degree} — {edu.institution}
              </span>
              <span>{edu.period}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="stack-box">
        <span className="mini-label">{a.skillsHeading}</span>
        <div className="stack-icons">
          {coreStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
