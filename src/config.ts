export const siteConfig = {
  name: "Kevin Lucas",
  title: "Desenvolvedor Mobile",
  description: "Portfólio de Kevin Lucas — Desenvolvedor Mobile com 5+ anos de experiência em Android nativo e Kotlin Multiplatform.",
  accentColor: "#08D665",
  social: {
    email: "kevinlucas.tec.info@gmail.com",
    linkedin: "https://www.linkedin.com/in/kevinlucasdev/",
    twitter: "",
    github: "https://github.com/kevin-lucas",
  },
  aboutMe:
    "Desenvolvedor Mobile com foco em Kotlin Multiplatform, construindo arquiteturas que compartilham lógica de negócio entre Android e iOS para acelerar o time-to-market. Sólida base em Android nativo com Jetpack Compose, MVVM e Clean Architecture, atuando em squads ágeis do desenvolvimento ao deploy na Play Store e Apple Store.",
  skills: [
    "Kotlin",
    "Android SDK",
    "Jetpack Compose",
    "Kotlin Multiplatform (KMP/KMM)",
    "Java",
    "MVVM",
    "Clean Architecture",
    "Coroutines",
    "RxJava",
    "Dagger Hilt",
    "Firebase",
    "Room Database",
    "REST APIs",
    "Git",
    "SQL",
    "Linux",
    "Scrum",
  ],
  projects: [
    {
      name: "App Fretebras - Empresas",
      description:
        "Aplicativo multiplataforma (Android e iOS) desenvolvido do zero com Kotlin Multiplatform, incluindo chat em tempo real e chamadas de voz in-app entre empresas e motoristas.",
      link: "https://play.google.com/store/apps/details?id=com.frete.shipper&pcampaignid=web_share",
      skills: ["Kotlin", "KMP/KMM", "Jetpack Compose", "Swift", "Firebase"],
    },
    {
      name: "App Fretebras - Central de Pendências",
      description:
        "Funcionalidade crítica no app Android para motoristas focada em mitigação de fraudes, lançada para centenas de milhares de usuários com alta crash-free rate em produção.",
      link: "https://play.google.com/store/apps/details?id=br.lgfelicio&pcampaignid=web_share",
      skills: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Clean Architecture"],
    },
    {
      name: "Gesuas Mobile",
      description:
        "Primeira versão do aplicativo mobile da empresa para o segmento de Assistência Social, desenvolvido do zero (0 a 1) e publicado na Google Play Store.",
      link: "https://play.google.com/store/apps/details?id=com.jungle.gesuasmobile&pcampaignid=web_share",
      skills: ["Kotlin", "Android SDK", "MVVM", "Coroutines", "Retrofit", "Room Database"],
    },
    {
      name: "App de Gestão de Tickets",
      description:
        "Aplicativo Android nativo desenvolvido por iniciativa própria para automatizar o controle de tickets de refeição, eliminando custos com insumos físicos e ganho de eficiência operacional.",
      link: "",
      skills: ["Android SDK", "Java", "Kotlin"],
    },
  ],
  experience: [
    {
      company: "Fretebras",
      title: "Desenvolvedor Android",
      dateRange: "Ago 2024 - Atualmente",
      bullets: [
        "Liderança técnica na implementação de arquitetura multiplataforma (Android e iOS) com Kotlin Multiplatform (KMM), desde a concepção até o deploy em produção.",
        "Engenharia de funcionalidades compartilhadas de autenticação, permissões e notificações com lógica comum em KMM integrada a Swift (iOS) e Kotlin (Android).",
        "Desenvolvimento de chat em tempo real e chamadas de voz in-app entre empresas e motoristas, otimizando a experiência de negociação na plataforma.",
        "Aplicação rigorosa de MVVM, Clean Architecture e princípios SOLID para máxima reutilização de código e modularização.",
      ],
    },
    {
      company: "Deal Technologies",
      title: "Desenvolvedor Android",
      dateRange: "Nov 2022 - Mar 2024",
      bullets: [
        "Desenvolvimento da Central de Pendências para aplicativo Android nativo voltado a motoristas, reduzindo consideravelmente fraudes na plataforma.",
        "Lançamento bem-sucedido para centenas de milhares de usuários, garantindo alta estabilidade em produção e baixo índice de crashes.",
        "Estruturação da suíte de Testes Unitários e criação da documentação técnica da arquitetura do sistema.",
        "Aplicação de padrões MVVM, Clean Architecture, Dagger Hilt, Firebase e Testes A/B.",
      ],
    },
    {
      company: "Gesuas",
      title: "Desenvolvedor Android",
      dateRange: "Jun 2021 - Fev 2022",
      bullets: [
        "Responsável pelo ciclo completo de desenvolvimento e lançamento da primeira versão do aplicativo mobile da empresa na Google Play Store.",
        "Definição da arquitetura MVVM com organização modular e separação de responsabilidades para escalabilidade e manutenibilidade.",
        "Integração com APIs REST via Retrofit, concorrência assíncrona com Coroutines e persistência local com Room Database.",
        "Participação ativa em levantamento de requisitos, testes e alinhamento com stakeholders.",
      ],
    },
    {
      company: "Diefra Engenharia e Consultoria",
      title: "Desenvolvedor Junior",
      dateRange: "Mai 2019 - Dez 2020",
      bullets: [
        "Atuação híbrida como Engenheiro de Software e Analista de Soluções no ciclo completo de sistemas web e mobile: levantamento, arquitetura, desenvolvimento, sustentação e implantação.",
        "Desenvolvimento Full-Stack com Java EE, Ruby on Rails e JavaScript, além de desenvolvimento nativo Android.",
        "Diagnóstico e resolução de incidentes em produção (troubleshooting), correções no código-fonte e deploy de hotfixes.",
        "Condução de treinamentos técnicos presenciais e online sobre o fluxo dos sistemas para usuários finais.",
      ],
    },
    {
      company: "Luiza Barcelos Calçados",
      title: "Estagiário de TI",
      dateRange: "Out 2018 - Mai 2019",
      bullets: [
        "Desenvolvimento de aplicativo Android nativo para controle de tickets de refeição, automatizando o fluxo interno e eliminando custos com insumos físicos.",
        "Suporte técnico a sistemas ERP e atendimento a usuários internos.",
        "Sustentação de infraestrutura de TI: redes, servidores, notebooks e sistemas corporativos.",
      ],
    },
  ],
  education: [
    {
      school: "Faculdade Promove de Tecnologia",
      degree: "Tecnólogo em Sistemas para Internet",
      dateRange: "Jan 2017 - Dez 2019",
      achievements: [
        "Ensino Superior completo em Belo Horizonte, MG.",
        "Certificações complementares: AWS Academy Cloud Foundations, Oracle Java Foundations, Oracle Database Foundations, Cisco IT Essentials.",
      ],
    },
    {
      school: "Senai MG",
      degree: "Técnico em Programação de Computador",
      dateRange: "Jan 2015 - Nov 2016",
      achievements: [
        "Ensino Técnico completo em Santa Luzia, MG.",
        "Base sólida em lógica de programação, estruturas de dados e desenvolvimento de software.",
      ],
    },
  ],
};
