import { ExternalLink, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import CaseStudies from "@/components/case-studies"

const projects = [
  {
    title: "Corefarma — ERP para Farmácias",
    tagline: "Sistema Completo de Gestão Farmacêutica",
    description:
      "ERP completo desenvolvido para o segmento farmacêutico, cobrindo toda a operação da farmácia: PDV com emissão de cupons fiscais, gestão de estoque, geração de notas fiscais, controle de entregas, cadastro de clientes e funcionários e integração com SNGPC para notificação de medicamentos controlados. Arquitetura backend robusta com NestJS, autenticação segura, logging estruturado com Winston e documentação completa via Swagger. Além do desenvolvimento, defini todo o fluxo e arquitetura do sistema.",
    stack: ["TypeScript", "NestJS", "Node.js", "React", "PostgreSQL", "Prisma", "Supabase", "Nginx", "Swagger", "Winston"],
    liveUrl: "https://corefarma.com",
    appUrl: "https://app.corefarma.com",
  },
  {
    title: "Culture House – Plataforma de Gestão Social",
    tagline: "Sistema de Gestão para Projetos Sociais",
    description:
      "Plataforma web criada para ajudar ONGs a gerenciar registros de assistência social com eficiência. Rastreia indivíduos e suas interações, automatiza mensagens no WhatsApp para aniversários e datas especiais, e gera relatórios estatísticos completos em CSV e PDF. O projeto demonstra desenvolvimento full-stack, modelagem de banco de dados, controle de acesso por papéis e conteinerização.",
    stack: ["Python", "Django 4+", "MySQL 8+", "Bootstrap 5", "Docker", "Docker Compose"],
    github: "https://github.com/dbcfilho/casa-da-cultura-v3",
  },
  {
    title: "CRUD de Gerenciamento de Produtos",
    tagline: "Aplicação Java & Spring Boot",
    description:
      "Aplicação CRUD robusta para gerenciamento de produtos com interface web limpa e intuitiva. Demonstra arquitetura backend com Spring Boot, persistência com bancos de dados relacionais e renderização server-side com Thymeleaf. Construída com padrões enterprise e boas práticas de manutenibilidade.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "SQL", "REST APIs"],
    github: "https://github.com/dbcfilho/CRUD-Java",
  },
  {
    title: "Plataforma de Cadastro de Usuários",
    tagline: "Full-Stack Node, React & MySQL",
    description:
      "Aplicação web completa para cadastro de usuários com operações CRUD completas. Utiliza arquitetura moderna de três camadas com API backend em Node.js, frontend React para interface dinâmica e banco de dados MySQL para persistência. Demonstra a capacidade de integrar múltiplas tecnologias em um sistema coeso e funcional.",
    stack: ["Node.js", "Express.js", "React", "MySQL", "REST APIs"],
    github: "https://github.com/dbcfilho/User-registration",
  },
]

export default function Projects() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
            Portfólio
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Aplicações reais que resolvem problemas práticos com código limpo e de fácil manutenção
          </p>
        </div>

        <div className="mb-10 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 tracking-wide">Projetos em Destaque</h3>
          <div className="space-y-5 sm:space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-lg p-5 sm:p-6 hover:border-purple-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-5">
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">{project.title}</h4>
                      <p className="text-purple-400 font-medium text-sm">{project.tagline}</p>
                    </div>
                    <p className="text-gray-300 leading-normal mb-4 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    {"liveUrl" in project && project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full lg:w-auto"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Globe className="w-4 h-4" />
                          Ver site
                        </a>
                      </Button>
                    )}
                    {"appUrl" in project && project.appUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent w-full lg:w-auto"
                      >
                        <a
                          href={project.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Acessar sistema
                        </a>
                      </Button>
                    )}
                    {"github" in project && project.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent w-full lg:w-auto"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Ver no GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CaseStudies />

        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://github.com/dbcfilho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
