import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Diagram } from "@/components/diagram"

const caseStudies = [
  {
    title: "Intelligent Educational Learning Gap Diagnosis Platform",
    role: "Full Stack Developer & BI Architect",
    projectType: "Business Intelligence Web System (College Graduation Project)",
    problem:
      "Public schools in Brazil often struggle with fragmented data, lack of dashboards, and limited insight into student learning gaps. Educational staff typically rely on spreadsheets or manual processes, making it difficult to identify students at risk, trends in specific subjects or grades, classes with structural performance gaps, and geographical patterns of educational challenges. A centralized BI solution was needed to support data-driven decision-making.",
    solution:
      "Designed and implemented a full BI platform with a Django REST API for structured and secure data access, a Vue.js + Vite frontend for fast responsive UI, interactive dashboards built with Plotly.js, geospatial visualizations using Leaflet, JWT-based authentication for protected access, and a synthetic data generator for development and demos. The system allows teachers, coordinators, and administrators to visualize trends, compare performance between classes or schools, and detect learning gaps early.",
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
      "JWT-based authentication with token refresh mechanism",
      "Complete CRUD operations for Schools, Classes, Students, and Teachers",
      "Interactive dashboards with Plotly.js for performance analysis",
      "Geospatial analysis using Leaflet and real mapping tiles",
      "REST API built with Django + DRF for structured data access",
      "Performance insights via Plotly.js visualizations",
      "Synthetic dataset generator for testing scenarios",
      "Responsive, fast frontend using Vue 3 + Vite",
      "Early-warning insights for at-risk students",
      "Demographic and geographic pattern analysis",
    ],
    github: "https://github.com/dbcfilho/plataforma-diagnostico",
    diagrams: {
      architecture: `graph TD
    subgraph User
        A[Browser / Client]
    end

    subgraph Frontend
        B["Vue.js 3 + Vite\nPlotly.js + Leaflet"]
    end

    subgraph Backend
        C[Django REST Framework API]
        D[JWT Authentication]
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
    title: "Culture House — Social Management Platform",
    role: "Full Stack Developer",
    projectType: "Social NGO Management System",
    problem:
      "NGOs managing social assistance programs need to track assisted individuals, automate communications, and generate comprehensive reports, but lack affordable and scalable technical solutions.",
    solution:
      "Built a full-stack web platform using Python/Django with MySQL for data persistence, Docker for containerization, and integrated WhatsApp API for automated birthday messages. Implemented role-based access control, CSV/PDF report generation, and a responsive Bootstrap 5 interface.",
    stack: ["Python", "Django", "MySQL", "Docker", "Bootstrap 5", "WhatsApp API"],
    features: [
      "Individual tracking and case management with comprehensive profiles",
      "Automated WhatsApp messaging for birthdays and special events",
      "Statistical report generation in CSV and PDF formats",
      "Role-based access control for administrators and staff",
      "Docker Compose deployment for easy setup and scalability",
    ],
    github: "https://github.com/dbcfilho/casa-da-cultura-v3",
    diagrams: {
      architecture: `graph TB
    A[User Browser] -->|HTTPS| B[Nginx Reverse Proxy]
    B --> C[Django Application]
    C --> D[MySQL Database]
    C --> E[WhatsApp API]
    C --> F[PDF Generator]
    C --> G[CSV Exporter]
    D -->|Data| C
    E -->|Notifications| H[End Users]
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
  return (
    <div className="mt-8 sm:mt-12">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
          Case Studies
        </h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Deep dives into real-world projects and technical solutions
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {caseStudies.map((study, index) => (
          <div
            key={study.title}
            className="glass-card rounded-lg p-5 sm:p-6 animate-in fade-in slide-in-from-bottom"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Header */}
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">{study.title}</h4>
              {study.role && <p className="text-gray-300 text-sm sm:text-base mb-2">Role: {study.role}</p>}
              {study.projectType && (
                <p className="text-gray-300 text-sm sm:text-base mb-3">Project Type: {study.projectType}</p>
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
                  View Repository
                </a>
              </Button>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="text-base font-bold text-purple-400 mb-2">Problem</h5>
                <p className="text-gray-300 leading-normal text-sm sm:text-base">{study.problem}</p>
              </div>
              <div>
                <h5 className="text-base font-bold text-blue-400 mb-2">Solution</h5>
                <p className="text-gray-300 leading-normal text-sm sm:text-base">{study.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-4">
              <h5 className="text-base font-bold text-white mb-2">Key Features</h5>
              <ul className="space-y-1.5">
                {study.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagrams */}
            {study.diagrams && (
              <div className="space-y-4">
                <div>
                  <h5 className="text-base font-bold text-white mb-3">System Architecture</h5>
                  <Diagram code={study.diagrams.architecture} />
                </div>
                <div>
                  <h5 className="text-base font-bold text-white mb-3">Database Schema (ERD)</h5>
                  <Diagram code={study.diagrams.erd} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
