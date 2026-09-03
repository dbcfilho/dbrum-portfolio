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
    education: "Diplomas",
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
      'Construo <strong>APIs robustas e sistemas web</strong> com Java/Spring Boot, aplicando uma mentalidade de <strong>cibersegurança</strong> a cada decisão de arquitetura, para entregar software que dura e em que se pode confiar.',
    ctaPrimary: "Vamos trabalhar juntos",
    ctaSecondary: "Ver meus projetos",
    ctaCv: "Baixar CV",
    stats: [
      { value: "5+", label: "anos em TI & Dev" },
      { value: "8", label: "certificações" },
      { value: "2", label: "produtos em produção" },
    ],
    terminal: {
      fileLabel: "Backend.java",
      fields: [
        { name: "stack", value: "Java + Spring Boot" },
        { name: "focus", value: "multi-tenant" },
        { name: "domain", value: "white-label SaaS" },
      ],
      result: "deploy --confidence",
    },
  },
  about: {
    heading: "Sobre",
    paragraphs: [
      "Desenvolvedor backend focado em Java/Spring Boot e Python/Django, projetando arquiteturas, bancos de dados e APIs para sistemas que precisam durar. Tenho experiência prática com projetos reais, de plataformas de impacto social a sistemas em produção, sempre com uma mentalidade voltada à segurança e ao código bem projetado.",
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
          "Arquitetar e desenvolver o backend da plataforma Core, produto white-label multi-vertical em Java 25 e Spring Boot 4, estruturado como monólito modular com Spring Modulith sobre PostgreSQL e Redis.",
          "Implementar isolamento multi-tenant com Row-Level Security, autenticação com Argon2id, pagamento PIX via PagBank com webhook validado e padrão Outbox para consistência de eventos.",
          "Sustentar a qualidade com mais de 100 classes de teste e cerca de 540 casos em JUnit 5 e Testcontainers, regras de arquitetura verificadas por ArchUnit e CI no GitHub Actions com testes de contrato a cada push.",
          "Instrumentar a observabilidade da plataforma com Actuator e Micrometer, expondo métricas ao Prometheus e dashboards no Grafana segmentados por tenant, com regras de alerta para indisponibilidade e falhas de pagamento.",
          "Desenvolver o frontend de um ERP multi-tenant e multimarca em Next.js 15 e React 19, definindo contratos de API com o time de frontend e documentando em Swagger/OpenAPI.",
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
    educationHeading: "Diplomas",
    educationSubtitle: "Base acadêmica em desenvolvimento de software e tecnologias emergentes",
    education: {
      anhanguera: {
        degree: "Pós-graduação em Docência no Ensino Superior",
        description: "Formação voltada à didática, metodologias de ensino e prática docente no ensino superior.",
      },
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
        title: "Corefood — Plataforma para Restaurantes",
        tagline: "Sistema de Pedidos White-label",
        description:
          "Plataforma de pedidos própria para restaurantes, criada como alternativa aos marketplaces de delivery: em vez de pagar comissão por pedido e ceder a relação com o cliente, o restaurante opera sob a própria marca, com cardápio, base de clientes e um app mobile com a cara dele. A tecnologia por trás é da Coreon. Backend em Java com Spring Boot e PostgreSQL, com isolamento multi-tenant via Row-Level Security, integrado a um aplicativo mobile já existente por meio de um contrato de API definido junto ao time de frontend. Autenticação própria com Argon2id e rotação de refresh token, pagamento via PIX com webhook validado por assinatura, motor de frete configurável e um padrão outbox dentro do próprio PostgreSQL para confiabilidade dos pedidos. Responsável pela arquitetura multi-tenant, autenticação, catálogo e todo o fluxo de pedidos.",
      },
      simmias: {
        title: "Simmias Lite — Gestão Educacional",
        tagline: "Sistema On-Premise para Casas de Cultura",
        description:
          "Sistema completo de gestão educacional para Casas de Cultura, rodando on-premise em rede local, sem depender de internet. Django + DRF no backend, React com Vite no frontend, PostgreSQL, e um microserviço próprio via Baileys para automatizar a comunicação por WhatsApp. Cobre matrícula, turmas, diário de classe, frequência, relatórios e uma linha de benefícios sociais (passaporte cultural, encaminhamentos, assessoria jurídica e atendimento médico). Em produção real na Casa da Cultura, hoje evoluindo para uma versão SaaS multi-tenant.",
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
        title: "Corefood — Plataforma para Restaurantes",
        role: "Desenvolvedor Backend",
        projectType: "Plataforma SaaS white-label para o setor de alimentação",
        problem:
          "Restaurantes que vendem por marketplaces de delivery pagam comissões que consomem uma fatia relevante do faturamento e, mais grave, não ficam com o relacionamento nem com os dados dos próprios clientes: a base pertence ao marketplace. Um canal de vendas próprio resolveria o problema, mas construir um aplicativo do zero, com backend, autenticação, pagamento e uma equipe de manutenção, é inviável para um restaurante individual.\n\nA Coreon via esse mesmo problema se repetir em conversas com potenciais clientes do setor de alimentação: todos queriam sair da dependência do marketplace, mas nenhum tinha estrutura para desenvolver e manter uma solução própria. Fazia mais sentido resolver isso uma vez só, como plataforma, do que reconstruir o mesmo problema a cada novo restaurante.",
        solution:
          "Uma plataforma white-label na qual um único backend atende múltiplos restaurantes, cada um com marca, cardápio e base de clientes próprios: o restaurante opera como se o aplicativo fosse dele, mas a tecnologia pertence à Coreon.\n\nBackend em Java com Spring Boot, PostgreSQL e ambiente containerizado em Docker. O aplicativo mobile já existia com dados mockados, então o desenvolvimento partiu de um contrato de API acordado com o time de frontend, sem quebrar o que já estava construído.\n\nA decisão central foi o modelo de multi-tenancy: banco por tenant isola mais, mas encarece a manutenção conforme a base cresce; schema por tenant é um meio-termo que herda a complexidade dos dois. Optei por um banco compartilhado com Row-Level Security do PostgreSQL, reforçado em duas camadas: a aplicação resolve o tenant pela requisição, e o banco aplica RLS nas tabelas sensíveis, hoje 27 das 31. O white-label não depende de lógica em tempo de execução: cada marca recebe um build próprio do app, com tema e conteúdo definidos na compilação.",
        features: [
          "Autenticação com Argon2id e JWT próprio, com rotação de refresh token e revogação de toda a família em caso de reuso detectado",
          "Isolamento multi-tenant reforçado por Row-Level Security no PostgreSQL, com tenant resolvido por header/subdomínio",
          "White-label por build do aplicativo mobile: tema, logo e conteúdo próprios por marca",
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
          "Escolas públicas no Brasil frequentemente enfrentam dados fragmentados, ausência de dashboards e visibilidade limitada sobre as lacunas de aprendizagem dos alunos. Profissionais da educação geralmente dependem de planilhas ou processos manuais, o que dificulta identificar alunos em risco, tendências em disciplinas ou séries específicas, turmas com déficits estruturais de desempenho e padrões geográficos de dificuldades educacionais.\n\nO problema piora conforme a rede cresce: uma planilha por turma funciona para uma escola, mas não escala para uma secretaria de educação com dezenas de unidades, e comparar desempenho entre escolas exige consolidar dados manualmente, um processo lento e sujeito a erro. Era necessária uma solução de BI centralizada, com dados estruturados desde a origem, para apoiar decisões baseadas em evidência em vez de percepção.",
        solution:
          "Projetei e implementei uma plataforma completa de BI com API Django REST para acesso estruturado e seguro aos dados, frontend Vue.js + Vite para interface responsiva e rápida, dashboards interativos com Plotly.js, visualizações geoespaciais com Leaflet, autenticação JWT para acesso protegido e um gerador de dados sintéticos para desenvolvimento e demos. O sistema permite que professores, coordenadores e administradores visualizem tendências, comparem desempenhos entre turmas ou escolas e detectem lacunas de aprendizagem precocemente.\n\nA modelagem separa desempenho por disciplina (matemática, português, ciências) e vincula cada registro a turma, escola e data do exame, permitindo cruzar filtros geográficos e temporais sem reprocessar os dados na visualização. Como projeto de conclusão de curso, também serviu para validar decisões de arquitetura full-stack do zero, da API ao mapa interativo, sem depender de um time.",
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
      simmias: {
        title: "Simmias Lite — Gestão Educacional On-Premise",
        role: "Desenvolvedor Full Stack",
        projectType: "Sistema de gestão educacional, em produção real numa Casa da Cultura",
        problem:
          "A Casa da Cultura precisava de um sistema para gerenciar matrículas, turmas, frequência e diário de classe, mas a unidade não tem internet estável: uma solução em nuvem ficaria indisponível com frequência, inviabilizando o uso no dia a dia. Além da gestão pedagógica, a organização também presta benefícios sociais (passaporte cultural, encaminhamentos, assessoria jurídica, atendimento médico) que antes eram controlados em planilhas soltas, sem histórico centralizado nem comunicação automatizada com as famílias.\n\nComo voluntário de tecnologia da casa, eu via de perto o custo disso: faltas que passavam despercebidas, recados que dependiam de alguém lembrar de avisar por telefone, e nenhuma visão consolidada de quem estava sendo atendido pelos diferentes programas sociais ao mesmo tempo.",
        solution:
          "Sistema Django + DRF com frontend React/Vite, projetado para rodar on-premise: um computador da própria unidade atua como servidor, e as demais máquinas acessam pelo navegador na rede local, sem depender de internet. Deploy via Docker Compose com seis serviços orquestrados, incluindo PostgreSQL, backend via gunicorn, um worker cron que verifica faltas e gera aulas futuras a cada 24h, e um Nginx como único serviço com porta exposta.\n\nO domínio pedagógico ficou mais complexo do que parecia: turma, horário, aula e professor são registros separados e relacionados entre si, um aluno pode estar matriculado em várias turmas ao mesmo tempo, e a frequência é lançada numa grade semanal com auto-save, onde cada célula cicla entre não registrado, presente e falta.\n\nA comunicação com as famílias é automatizada por WhatsApp através de um microserviço próprio com Baileys, mais leve que alternativas que dependem de Chromium. O sistema dispara alertas de falta e mensagens de aniversário sozinho, todos os dias. O acesso é controlado por papel, incluindo perfis dedicados para advogado e médico nos módulos de benefícios sociais.\n\nÉ o projeto que mais me orgulha: comecei como o voluntário de tecnologia da casa, entendi o problema de perto, e conduzi sozinho da modelagem de dados ao deploy em produção. Hoje atende pessoas de verdade, e virou a base de uma versão SaaS multi-tenant em desenvolvimento.",
        features: [
          "Deploy on-premise via Docker Compose: roda em rede local, sem depender de internet",
          "Matrícula multi-turma com código sequencial automático por ano",
          "Grade semanal de frequência com auto-save e célula que cicla entre presente/falta",
          "Diário de classe com avaliações e notas, ligado à turma pela chave (turma, data)",
          "Comunicação automatizada por WhatsApp via microserviço próprio com Baileys",
          "Alertas de falta e geração de aulas futuras rodando sozinhos todo dia via cron",
          "Controle de acesso por papel, incluindo perfis dedicados para advogado e médico",
          "Módulo de benefícios sociais: passaporte cultural, encaminhamentos, assessoria jurídica e atendimento médico",
          "Ficha do aluno em PDF e relatórios de dashboard com ocupação e aniversariantes",
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
    readMore: "Ver mais",
    readLess: "Ver menos",
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
    tagline: "Backend seguro, do banco de dados à API.",
    navHeading: "Navegação",
    connectHeading: "Conecte-se",
    rights: "Desenvolvedor Backend",
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
    education: "Diplomas",
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
      'I build <strong>robust APIs and web systems</strong> with Java/Spring Boot, applying a <strong>cybersecurity</strong> mindset to every architectural decision, to deliver software that lasts and that you can trust.',
    ctaPrimary: "Let's work together",
    ctaSecondary: "See my projects",
    ctaCv: "Download CV",
    stats: [
      { value: "5+", label: "years in IT & Dev" },
      { value: "8", label: "certifications" },
      { value: "2", label: "products in production" },
    ],
    terminal: {
      fileLabel: "Backend.java",
      fields: [
        { name: "stack", value: "Java + Spring Boot" },
        { name: "focus", value: "multi-tenant" },
        { name: "domain", value: "white-label SaaS" },
      ],
      result: "deploy --confidence",
    },
  },
  about: {
    heading: "About",
    paragraphs: [
      "Backend developer focused on Java/Spring Boot and Python/Django, designing architectures, databases and APIs for systems built to last. I have hands-on experience with real projects, from social-impact platforms to systems running in production, always with a security-first mindset and well-designed code.",
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
          "Architect and develop the backend of Core, a multi-vertical white-label platform in Java 25 and Spring Boot 4, structured as a modular monolith with Spring Modulith on top of PostgreSQL and Redis.",
          "Implement multi-tenant isolation with Row-Level Security, Argon2id authentication, PIX payments via PagBank with signature-verified webhooks, and an Outbox pattern for event consistency.",
          "Sustain quality with 100+ test classes and around 540 cases in JUnit 5 and Testcontainers, architecture rules enforced by ArchUnit, and GitHub Actions CI running contract tests on every push.",
          "Instrument platform observability with Actuator and Micrometer, exposing metrics to Prometheus and per-tenant Grafana dashboards, with alert rules for downtime and payment failures.",
          "Develop the frontend of a multi-tenant, multi-brand ERP in Next.js 15 and React 19, defining API contracts with the frontend team and documenting them in Swagger/OpenAPI.",
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
    educationHeading: "Diplomas",
    educationSubtitle: "Academic foundation in software development and emerging technologies",
    education: {
      anhanguera: {
        degree: "Postgraduate Certificate in Higher Education Teaching",
        description: "Focused on didactics, teaching methodologies and hands-on higher-education teaching practice.",
      },
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
        title: "Corefood — Restaurant Platform",
        tagline: "White-label Ordering System",
        description:
          "A restaurant-owned ordering platform built as an alternative to delivery marketplaces: instead of paying per-order commissions and giving up the customer relationship, the restaurant operates under its own brand, with its own menu, customer base and a mobile app that looks like theirs. The technology behind it belongs to Coreon. Java and Spring Boot backend with PostgreSQL, multi-tenant isolation enforced via Row-Level Security, integrated with an existing mobile application through an API contract defined together with the frontend team. Custom authentication with Argon2id and refresh token rotation, PIX payments with signature-verified webhooks, a configurable shipping engine and an outbox pattern inside PostgreSQL itself for order reliability. Responsible for multi-tenant architecture, authentication, catalog and the entire order flow.",
      },
      simmias: {
        title: "Simmias Lite — Educational Management",
        tagline: "On-Premise System for Cultural Centers",
        description:
          "A complete educational management system for Cultural Centers ('Casas de Cultura'), running on-premise on a local network, with no internet dependency. Django + DRF backend, React with Vite frontend, PostgreSQL, and a custom Baileys-based microservice to automate WhatsApp communication. Covers enrollment, classes, class diaries, attendance, reports and a set of social benefit modules (cultural passport, referrals, legal advisory and medical care). Running in real production at Casa da Cultura, now evolving into a multi-tenant SaaS version.",
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
        title: "Corefood — Restaurant Platform",
        role: "Backend Developer",
        projectType: "White-label SaaS platform for the food service industry",
        problem:
          "Restaurants selling through delivery marketplaces pay commissions that eat a significant share of revenue and, more importantly, lose ownership of both the customer relationship and the customer data: the base belongs to the marketplace. An owned sales channel would solve this, but building an app from scratch, with a backend, authentication, payments and an ongoing maintenance team, is out of reach for a single restaurant.\n\nCoreon kept seeing the same problem repeat in conversations with potential clients in the food service industry: everyone wanted out of marketplace dependency, but none had the structure to build and maintain their own solution. It made more sense to solve it once, as a platform, than to rebuild the same problem for every new restaurant.",
        solution:
          "A white-label platform where a single backend serves multiple restaurants, each with its own brand, menu and customer base: the restaurant operates as if the app were its own, but the technology belongs to Coreon.\n\nBackend built in Java with Spring Boot, PostgreSQL and a Docker-based environment. The mobile app already existed with mocked data, so development started from an API contract agreed with the frontend team, without breaking what was already built.\n\nThe core decision was the multi-tenancy model: database-per-tenant isolates more but grows costlier to maintain as the client base scales; schema-per-tenant is a middle ground that inherits the complexity of both. I chose a shared PostgreSQL database with Row-Level Security, enforced in two layers: the application resolves the tenant from the request, and the database enforces RLS on sensitive tables, today 27 of 31. White-labeling doesn't rely on runtime logic: each brand ships its own app build, with theme and content set at compile time.",
        features: [
          "Authentication with Argon2id and a custom JWT implementation, with refresh token rotation and full token family revocation on detected reuse",
          "Multi-tenant isolation enforced by Row-Level Security in PostgreSQL, with the tenant resolved from the header/subdomain",
          "White-labeling via mobile app build: theme, logo and content per brand",
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
          "Public schools in Brazil often face fragmented data, no dashboards and limited visibility into students' learning gaps. Education professionals usually rely on spreadsheets or manual processes, making it hard to identify at-risk students, trends in specific subjects or grades, classes with structural performance deficits and geographic patterns of educational difficulties.\n\nThe problem gets worse as the network grows: a spreadsheet per class works for one school, but doesn't scale to an education department with dozens of units, and comparing performance across schools means consolidating data by hand, a slow, error-prone process. A centralized BI solution was needed, with structured data from the source, to support decisions grounded in evidence rather than perception.",
        solution:
          "I designed and implemented a complete BI platform with a Django REST API for structured, secure data access, a Vue.js + Vite frontend for a fast, responsive interface, interactive dashboards with Plotly.js, geospatial visualizations with Leaflet, JWT authentication for protected access and a synthetic data generator for development and demos. The system lets teachers, coordinators and administrators view trends, compare performance across classes or schools and detect learning gaps early.\n\nThe data model splits performance by subject (math, Portuguese, science) and links each record to a class, school and exam date, so geographic and time filters can be cross-referenced without reprocessing data in the view. As a capstone project, it also served to validate full-stack architecture decisions from scratch, from the API to the interactive map, with no team behind it.",
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
      simmias: {
        title: "Simmias Lite — On-Premise Educational Management",
        role: "Full Stack Developer",
        projectType: "Educational management system, running in real production at a Cultural Center",
        problem:
          "Casa da Cultura needed a system to manage enrollment, classes, attendance and class diaries, but the site doesn't have reliable internet: a cloud solution would be down often, making it impractical for daily use. Beyond academic management, the organization also runs social benefit programs (cultural passport, referrals, legal advisory, medical care) that were previously tracked in scattered spreadsheets, with no centralized history and no automated communication with families.\n\nAs the site's go-to tech volunteer, I saw the cost of this up close: absences that went unnoticed, messages that depended on someone remembering to call, and no consolidated view of who was being served by the different social programs at the same time.",
        solution:
          "A Django + DRF system with a React/Vite frontend, designed to run on-premise: one computer at the site itself acts as the server, and every other machine accesses it through the browser over the local network, with no internet dependency. Deployment is via Docker Compose, orchestrating six services, including PostgreSQL, the backend via gunicorn, a cron worker that checks absences and generates upcoming classes every 24h, and Nginx as the only service with an exposed port.\n\nThe academic domain turned out more complex than it looked: class, schedule, session and teacher are separate, related records, a student can be enrolled in multiple classes at once, and attendance is logged on a weekly grid with auto-save, where each cell cycles between unmarked, present and absent.\n\nCommunication with families is automated over WhatsApp through a custom microservice built on Baileys, lighter than alternatives that depend on Chromium. The system fires absence alerts and birthday messages on its own, every day. Access is role-based, including dedicated roles for lawyer and doctor in the social benefits modules.\n\nIt's the project I'm proudest of: I started as the site's go-to tech volunteer, got close to the actual problem, and carried it alone from data modeling to production deployment. It's in real use today, serving real people, and it's now the foundation for a multi-tenant SaaS version in development.",
        features: [
          "On-premise deployment via Docker Compose: runs on a local network, no internet dependency",
          "Multi-class enrollment with an auto-generated sequential code per year",
          "Weekly attendance grid with auto-save and a cell that cycles between present/absent",
          "Class diary with grades and evaluations, linked to the class through a (class, date) key",
          "Automated WhatsApp communication via a custom Baileys-based microservice",
          "Absence alerts and upcoming-class generation running on their own every day via cron",
          "Role-based access control, including dedicated roles for lawyer and doctor",
          "Social benefits module: cultural passport, referrals, legal advisory and medical care",
          "PDF student records and a dashboard with occupancy and upcoming birthdays",
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
    readMore: "Read more",
    readLess: "Read less",
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
    tagline: "Secure backend, from the database to the API.",
    navHeading: "Navigation",
    connectHeading: "Connect",
    rights: "Backend Developer",
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
    education: "Diplomas",
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
      'Construyo <strong>APIs robustas y sistemas web</strong> con Java/Spring Boot, aplicando una mentalidad de <strong>ciberseguridad</strong> a cada decisión de arquitectura, para entregar software que perdura y en el que se puede confiar.',
    ctaPrimary: "Trabajemos juntos",
    ctaSecondary: "Ver mis proyectos",
    ctaCv: "Descargar CV",
    stats: [
      { value: "5+", label: "años en TI y Dev" },
      { value: "8", label: "certificaciones" },
      { value: "2", label: "productos en producción" },
    ],
    terminal: {
      fileLabel: "Backend.java",
      fields: [
        { name: "stack", value: "Java + Spring Boot" },
        { name: "focus", value: "multi-tenant" },
        { name: "domain", value: "white-label SaaS" },
      ],
      result: "deploy --confidence",
    },
  },
  about: {
    heading: "Sobre mí",
    paragraphs: [
      "Desarrollador backend enfocado en Java/Spring Boot y Python/Django, diseñando arquitecturas, bases de datos y APIs para sistemas hechos para durar. Tengo experiencia práctica con proyectos reales, desde plataformas de impacto social hasta sistemas en producción, siempre con una mentalidad orientada a la seguridad y al código bien diseñado.",
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
          "Diseñar y desarrollar el backend de Core, plataforma white-label multi-vertical en Java 25 y Spring Boot 4, estructurada como monolito modular con Spring Modulith sobre PostgreSQL y Redis.",
          "Implementar aislamiento multi-tenant con Row-Level Security, autenticación con Argon2id, pagos PIX vía PagBank con webhooks validados por firma y patrón Outbox para consistencia de eventos.",
          "Sostener la calidad con más de 100 clases de test y cerca de 540 casos en JUnit 5 y Testcontainers, reglas de arquitectura verificadas con ArchUnit y CI en GitHub Actions con tests de contrato en cada push.",
          "Instrumentar la observabilidad de la plataforma con Actuator y Micrometer, exponiendo métricas a Prometheus y dashboards en Grafana segmentados por tenant, con reglas de alerta para caídas y fallos de pago.",
          "Desarrollar el frontend de un ERP multi-tenant y multimarca en Next.js 15 y React 19, definiendo contratos de API con el equipo de frontend y documentándolos en Swagger/OpenAPI.",
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
    educationHeading: "Diplomas",
    educationSubtitle: "Base académica en desarrollo de software y tecnologías emergentes",
    education: {
      anhanguera: {
        degree: "Posgrado en Docencia en Educación Superior",
        description: "Enfocado en didáctica, metodologías de enseñanza y práctica docente en educación superior.",
      },
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
        title: "Corefood — Plataforma para Restaurantes",
        tagline: "Sistema de Pedidos White-label",
        description:
          "Plataforma de pedidos propia para restaurantes, creada como alternativa a los marketplaces de delivery: en lugar de pagar comisión por pedido y ceder la relación con el cliente, el restaurante opera bajo su propia marca, con su carta, base de clientes y una app móvil con su propia identidad. La tecnología detrás pertenece a Coreon. Backend en Java con Spring Boot y PostgreSQL, con aislamiento multi-tenant vía Row-Level Security, integrado con una aplicación móvil ya existente mediante un contrato de API definido junto con el equipo de frontend. Autenticación propia con Argon2id y rotación de refresh token, pagos vía PIX con webhook validado por firma, motor de envío configurable y un patrón outbox dentro del propio PostgreSQL para la confiabilidad de los pedidos. Responsable de la arquitectura multi-tenant, autenticación, catálogo y todo el flujo de pedidos.",
      },
      simmias: {
        title: "Simmias Lite — Gestión Educativa",
        tagline: "Sistema On-Premise para Casas de Cultura",
        description:
          "Sistema completo de gestión educativa para Casas de Cultura, que funciona on-premise en red local, sin depender de internet. Backend en Django + DRF, frontend en React con Vite, PostgreSQL, y un microservicio propio vía Baileys para automatizar la comunicación por WhatsApp. Cubre matrícula, clases, diario de clase, asistencia, informes y una línea de beneficios sociales (pasaporte cultural, derivaciones, asesoría jurídica y atención médica). En producción real en la Casa da Cultura, hoy evolucionando hacia una versión SaaS multi-tenant.",
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
        title: "Corefood — Plataforma para Restaurantes",
        role: "Desarrollador Backend",
        projectType: "Plataforma SaaS white-label para el sector de alimentación",
        problem:
          "Los restaurantes que venden a través de marketplaces de delivery pagan comisiones que consumen una parte relevante de la facturación y, lo que es más grave, no conservan la relación ni los datos de sus propios clientes: la base pertenece al marketplace. Un canal de ventas propio resolvería el problema, pero construir una aplicación desde cero, con backend, autenticación, pagos y un equipo de mantenimiento, es inviable para un restaurante individual.\n\nCoreon veía este mismo problema repetirse en conversaciones con clientes potenciales del sector de alimentación: todos querían dejar de depender del marketplace, pero ninguno tenía estructura para desarrollar y mantener una solución propia. Tenía más sentido resolverlo una sola vez, como plataforma, que reconstruir el mismo problema en cada nuevo restaurante.",
        solution:
          "Una plataforma white-label en la que un único backend atiende a múltiples restaurantes, cada uno con marca, carta y base de clientes propias: el restaurante opera como si la aplicación fuera suya, pero la tecnología pertenece a Coreon.\n\nBackend construido en Java con Spring Boot, PostgreSQL y un entorno en contenedores con Docker. La aplicación móvil ya existía con datos simulados, así que el desarrollo partió de un contrato de API acordado con el equipo de frontend, sin romper lo que ya estaba construido.\n\nLa decisión central fue el modelo de multi-tenancy: base de datos por tenant aísla más, pero encarece el mantenimiento a medida que crece la base de clientes; esquema por tenant es un término medio que hereda la complejidad de ambos. Elegí una base de datos compartida con Row-Level Security de PostgreSQL, reforzada en dos capas: la aplicación resuelve el tenant a partir de la solicitud, y la base de datos aplica RLS en las tablas sensibles, hoy 27 de las 31. El white-label no depende de lógica en tiempo de ejecución: cada marca recibe su propio build de la app, con tema y contenido definidos en la compilación.",
        features: [
          "Autenticación con Argon2id y JWT propio, con rotación de refresh token y revocación de toda la familia ante reuso detectado",
          "Aislamiento multi-tenant reforzado por Row-Level Security en PostgreSQL, con el tenant resuelto por header/subdominio",
          "White-label mediante build de la app móvil: tema, logo y contenido propios por marca",
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
          "Las escuelas públicas en Brasil suelen enfrentar datos fragmentados, ausencia de dashboards y visibilidad limitada sobre las brechas de aprendizaje de los alumnos. Los profesionales de la educación normalmente dependen de hojas de cálculo o procesos manuales, lo que dificulta identificar alumnos en riesgo, tendencias en asignaturas o cursos específicos, clases con déficits estructurales de desempeño y patrones geográficos de dificultades educativas.\n\nEl problema empeora a medida que la red crece: una hoja de cálculo por clase funciona para una escuela, pero no escala a una secretaría de educación con decenas de unidades, y comparar el desempeño entre escuelas exige consolidar datos manualmente, un proceso lento y propenso a errores. Se necesitaba una solución de BI centralizada, con datos estructurados desde el origen, para apoyar decisiones basadas en evidencia en lugar de percepción.",
        solution:
          "Diseñé e implementé una plataforma completa de BI con una API Django REST para acceso estructurado y seguro a los datos, un frontend Vue.js + Vite para una interfaz rápida y responsiva, dashboards interactivos con Plotly.js, visualizaciones geoespaciales con Leaflet, autenticación JWT para acceso protegido y un generador de datos sintéticos para desarrollo y demos. El sistema permite que profesores, coordinadores y administradores visualicen tendencias, comparen el desempeño entre clases o escuelas y detecten brechas de aprendizaje de forma temprana.\n\nEl modelo de datos separa el desempeño por asignatura (matemáticas, portugués, ciencias) y vincula cada registro a una clase, escuela y fecha del examen, permitiendo cruzar filtros geográficos y temporales sin reprocesar los datos en la visualización. Como proyecto de fin de curso, también sirvió para validar decisiones de arquitectura full-stack desde cero, de la API al mapa interactivo, sin depender de un equipo.",
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
      simmias: {
        title: "Simmias Lite — Gestión Educativa On-Premise",
        role: "Desarrollador Full Stack",
        projectType: "Sistema de gestión educativa, en producción real en una Casa de Cultura",
        problem:
          "La Casa da Cultura necesitaba un sistema para gestionar matrículas, clases, asistencia y diario de clase, pero la sede no tiene internet estable: una solución en la nube quedaría fuera de servicio con frecuencia, haciendo inviable su uso diario. Además de la gestión pedagógica, la organización también presta beneficios sociales (pasaporte cultural, derivaciones, asesoría jurídica, atención médica) que antes se controlaban en hojas de cálculo sueltas, sin historial centralizado ni comunicación automatizada con las familias.\n\nComo voluntario de tecnología de la casa, vi de cerca el costo de esto: ausencias que pasaban desapercibidas, avisos que dependían de que alguien se acordara de llamar, y ninguna visión consolidada de quién estaba siendo atendido por los diferentes programas sociales al mismo tiempo.",
        solution:
          "Un sistema Django + DRF con frontend React/Vite, diseñado para funcionar on-premise: una computadora de la propia sede actúa como servidor, y las demás máquinas acceden por el navegador en la red local, sin depender de internet. El despliegue es vía Docker Compose, con seis servicios orquestados, incluyendo PostgreSQL, el backend vía gunicorn, un worker cron que verifica ausencias y genera próximas clases cada 24h, y un Nginx como único servicio con puerto expuesto.\n\nEl dominio pedagógico resultó más complejo de lo que parecía: clase, horario, sesión y profesor son registros separados y relacionados entre sí, un alumno puede estar matriculado en varias clases a la vez, y la asistencia se registra en una grilla semanal con auto-guardado, donde cada celda cicla entre sin registrar, presente y ausente.\n\nLa comunicación con las familias se automatiza por WhatsApp mediante un microservicio propio construido con Baileys, más liviano que alternativas que dependen de Chromium. El sistema dispara alertas de ausencia y mensajes de cumpleaños solo, todos los días. El acceso se controla por rol, incluyendo roles dedicados para abogado y médico en los módulos de beneficios sociales.\n\nEs el proyecto del que más orgulloso estoy: empecé como el voluntario de tecnología de la casa, entendí el problema de cerca, y lo llevé solo desde el modelado de datos hasta el despliegue en producción. Hoy está en uso real, atendiendo a personas de verdad, y se convirtió en la base de una versión SaaS multi-tenant en desarrollo.",
        features: [
          "Despliegue on-premise vía Docker Compose: funciona en red local, sin depender de internet",
          "Matrícula multi-clase con código secuencial automático por año",
          "Grilla semanal de asistencia con auto-guardado y celda que cicla entre presente/ausente",
          "Diario de clase con evaluaciones y notas, vinculado a la clase mediante la clave (clase, fecha)",
          "Comunicación automatizada por WhatsApp vía microservicio propio con Baileys",
          "Alertas de ausencia y generación de próximas clases funcionando solas cada día vía cron",
          "Control de acceso por rol, incluyendo roles dedicados para abogado y médico",
          "Módulo de beneficios sociales: pasaporte cultural, derivaciones, asesoría jurídica y atención médica",
          "Ficha del alumno en PDF e informes de panel con ocupación y próximos cumpleaños",
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
    readMore: "Ver más",
    readLess: "Ver menos",
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
    tagline: "Backend seguro, de la base de datos a la API.",
    navHeading: "Navegación",
    connectHeading: "Conecta",
    rights: "Desarrollador Backend",
  },
}

export const dictionaries: Record<"pt" | "en" | "es", Dictionary> = { pt, en, es }
