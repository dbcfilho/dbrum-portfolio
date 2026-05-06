import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <div className="space-y-3 sm:space-y-5 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-xs sm:text-sm text-purple-400 font-medium tracking-wide uppercase">Olá, eu sou</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Douglas Brum
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
              Desenvolvedor Backend com foco em Cibersegurança
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-normal max-w-2xl">
              Sou um desenvolvedor backend focado na construção de APIs robustas e sistemas web usando Java com Spring Boot
              e Python com Django. Confortável em ambientes Linux, contêineres Docker e fundamentos de AWS.
              O que me diferencia é meu forte interesse em cibersegurança e design de aplicações seguras.
              Levo essa mentalidade para cada projeto que toco.
            </p>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple w-full sm:w-auto"
              >
                <Link href="#contact">Vamos trabalhar juntos</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent w-full sm:w-auto"
              >
                <Link href="#portfolio">Ver meus projetos</Link>
              </Button>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://github.com/dbcfilho"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition-all hover:glow-purple"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/dbcfilho/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/50 border border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/10 transition-all hover:glow-blue"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Lado Direito - Terminal de Código */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="glass-card rounded-lg overflow-hidden border border-purple-500/30 shadow-2xl">
              {/* Cabeçalho do Terminal */}
              <div className="bg-gray-900/80 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-purple-500/20">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 ml-2">developer-profile.ts</span>
              </div>

              {/* Conteúdo do Código */}
              <div className="p-3 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developerProfile</span> = {"{\n"}
                    {"  "}
                    <span className="text-cyan-400">name</span>:{" "}
                    <span className="text-green-400">"Douglas Brum"</span>,{"\n"}
                    {"  "}
                    <span className="text-cyan-400">role</span>:{" "}
                    <span className="text-green-400">"Desenvolvedor Backend"</span>,{"\n"}
                    {"  "}
                    <span className="text-cyan-400">location</span>:{" "}
                    <span className="text-green-400">"Rio de Janeiro, Brasil"</span>,{"\n"}
                    {"  "}
                    <span className="text-cyan-400">favoriteStack</span>: [{"\n"}
                    {"    "}
                    <span className="text-green-400">"Java + Spring Boot"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Python + Django"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"MySQL"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Docker"</span>
                    {"\n"}
                    {"  "}]{",\n"}
                    {"  "}
                    <span className="text-cyan-400">currentlyLearning</span>:{" "}
                    <span className="text-green-400">"AWS & Cibersegurança"</span>,{"\n"}
                    {"  "}
                    <span className="text-cyan-400">openTo</span>: [{"\n"}
                    {"    "}
                    <span className="text-green-400">"Vagas Backend"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Trabalho Remoto"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Projetos Freelance"</span>
                    {"\n"}
                    {"  "}]{",\n"}
                    {"};"}
                  </code>
                </pre>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="mt-3 sm:mt-5 space-y-2">
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Django", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS Fundamentals", "Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  Desenvolvimento seguro por natureza
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
