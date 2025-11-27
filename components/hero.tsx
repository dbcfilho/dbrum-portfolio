import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-xs sm:text-sm text-purple-400 font-medium tracking-wide uppercase">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Douglas Brum
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
              Backend & Cybersecurity-Oriented Developer
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              I'm a backend developer who focuses on building robust APIs and web systems using Java with Spring Boot
              and Python with Django. Comfortable working with Linux environments, Docker containers, and AWS
              fundamentals. What sets me apart is my strong interest in cybersecurity and secure application design—I
              bring that mindset to every project I touch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-purple w-full sm:w-auto"
              >
                <Link href="#contact">Let's Work Together</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent w-full sm:w-auto"
              >
                <Link href="#projects">View My Projects</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-4">
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

          {/* Right Side - Code Terminal */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="glass-card rounded-lg overflow-hidden border border-purple-500/30 shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-gray-900/80 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-purple-500/20">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 ml-2">developer-profile.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developerProfile</span> = {"{\n"}
                    {"  "}
                    <span className="text-cyan-400">name</span>: <span className="text-green-400">"Douglas Brum"</span>,
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-400">role</span>:{" "}
                    <span className="text-green-400">"Backend Developer"</span>,{"\n"}
                    {"  "}
                    <span className="text-cyan-400">location</span>:{" "}
                    <span className="text-green-400">"Rio de Janeiro, Brazil"</span>,{"\n"}
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
                    <span className="text-green-400">"AWS & Cybersecurity"</span>,{"\n"}
                    {"  "}
                    <span className="text-cyan-400">openTo</span>: [{"\n"}
                    {"    "}
                    <span className="text-green-400">"Backend Roles"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Remote Work"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Freelance Projects"</span>
                    {"\n"}
                    {"  "}]{",\n"}
                    {"};"}
                  </code>
                </pre>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Django", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS Fundamentals", "Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  🔒 Security-minded development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
