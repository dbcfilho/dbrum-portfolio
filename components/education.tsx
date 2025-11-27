import { GraduationCap, Languages } from "lucide-react"

const education = [
  {
    degree: "Associate Degree in Systems Analysis and Development",
    institution: "UNIASSELVI",
    period: "Aug 2022 – Jul 2025",
    description:
      "Focused on software development, algorithms, database systems, and web technologies. Covers full-stack development, software engineering principles, and practical application building.",
  },
  {
    degree: "Technology Degree in Artificial Intelligence and Machine Learning",
    institution: "UniCesumar",
    period: "Sep 2024 – Jul 2026 (In Progress)",
    description:
      "Fundamentals of artificial intelligence, machine learning models, data-driven systems, and neural networks. Covers both theoretical foundations and practical implementation.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Academic foundation in software development and emerging technologies
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="glass-card rounded-lg p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-purple-400 font-medium mb-1 text-sm sm:text-base">{edu.institution}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{edu.period}</p>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="glass-card rounded-lg p-6 sm:p-8 animate-in fade-in slide-in-from-bottom delay-300">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2.5 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 shrink-0">
              <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Languages</h3>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 font-medium text-sm sm:text-base">Portuguese</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 border border-green-500/30 text-green-300">
                    Native
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 font-medium text-sm sm:text-base">English</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    Intermediate
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 font-medium text-sm sm:text-base">Spanish</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
                    Basic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
