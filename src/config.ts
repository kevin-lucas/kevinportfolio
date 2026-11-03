export const siteConfig = {
  name: "Kevin Lucas",
  title: "Engenheiro de Software orientado a produto",
  description:
    "Kevin Lucas, engenheiro de software sênior especialista em apps Android e iOS. Crio aplicativos que ajudam o seu negócio a vender mais, operar melhor e gastar menos para manter.",
  accentColor: "#A3E635",
  // Metadados de SEO (Open Graph, Twitter Cards e JSON-LD) usados no <head> de index.astro.
  seo: {
    ogImage: "/og.png", // 1200x630
    ogImageAlt: "Kevin Lucas — Engenheiro de Software orientado a produto",
    locale: "pt_BR",
    knowsAbout: [
      "System Design",
      "Clean Architecture",
      "Modularização",
      "Scalable Software Architecture",
      "Product-Oriented Software Engineering",
      "Kotlin Multiplatform",
      "Android",
    ],
    // Vira <meta name="keywords"> e é somado ao knowsAbout do JSON-LD.
    keywords: [
      // Linguagem e plataforma
      "Kotlin", "Android SDK", "Jetpack Compose", "Android Studio", "Kotlin Coroutines", "Kotlin Flow", "Ktor",
      "Kotlin Multiplatform", "Swift", "Gradle",
      // Arquitetura
      "MVVM", "MVI", "Clean Architecture", "Design Patterns", "SOLID", "System Design", "Modularização",
      "Dagger Hilt", "Koin", "Dependency Injection",
      // Performance
      "Android Performance", "Memory Leaks", "LeakCanary", "Profiler",
      // Dados e rede
      "Offline-First", "Room Database", "SQLite", "DataStore", "REST API", "Retrofit", "OkHttp",
      // Entrega e observabilidade
      "CI/CD", "GitHub Actions", "Fastlane", "Bitrise", "Firebase", "Firebase Crashlytics", "Sentry",
      // Testes
      "JUnit", "Mockk", "Espresso", "Unit Testing", "UI Testing",
      // Google Play e recursos do sistema
      "Google Play Console", "Google Play Services", "Push Notifications", "Firebase Cloud Messaging", "Deep Linking",
      "ProGuard", "R8",
      // Desenvolvimento com IA
      "Inteligência Artificial", "Desenvolvimento assistido por IA", "AI-Driven Development", "Claude Code",
      "GitHub Copilot", "LLM", "Engenharia de Prompt", "Agentes de IA", "Model Context Protocol (MCP)",
    ],
    address: { locality: "Belo Horizonte", region: "MG", country: "BR" },
  },
  social: {
    email: "contato@kevinlucas.com.br",
    linkedin: "https://www.linkedin.com/in/keviinlucas/",
    twitter: "",
    github: "https://github.com/kevin-lucas",
  },
  // Dados da empresa exibidos no rodapé (some se legalName ficar vazio).
  company: {
    legalName: "Kevin Lucas Alves Fonseca Consultoria em Tecnologia da Informação LTDA",
    cnpj: "44.635.029/0001-15",
  },
  hero: {
    badge: "Disponível para novos produtos",
    title: "Engenheiro de software focado em",
    highlight: "produtos que geram resultado",
    text: "Crio aplicativos seguros, estáveis e prontos para crescer junto com o seu negócio desde o primeiro dia. O resultado é um produto que vende mais, deixa a operação mais rápida e custa menos para manter.",
    primary: { label: "Ver resultados", link: "/#resultados" },
    // Link vazio usa o agendamento (contact.bookingUrl).
    secondary: { label: "Agendar conversa de 20 min", link: "" },
    stats: [
      { value: "8+", label: "anos entregando produtos" },
      { value: "200 mil", label: "usuários em produção" },
      { value: "1.000+", label: "empresas operando no produto" },
    ],
    chips: ["Apps Android e iOS", "Arquitetura sólida", "Pronto para crescer"],
    image: "/images/about-arquitetura.svg",
  },
  // icon: "chart" | "mobile" | "layers" | "shield"
  services: [
    {
      icon: "chart",
      title: "Produtos que aceleram receita",
      text: "Jornadas como cadastro, pagamento e negociação pensadas para o cliente ir até o fim, com resultados acompanhados no uso real. Na Fretebras, o chat e as chamadas dentro do app colocaram mais de 1.000 empresas e motoristas negociando sem sair do produto.",
    },
    {
      icon: "layers",
      title: "Novidades mais rápidas, sem quebrar o que funciona",
      text: "Organizo o app em partes independentes, que se encaixam como peças: a equipe trabalha em várias frentes ao mesmo tempo, cada mudança fica isolada e um único código atende Android e iOS (com Kotlin Multiplatform), em vez de dois apps para manter.",
    },
    {
      icon: "shield",
      title: "Qualidade e segurança para crescer sem retrabalho",
      text: "Testes automáticos que pegam erros antes do usuário, dados protegidos e servidores escolhidos pelo custo-benefício. Modernizei a Conta Digital, usada por 200 mil pessoas, e reconstruí a Central de Pendências, que levou 95% dos cadastros a ficarem verificados.",
    },
  ],
  about: {
    title: "8 anos construindo apps que",
    highlight: "crescem",
    text: "Sou desenvolvedor mobile sênior, especialista em apps Android e em apps que rodam no Android e no iPhone com um único código (Kotlin Multiplatform). Cuido do projeto de ponta a ponta: da estrutura do app e da conexão com os sistemas da empresa até a publicação na Google Play Store. Já liderei a modernização de apps grandes em pleno uso, com código bem cuidado, testes e entregas frequentes. Meu objetivo é entregar apps rápidos, estáveis e fáceis de evoluir.",
    image: "/images/kevin-lucas.webp",
    cvLink: "/cv/kevin-lucas-cv.pdf",
  },
  // Casos no formato problema → solução → resultado, com o número em destaque.
  cases: [
    {
      metric: "200 mil",
      metricLabel: "pessoas usando a Conta Digital modernizada",
      company: "Fretebras",
      title: "Conta Digital",
      problem: "Um app financeiro grande, em pleno uso, que precisava evoluir sem colocar em risco quem dependia dele todos os dias.",
      solution: "Modernizei o app em partes independentes, com testes automáticos e entregas frequentes, sem parar a operação.",
      result: "Conta Digital estável e mais fácil de evoluir, atendendo 200 mil pessoas.",
    },
    {
      metric: "95%",
      metricLabel: "dos cadastros verificados",
      company: "Deal Technologies",
      title: "Central de Pendências",
      problem: "Motoristas travavam no cadastro: pendências difíceis de entender e resolver pelo app deixavam contas sem verificação.",
      solution: "Reconstruí a Central de Pendências com um passo a passo claro para o motorista resolver tudo sem sair do app.",
      result: "95% dos cadastros passaram a ficar verificados.",
    },
    {
      metric: "Offline",
      metricLabel: "funciona mesmo sem internet",
      company: "Gesuas",
      title: "Primeiro app da empresa",
      problem: "Equipes da Assistência Social trabalham em campo, muitas vezes sem internet, e a empresa ainda não tinha app.",
      solution: "Criei o app do zero, guardando os dados no aparelho e sincronizando quando a conexão volta.",
      result: "App publicado na Play Store e usado em campo mesmo sem sinal.",
    },
  ],
  experienceIntro:
    "8 anos criando software, da primeira ideia ao app nas mãos dos usuários pela Google Play Store.",
  experience: [
    {
      period: "2024 - Atual",
      role: "Desenvolvedor Android",
      company: "Fretebras",
      text: "App Empresas para Android e iOS com um único código (Kotlin Multiplatform), modernização da Conta Digital usada por 200 mil pessoas e chat e chamadas dentro do app usados por mais de 1.000 empresas e motoristas.",
    },
    {
      period: "2022 - 2024",
      role: "Desenvolvedor Android",
      company: "Deal Technologies",
      text: "Reconstrução da Central de Pendências do app de motoristas, que levou 95% dos cadastros a ficarem verificados, e negociação de fretes completa pelo chat.",
    },
    {
      period: "2021 - 2022",
      role: "Desenvolvedor Android",
      company: "Gesuas",
      text: "Primeiro app da empresa, voltado à Assistência Social, criado do zero até a publicação na Play Store e preparado para funcionar mesmo sem internet.",
    },
    {
      period: "2019 - 2020",
      role: "Desenvolvedor Júnior",
      company: "Diefra Engenharia",
      text: "Desenvolvimento de sistemas web e Android, mais de 100 melhorias no sistema de gestão (ERP) da empresa e treinamentos para mais de 200 colaboradores e clientes.",
    },
    {
      period: "2018 - 2019",
      role: "Estágio TI",
      company: "Luiza Barcelos",
      text: "App Android para controle de tickets de refeição, que acabou com os gastos com tickets em papel, além de suporte ao sistema de gestão (ERP) e à infraestrutura de TI.",
    },
  ],
  skills: [
    { name: "Kotlin / Android", percent: 95 },
    { name: "Jetpack Compose", percent: 90 },
    { name: "Kotlin Multiplatform", percent: 90 },
    { name: "MVVM / Clean Architecture", percent: 90 },
    { name: "Firebase", percent: 85 },
    { name: "Swift / iOS", percent: 65 },
  ],
  // images[0] é a capa exibida no card; todas aparecem na galeria.
  portfolio: [
    {
      name: "Fretebras",
      category: "App Android e iOS",
      images: [
        "/images/portfolio/fretebras-2.jpg",
        "/images/portfolio/fretebras-3.jpg",
        "/images/portfolio/fretebras-4.jpg",
      ],
      // Opcional: link do app na loja, exibido no card e na galeria.
      link: "https://play.google.com/store/apps/details?id=br.lgfelicio&hl=pt_BR",
    },
    {
      name: "Gesuas Mobile",
      category: "App Android",
      images: [
        "/images/portfolio/gesuas-1.jpg",
        "/images/portfolio/gesuas-2.jpg",
        "/images/portfolio/gesuas-3.jpg",
        "/images/portfolio/gesuas-4.jpg",
      ],
      link: "https://play.google.com/store/apps/details?id=com.jungle.gesuasmobile&hl=pt_BR",
    },
  ],
  contact: {
    title: "Vamos construir algo",
    highlight: "juntos",
    text: "Tem um app em mente ou um produto que precisa evoluir? Agende 20 minutos comigo e saia da conversa com os próximos passos.",
    email: "contato@kevinlucas.com.br",
    // Agendamento direto (Cal.com, Calendly ou Google Agenda). Vazio usa o WhatsApp/contato.
    bookingUrl: "https://cal.com/kevin-lucas-dyo0oh/20-minutos",
    // Número com DDD, exibido como está; o link https://wa.me/ adiciona o 55 (Brasil) e usa só os dígitos.
    whatsapp: "(31) 98651-2610",
    address: "Belo Horizonte, MG — Brasil",
    // Endpoint do formulário (ex.: https://formspree.io/f/xxxx). Vazio esconde o formulário.
    formAction: "",
  },
  // Página /startups (some do menu e do sitemap se ficar vazio).
  startups: {
    badge: "Para startups",
    title: "Do zero ao app nas lojas,",
    highlight: "sem desperdiçar runway",
    text: "Três formas de trabalhar juntos, com prazo e escopo fechados. Escolha a que encaixa no momento da sua startup, ou agende 20 minutos e decidimos juntos.",
    // price é opcional (ex.: "a partir de R$ 5.000"); vazio não aparece.
    offers: [
      {
        name: "Diagnóstico",
        duration: "1 semana",
        for: "Para quem já tem um app (ou um plano) e quer saber onde está o risco antes de investir mais.",
        includes: [
          "Revisão do app, da arquitetura e do processo de entrega",
          "Lista de riscos e gargalos priorizada por impacto no negócio",
          "Plano de ação para os próximos 90 dias",
          "Reunião de apresentação com os fundadores",
        ],
        price: "",
      },
      {
        name: "Sprint de MVP",
        duration: "4 a 6 semanas",
        for: "Para quem precisa colocar a primeira versão nas mãos dos usuários e validar rápido.",
        includes: [
          "Definição do escopo mínimo junto com você",
          "App Android e iOS com um único código (Kotlin Multiplatform)",
          "Publicação na Google Play e na App Store",
          "Métricas e monitoramento de erros desde o primeiro dia",
          "Entregas semanais para você acompanhar",
        ],
        price: "",
        featured: true,
      },
      {
        name: "Consultoria",
        duration: "Pacote de horas",
        for: "Para quem já tem um app ou um time e precisa de um engenheiro sênior em pontos específicos.",
        includes: [
          "Horas mensais combinadas, usadas conforme a sua necessidade",
          "Revisão de código e de arquitetura",
          "Apoio em decisões técnicas e de produto",
          "Entregas pontuais, como uma funcionalidade, uma integração ou uma correção crítica",
        ],
        price: "",
      },
    ],
  },
};
