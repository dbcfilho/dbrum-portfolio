"use client"

import { useState } from "react"
import { ChevronDown, Github, Globe } from "lucide-react"
import { Diagram } from "@/components/diagram"
import { useI18n } from "@/components/i18n/language-provider"

// Dados neutros: id, stack, repositório e diagramas (código Mermaid).
const caseStudies = [
  {
    id: "corefood",
    stack: ["Java 25", "Spring Boot 4", "Spring Modulith", "PostgreSQL", "Redis", "JWT", "Docker", "Testcontainers"],
    diagrams: {
      architecture: `graph TD
    subgraph Clientes
        A[App Mobile — Cliente]
        B[App Mobile — Lojista / Console]
    end

    subgraph Backend["core-platform — Spring Boot + Modulith"]
        C[API REST]
        D[Resolução de Tenant]
        E[Identity]
        F[Ordering]
        G[Payment]
        H[Loyalty]
        I[Notification]
    end

    J[(PostgreSQL\nRLS por tenant)]
    K[(Redis\ncache)]
    L[PagBank / PIX]
    M[Expo Push]

    A -->|HTTPS / REST| C
    B -->|HTTPS / REST| C
    C --> D
    D --> E
    D --> F
    D --> G
    D --> H
    D --> I
    E --> J
    F --> J
    G --> J
    H --> J
    C --> K
    G -->|Webhook| L
    I --> M
    style D fill:#195dff,stroke:#195dff,color:#fff
    style J fill:#195dff,stroke:#195dff,color:#fff`,
      erd: `erDiagram
    TENANT ||--o{ APP_USER : has
    TENANT ||--o{ CATEGORY : owns
    TENANT ||--o{ PRODUCT : owns
    TENANT ||--o{ ORDER_ENTITY : owns

    TENANT {
        int id PK
        string name
        string subdomain
    }

    APP_USER {
        int id PK
        int tenant_id FK
        string email
        string role
    }

    CATEGORY {
        int id PK
        int tenant_id FK
        string name
        int position
    }

    PRODUCT {
        int id PK
        int tenant_id FK
        int category_id FK
        string name
        decimal price
        boolean available
    }

    CATEGORY ||--o{ PRODUCT : contains

    ORDER_ENTITY {
        int id PK
        int tenant_id FK
        int sequential_code
        string status
        datetime created_at
    }

    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal unit_price
    }

    ORDER_ENTITY ||--o{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : referenced_by

    PAYMENT {
        int id PK
        int order_id FK
        string method
        string status
        string webhook_hash
    }

    ORDER_ENTITY ||--o| PAYMENT : has`,
    },
  },
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
    id: "simmias",
    stack: ["Django 5", "Django REST Framework", "React 18", "Vite", "PostgreSQL", "Baileys", "JWT", "Docker Compose"],
    liveUrl: "https://simmias.vercel.app",
    diagrams: {
      architecture: `graph TD
    subgraph LAN["Rede local — sem internet"]
        U[Navegador — Secretaria / Professor / Direção]
    end

    N[Nginx — proxy reverso :80]
    F[Frontend — React + Vite]
    B[Backend — Django + DRF via gunicorn]
    K[alertas-cron — verifica faltas, gera aulas]
    W[Microserviço WhatsApp — Baileys]
    D[(PostgreSQL)]
    G[Famílias / Alunos]

    U -->|HTTPS| N
    N --> F
    N -->|/api /admin| B
    B --> D
    K --> D
    K -->|mensagens| W
    B -->|notificações| W
    W -->|WhatsApp| G
    style B fill:#195dff,stroke:#195dff,color:#fff
    style D fill:#195dff,stroke:#195dff,color:#fff`,
      erd: `erDiagram
    ALUNO ||--o{ MATRICULA : has
    TURMA ||--o{ MATRICULA : has
    TURMA ||--o{ HORARIO_TURMA : has
    TURMA ||--o{ AULA : has
    PROFESSOR }o--o{ TURMA : leciona
    ALUNO ||--o{ FREQUENCIA : has
    AULA ||--o{ FREQUENCIA : registra
    ALUNO ||--o{ PASSAPORTE_CULTURAL : has
    ALUNO ||--o{ ATENDIMENTO_MEDICO : has

    ALUNO {
        int id PK
        string nome
        string matricula
    }
    TURMA {
        int id PK
        string nome
    }
    HORARIO_TURMA {
        int id PK
        int turma_id FK
        int dia_semana
        time hora_inicio
    }
    AULA {
        int id PK
        int turma_id FK
        date data
        int professor_id FK
        string status
    }
    MATRICULA {
        int id PK
        int aluno_id FK
        int turma_id FK
        string codigo
    }
    PROFESSOR {
        int id PK
        string especialidade
    }
    FREQUENCIA {
        int id PK
        int aula_id FK
        int aluno_id FK
        string status
    }
    PASSAPORTE_CULTURAL {
        int id PK
        int aluno_id FK
        string raca
    }
    ATENDIMENTO_MEDICO {
        int id PK
        int aluno_id FK
        string anotacao
    }`,
    },
  },
] as const

export default function CaseStudies() {
  const { t } = useI18n()
  const c = t.caseStudies
  const p = t.projects
  const [openDiagrams, setOpenDiagrams] = useState<boolean[]>(caseStudies.map(() => false))

  const toggleDiagrams = (index: number) => {
    setOpenDiagrams((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  return (
    <div style={{ marginTop: 60 }}>
      <h3 style={{ fontSize: 21, fontWeight: 500, marginBottom: 6 }}>{c.heading}</h3>
      <p style={{ color: "var(--muted-foreground)", marginTop: 0, marginBottom: 32 }}>{c.subtitle}</p>

      {caseStudies.map((study, index) => {
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

            {study.diagrams && (
              <div>
                <button
                  className="diagram-toggle"
                  onClick={() => toggleDiagrams(index)}
                  aria-expanded={openDiagrams[index]}
                >
                  <ChevronDown size={16} />
                  {openDiagrams[index] ? c.hideDiagrams : c.showDiagrams}
                </button>

                {openDiagrams[index] && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8, marginBottom: 16 }}>
                    <div>
                      <h5 style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{c.architectureLabel}</h5>
                      <Diagram code={study.diagrams.architecture} loadingLabel={c.loadingDiagram} errorLabel={c.diagramError} />
                    </div>
                    <div>
                      <h5 style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{c.erdLabel}</h5>
                      <Diagram code={study.diagrams.erd} loadingLabel={c.loadingDiagram} errorLabel={c.diagramError} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {(("github" in study && study.github) || ("liveUrl" in study && study.liveUrl)) && (
              <div className="project-foot">
                <div className="project-links">
                  {"liveUrl" in study && study.liveUrl && (
                    <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                      <Globe size={15} /> {p.viewSite}
                    </a>
                  )}
                  {"github" in study && study.github && (
                    <a href={study.github} target="_blank" rel="noopener noreferrer" className="button button-ghost">
                      <Github size={15} /> {c.viewRepo}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
