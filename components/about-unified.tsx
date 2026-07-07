import {
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Code2,
  Network,
  Briefcase,
  GraduationCap,
  Languages,
} from "lucide-react"

const skillGroups = [
  {
    icon: Code,
    title: "Backend & Linguagens",
    description: "Linguagens de programação para aplicações server-side robustas.",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Go", "C/C++"],
  },
  {
    icon: Server,
    title: "Frameworks & Ecossistema",
    description: "Frameworks e ferramentas modernas para desenvolvimento backend eficiente.",
    skills: ["Spring Boot", "Django", "Node.js", "React"],
  },
  {
    icon: Database,
    title: "Bancos de Dados",
    description: "Bancos de dados SQL e NoSQL para persistência e gerenciamento de dados.",
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    icon: Globe,
    title: "Infraestrutura & DevOps",
    description: "Conteinerização, serviços em nuvem e desenvolvimento de APIs.",
    skills: ["Docker", "AWS (fundamentos)", "Linux", "RESTful APIs", "HTML", "CSS", "Bootstrap"],
  },
]

const certifications = [
  {
    icon: Globe,
    title: "Rest API (Intermediate)",
    issuer: "HackerRank",
    year: "2026",
  },
  {
    icon: Database,
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    year: "2026",
  },
  {
    icon: Code2,
    title: "Software Engineer",
    issuer: "HackerRank",
    year: "2026",
  },
  {
    icon: Shield,
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
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
    icon: Network,
    title: "NDG Linux Unhatched Certificate",
    issuer: "Cisco",
    year: "2023",
  },
]

const experiences = [
  {
    company: "A4PM",
    role: "Analista de Suporte de Software",
    period: "2025 – Presente",
    points: [
      "Suportar usuários finais na configuração e uso eficaz de softwares de gestão em múltiplos departamentos.",
      "Investigar e solucionar problemas técnicos, documentar incidentes e colaborar com equipes de desenvolvimento para resolução de bugs.",
      "Garantir disponibilidade dos sistemas e boa experiência do usuário, atuando como ponte entre stakeholders técnicos e não-técnicos.",
    ],
  },
  {
    company: "FUNDEC",
    role: "Instrutor de TI",
    period: "2022 – 2025",
    points: [
      "Ministrar aulas práticas de Linux, MySQL e informática geral para alunos de diferentes idades e níveis de conhecimento.",
      "Desenvolver materiais didáticos e exercícios práticos que traduzem conceitos complexos em experiências de aprendizado acessíveis.",
      "Avaliar o progresso dos alunos e orientá-los para oportunidades de entrada no mercado de TI.",
    ],
  },
  {
    company: "Dbrum Tech",
    role: "Suporte Técnico & Desenvolvedor Freelance",
    period: "2020 – Presente",
    points: [
      "Realizar manutenção, diagnóstico e reparo de hardware e software em diferentes ambientes de clientes.",
      "Desenvolver soluções de software personalizadas e sistemas de pequeno porte adequados às necessidades específicas de cada cliente.",
      "Atuar em todo o ciclo de desenvolvimento, desde a análise de requisitos até a entrega, com foco em soluções escaláveis e de fácil manutenção.",
    ],
  },
]

const education = [
  {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UNIASSELVI",
    period: "Ago 2022 – Jul 2025",
    description:
      "Foco em desenvolvimento de software, algoritmos, sistemas de banco de dados e tecnologias web. Abrange desenvolvimento full-stack, princípios de engenharia de software e construção prática de aplicações.",
  },
]

const languages = [
  {
    label: "Português",
    level: "Nativo",
    badgeClass: "bg-green-500/10 border border-green-500/30 text-green-300",
  },
  {
    label: "Inglês",
    level: "Intermediário",
    badgeClass: "bg-blue-500/10 border border-blue-500/30 text-blue-300",
  },
  {
    label: "Espanhol",
    level: "Básico",
    badgeClass: "bg-yellow-500/10 border border-yellow-500/30 text-yellow-300",
  },
]

export default function AboutUnified() {
  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto Sobre */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="glass-card rounded-lg p-5 sm:p-6 md:p-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              Sobre
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-normal text-sm sm:text-base">
              <p>
                Sou um desenvolvedor backend com foco em Java com Spring Boot e Python com Django, construindo aplicações
                web seguras, bem estruturadas e confiáveis. Gosto de trabalhar próximo ao núcleo dos sistemas, projetando
                arquiteturas, bancos de dados e APIs, e entregando soluções em ambientes Linux com Docker.
              </p>
              <p>
                Tenho experiência prática com projetos reais, especialmente plataformas de impacto social, onde
                confiabilidade, organização e escalabilidade fazem diferença de verdade. Não me limito a escrever código
                que funciona — construo soluções pensadas para durar.
              </p>
              <p>
                Também atuo como instrutor de TI, ensinando Linux, MySQL e conceitos fundamentais de computação. Essa
                experiência fortaleceu minhas habilidades de comunicação, raciocínio arquitetural e capacidade de tomar
                decisões técnicas claras — essenciais para uma boa colaboração em equipe.
              </p>
              <p>
                Gosto de escrever artigos técnicos e compartilhar conhecimento, o que reflete meu compromisso com o
                aprendizado contínuo e as boas práticas. Se você está buscando um desenvolvedor backend com sólida base
                em Linux, mentalidade voltada à segurança e código limpo e bem projetado, ficaria feliz em conversar.
              </p>
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-wide">
              Habilidades
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Um conjunto completo de ferramentas para sistemas backend seguros e escaláveis
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

        {/* Certificações */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-wide">
              Certificações
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Aprendizado contínuo em cibersegurança e engenharia de software
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

        {/* Experiência */}
        <div>
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-wide">
              Experiência
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Trajetória profissional combinando suporte, educação e desenvolvimento
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Linha do Tempo */}
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

        {/* Educação */}
        <div className="mt-10 sm:mt-14">
          <div className="text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-wide">
              Educação
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Base acadêmica em desenvolvimento de software e tecnologias emergentes
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
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Idiomas</h4>
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
