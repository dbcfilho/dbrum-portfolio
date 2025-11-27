import { Code, Database, Server, Globe } from "lucide-react"

const skillGroups = [
  {
    icon: Code,
    title: "Backend & Languages",
    description: "Core programming languages for building robust server-side applications.",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Go", "C/C++"],
  },
  {
    icon: Server,
    title: "Frameworks & Ecosystem",
    description: "Modern frameworks and tools for efficient backend development.",
    skills: ["Spring Boot", "Django", "Node.js", "React"],
  },
  {
    icon: Database,
    title: "Databases",
    description: "SQL and NoSQL databases for data persistence and management.",
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    icon: Globe,
    title: "Infrastructure & DevOps",
    description: "Containerization, cloud services, and API development.",
    skills: ["Docker", "AWS (foundations)", "Linux", "RESTful APIs", "HTML", "CSS", "Bootstrap"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building secure, scalable backend systems
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <div
                key={group.title}
                className="glass-card rounded-lg p-5 sm:p-6 hover:border-purple-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{group.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{group.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full bg-gray-800/50 border border-purple-500/20 text-gray-300 hover:border-purple-400 hover:bg-purple-500/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
