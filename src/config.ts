export const siteConfig = {
  name: "Kevin Lucas",
  title: "Desenvolvedor Mobile Sênior",
  description:
    "Kevin Lucas — Desenvolvedor Mobile Sênior com 8 anos de experiência em Android nativo e Kotlin Multiplatform (KMP).",
  accentColor: "#A3E635",
  social: {
    email: "kevinlucas.tec.info@gmail.com",
    linkedin: "https://www.linkedin.com/in/keviinlucas/",
    twitter: "",
    github: "https://github.com/kevin-lucas",
  },
  hero: {
    badge: "Disponível para novos desafios",
    title: "Desenvolvedor Mobile focado em",
    highlight: "Android & Kotlin Multiplatform",
    text: "Apps escaláveis em Kotlin e Jetpack Compose, com lógica compartilhada entre Android e iOS e estabilidade em produção para centenas de milhares de usuários.",
    primary: { label: "Ver projetos", link: "#projetos" },
    secondary: { label: "Fale comigo", link: "#contato" },
    stats: [
      { value: "8+", label: "anos de experiência" },
      { value: "200 mil", label: "usuários impactados" },
      { value: "1.000+", label: "empresas e motoristas" },
    ],
    chips: ["Kotlin", "Jetpack Compose", "KMP"],
    image: "/images/hero-1.svg",
  },
  // icon: "mobile" | "layers" | "shield"
  services: [
    {
      icon: "mobile",
      title: "Android Nativo",
      text: "Aplicativos em Kotlin com Jetpack Compose, MVVM, Coroutines e Room, pensados para performance e escala.",
    },
    {
      icon: "layers",
      title: "Kotlin Multiplatform",
      text: "Arquiteturas KMP/KMM que compartilham lógica entre Android e iOS, com integração nativa em Swift.",
    },
    {
      icon: "shield",
      title: "Arquitetura & Qualidade",
      text: "Clean Architecture, SOLID, testes unitários e A/B, e AI-Driven Development com Claude Code e Copilot.",
    },
  ],
  about: {
    title: "8 anos construindo apps que",
    highlight: "escalam",
    text: "Desenvolvedor Mobile Sênior focado em Android nativo e Kotlin Multiplatform. Atuo de ponta a ponta, da engenharia de requisitos e integração de APIs REST até a governança do deploy na Google Play Store, liderando migrações complexas com Clean Code, testes e metodologias ágeis. Meu objetivo é elevar a qualidade técnica dos projetos e resolver desafios de performance para entregar produtos com eficiência.",
    image: "/images/about.svg",
    cvLink: "/cv/kevin-lucas-cv.pdf",
  },
  experienceIntro:
    "8 anos em engenharia de software, atuando em squads ágeis do levantamento de requisitos ao deploy na Google Play Store.",
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
      name: "Fretebras Empresas",
      category: "Kotlin Multiplatform",
      images: ["/images/portfolio/projeto-1-1.svg", "/images/portfolio/projeto-1-2.svg", "/images/portfolio/projeto-1-3.svg"],
    },
    {
      name: "Chat e Chamadas in-app",
      category: "Kotlin Multiplatform",
      images: ["/images/portfolio/projeto-2-1.svg", "/images/portfolio/projeto-2-2.svg", "/images/portfolio/projeto-2-3.svg"],
    },
    {
      name: "Conta Digital B2C",
      category: "Android Nativo",
      images: ["/images/portfolio/projeto-3-1.svg", "/images/portfolio/projeto-3-2.svg", "/images/portfolio/projeto-3-3.svg"],
    },
    {
      name: "Central de Pendências",
      category: "Android Nativo",
      images: ["/images/portfolio/projeto-4-1.svg", "/images/portfolio/projeto-4-2.svg", "/images/portfolio/projeto-4-3.svg"],
    },
    {
      name: "Gesuas Mobile",
      category: "Android Nativo",
      images: ["/images/portfolio/projeto-5-1.svg", "/images/portfolio/projeto-5-2.svg", "/images/portfolio/projeto-5-3.svg"],
    },
    {
      name: "App de Tickets de Refeição",
      category: "Android Nativo",
      images: ["/images/portfolio/projeto-6-1.svg", "/images/portfolio/projeto-6-2.svg", "/images/portfolio/projeto-6-3.svg"],
    },
  ],
  contact: {
    title: "Vamos construir algo",
    highlight: "juntos",
    text: "Tem um app em mente ou uma vaga para conversar? Mande uma mensagem e eu respondo o quanto antes.",
    email: "kevinlucas.tec.info@gmail.com",
    // Número com DDD, exibido como está; o link https://wa.me/ adiciona o 55 (Brasil) e usa só os dígitos.
    whatsapp: "(31) 98651-2610",
    address: "Belo Horizonte, MG — Brasil",
    // Endpoint do formulário (ex.: https://formspree.io/f/xxxx). Vazio esconde o formulário.
    formAction: "",
  },
};
