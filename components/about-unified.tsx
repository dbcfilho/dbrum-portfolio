import {
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Award,
  Code2,
  Network,
  Briefcase,
  GraduationCap,
  Languages,
} from "lucide-react"

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

const certifications = [
  {
    icon: Shield,
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
    year: "2024",
  },
  {
    icon: Code2,
    title: "Software Engineer with Java",
    issuer: "Udemy",
    year: "2024",
  },
  {
    icon: Network,
    title: "Introduction to IoT",
    issuer: "Cisco",
    year: "2023",
  },
  {
    icon: Code2,
    title: "Computing Science with Python",
    issuer: "USP",
    year: "2023",
  },
  {
    icon: Shield,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023",
  },
  {
    icon: Shield,
    title: "Linux and SQL",
    issuer: "Google",
    year: "2023",
  },
  {
    icon: Network,
    title: "NDG Linux Unhatched Certificate",
    issuer: "Cisco",
    year: "2023",
  },
  {
    icon: Award,
    title: "Computer Technician",
    issuer: "Senac",
    year: "2018",
  },
]

const experiences = [
  {
    company: "A4PM",
    role: "Software Support Analyst",
    period: "2025 – Present",
    points: [
      "Support end users in configuring and effectively using business software across multiple departments.",
      "Investigate and troubleshoot technical issues, documenting incidents and collaborating with development teams to resolve bugs.",
      "Ensure system availability and smooth user experience, bridging the gap between technical and non-technical stakeholders.",
    ],
  },
  {
    company: "FUNDEC",
    role: "IT Instructor",
    period: "2022 – 2025",
    points: [
      "Teach practical classes in Linux, MySQL, and general computing to students of varying ages and skill levels.",
      "Develop engaging didactic materials and hands-on exercises that translate complex concepts into accessible learning experiences.",
      "Evaluate student progress and provide guidance for entry-level opportunities in the IT market.",
    ],
  },
  {
    company: "Dbrum Tech",
    role: "Technical Support & Freelance Developer",
    period: "2020 – Present",
    points: [
      "Perform hardware and software maintenance, diagnostics, and repairs for diverse client environments.",
      "Develop custom software solutions and small-scale systems tailored to specific client requirements.",
      "Work through the full development lifecycle from requirements analysis to delivery, focusing on scalable and maintainable solutions.",
    ],
  },
]

const education = [
  {
    degree: "Associate Degree in Systems Analysis and Development",
    institution: "UNIASSELVI",
    period: "Aug 2022 – Jul 2025",
    description:
      "Focused on software development, algorithms, database systems, and web technologies. Covers full-stack development, software engineering principles, and practical application building.",
  },
]

const languages = [
  {
    label: "Portuguese",
    level: "Native",
    badgeClass: "bg-green-500/10 border border-green-500/30 text-green-300",
  },
  {
    label: "English",
    level: "Intermediate",
    badgeClass: "bg-blue-500/10 border border-blue-500/30 text-blue-300",
  },
  {
    label: "Spanish",
    level: "Basic",
    badgeClass: "bg-yellow-500/10 border border-yellow-500/30 text-yellow-300",
  },
]

export default function AboutUnified() {
  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Text */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="glass-card rounded-lg p-5 sm:p-6 md:p-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              About
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-normal text-sm sm:text-base">
              <p>
                I am a backend developer focused on Java with Spring Boot and Python with Django, building secure, well
                structured and reliable web applications. I enjoy working close to the core of systems, designing
                architecture, databases and APIs, and deploying solutions in Linux environments using Docker.
              </p>
              <p>
                I have hands on experience with real world projects, especially platforms with social impact, where
                reliability, organization and scalability truly matter. I do not just write code that works, I build
                solutions designed to last.
              </p>
              <p>
                I also work as an IT instructor, teaching Linux, MySQL and core computing concepts. This experience has
                strengthened my communication skills, architectural thinking and ability to make clear technical
                decisions, which are essential for strong team collaboration.
              </p>
              <p>
                I enjoy writing technical articles and sharing knowledge, reflecting my commitment to continuous learning
                and best practices. If you are looking for a backend developer with a strong Linux foundation, a security
                conscious mindset and clean, well designed code, I would be glad to connect.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              Skills
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              A comprehensive toolkit for building secure, scalable backend systems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <div
                  key={group.title}
                  className="glass-card rounded-lg p-4 sm:p-5 hover:border-purple-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">{group.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{group.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-gray-800/50 border border-purple-500/20 text-gray-300 hover:border-purple-400 hover:bg-purple-500/10 transition-all"
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

        {/* Certifications */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              Certifications
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Continuous learning in cybersecurity and software engineering
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.title}
                  className="glass-card rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 group animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-2 mb-2.5">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors shrink-0">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-xs text-blue-400 font-medium">{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 leading-tight">{cert.title}</h4>
                  <p className="text-xs text-purple-300">{cert.issuer}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              Experience
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Professional journey combining support, education, and development
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:transform md:-translate-x-1/2" />

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative animate-in fade-in slide-in-from-bottom ${index % 2 === 0 ? "md:text-right" : ""}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
                  >
                    <div className="glass-card rounded-lg p-4 sm:p-5 hover:border-purple-500/50 transition-all duration-300 relative">
                      {/* Timeline Dot - Fixed positioning */}
                      <div
                        className="absolute w-4 h-4 bg-purple-500 rounded-full border-4 border-[oklch(0.12_0.05_250)] glow-purple"
                        style={{
                          top: "1.5rem",
                          left: index % 2 === 0 ? "auto" : "-2.5rem",
                          right: index % 2 === 0 ? "-2.5rem" : "auto",
                        }}
                      />

                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0">
                          <Briefcase className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <h4 className="text-base sm:text-lg font-bold text-white">{exp.role}</h4>
                          <p className="text-purple-400 font-medium text-sm">{exp.company}</p>
                          <p className="text-xs text-gray-400 mt-1">{exp.period}</p>
                        </div>
                      </div>
                      <ul className={`space-y-1.5 text-gray-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-xs sm:text-sm leading-normal">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10 sm:mt-14">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              Education
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Academic foundation in software development and emerging technologies
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="glass-card rounded-lg p-5 sm:p-7 hover:border-purple-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium mb-1 text-sm sm:text-base">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{edu.period}</p>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto glass-card rounded-lg p-5 sm:p-7 animate-in fade-in slide-in-from-bottom delay-300">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-2.5 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 shrink-0">
                <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Languages</h4>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  {languages.map((lang) => (
                    <div key={lang.label} className="flex items-center gap-2">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{lang.label}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${lang.badgeClass}`}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
