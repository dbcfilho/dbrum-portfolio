import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Casa da Cultura",
    tagline: "Social Project Management System",
    description:
      "Web platform designed to help NGOs manage social assistance records efficiently. It tracks individuals and their interactions, automates WhatsApp messages for birthdays and special dates, and generates comprehensive CSV and PDF statistical reports. This project showcases full-stack development, database modeling, role-based access control, and containerization.",
    stack: ["Python", "Django 4+", "MySQL 8+", "Bootstrap 5", "Docker", "Docker Compose"],
    github: "https://github.com/dbcfilho/casa-da-cultura-v3",
  },
  {
    title: "Product Management CRUD",
    tagline: "Java & Spring Boot Application",
    description:
      "Robust CRUD application for managing products with a clean, intuitive web interface. Demonstrates backend architecture with Spring Boot, persistence with relational databases, and server-side rendering with Thymeleaf. Built with enterprise-grade patterns and best practices for maintainability.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "SQL", "REST APIs"],
    github: "https://github.com/dbcfilho/CRUD-Java",
  },
  {
    title: "User Registration Platform",
    tagline: "Full-Stack Node, React & MySQL",
    description:
      "Complete web application for user registration with full CRUD operations. Uses a modern three-tier architecture with a Node.js backend API, React frontend for dynamic UI, and MySQL database for data persistence. Highlights ability to integrate multiple technologies into a cohesive, working system.",
    stack: ["Node.js", "Express.js", "React", "MySQL", "REST APIs"],
    github: "https://github.com/dbcfilho/User-registration",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Highlighted Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Real-world applications solving practical problems with clean, maintainable code
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-lg p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
                <div className="flex-1 min-w-0">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-purple-400 font-medium text-sm sm:text-base">{project.tagline}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent w-full lg:w-auto"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/dbcfilho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
          >
            <ExternalLink className="w-4 h-4" />
            More projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
