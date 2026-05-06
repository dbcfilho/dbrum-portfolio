"use client"

import { useState } from "react"
import { Github, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Diagram } from "@/components/diagram"

const caseStudies = [
  {
    title: "Plataforma Inteligente de Diagnóstico de Lacunas de Aprendizagem",
    role: "Desenvolvedor Full Stack & Arquiteto de BI",
    projectType: "Sistema Web de Business Intelligence (Projeto de Conclusão de Curso)",
    problem:
      "Escolas públicas no Brasil frequentemente enfrentam dados fragmentados, ausência de dashboards e visibilidade limitada sobre as lacunas de aprendizagem dos alunos. Profissionais da educação geralmente dependem de planilhas ou processos manuais, o que dificulta identificar alunos em risco, tendências em disciplinas ou séries específicas, turmas com déficits estruturais de desempenho e padrões geográficos de dificuldades educacionais. Era necessária uma solução de BI centralizada para apoiar decisões baseadas em dados.",
    solution:
      "Projetei e implementei uma plataforma completa de BI com API Django REST para acesso estruturado e seguro aos dados, frontend Vue.js + Vite para interface responsiva e rápida, dashboards interativos com Plotly.js, visualizações geoespaciais com Leaflet, autenticação JWT para acesso protegido e um gerador de dados sintéticos para desenvolvimento e demos. O sistema permite que professores, coordenadores e administradores visualizem tendências, comparem desempenhos entre turmas ou escolas e detectem lacunas de aprendizagem precocemente.",
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
    features: [
      "Autenticação baseada em JWT com mecanismo de refresh de token",
      "Operações CRUD completas para Escolas, Turmas, Alunos e Professores",
      "Dashboards interativos com Plotly.js para análise de desempenho",
      "Análise geoespacial com Leaflet e tiles reais de mapa",
      "API REST construída com Django + DRF para acesso estruturado aos dados",
      "Insights de desempenho via visualizações Plotly.js",
      "Gerador de dataset sintético para cenários de teste",
      "Frontend responsivo e rápido com Vue 3 + Vite",
      "Alertas antecipados para alunos em risco",
      "Análise de padrões demográficos e geográficos",
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
    title: "Culture House — Plataforma de Gestão Social",
    role: "Desenvolvedor Full Stack",
    projectType: "Sistema de Gestão para ONG Social",
    problem:
      "ONGs que gerenciam programas de assistência social precisam acompanhar os indivíduos atendidos, automatizar comunicações e gerar relatórios completos, mas carecem de soluções técnicas acessíveis e escaláveis.",
    solution:
      "Desenvolvi uma plataforma web full-stack usando Python/Django com MySQL para persistência de dados, Docker para conteinerização e integração com a API do WhatsApp para envio automático de mensagens de aniversário. Implementei controle de acesso por papéis, geração de relatórios em CSV/PDF e uma interface responsiva com Bootstrap 5.",
    stack: ["Python", "Django", "MySQL", "Docker", "Bootstrap 5", "WhatsApp API"],
    features: [
      "Acompanhamento individual e gestão de casos com perfis completos",
      "Envio automatizado de mensagens no WhatsApp para aniversários e eventos especiais",
      "Geração de relatórios estatísticos nos formatos CSV e PDF",
      "Controle de acesso por papéis para administradores e funcionários",
      "Deploy com Docker Compose para configuração fácil e escalabilidade",
    ],
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
    style C fill:#8b5cf6,stroke:#a78bfa,color:#fff
    style D fill:#3b82f6,stroke:#60a5fa,color:#fff`,
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
]

export default function CaseStudies() {
  const [openDiagrams, setOpenDiagrams] = useState<boolean[]>(caseStudies.map(() => false))

  const toggleDiagrams = (index: number) => {
    setOpenDiagrams((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  return (
    <div className="mt-8 sm:mt-12">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
          Estudos de Caso
        </h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Análises aprofundadas de projetos reais e soluções técnicas
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {caseStudies.map((study, index) => (
          <div
            key={study.title}
            className="glass-card rounded-lg p-5 sm:p-6 animate-in fade-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Cabeçalho */}
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">{study.title}</h4>
              {study.role && <p className="text-gray-300 text-sm sm:text-base mb-2">Função: {study.role}</p>}
              {study.projectType && (
                <p className="text-gray-300 text-sm sm:text-base mb-3">Tipo de Projeto: {study.projectType}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-3">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <a href={study.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Ver Repositório
                </a>
              </Button>
            </div>

            {/* Problema & Solução */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="text-base font-bold text-purple-400 mb-2">Problema</h5>
                <p className="text-gray-300 leading-normal text-sm sm:text-base">{study.problem}</p>
              </div>
              <div>
                <h5 className="text-base font-bold text-blue-400 mb-2">Solução</h5>
                <p className="text-gray-300 leading-normal text-sm sm:text-base">{study.solution}</p>
              </div>
            </div>

            {/* Principais Funcionalidades */}
            <div className="mb-4">
              <h5 className="text-base font-bold text-white mb-2">Principais Funcionalidades</h5>
              <ul className="space-y-1.5">
                {study.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
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
                  className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mt-2 mb-1 group"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${openDiagrams[index] ? "rotate-180" : ""}`}
                  />
                  {openDiagrams[index] ? "Ocultar diagramas" : "Ver diagramas"}
                </button>

                {openDiagrams[index] && (
                  <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-top duration-300">
                    <div>
                      <h5 className="text-base font-bold text-white mb-3">Arquitetura do Sistema</h5>
                      <Diagram code={study.diagrams.architecture} />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-3">Esquema do Banco de Dados (ERD)</h5>
                      <Diagram code={study.diagrams.erd} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
