/**
 * Dicionários de tradução (PT nativo, EN, ES).
 * A forma do objeto `pt` define o tipo `Dictionary`; `en` e `es` devem segui-la.
 * Nomes próprios, tecnologias, empresas, períodos e URLs não são traduzidos.
 */

const pt = {
  nav: {
    home: "Início",
    about: "Sobre",
    portfolio: "Portfólio",
    content: "Publicações",
    contact: "Contato",
    downloadCv: "Baixar CV",
    downloadCvLong: "Baixar Currículo",
  },
  sectionLabels: {
    about: "Sobre",
    skills: "Habilidades",
    certifications: "Certificações",
    experience: "Experiência",
    education: "Educação",
    projects: "Portfólio",
    featured: "Projetos em destaque",
    caseStudies: "Estudos de caso",
    otherProjects: "Outros projetos",
    content: "Publicações",
    contact: "Contato",
  },
  langSwitcher: {
    label: "Idioma",
  },
  hero: {
    badge: "Disponível para novas oportunidades",
    role: "Desenvolvedor Backend",
    headline: "Backend seguro, do banco de dados à API.",
    intro:
      'Construo <strong>APIs robustas e sistemas web</strong> com Java/Spring Boot e Node/NestJS, em ambientes Linux e Docker. O diferencial: uma mentalidade de <strong>cibersegurança</strong> aplicada a cada decisão de arquitetura, para entregar software que dura e em que se pode confiar.',
    ctaPrimary: "Vamos trabalhar juntos",
    ctaSecondary: "Ver meus projetos",
    ctaCv: "Baixar CV",
    stats: [
      { value: "5+", label: "anos em TI & Dev" },
      { value: "8", label: "certificações" },
      { value: "2", label: "produtos em produção" },
    ],
    terminal: {
      fileLabel: "backend.ts",
      lines: [
        { key: "stack", value: "Java + Spring Boot" },
        { key: "focus", value: "multi-tenant" },
        { key: "domain", value: "fiscal · farmacêutico" },
        { key: "security", value: "by design" },
      ],
      result: "deploy --confidence",
    },
  },
  about: {
    heading: "Sobre",
    paragraphs: [
      "Sou um desenvolvedor backend com foco em Java com Spring Boot e Python com Django, construindo aplicações web seguras, bem estruturadas e confiáveis. Gosto de trabalhar próximo ao núcleo dos sistemas, projetando arquiteturas, bancos de dados e APIs, e entregando soluções em ambientes Linux com Docker.",
      "Hoje conduzo a parte técnica da Coreon Systems, onde desenvolvemos dois produtos: o Corefarma, um ERP para farmácias em produção, com PDV, emissão fiscal e integração com o SNGPC; e o Core Food, uma plataforma white-label de pedidos para restaurantes. Duas stacks distintas, escolhidas por domínio e não por preferência — e saber justificar essa escolha me parece mais importante do que dominar uma linguagem só.",
      "Tenho experiência prática com projetos reais, especialmente plataformas de impacto social, onde confiabilidade, organização e escalabilidade fazem diferença de verdade. Não me limito a escrever código que funciona — construo soluções pensadas para durar.",
      "Também atuo como instrutor de TI, ensinando Linux, MySQL e conceitos fundamentais de computação. Essa experiência fortaleceu minhas habilidades de comunicação, raciocínio arquitetural e capacidade de tomar decisões técnicas claras — essenciais para uma boa colaboração em equipe.",
      "Gosto de escrever artigos técnicos e compartilhar conhecimento, o que reflete meu compromisso com o aprendizado contínuo e as boas práticas. Se você está buscando um desenvolvedor backend com sólida base em Linux, mentalidade voltada à segurança e código limpo e bem projetado, ficaria feliz em conversar.",
    ],
    skillsHeading: "Habilidades",
    skillsSubtitle: "Um conjunto completo de ferramentas para sistemas backend seguros e escaláveis",
    skillGroups: {
      backend: {
        title: "Backend & Linguagens",
        description: "Linguagens de programação para aplicações server-side robustas.",
      },
      frameworks: {
        title: "Frameworks & Ecossistema",
        description: "Frameworks e ferramentas modernas para desenvolvimento backend eficiente.",
      },
      databases: {
        title: "Bancos de Dados",
        description: "Bancos de dados SQL e NoSQL para persistência e gerenciamento de dados.",
      },
      infra: {
        title: "Infraestrutura & DevOps",
        description: "Conteinerização, serviços em nuvem e desenvolvimento de APIs.",
      },
    },
    certsHeading: "Certificações",
    certsSubtitle: "Aprendizado contínuo em cibersegurança e engenharia de software",
    experienceHeading: "Experiência",
    experienceSubtitle: "Trajetória profissional combinando suporte, educação e desenvolvimento",
    experiences: {
      coreon: {
        role: "Desenvolvedor Backend",
        points: [
          "Condução técnica de uma empresa de software com dois produtos verticais: Corefarma (ERP para farmácias) e Core Food (plataforma para restaurantes).",
          "Arquitetura e desenvolvimento do backend de ambos os produtos — NestJS e PostgreSQL no Corefarma, Java e Spring Boot no Core Food.",
          "Corefarma em produção, cobrindo PDV com emissão de cupom fiscal, controle de estoque, notas fiscais, entregas e integração com o SNGPC para medicamentos controlados.",
          "Definição de contratos de API em conjunto com o time de frontend e condução técnica de proposta comercial para cliente piloto.",
        ],
      },
      a4pm: {
        role: "Analista de Suporte de Software",
        points: [
          "Suportar usuários finais na configuração e uso eficaz de softwares de gestão em múltiplos departamentos.",
          "Investigar e solucionar problemas técnicos, documentar incidentes e colaborar com equipes de desenvolvimento para resolução de bugs.",
          "Garantir disponibilidade dos sistemas e boa experiência do usuário, atuando como ponte entre stakeholders técnicos e não-técnicos.",
        ],
      },
      fundec: {
        role: "Instrutor de TI",
        points: [
          "Ministrar aulas práticas de Linux, MySQL e informática geral para alunos de diferentes idades e níveis de conhecimento.",
          "Desenvolver materiais didáticos e exercícios práticos que traduzem conceitos complexos em experiências de aprendizado acessíveis.",
          "Avaliar o progresso dos alunos e orientá-los para oportunidades de entrada no mercado de TI.",
        ],
      },
      dbrum: {
        role: "Suporte Técnico & Desenvolvedor Freelance",
        points: [
          "Realizar manutenção, diagnóstico e reparo de hardware e software em diferentes ambientes de clientes.",
          "Desenvolver soluções de software personalizadas e sistemas de pequeno porte adequados às necessidades específicas de cada cliente.",
          "Atuar em todo o ciclo de desenvolvimento, desde a análise de requisitos até a entrega, com foco em soluções escaláveis e de fácil manutenção.",
        ],
      },
    },
    present: "Presente",
    educationHeading: "Educação",
    educationSubtitle: "Base acadêmica em desenvolvimento de software e tecnologias emergentes",
    education: {
      uniasselvi: {
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        description:
          "Foco em desenvolvimento de software, algoritmos, sistemas de banco de dados e tecnologias web. Abrange desenvolvimento full-stack, princípios de engenharia de software e construção prática de aplicações.",
      },
    },
    languagesTitle: "Idiomas",
    languages: [
      { label: "Português", level: "Nativo" },
      { label: "Inglês", level: "Intermediário" },
      { label: "Espanhol", level: "Básico" },
    ],
  },
  projects: {
    heading: "Portfólio",
    subtitle: "Aplicações reais que resolvem problemas práticos com código limpo e de fácil manutenção",
    featuredTitle: "Projetos em Destaque",
    featuredBadge: "Projeto em destaque",
    viewSite: "Ver site",
    accessSystem: "Acessar sistema",
    viewGithub: "Ver no GitHub",
    moreProjects: "Mais projetos no GitHub",
    otherProjectsTitle: "Outros projetos",
    coreonProduct: "Produto Coreon Systems",
    inDevelopment: "Em desenvolvimento",
    items: {
      corefarma: {
        title: "Corefarma — ERP para Farmácias",
        tagline: "Sistema Completo de Gestão Farmacêutica",
        description:
          "ERP completo desenvolvido para o segmento farmacêutico, cobrindo toda a operação da farmácia: PDV com emissão de cupons fiscais, gestão de estoque, geração de notas fiscais, controle de entregas, cadastro de clientes e funcionários e integração com SNGPC para notificação de medicamentos controlados. Arquitetura backend robusta com NestJS, autenticação segura, logging estruturado com Winston e documentação completa via Swagger. Além do desenvolvimento, defini todo o fluxo e arquitetura do sistema.",
      },
      corefood: {
        title: "Core Food — Plataforma para Restaurantes",
        tagline: "Sistema de Pedidos White-label",
        description:
          "Plataforma de pedidos própria para restaurantes, criada como alternativa aos marketplaces de delivery: o restaurante opera sob a própria marca e mantém a base de clientes, em vez de pagar comissão por pedido. Backend em Java com Spring Boot, integrado a um aplicativo mobile já existente por meio de um contrato de API definido junto ao time de frontend. Responsável pela arquitetura multi-tenant, autenticação, catálogo e fluxo de pedidos.",
      },
      culturehouse: {
        title: "Culture House – Plataforma de Gestão Social",
        tagline: "Sistema de Gestão para Projetos Sociais",
        description:
          "Plataforma web criada para ajudar ONGs a gerenciar registros de assistência social com eficiência. Rastreia indivíduos e suas interações, automatiza mensagens no WhatsApp para aniversários e datas especiais, e gera relatórios estatísticos completos em CSV e PDF. O projeto demonstra desenvolvimento full-stack, modelagem de banco de dados, controle de acesso por papéis e conteinerização.",
      },
      crudjava: {
        title: "CRUD de Gerenciamento de Produtos",
        tagline: "Aplicação Java & Spring Boot",
        description:
          "Aplicação CRUD robusta para gerenciamento de produtos com interface web limpa e intuitiva. Demonstra arquitetura backend com Spring Boot, persistência com bancos de dados relacionais e renderização server-side com Thymeleaf. Construída com padrões enterprise e boas práticas de manutenibilidade.",
      },
      userreg: {
        title: "Plataforma de Cadastro de Usuários",
        tagline: "Full-Stack Node, React & MySQL",
        description:
          "Aplicação web completa para cadastro de usuários com operações CRUD completas. Utiliza arquitetura moderna de três camadas com API backend em Node.js, frontend React para interface dinâmica e banco de dados MySQL para persistência. Demonstra a capacidade de integrar múltiplas tecnologias em um sistema coeso e funcional.",
      },
    },
  },
  caseStudies: {
    heading: "Estudos de Caso",
    subtitle: "Análises aprofundadas de projetos reais e soluções técnicas",
    roleLabel: "Função",
    projectTypeLabel: "Tipo de Projeto",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    featuresLabel: "Principais Funcionalidades",
    viewRepo: "Ver Repositório",
    showDiagrams: "Ver diagramas",
    hideDiagrams: "Ocultar diagramas",
    architectureLabel: "Arquitetura do Sistema",
    erdLabel: "Esquema do Banco de Dados (ERD)",
    loadingDiagram: "Carregando diagrama…",
    diagramError: "Não foi possível renderizar o diagrama.",
    items: {
      corefood: {
        title: "Core Food — Plataforma para Restaurantes",
        role: "Desenvolvedor Backend",
        projectType: "Plataforma SaaS white-label para o setor de alimentação",
        problem:
          "Restaurantes que vendem por marketplaces de delivery pagam comissões que consomem uma fatia relevante do faturamento e, mais grave, não ficam com o relacionamento nem com os dados dos próprios clientes — a base pertence ao marketplace. Um canal de vendas próprio resolveria o problema, mas construir um aplicativo do zero é inviável para um restaurante individual.",
        solution:
          "Uma plataforma white-label na qual um único backend atende múltiplos restaurantes, cada um com marca, cardápio e base de clientes próprios. O restaurante opera como se o aplicativo fosse dele; a tecnologia pertence à Coreon.\n\nO backend foi construído em Java com Spring Boot, com PostgreSQL e ambiente containerizado em Docker. O aplicativo mobile já existia com dados mockados, então o desenvolvimento partiu de um contrato de API previamente acordado — o backend precisou se encaixar no que já estava construído, sem quebrar o que o time de frontend havia entregue.\n\nA decisão central de arquitetura foi o modelo de multi-tenancy. Avaliei banco por tenant (isolamento máximo, migrações cada vez mais caras conforme a base de clientes cresce), schema por tenant (meio-termo aparente que na prática herda a complexidade dos dois) e banco compartilhado com Row-Level Security (barato de escalar, exige rigor absoluto nas políticas de acesso). A escolha foi um banco compartilhado com Row-Level Security do PostgreSQL, porque escala sem o custo operacional de manter um banco ou um schema por tenant. O isolamento é reforçado em duas camadas: a aplicação resolve o tenant a partir da requisição (header, subdomínio ou um valor padrão), e o PostgreSQL aplica RLS nas tabelas sensíveis — hoje 27 das 31 tabelas carregam tenant_id, das quais 30 têm FORCE ROW LEVEL SECURITY ativado, barrando até consultas malformadas vindas da própria aplicação. Já o white-label não depende de lógica em tempo de execução no aplicativo: cada marca recebe um build próprio do app mobile, com tema, logo e conteúdo definidos na compilação.",
        features: [
          "Autenticação com Argon2id e JWT próprio, com rotação de refresh token e revogação de toda a família em caso de reuso detectado",
          "Isolamento multi-tenant reforçado por Row-Level Security no PostgreSQL, com tenant resolvido por header/subdomínio",
          "White-label por build do aplicativo mobile — tema, logo e conteúdo próprios por marca",
          "Catálogo com variantes de produto, grupos de adicionais e promoções",
          "Fluxo de pedidos com validação de carrinho, idempotência, código sequencial por tenant e máquina de estado para transições",
          "Motor de frete configurável com quatro estratégias (fixo, frete grátis a partir de valor, por CEP, por distância)",
          "Pagamento via PIX com webhook validado por assinatura e credenciais cifradas por tenant",
          "Padrão outbox dentro do próprio PostgreSQL para confiabilidade, sem dependência de fila externa",
        ],
      },
      bi: {
        title: "Plataforma Inteligente de Diagnóstico de Lacunas de Aprendizagem",
        role: "Desenvolvedor Full Stack & Arquiteto de BI",
        projectType: "Sistema Web de Business Intelligence (Projeto de Conclusão de Curso)",
        problem:
          "Escolas públicas no Brasil frequentemente enfrentam dados fragmentados, ausência de dashboards e visibilidade limitada sobre as lacunas de aprendizagem dos alunos. Profissionais da educação geralmente dependem de planilhas ou processos manuais, o que dificulta identificar alunos em risco, tendências em disciplinas ou séries específicas, turmas com déficits estruturais de desempenho e padrões geográficos de dificuldades educacionais. Era necessária uma solução de BI centralizada para apoiar decisões baseadas em dados.",
        solution:
          "Projetei e implementei uma plataforma completa de BI com API Django REST para acesso estruturado e seguro aos dados, frontend Vue.js + Vite para interface responsiva e rápida, dashboards interativos com Plotly.js, visualizações geoespaciais com Leaflet, autenticação JWT para acesso protegido e um gerador de dados sintéticos para desenvolvimento e demos. O sistema permite que professores, coordenadores e administradores visualizem tendências, comparem desempenhos entre turmas ou escolas e detectem lacunas de aprendizagem precocemente.",
        features: [
          "Autenticação baseada em JWT com mecanismo de refresh de token",
          "Operações CRUD completas para Escolas, Turmas, Alunos e Professores",
          "Dashboards interativos com Plotly.js para análise de desempenho",
          "Análise geoespacial com Leaflet e tiles reais de mapa",
          "API REST construída com Django + DRF para acesso estruturado aos dados",
          "Insights de desempenho via visualizações Plotly.js",
          "Gerador de dataset sintético para cenários de teste",
          "Frontend responsivo e rápido com Vue 3 + Vite",
          "Alertas antecipados para alunos em risco",
          "Análise de padrões demográficos e geográficos",
        ],
      },
      culturehouse: {
        title: "Culture House — Plataforma de Gestão Social",
        role: "Desenvolvedor Full Stack",
        projectType: "Sistema de Gestão para ONG Social",
        problem:
          "ONGs que gerenciam programas de assistência social precisam acompanhar os indivíduos atendidos, automatizar comunicações e gerar relatórios completos, mas carecem de soluções técnicas acessíveis e escaláveis.",
        solution:
          "Desenvolvi uma plataforma web full-stack usando Python/Django com MySQL para persistência de dados, Docker para conteinerização e integração com a API do WhatsApp para envio automático de mensagens de aniversário. Implementei controle de acesso por papéis, geração de relatórios em CSV/PDF e uma interface responsiva com Bootstrap 5.",
        features: [
          "Acompanhamento individual e gestão de casos com perfis completos",
          "Envio automatizado de mensagens no WhatsApp para aniversários e eventos especiais",
          "Geração de relatórios estatísticos nos formatos CSV e PDF",
          "Controle de acesso por papéis para administradores e funcionários",
          "Deploy com Docker Compose para configuração fácil e escalabilidade",
        ],
      },
    },
  },
  content: {
    heading: "Publicações",
    subtitle: "Artigos técnicos e recomendações da comunidade",
    articlesHeading: "Artigos no Medium",
    readMedium: "Ler no Medium",
    recsHeading: "Recomendações do LinkedIn",
    viewLinkedin: "Ver no LinkedIn",
  },
  contact: {
    heading: "Contato",
    subtitle: "Vamos construir algo incrível juntos",
    cardTitle: "Vamos Trabalhar Juntos",
    cardP1:
      "Estou buscando ativamente vagas de desenvolvedor backend em nível júnior a pleno, projetos freelance e oportunidades remotas. Se você está construindo sistemas seguros e escaláveis e precisa de alguém que alia profundidade técnica a uma mentalidade voltada à segurança, adoraria ouvir sobre isso.",
    cardP2:
      "Seja uma vaga CLT, contrato ou colaboração em um projeto interessante, estou aberto a discutir como posso contribuir com o seu time.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    locationLabel: "Localização",
    locationValue: "Rio de Janeiro, Brasil",
    remoteNote: "Aberto a trabalho remoto",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "seu.email@exemplo.com",
      company: "Empresa (Opcional)",
      companyPlaceholder: "Sua empresa",
      subject: "Assunto",
      subjectPlaceholder: "Sobre o que é?",
      message: "Mensagem",
      messagePlaceholder: "Fale sobre seu projeto ou oportunidade...",
      submit: "Enviar Mensagem",
      submitting: "Enviando...",
      successTitle: "Mensagem enviada com sucesso!",
      successDesc: "Entrarei em contato o mais breve possível.",
      errorTitle: "Falha ao enviar mensagem",
      errorDesc: "Tente novamente ou entre em contato diretamente pelo e-mail.",
    },
  },
  footer: {
    tagline:
      "Desenvolvedor backend com foco em cibersegurança. Construindo sistemas seguros, escaláveis e feitos para durar.",
    navHeading: "Navegação",
    connectHeading: "Conecte-se",
    rights: "Desenvolvedor Backend & Cibersegurança",
  },
}

export type Dictionary = typeof pt

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    content: "Writing",
    contact: "Contact",
    downloadCv: "Download CV",
    downloadCvLong: "Download Résumé",
  },
  sectionLabels: {
    about: "About",
    skills: "Skills",
    certifications: "Certifications",
    experience: "Experience",
    education: "Education",
    projects: "Portfolio",
    featured: "Featured projects",
    caseStudies: "Case studies",
    otherProjects: "Other projects",
    content: "Writing",
    contact: "Contact",
  },
  langSwitcher: {
    label: "Language",
  },
  hero: {
    badge: "Available for new opportunities",
    role: "Backend Developer",
    headline: "Secure backend, from the database to the API.",
    intro:
      'I build <strong>robust APIs and web systems</strong> with Java/Spring Boot and Node/NestJS, on Linux and Docker environments. The difference: a <strong>cybersecurity</strong> mindset applied to every architectural decision, to deliver software that lasts and that you can trust.',
    ctaPrimary: "Let's work together",
    ctaSecondary: "See my projects",
    ctaCv: "Download CV",
    stats: [
      { value: "5+", label: "years in IT & Dev" },
      { value: "8", label: "certifications" },
      { value: "2", label: "products in production" },
    ],
    terminal: {
      fileLabel: "backend.ts",
      lines: [
        { key: "stack", value: "Java + Spring Boot" },
        { key: "focus", value: "multi-tenant" },
        { key: "domain", value: "billing · pharma" },
        { key: "security", value: "by design" },
      ],
      result: "deploy --confidence",
    },
  },
  about: {
    heading: "About",
    paragraphs: [
      "I'm a backend developer focused on Java with Spring Boot and Python with Django, building secure, well-structured and reliable web applications. I enjoy working close to the core of systems, designing architectures, databases and APIs, and delivering solutions on Linux environments with Docker.",
      "I currently lead the technical side of Coreon Systems, where we build two products: Corefarma, a pharmacy ERP running in production with point-of-sale, fiscal document issuing and SNGPC integration; and Core Food, a white-label ordering platform for restaurants. Two distinct stacks, chosen by domain rather than preference — and being able to justify that choice matters more to me than mastering a single language.",
      "I have hands-on experience with real projects, especially social-impact platforms, where reliability, organization and scalability truly make a difference. I don't just write code that works — I build solutions meant to last.",
      "I also work as an IT instructor, teaching Linux, MySQL and core computing concepts. That experience strengthened my communication skills, architectural reasoning and ability to make clear technical decisions — essential for good teamwork.",
      "I like writing technical articles and sharing knowledge, which reflects my commitment to continuous learning and best practices. If you're looking for a backend developer with a solid Linux foundation, a security-oriented mindset and clean, well-designed code, I'd be glad to talk.",
    ],
    skillsHeading: "Skills",
    skillsSubtitle: "A complete toolkit for secure and scalable backend systems",
    skillGroups: {
      backend: {
        title: "Backend & Languages",
        description: "Programming languages for robust server-side applications.",
      },
      frameworks: {
        title: "Frameworks & Ecosystem",
        description: "Modern frameworks and tools for efficient backend development.",
      },
      databases: {
        title: "Databases",
        description: "SQL and NoSQL databases for data persistence and management.",
      },
      infra: {
        title: "Infrastructure & DevOps",
        description: "Containerization, cloud services and API development.",
      },
    },
    certsHeading: "Certifications",
    certsSubtitle: "Continuous learning in cybersecurity and software engineering",
    experienceHeading: "Experience",
    experienceSubtitle: "A career combining support, education and development",
    experiences: {
      coreon: {
        role: "Backend Developer",
        points: [
          "Technical lead of a software company with two vertical products: Corefarma (pharmacy ERP) and Core Food (restaurant platform).",
          "Backend architecture and development for both products — NestJS and PostgreSQL on Corefarma, Java and Spring Boot on Core Food.",
          "Corefarma running in production, covering point-of-sale with fiscal receipt issuing, inventory control, invoicing, deliveries and integration with SNGPC for controlled medication reporting.",
          "Defined API contracts alongside the frontend team and led the technical side of a commercial proposal for a pilot client.",
        ],
      },
      a4pm: {
        role: "Software Support Analyst",
        points: [
          "Support end users in configuring and effectively using management software across multiple departments.",
          "Investigate and troubleshoot technical issues, document incidents and collaborate with development teams to resolve bugs.",
          "Ensure system availability and a good user experience, acting as a bridge between technical and non-technical stakeholders.",
        ],
      },
      fundec: {
        role: "IT Instructor",
        points: [
          "Deliver hands-on classes on Linux, MySQL and general computing to students of different ages and skill levels.",
          "Develop teaching materials and practical exercises that turn complex concepts into accessible learning experiences.",
          "Assess student progress and guide them toward entry-level opportunities in the IT market.",
        ],
      },
      dbrum: {
        role: "Technical Support & Freelance Developer",
        points: [
          "Perform maintenance, diagnosis and repair of hardware and software across different client environments.",
          "Develop custom software solutions and small-scale systems tailored to each client's specific needs.",
          "Work across the entire development cycle, from requirements analysis to delivery, focusing on scalable and maintainable solutions.",
        ],
      },
    },
    present: "Present",
    educationHeading: "Education",
    educationSubtitle: "Academic foundation in software development and emerging technologies",
    education: {
      uniasselvi: {
        degree: "Technologist in Systems Analysis and Development",
        description:
          "Focused on software development, algorithms, database systems and web technologies. Covers full-stack development, software engineering principles and hands-on application building.",
      },
    },
    languagesTitle: "Languages",
    languages: [
      { label: "Portuguese", level: "Native" },
      { label: "English", level: "Intermediate" },
      { label: "Spanish", level: "Basic" },
    ],
  },
  projects: {
    heading: "Portfolio",
    subtitle: "Real applications that solve practical problems with clean, maintainable code",
    featuredTitle: "Featured Projects",
    featuredBadge: "Featured project",
    viewSite: "View site",
    accessSystem: "Open the app",
    viewGithub: "View on GitHub",
    moreProjects: "More projects on GitHub",
    otherProjectsTitle: "Other projects",
    coreonProduct: "A Coreon Systems product",
    inDevelopment: "In development",
    items: {
      corefarma: {
        title: "Corefarma — ERP for Pharmacies",
        tagline: "Complete Pharmacy Management System",
        description:
          "A complete ERP built for the pharmaceutical sector, covering the entire pharmacy operation: POS with fiscal receipt issuance, inventory management, invoice generation, delivery control, customer and staff registration, and SNGPC integration for reporting controlled medications. Robust backend architecture with NestJS, secure authentication, structured logging with Winston and full documentation via Swagger. Beyond development, I defined the entire system flow and architecture.",
      },
      corefood: {
        title: "Core Food — Restaurant Platform",
        tagline: "White-label Ordering System",
        description:
          "A restaurant-owned ordering platform built as an alternative to delivery marketplaces: the restaurant operates under its own brand and keeps its customer base instead of paying per-order commissions. Java and Spring Boot backend, integrated with an existing mobile application through an API contract defined together with the frontend team. Responsible for multi-tenant architecture, authentication, catalog and order flow.",
      },
      culturehouse: {
        title: "Culture House – Social Management Platform",
        tagline: "Management System for Social Projects",
        description:
          "A web platform built to help NGOs manage social assistance records efficiently. It tracks individuals and their interactions, automates WhatsApp messages for birthdays and special dates, and generates complete statistical reports in CSV and PDF. The project demonstrates full-stack development, database modeling, role-based access control and containerization.",
      },
      crudjava: {
        title: "Product Management CRUD",
        tagline: "Java & Spring Boot Application",
        description:
          "A robust CRUD application for product management with a clean, intuitive web interface. It demonstrates backend architecture with Spring Boot, persistence with relational databases and server-side rendering with Thymeleaf. Built with enterprise patterns and maintainability best practices.",
      },
      userreg: {
        title: "User Registration Platform",
        tagline: "Full-Stack Node, React & MySQL",
        description:
          "A complete web application for user registration with full CRUD operations. It uses a modern three-tier architecture with a Node.js backend API, a React frontend for a dynamic interface and a MySQL database for persistence. It shows the ability to integrate multiple technologies into a cohesive, functional system.",
      },
    },
  },
  caseStudies: {
    heading: "Case Studies",
    subtitle: "In-depth breakdowns of real projects and technical solutions",
    roleLabel: "Role",
    projectTypeLabel: "Project Type",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    featuresLabel: "Key Features",
    viewRepo: "View Repository",
    showDiagrams: "Show diagrams",
    hideDiagrams: "Hide diagrams",
    architectureLabel: "System Architecture",
    erdLabel: "Database Schema (ERD)",
    loadingDiagram: "Loading diagram…",
    diagramError: "The diagram could not be rendered.",
    items: {
      corefood: {
        title: "Core Food — Restaurant Platform",
        role: "Backend Developer",
        projectType: "White-label SaaS platform for the food service industry",
        problem:
          "Restaurants selling through delivery marketplaces pay commissions that eat a significant share of revenue and, more importantly, lose ownership of both the customer relationship and the customer data — the base belongs to the marketplace. An owned sales channel would solve this, but building an app from scratch is out of reach for a single restaurant.",
        solution:
          "A white-label platform where a single backend serves multiple restaurants, each with its own brand, menu and customer base. The restaurant operates as if the app were its own; the technology belongs to Coreon.\n\nThe backend was built in Java with Spring Boot, using PostgreSQL and a Docker-based environment. The mobile app already existed with mocked data, so development started from a previously agreed API contract — the backend had to fit what was already built without breaking the frontend team's work.\n\nThe core architectural decision was the multi-tenancy model. I evaluated database-per-tenant (maximum isolation, migrations growing costlier as the client base scales), schema-per-tenant (an apparent middle ground that in practice inherits the complexity of both) and a shared database with Row-Level Security (cheap to scale, demanding absolute rigor in access policies). The choice was a shared PostgreSQL database with Row-Level Security, because it scales without the operational cost of maintaining a database or schema per tenant. Isolation is enforced in two layers: the application resolves the tenant from the request (header, subdomain or a default value), and PostgreSQL enforces RLS on sensitive tables — today 27 of 31 tables carry a tenant_id, 30 of which have FORCE ROW LEVEL SECURITY enabled, blocking even malformed queries from the application itself. White-labeling, in turn, doesn't rely on runtime logic in the app: each brand ships its own mobile app build, with theme, logo and content set at compile time.",
        features: [
          "Authentication with Argon2id and a custom JWT implementation, with refresh token rotation and full token family revocation on detected reuse",
          "Multi-tenant isolation enforced by Row-Level Security in PostgreSQL, with the tenant resolved from the header/subdomain",
          "White-labeling via mobile app build — theme, logo and content per brand",
          "Catalog with product variants, addon groups and promotions",
          "Order flow with cart validation, idempotency, a per-tenant sequential order code and a state machine for status transitions",
          "Configurable shipping engine with four strategies (fixed, free above a threshold, by ZIP range, by distance)",
          "PIX payments with signature-verified webhooks and per-tenant encrypted credentials",
          "Outbox pattern running inside PostgreSQL itself for reliability, with no external queue dependency",
        ],
      },
      bi: {
        title: "Intelligent Learning-Gap Diagnosis Platform",
        role: "Full Stack Developer & BI Architect",
        projectType: "Business Intelligence Web System (Capstone Project)",
        problem:
          "Public schools in Brazil often face fragmented data, no dashboards and limited visibility into students' learning gaps. Education professionals usually rely on spreadsheets or manual processes, making it hard to identify at-risk students, trends in specific subjects or grades, classes with structural performance deficits and geographic patterns of educational difficulties. A centralized BI solution was needed to support data-driven decisions.",
        solution:
          "I designed and implemented a complete BI platform with a Django REST API for structured, secure data access, a Vue.js + Vite frontend for a fast, responsive interface, interactive dashboards with Plotly.js, geospatial visualizations with Leaflet, JWT authentication for protected access and a synthetic data generator for development and demos. The system lets teachers, coordinators and administrators view trends, compare performance across classes or schools and detect learning gaps early.",
        features: [
          "JWT-based authentication with token refresh mechanism",
          "Full CRUD operations for Schools, Classes, Students and Teachers",
          "Interactive dashboards with Plotly.js for performance analysis",
          "Geospatial analysis with Leaflet and real map tiles",
          "REST API built with Django + DRF for structured data access",
          "Performance insights via Plotly.js visualizations",
          "Synthetic dataset generator for test scenarios",
          "Fast, responsive frontend with Vue 3 + Vite",
          "Early alerts for at-risk students",
          "Demographic and geographic pattern analysis",
        ],
      },
      culturehouse: {
        title: "Culture House — Social Management Platform",
        role: "Full Stack Developer",
        projectType: "Management System for a Social NGO",
        problem:
          "NGOs running social assistance programs need to track the individuals they serve, automate communications and generate complete reports, but they lack accessible and scalable technical solutions.",
        solution:
          "I developed a full-stack web platform using Python/Django with MySQL for data persistence, Docker for containerization and WhatsApp API integration for automatic birthday messages. I implemented role-based access control, CSV/PDF report generation and a responsive interface with Bootstrap 5.",
        features: [
          "Individual tracking and case management with complete profiles",
          "Automated WhatsApp messages for birthdays and special events",
          "Statistical report generation in CSV and PDF formats",
          "Role-based access control for administrators and staff",
          "Deployment with Docker Compose for easy setup and scalability",
        ],
      },
    },
  },
  content: {
    heading: "Writing",
    subtitle: "Technical articles and community recommendations",
    articlesHeading: "Articles on Medium",
    readMedium: "Read on Medium",
    recsHeading: "LinkedIn Recommendations",
    viewLinkedin: "View on LinkedIn",
  },
  contact: {
    heading: "Contact",
    subtitle: "Let's build something great together",
    cardTitle: "Let's Work Together",
    cardP1:
      "I'm actively looking for junior-to-mid backend developer roles, freelance projects and remote opportunities. If you're building secure, scalable systems and need someone who combines technical depth with a security-oriented mindset, I'd love to hear about it.",
    cardP2:
      "Whether it's a full-time role, a contract or a collaboration on an interesting project, I'm open to discussing how I can contribute to your team.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    locationLabel: "Location",
    locationValue: "Rio de Janeiro, Brazil",
    remoteNote: "Open to remote work",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      company: "Company (Optional)",
      companyPlaceholder: "Your company",
      subject: "Subject",
      subjectPlaceholder: "What's it about?",
      message: "Message",
      messagePlaceholder: "Tell me about your project or opportunity...",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Message sent successfully!",
      successDesc: "I'll get back to you as soon as possible.",
      errorTitle: "Failed to send message",
      errorDesc: "Please try again or contact me directly by email.",
    },
  },
  footer: {
    tagline:
      "Backend developer focused on cybersecurity. Building secure, scalable systems made to last.",
    navHeading: "Navigation",
    connectHeading: "Connect",
    rights: "Backend Developer & Cybersecurity",
  },
}

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    portfolio: "Portafolio",
    content: "Publicaciones",
    contact: "Contacto",
    downloadCv: "Descargar CV",
    downloadCvLong: "Descargar Currículum",
  },
  sectionLabels: {
    about: "Sobre mí",
    skills: "Habilidades",
    certifications: "Certificaciones",
    experience: "Experiencia",
    education: "Educación",
    projects: "Portafolio",
    featured: "Proyectos destacados",
    caseStudies: "Casos de estudio",
    otherProjects: "Otros proyectos",
    content: "Publicaciones",
    contact: "Contacto",
  },
  langSwitcher: {
    label: "Idioma",
  },
  hero: {
    badge: "Disponible para nuevas oportunidades",
    role: "Desarrollador Backend",
    headline: "Backend seguro, de la base de datos a la API.",
    intro:
      'Construyo <strong>APIs robustas y sistemas web</strong> con Java/Spring Boot y Node/NestJS, en entornos Linux y Docker. La diferencia: una mentalidad de <strong>ciberseguridad</strong> aplicada a cada decisión de arquitectura, para entregar software que perdura y en el que se puede confiar.',
    ctaPrimary: "Trabajemos juntos",
    ctaSecondary: "Ver mis proyectos",
    ctaCv: "Descargar CV",
    stats: [
      { value: "5+", label: "años en TI y Dev" },
      { value: "8", label: "certificaciones" },
      { value: "2", label: "productos en producción" },
    ],
    terminal: {
      fileLabel: "backend.ts",
      lines: [
        { key: "stack", value: "Java + Spring Boot" },
        { key: "focus", value: "multi-tenant" },
        { key: "domain", value: "fiscal · farmacéutico" },
        { key: "security", value: "by design" },
      ],
      result: "deploy --confidence",
    },
  },
  about: {
    heading: "Sobre mí",
    paragraphs: [
      "Soy un desarrollador backend enfocado en Java con Spring Boot y Python con Django, construyendo aplicaciones web seguras, bien estructuradas y confiables. Me gusta trabajar cerca del núcleo de los sistemas, diseñando arquitecturas, bases de datos y APIs, y entregando soluciones en entornos Linux con Docker.",
      "Hoy lidero la parte técnica de Coreon Systems, donde desarrollamos dos productos: Corefarma, un ERP para farmacias en producción, con punto de venta, emisión fiscal e integración con el SNGPC; y Core Food, una plataforma white-label de pedidos para restaurantes. Dos stacks distintas, elegidas por dominio y no por preferencia — y saber justificar esa elección me parece más importante que dominar un solo lenguaje.",
      "Tengo experiencia práctica con proyectos reales, especialmente plataformas de impacto social, donde la fiabilidad, la organización y la escalabilidad marcan una diferencia real. No me limito a escribir código que funciona: construyo soluciones pensadas para durar.",
      "También trabajo como instructor de TI, enseñando Linux, MySQL y conceptos fundamentales de computación. Esa experiencia fortaleció mis habilidades de comunicación, mi razonamiento arquitectónico y mi capacidad de tomar decisiones técnicas claras, esenciales para una buena colaboración en equipo.",
      "Me gusta escribir artículos técnicos y compartir conocimiento, lo que refleja mi compromiso con el aprendizaje continuo y las buenas prácticas. Si buscas un desarrollador backend con una base sólida en Linux, mentalidad orientada a la seguridad y código limpio y bien diseñado, con gusto conversamos.",
    ],
    skillsHeading: "Habilidades",
    skillsSubtitle: "Un conjunto completo de herramientas para sistemas backend seguros y escalables",
    skillGroups: {
      backend: {
        title: "Backend y Lenguajes",
        description: "Lenguajes de programación para aplicaciones del lado del servidor robustas.",
      },
      frameworks: {
        title: "Frameworks y Ecosistema",
        description: "Frameworks y herramientas modernas para un desarrollo backend eficiente.",
      },
      databases: {
        title: "Bases de Datos",
        description: "Bases de datos SQL y NoSQL para persistencia y gestión de datos.",
      },
      infra: {
        title: "Infraestructura y DevOps",
        description: "Contenerización, servicios en la nube y desarrollo de APIs.",
      },
    },
    certsHeading: "Certificaciones",
    certsSubtitle: "Aprendizaje continuo en ciberseguridad e ingeniería de software",
    experienceHeading: "Experiencia",
    experienceSubtitle: "Trayectoria profesional que combina soporte, educación y desarrollo",
    experiences: {
      coreon: {
        role: "Desarrollador Backend",
        points: [
          "Liderazgo técnico de una empresa de software con dos productos verticales: Corefarma (ERP para farmacias) y Core Food (plataforma para restaurantes).",
          "Arquitectura y desarrollo del backend de ambos productos — NestJS y PostgreSQL en Corefarma, Java y Spring Boot en Core Food.",
          "Corefarma en producción, cubriendo punto de venta con emisión de comprobante fiscal, control de inventario, facturación, entregas e integración con el SNGPC para medicamentos controlados.",
          "Definición de contratos de API junto con el equipo de frontend y liderazgo técnico de una propuesta comercial para un cliente piloto.",
        ],
      },
      a4pm: {
        role: "Analista de Soporte de Software",
        points: [
          "Dar soporte a usuarios finales en la configuración y el uso eficaz de software de gestión en múltiples departamentos.",
          "Investigar y resolver problemas técnicos, documentar incidentes y colaborar con equipos de desarrollo para la resolución de errores.",
          "Garantizar la disponibilidad de los sistemas y una buena experiencia de usuario, actuando como puente entre partes técnicas y no técnicas.",
        ],
      },
      fundec: {
        role: "Instructor de TI",
        points: [
          "Impartir clases prácticas de Linux, MySQL e informática general a alumnos de distintas edades y niveles de conocimiento.",
          "Desarrollar materiales didácticos y ejercicios prácticos que traducen conceptos complejos en experiencias de aprendizaje accesibles.",
          "Evaluar el progreso de los alumnos y orientarlos hacia oportunidades de ingreso al mercado de TI.",
        ],
      },
      dbrum: {
        role: "Soporte Técnico y Desarrollador Freelance",
        points: [
          "Realizar mantenimiento, diagnóstico y reparación de hardware y software en distintos entornos de clientes.",
          "Desarrollar soluciones de software personalizadas y sistemas de pequeña escala adaptados a las necesidades específicas de cada cliente.",
          "Participar en todo el ciclo de desarrollo, desde el análisis de requisitos hasta la entrega, con foco en soluciones escalables y de fácil mantenimiento.",
        ],
      },
    },
    present: "Presente",
    educationHeading: "Educación",
    educationSubtitle: "Base académica en desarrollo de software y tecnologías emergentes",
    education: {
      uniasselvi: {
        degree: "Tecnólogo en Análisis y Desarrollo de Sistemas",
        description:
          "Enfocado en desarrollo de software, algoritmos, sistemas de bases de datos y tecnologías web. Abarca desarrollo full-stack, principios de ingeniería de software y construcción práctica de aplicaciones.",
      },
    },
    languagesTitle: "Idiomas",
    languages: [
      { label: "Portugués", level: "Nativo" },
      { label: "Inglés", level: "Intermedio" },
      { label: "Español", level: "Básico" },
    ],
  },
  projects: {
    heading: "Portafolio",
    subtitle: "Aplicaciones reales que resuelven problemas prácticos con código limpio y fácil de mantener",
    featuredTitle: "Proyectos Destacados",
    featuredBadge: "Proyecto destacado",
    viewSite: "Ver sitio",
    accessSystem: "Abrir el sistema",
    viewGithub: "Ver en GitHub",
    moreProjects: "Más proyectos en GitHub",
    otherProjectsTitle: "Otros proyectos",
    coreonProduct: "Un producto de Coreon Systems",
    inDevelopment: "En desarrollo",
    items: {
      corefarma: {
        title: "Corefarma — ERP para Farmacias",
        tagline: "Sistema Completo de Gestión Farmacéutica",
        description:
          "Un ERP completo desarrollado para el sector farmacéutico, que cubre toda la operación de la farmacia: TPV con emisión de tickets fiscales, gestión de inventario, generación de facturas, control de entregas, registro de clientes y empleados e integración con SNGPC para la notificación de medicamentos controlados. Arquitectura backend robusta con NestJS, autenticación segura, logging estructurado con Winston y documentación completa vía Swagger. Además del desarrollo, definí todo el flujo y la arquitectura del sistema.",
      },
      corefood: {
        title: "Core Food — Plataforma para Restaurantes",
        tagline: "Sistema de Pedidos White-label",
        description:
          "Plataforma de pedidos propia para restaurantes, creada como alternativa a los marketplaces de delivery: el restaurante opera bajo su propia marca y conserva su base de clientes, en lugar de pagar comisión por pedido. Backend en Java con Spring Boot, integrado con una aplicación móvil ya existente mediante un contrato de API definido junto con el equipo de frontend. Responsable de la arquitectura multi-tenant, autenticación, catálogo y flujo de pedidos.",
      },
      culturehouse: {
        title: "Culture House – Plataforma de Gestión Social",
        tagline: "Sistema de Gestión para Proyectos Sociales",
        description:
          "Una plataforma web creada para ayudar a las ONG a gestionar registros de asistencia social con eficiencia. Rastrea a las personas y sus interacciones, automatiza mensajes de WhatsApp para cumpleaños y fechas especiales, y genera informes estadísticos completos en CSV y PDF. El proyecto demuestra desarrollo full-stack, modelado de bases de datos, control de acceso por roles y contenerización.",
      },
      crudjava: {
        title: "CRUD de Gestión de Productos",
        tagline: "Aplicación Java y Spring Boot",
        description:
          "Una aplicación CRUD robusta para la gestión de productos con una interfaz web limpia e intuitiva. Demuestra arquitectura backend con Spring Boot, persistencia con bases de datos relacionales y renderizado del lado del servidor con Thymeleaf. Construida con patrones empresariales y buenas prácticas de mantenibilidad.",
      },
      userreg: {
        title: "Plataforma de Registro de Usuarios",
        tagline: "Full-Stack Node, React y MySQL",
        description:
          "Una aplicación web completa para el registro de usuarios con operaciones CRUD completas. Utiliza una arquitectura moderna de tres capas con una API backend en Node.js, un frontend en React para una interfaz dinámica y una base de datos MySQL para la persistencia. Demuestra la capacidad de integrar múltiples tecnologías en un sistema cohesivo y funcional.",
      },
    },
  },
  caseStudies: {
    heading: "Casos de Estudio",
    subtitle: "Análisis en profundidad de proyectos reales y soluciones técnicas",
    roleLabel: "Función",
    projectTypeLabel: "Tipo de Proyecto",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    featuresLabel: "Funcionalidades Clave",
    viewRepo: "Ver Repositorio",
    showDiagrams: "Ver diagramas",
    hideDiagrams: "Ocultar diagramas",
    architectureLabel: "Arquitectura del Sistema",
    erdLabel: "Esquema de la Base de Datos (ERD)",
    loadingDiagram: "Cargando diagrama…",
    diagramError: "No se pudo renderizar el diagrama.",
    items: {
      corefood: {
        title: "Core Food — Plataforma para Restaurantes",
        role: "Desarrollador Backend",
        projectType: "Plataforma SaaS white-label para el sector de alimentación",
        problem:
          "Los restaurantes que venden a través de marketplaces de delivery pagan comisiones que consumen una parte relevante de la facturación y, lo que es más grave, no conservan la relación ni los datos de sus propios clientes — la base pertenece al marketplace. Un canal de ventas propio resolvería el problema, pero construir una aplicación desde cero es inviable para un restaurante individual.",
        solution:
          "Una plataforma white-label en la que un único backend atiende a múltiples restaurantes, cada uno con marca, carta y base de clientes propias. El restaurante opera como si la aplicación fuera suya; la tecnología pertenece a Coreon.\n\nEl backend se construyó en Java con Spring Boot, con PostgreSQL y un entorno en contenedores con Docker. La aplicación móvil ya existía con datos simulados, así que el desarrollo partió de un contrato de API previamente acordado — el backend tuvo que encajar en lo que ya estaba construido, sin romper lo que el equipo de frontend había entregado.\n\nLa decisión central de arquitectura fue el modelo de multi-tenancy. Evalué base de datos por tenant (aislamiento máximo, migraciones cada vez más costosas a medida que crece la base de clientes), esquema por tenant (un término medio aparente que en la práctica hereda la complejidad de ambos) y base de datos compartida con Row-Level Security (barata de escalar, exige un rigor absoluto en las políticas de acceso). La elección fue una base de datos compartida de PostgreSQL con Row-Level Security, porque escala sin el costo operativo de mantener una base de datos o un esquema por tenant. El aislamiento se refuerza en dos capas: la aplicación resuelve el tenant a partir de la solicitud (header, subdominio o un valor por defecto), y PostgreSQL aplica RLS en las tablas sensibles — hoy 27 de las 31 tablas llevan tenant_id, de las cuales 30 tienen FORCE ROW LEVEL SECURITY activado, bloqueando incluso consultas mal formadas provenientes de la propia aplicación. El white-label, por su parte, no depende de lógica en tiempo de ejecución en la aplicación: cada marca recibe su propio build de la app móvil, con tema, logo y contenido definidos en la compilación.",
        features: [
          "Autenticación con Argon2id y JWT propio, con rotación de refresh token y revocación de toda la familia ante reuso detectado",
          "Aislamiento multi-tenant reforzado por Row-Level Security en PostgreSQL, con el tenant resuelto por header/subdominio",
          "White-label mediante build de la app móvil — tema, logo y contenido propios por marca",
          "Catálogo con variantes de producto, grupos de adicionales y promociones",
          "Flujo de pedidos con validación de carrito, idempotencia, código secuencial por tenant y máquina de estados para las transiciones",
          "Motor de envío configurable con cuatro estrategias (fijo, envío gratis a partir de un monto, por código postal, por distancia)",
          "Pago vía PIX con webhook validado por firma y credenciales cifradas por tenant",
          "Patrón outbox dentro del propio PostgreSQL para confiabilidad, sin depender de una cola externa",
        ],
      },
      bi: {
        title: "Plataforma Inteligente de Diagnóstico de Brechas de Aprendizaje",
        role: "Desarrollador Full Stack y Arquitecto de BI",
        projectType: "Sistema Web de Business Intelligence (Proyecto de Fin de Curso)",
        problem:
          "Las escuelas públicas en Brasil suelen enfrentar datos fragmentados, ausencia de dashboards y visibilidad limitada sobre las brechas de aprendizaje de los alumnos. Los profesionales de la educación normalmente dependen de hojas de cálculo o procesos manuales, lo que dificulta identificar alumnos en riesgo, tendencias en asignaturas o cursos específicos, clases con déficits estructurales de desempeño y patrones geográficos de dificultades educativas. Se necesitaba una solución de BI centralizada para apoyar decisiones basadas en datos.",
        solution:
          "Diseñé e implementé una plataforma completa de BI con una API Django REST para acceso estructurado y seguro a los datos, un frontend Vue.js + Vite para una interfaz rápida y responsiva, dashboards interactivos con Plotly.js, visualizaciones geoespaciales con Leaflet, autenticación JWT para acceso protegido y un generador de datos sintéticos para desarrollo y demos. El sistema permite que profesores, coordinadores y administradores visualicen tendencias, comparen el desempeño entre clases o escuelas y detecten brechas de aprendizaje de forma temprana.",
        features: [
          "Autenticación basada en JWT con mecanismo de refresco de token",
          "Operaciones CRUD completas para Escuelas, Clases, Alumnos y Profesores",
          "Dashboards interactivos con Plotly.js para análisis de desempeño",
          "Análisis geoespacial con Leaflet y tiles reales de mapa",
          "API REST construida con Django + DRF para acceso estructurado a los datos",
          "Insights de desempeño mediante visualizaciones Plotly.js",
          "Generador de datasets sintéticos para escenarios de prueba",
          "Frontend rápido y responsivo con Vue 3 + Vite",
          "Alertas tempranas para alumnos en riesgo",
          "Análisis de patrones demográficos y geográficos",
        ],
      },
      culturehouse: {
        title: "Culture House — Plataforma de Gestión Social",
        role: "Desarrollador Full Stack",
        projectType: "Sistema de Gestión para una ONG Social",
        problem:
          "Las ONG que gestionan programas de asistencia social necesitan hacer seguimiento de las personas atendidas, automatizar comunicaciones y generar informes completos, pero carecen de soluciones técnicas accesibles y escalables.",
        solution:
          "Desarrollé una plataforma web full-stack usando Python/Django con MySQL para la persistencia de datos, Docker para la contenerización e integración con la API de WhatsApp para el envío automático de mensajes de cumpleaños. Implementé control de acceso por roles, generación de informes en CSV/PDF y una interfaz responsiva con Bootstrap 5.",
        features: [
          "Seguimiento individual y gestión de casos con perfiles completos",
          "Envío automatizado de mensajes de WhatsApp para cumpleaños y eventos especiales",
          "Generación de informes estadísticos en formatos CSV y PDF",
          "Control de acceso por roles para administradores y personal",
          "Despliegue con Docker Compose para una configuración fácil y escalable",
        ],
      },
    },
  },
  content: {
    heading: "Publicaciones",
    subtitle: "Artículos técnicos y recomendaciones de la comunidad",
    articlesHeading: "Artículos en Medium",
    readMedium: "Leer en Medium",
    recsHeading: "Recomendaciones de LinkedIn",
    viewLinkedin: "Ver en LinkedIn",
  },
  contact: {
    heading: "Contacto",
    subtitle: "Construyamos algo increíble juntos",
    cardTitle: "Trabajemos Juntos",
    cardP1:
      "Estoy buscando activamente vacantes de desarrollador backend de nivel junior a semi-senior, proyectos freelance y oportunidades remotas. Si estás construyendo sistemas seguros y escalables y necesitas a alguien que combine profundidad técnica con una mentalidad orientada a la seguridad, me encantaría saberlo.",
    cardP2:
      "Ya sea un puesto a tiempo completo, un contrato o una colaboración en un proyecto interesante, estoy abierto a conversar sobre cómo puedo contribuir a tu equipo.",
    emailLabel: "Correo",
    linkedinLabel: "LinkedIn",
    locationLabel: "Ubicación",
    locationValue: "Río de Janeiro, Brasil",
    remoteNote: "Abierto a trabajo remoto",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu.correo@ejemplo.com",
      company: "Empresa (Opcional)",
      companyPlaceholder: "Tu empresa",
      subject: "Asunto",
      subjectPlaceholder: "¿De qué se trata?",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto u oportunidad...",
      submit: "Enviar Mensaje",
      submitting: "Enviando...",
      successTitle: "¡Mensaje enviado con éxito!",
      successDesc: "Me pondré en contacto lo antes posible.",
      errorTitle: "Error al enviar el mensaje",
      errorDesc: "Inténtalo de nuevo o contáctame directamente por correo.",
    },
  },
  footer: {
    tagline:
      "Desarrollador backend enfocado en ciberseguridad. Construyendo sistemas seguros, escalables y hechos para durar.",
    navHeading: "Navegación",
    connectHeading: "Conecta",
    rights: "Desarrollador Backend y Ciberseguridad",
  },
}

export const dictionaries: Record<"pt" | "en" | "es", Dictionary> = { pt, en, es }
