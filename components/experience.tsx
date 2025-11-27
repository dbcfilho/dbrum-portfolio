import { Briefcase } from "lucide-react"

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
    period: "2022 – Present",
    points: [
      "Teach practical classes in Linux, MySQL, and general computing to students of varying ages and skill levels.",
      "Develop engaging didactic materials and hands-on exercises that translate complex concepts into accessible learning experiences.",
      "Evaluate student progress and provide guidance for entry-level opportunities in the IT market.",
    ],
  },
  {
    company: "Olyntech",
    role: "Technical Support & Freelance Developer",
    period: "2020 – 2025",
    points: [
      "Perform hardware and software maintenance, diagnostics, and repairs for diverse client environments.",
      "Develop custom software solutions and small-scale systems tailored to specific client requirements.",
      "Work through the full development lifecycle from requirements analysis to delivery, focusing on scalable and maintainable solutions.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey combining technical support, education, and software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative animate-in fade-in slide-in-from-bottom ${index % 2 === 0 ? "md:text-right" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
                >
                  <div className="glass-card rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 relative">
                    {/* Timeline Dot - positioned relative to the card */}
                    <div
                      className="absolute left-[-2.5rem] md:left-auto md:right-auto top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-[oklch(0.12_0.05_250)] glow-purple md:transform md:-translate-x-1/2"
                      style={{
                        left: index % 2 === 0 ? "auto" : "-2.5rem",
                        right: index % 2 === 0 ? "-2.5rem" : "auto",
                      }}
                    />

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0">
                        <Briefcase className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                      </div>
                    </div>
                    <ul className={`space-y-2 text-gray-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed">
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
    </section>
  )
}
