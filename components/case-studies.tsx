"use client"

import { useState } from "react"
import { Github, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Diagram } from "@/components/diagram"
import { useI18n } from "@/components/i18n/language-provider"

// Dados neutros: id, stack, repositório e diagramas (código Mermaid).
const caseStudies = [
  {
    id: "bi",
    stack: [
      "Django 4",
      "Django REST Framework",
      "Vue.js 3",
      "Vite",
      "Plotly.js",
      "Leaflet",
      "JWT",
      "MySQL",
      "SQLite",
      "Python",
      "Tailwind CSS",
    ],
    github: "https://github.com/dbcfilho/plataforma-diagnostico",
    diagrams: {
      architecture: `graph TD
    subgraph User
        A[Browser / Cliente]
    end

    subgraph Frontend
        B["Vue.js 3 + Vite\nPlotly.js + Leaflet"]
    end

    subgraph Backend
        C[Django REST Framework API]
        D[Autenticação JWT]
    end

    subgraph Database
        E[(SQLite / MySQL)]
    end

    A --> B
    B -->|HTTPS / REST| C
    C --> D
    C --> E`,
      erd: `erDiagram
    SCHOOL ||--o{ CLASSROOM : has
    CLASSROOM ||--o{ STUDENT : contains
    CLASSROOM ||--o{ TEACHER : assigned
    STUDENT ||--o{ PERFORMANCE : generates

    SCHOOL {
        int id
        string name
        string city
        string state
    }

    CLASSROOM {
        int id
        string name
        int year
        int school_id
    }

    STUDENT {
        int id
        string name
        string gender
        int age
        int classroom_id
    }

    TEACHER {
        int id
        string name
        string subject
        int classroom_id
    }

    PERFORMANCE {
        int id
        int student_id
        float score_math
        float score_portuguese
        float score_science
        date exam_date
    }`,
    },
  },
  {
    id: "culturehouse",
    stack: ["Python", "Django", "MySQL", "Docker", "Bootstrap 5", "WhatsApp API"],
    github: "https://github.com/dbcfilho/casa-da-cultura-v3",
    diagrams: {
      architecture: `graph TB
    A[Navegador do Usuário] -->|HTTPS| B[Nginx Reverse Proxy]
    B --> C[Aplicação Django]
    C --> D[Banco de Dados MySQL]
    C --> E[API do WhatsApp]
    C --> F[Gerador de PDF]
    C --> G[Exportador CSV]
    D -->|Dados| C
    E -->|Notificações| H[Usuários Finais]
    style C fill:#2563eb,stroke:#60a5fa,color:#fff
    style D fill:#06b6d4,stroke:#22d3ee,color:#fff`,
      erd: `erDiagram
    PERSON ||--o{ ATTENDANCE : has
    PERSON {
        int id PK
        string name
        date birth_date
        string phone
        string address
    }
    ATTENDANCE {
        int id PK
        int person_id FK
        date attendance_date
        string notes
        string status
    }
    PERSON ||--o{ MESSAGE : receives
    MESSAGE {
        int id PK
        int person_id FK
        string type
        date sent_date
        boolean delivered
    }`,
    },
  },
] as const

export default function CaseStudies() {
  const { t } = useI18n()
  const c = t.caseStudies
  const [openDiagrams, setOpenDiagrams] = useState<boolean[]>(caseStudies.map(() => false))

  const toggleDiagrams = (index: number) => {
    setOpenDiagrams((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  return (
    <div className="mt-8 sm:mt-12">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-wide">{c.heading}</h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">{c.subtitle}</p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {caseStudies.map((study, index) => {
          const s = c.items[study.id]
          return (
          <div
            key={study.id}
            className="glass-card rounded-lg p-5 sm:p-6 animate-in fade-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Cabeçalho */}
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">{s.title}</h4>
              {s.role && <p className="text-gray-300 text-sm sm:text-base mb-2">{c.roleLabel}: {s.role}</p>}
              {s.projectType && (
                <p className="text-gray-300 text-sm sm:text-base mb-3">{c.projectTypeLabel}: {s.projectType}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-3">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-brand-light/10 border border-brand-light/30 text-brand-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-brand/50 hover:border-brand-cyan hover:bg-brand/10 bg-transparent"
              >
                <a href={study.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  {c.viewRepo}
                </a>
              </Button>
            </div>

            {/* Problema & Solução */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="text-base font-bold text-brand-cyan mb-2">{c.problemLabel}</h5>
                <p className="text-gray-300 leading-normal text-sm sm:text-base">{s.problem}</p>
              </div>
              <div>
                <h5 className="text-base font-bold text-brand-light mb-2">{c.solutionLabel}</h5>
                <p className="text-gray-300 leading-normal text-sm sm:text-base">{s.solution}</p>
              </div>
            </div>

            {/* Principais Funcionalidades */}
            <div className="mb-4">
              <h5 className="text-base font-bold text-white mb-2">{c.featuresLabel}</h5>
              <ul className="space-y-1.5">
                {s.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-brand-cyan mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagramas */}
            {study.diagrams && (
              <div>
                <button
                  onClick={() => toggleDiagrams(index)}
                  className="flex items-center gap-2 text-sm font-medium text-brand-cyan hover:text-brand-cyan transition-colors mt-2 mb-1 group"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${openDiagrams[index] ? "rotate-180" : ""}`}
                  />
                  {openDiagrams[index] ? c.hideDiagrams : c.showDiagrams}
                </button>

                {openDiagrams[index] && (
                  <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-top duration-300">
                    <div>
                      <h5 className="text-base font-bold text-white mb-3">{c.architectureLabel}</h5>
                      <Diagram
                        code={study.diagrams.architecture}
                        loadingLabel={c.loadingDiagram}
                        errorLabel={c.diagramError}
                      />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-3">{c.erdLabel}</h5>
                      <Diagram
                        code={study.diagrams.erd}
                        loadingLabel={c.loadingDiagram}
                        errorLabel={c.diagramError}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          )
        })}
      </div>
    </div>
  )
}
