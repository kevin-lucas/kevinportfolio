export const siteConfig = {
  name: "Kevin Lucas",
  title: "Engenheiro de Software orientado a produto",
  description:
    "Kevin Lucas, engenheiro de software sênior orientado a produto. System Design, Clean Architecture e modularização para escalar receita e reduzir custo operacional.",
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
  hero: {
    badge: "Disponível para novos produtos",
    title: "Engenheiro de software focado em",
    highlight: "produtos que geram resultado",
    text: "Projeto e entrego software com arquitetura modular, segurança e escala desde o primeiro deploy, para o seu negócio vender mais, operar mais rápido e gastar menos com engenharia e infraestrutura.",
    primary: { label: "Ver resultados", link: "#projetos" },
    secondary: { label: "Conversar sobre seu produto", link: "#contato" },
    stats: [
      { value: "8+", label: "anos entregando produtos" },
      { value: "200 mil", label: "usuários em produção" },
      { value: "1.000+", label: "empresas operando no produto" },
    ],
    chips: ["System Design", "Clean Architecture", "Modularização"],
    image: "/images/about-arquitetura.svg",
  },
  // icon: "chart" | "mobile" | "layers" | "shield"
  services: [
    {
      icon: "chart",
      title: "Produtos que aceleram receita",
      text: "Fluxos de negócio (onboarding, pagamento, negociação) desenhados para converter e medidos em produção. Na Fretebras, chat e chamadas in-app colocaram mais de 1.000 empresas e motoristas negociando sem sair do produto.",
    },
    {
      icon: "layers",
      title: "Velocidade de evolução com modularização",
      text: "System Design e Clean Architecture com módulos de fronteiras claras: times entregam em paralelo, cada mudança tem impacto contido e a lógica em Kotlin Multiplatform serve Android e iOS com um único código.",
    },
    {
      icon: "shield",
      title: "Qualidade, segurança e escala sem retrabalho",
      text: "Testes automatizados, camadas isoladas e decisões de infraestrutura avaliadas pelo custo. Migrei a Conta Digital, usada por 200 mil usuários, para Kotlin nativo e reconstruí a Central de Pendências, que levou a base verificada a 95%.",
    },
  ],
  about: {
    title: "8 anos construindo apps que",
    highlight: "escalam",
    text: "Desenvolvedor Mobile Sênior focado em Android nativo e Kotlin Multiplatform. Atuo de ponta a ponta, do desenho da arquitetura e integração de APIs REST até a governança do deploy na Google Play Store, liderando migrações complexas com Clean Code, testes e metodologias ágeis. Meu objetivo é elevar a qualidade técnica dos projetos e resolver desafios de performance para entregar produtos com eficiência.",
    image: "/images/kevin-lucas.webp",
    cvLink: "/cv/kevin-lucas-cv.pdf",
  },
  experienceIntro:
    "8 anos em engenharia de software, do desenho da arquitetura ao produto em produção na Google Play Store.",
  experience: [
    {
      period: "2024 - Atual",
      role: "Desenvolvedor Android",
      company: "Fretebras",
      text: "App Empresas em Kotlin Multiplatform, migração da Conta Digital para Kotlin nativo (200 mil usuários) e chat e chamadas in-app usados por mais de 1.000 empresas e motoristas.",
    },
    {
      period: "2022 - 2024",
      role: "Desenvolvedor Android",
      company: "Deal Technologies",
      text: "Reconstrução da Central de Pendências do app de motoristas, elevando a base verificada para 95%, e fluxo completo de negociação de fretes via chat.",
    },
    {
      period: "2021 - 2022",
      role: "Desenvolvedor Android",
      company: "Gesuas",
      text: "Primeiro app da empresa para Assistência Social, de ponta a ponta até a Play Store, com Retrofit, Coroutines e Room offline-first.",
    },
    {
      period: "2019 - 2020",
      role: "Desenvolvedor Júnior",
      company: "Diefra Engenharia",
      text: "Desenvolvimento full-stack e Android, mais de 100 melhorias no ERP e treinamentos técnicos para mais de 200 colaboradores e clientes.",
    },
    {
      period: "2018 - 2019",
      role: "Estágio TI",
      company: "Luiza Barcelos",
      text: "App Android para controle de tickets de refeição, eliminando custos com insumos físicos, além de suporte a ERP e infraestrutura.",
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
      category: "Kotlin Multiplatform e Android Nativo",
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
      category: "Android Nativo",
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
    text: "Tem um app em mente ou uma vaga para conversar? Mande uma mensagem e eu respondo o quanto antes.",
    email: "contato@kevinlucas.com.br",
    // Número com DDD, exibido como está; o link https://wa.me/ adiciona o 55 (Brasil) e usa só os dígitos.
    whatsapp: "(31) 98651-2610",
    address: "Belo Horizonte, MG — Brasil",
    // Endpoint do formulário (ex.: https://formspree.io/f/xxxx). Vazio esconde o formulário.
    formAction: "",
  },
};
