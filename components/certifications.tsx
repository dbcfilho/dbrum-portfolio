import { Shield, Award, Code2, Network } from "lucide-react"

const certifications = [
  {
    icon: Shield,
    title: "Google Cybersecurity Professional Certificate V2",
    issuer: "Coursera / Google",
    year: "2024",
    description:
      "Comprehensive cybersecurity training covering threat detection, security frameworks, and incident response strategies.",
  },
  {
    icon: Shield,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023",
    description:
      "Foundational cybersecurity concepts including CIA triad, threat landscapes, and basic security principles.",
  },
  {
    icon: Network,
    title: "Introduction to IoT",
    issuer: "Cisco",
    year: "2023",
    description:
      "Internet of Things fundamentals, covering connected devices, security challenges, and IoT architectures.",
  },
  {
    icon: Code2,
    title: "Python Programming",
    issuer: "USP",
    year: "2023",
    description:
      "Comprehensive Python training for software development, data structures, and practical application building.",
  },
  {
    icon: Code2,
    title: "Java Complete Course",
    issuer: "Udemy",
    year: "2024",
    description:
      "In-depth Java programming covering OOP principles, Spring Framework, and enterprise application development.",
  },
  {
    icon: Shield,
    title: "Automate Cybersecurity Tasks with Python",
    issuer: "Coursera / Google",
    year: "2024",
    description:
      "Hands-on training in using Python for security automation, log analysis, and threat detection scripting.",
  },
  {
    icon: Award,
    title: "Computer Technician",
    issuer: "SENAC",
    year: "2022",
    description: "Hardware and software maintenance, networking fundamentals, and technical support best practices.",
  },
  {
    icon: Code2,
    title: "Algorithms and Programming",
    issuer: "FUNDEC",
    year: "2022",
    description: "Core programming concepts, algorithm design, data structures, and computational thinking.",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications & Badges
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Continuous learning and professional development in cybersecurity and software engineering
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="glass-card rounded-lg p-5 sm:p-6 hover:border-purple-500/50 transition-all duration-300 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 group-hover:bg-purple-500/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-blue-400 font-medium">{cert.year}</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-purple-300 mb-2 sm:mb-3">{cert.issuer}</p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
