"use client"

import {
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Code2,
  Network,
  GraduationCap,
  Languages,
  LifeBuoy,
  Wrench,
  Building2,
} from "lucide-react"
import { useI18n } from "@/components/i18n/language-provider"
import { SectionMeta } from "@/components/section-meta"

// Dados neutros (independentes de idioma): ícones, chips de tecnologia, empresas, períodos.
const skillGroups = [
  { id: "backend", icon: Code, skills: ["Java", "Python", "JavaScript", "TypeScript", "Go", "C/C++"] },
  { id: "frameworks", icon: Server, skills: ["Spring Boot", "Django", "Node.js", "React"] },
  { id: "databases", icon: Database, skills: ["MySQL", "SQLite", "MongoDB"] },
  {
    id: "infra",
    icon: Globe,
    skills: ["Docker", "AWS (fundamentos)", "Linux", "RESTful APIs", "HTML", "CSS", "Bootstrap"],
  },
] as const

const certifications = [
  { icon: Globe, title: "Rest API (Intermediate)", issuer: "HackerRank", year: "2026" },
  { icon: Database, title: "SQL (Advanced)", issuer: "HackerRank", year: "2026" },
  { icon: Code2, title: "Software Engineer", issuer: "HackerRank", year: "2026" },
  { icon: Shield, title: "Google Cybersecurity Certificate", issuer: "Google", year: "2024" },
  { icon: Network, title: "Introduction to IoT", issuer: "Cisco", year: "2023" },
  { icon: Code2, title: "Computing Science with Python", issuer: "USP", year: "2023" },
  { icon: Shield, title: "Introduction to Cybersecurity", issuer: "Cisco", year: "2023" },
  { icon: Network, title: "NDG Linux Unhatched Certificate", issuer: "Cisco", year: "2023" },
] as const

// `end: null` => usa a tradução de "Presente/Present" (cargo em andamento).
const experiences = [
  { id: "coreon", company: "Coreon Systems", start: "Jan 2025", end: null, icon: Building2 },
  { id: "dbrum", company: "Dbrum Tech", start: "2020", end: "2025", icon: Wrench },
  { id: "a4pm", company: "A4PM", start: "2025", end: "Jul 2026", icon: LifeBuoy },
  { id: "fundec", company: "FUNDEC", start: "2022", end: "Dez 2025", icon: GraduationCap },
] as const

const education = [{ id: "uniasselvi", institution: "UNIASSELVI", period: "Ago 2022 – Jul 2025" }] as const


export default function AboutUnified() {
  const { t } = useI18n()
  const a = t.about

  return (
    <section id="about" className="py-s-12 sm:py-s-24 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="page px-s-2 sm:px-s-3 lg:px-s-4">
        {/* Texto Sobre */}
        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.about}>
            <div className="glass-card rounded-sm p-5 sm:p-6 md:p-8 animate-in fade-in slide-in-from-bottom duration-700">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 text-gradient-brand tracking-wide">
                {a.heading}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-ink-2 leading-normal text-sm sm:text-base">
                {a.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </SectionMeta>
        </div>

        {/* Habilidades */}
        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.skills}>
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-ink tracking-wide">{a.skillsHeading}</h3>
            <p className="text-ink-2 text-sm sm:text-base max-w-2xl">{a.skillsSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              const g = a.skillGroups[group.id]
              return (
                <div
                  key={group.id}
                  className="glass-card rounded-sm p-4 sm:p-5 hover:border-ledger transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 sm:p-2.5 rounded-sm bg-panel border border-rule shrink-0">
                      <Icon className="w-5 h-5 text-ink-2" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-ink mb-1.5">{g.title}</h4>
                      <p className="text-xs sm:text-sm text-ink-3">{g.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="label px-2 py-0.5 rounded-sm border border-rule hover:border-ledger hover:text-ledger transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          </SectionMeta>
        </div>

        {/* Certificações */}
        <div className="mb-s-8">
          <SectionMeta label={t.sectionLabels.certifications}>
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-ink tracking-wide">{a.certsHeading}</h3>
            <p className="text-ink-2 text-sm sm:text-base max-w-2xl">{a.certsSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.title}
                  className="glass-card rounded-sm p-4 hover:border-ledger transition-all duration-300 group animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-2 mb-2.5">
                    <div className="p-2 rounded-sm bg-panel border border-rule shrink-0">
                      <Icon className="w-4 h-4 text-ink-2" />
                    </div>
                    <span className="label">{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-ink mb-1.5 leading-tight">{cert.title}</h4>
                  <p className="text-xs text-ledger">{cert.issuer}</p>
                </div>
              )
            })}
          </div>
          </SectionMeta>
        </div>

        {/* Experiência */}
        <div>
          <SectionMeta label={t.sectionLabels.experience}>
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-ink tracking-wide">{a.experienceHeading}</h3>
            <p className="text-ink-2 text-sm sm:text-base max-w-2xl">{a.experienceSubtitle}</p>
          </div>

          <div className="relative max-w-3xl">
            {/* Trilho vertical do tempo */}
            <div className="absolute left-[23px] sm:left-[27px] top-3 bottom-3 w-px bg-rule" aria-hidden />

            <div className="space-y-5 sm:space-y-6">
              {experiences.map((exp, index) => {
                const e = a.experiences[exp.id]
                const ongoing = exp.end === null
                const period = `${exp.start} – ${exp.end ?? a.present}`
                const Icon = exp.icon
                return (
                  <div
                    key={exp.id}
                    className="relative flex gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {/* Marcador com ícone */}
                    <div className="relative shrink-0">
                      <div
                        className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full ring-4 ring-paper ${
                          ongoing ? "bg-ledger text-paper" : "bg-panel border border-rule text-ink-2"
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    {/* Cartão */}
                    <div
                      className={`flex-1 min-w-0 glass-card rounded-sm p-4 sm:p-5 transition-all duration-300 hover:border-ledger ${
                        ongoing ? "border-ledger/40" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2 mb-3">
                        <div className="min-w-0">
                          <h4 className="text-base sm:text-lg font-bold text-ink leading-snug">{e.role}</h4>
                          <p className="text-ledger font-medium text-sm">{exp.company}</p>
                        </div>
                        <span
                          className={`shrink-0 inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-medium ${
                            ongoing ? "bg-ledger-dim border border-ledger/40 text-ledger" : "bg-panel border border-rule text-ink-2"
                          }`}
                        >
                          {ongoing && (
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ledger opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ledger" />
                            </span>
                          )}
                          {period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {e.points.map((point, i) => (
                          <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ledger" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          </SectionMeta>
        </div>

        {/* Educação */}
        <div className="mt-s-8">
          <SectionMeta label={t.sectionLabels.education}>
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-ink tracking-wide">{a.educationHeading}</h3>
            <p className="text-ink-2 text-sm sm:text-base max-w-2xl">{a.educationSubtitle}</p>
          </div>

          <div className="max-w-5xl space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {education.map((edu, index) => {
              const ed = a.education[edu.id]
              return (
                <div
                  key={edu.id}
                  className="glass-card rounded-sm p-5 sm:p-7 hover:border-ledger transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-2.5 sm:p-3 rounded-sm bg-panel border border-rule shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-ink mb-2">{ed.degree}</h4>
                      <p className="text-ledger font-medium mb-1 text-sm sm:text-base">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-ink-3 mb-3 sm:mb-4">{edu.period}</p>
                      <p className="text-ink-2 leading-relaxed text-sm sm:text-base">{ed.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="max-w-5xl glass-card rounded-sm p-5 sm:p-7 animate-in fade-in slide-in-from-bottom delay-300">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-2.5 sm:p-3 rounded-sm bg-panel border border-rule shrink-0">
                <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-ink-2" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-ink mb-3 sm:mb-4">{a.languagesTitle}</h4>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  {a.languages.map((lang) => (
                    <div key={lang.label} className="flex items-center gap-2">
                      <span className="text-ink-2 font-medium text-sm sm:text-base">{lang.label}</span>
                      <span className="label px-2 py-0.5 rounded-sm border border-rule">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </SectionMeta>
        </div>
      </div>
    </section>
  )
}
