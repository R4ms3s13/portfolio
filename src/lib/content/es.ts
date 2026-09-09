export const profile = {
  name: "Ramses David Medina Araujo",
  shortName: "Ramses Medina",
  role: "Software Engineer",
  email: "ramsesdma@gmail.com",
  phone: "+58 424 667 4379",
  location: "San Francisco, Zulia, Venezuela",
  linkedin: "https://www.linkedin.com/in/ramses-medina-85421a22a/",
  github: "https://github.com/R4ms3s13",
  whatsapp:
    "https://wa.me/584246674379?text=Hola%2C%20estoy%20interesado%20en%20realizar%20un%20proyecto",
  summary:
    "Full-stack / backend-leaning software engineer. Construyo sistemas event-driven y de microservicios, despliego smart contracts, y me siento cómodo dueño de un producto desde el esquema de base de datos hasta la infraestructura cloud donde corre.",
};

export const techGroups = [
  {
    category: "Backend",
    items: ["NestJS", "Express", "Fastify", "Flask", "Python", "TypeScript", "Java 8", "LangChain"],
  },
  {
    category: "Frontend",
    items: ["Angular", "React", "Next.js"],
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Hardhat", "Remix IDE", "IPFS"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Firebase", "Elasticsearch"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2 | S3 | KMS)", "Google Cloud Platform", "Cloud Functions", "Docker", "Nginx"],
  },
  {
    category: "Messaging & Real-Time",
    items: ["RabbitMQ", "Redis", "Socket.io"],
  },
  {
    category: "Tools",
    items: ["Jira", "Notion", "Slack"],
  },
  {
    category: "QA",
    items: ["Postman", "Jest"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "MiT Software",
    location: "Maracaibo, Venezuela",
    period: "Abr 2022 - Jul 2026",
    summary:
      "Arquitectura backend y desarrollo blockchain en múltiples productos de clientes, en los dominios fintech, DeFi y seguridad documental.",
    projects: [
      {
        name: "Domoblock",
        description: [
          "Diseñé y desarrollé la totalidad del backend de Domoblock: microservicios NestJS (auth, KYC, pagos, inversiones, blockchain, notificaciones) en arquitectura hexagonal/DDD comunicados vía RabbitMQ, dentro de un monorepo Nx. Desplegado en Google Cloud Run con PostgreSQL y Firebase.",
          "Automaticé el proceso de compra de punta a punta: integré la pasarela eWallet de MangoPay y automaticé retiros, compra de tokens y recargas.",
          "Lideré un equipo de 4 desarrolladores en la construcción de los microservicios.",
          "Implementé minteo de tokens on-chain en Polygon.",
          "Diseñé y agregué nuevas pantallas y funcionalidades al frontend en Angular.",
          "La plataforma acumula a la fecha más de €58 millones invertidos por usuarios en sus proyectos, varios ya con dividendos distribuidos.",
        ],
        stack: ["Angular", "NestJS", "RabbitMQ", "PostgreSQL", "Firebase", "MangoPay", "Polygon", "Google Cloud Run", "Docker"],
        link: "https://app.domoblock.io/",
      },
      {
        name: "Notrack",
        description: [
          "Diseñé y desarrollé la totalidad del backend de Notrack (Fastify + MongoDB), incluyendo un sistema de gestión de archivos con historial de versiones.",
          "Diseñé, desarrollé y desplegué el smart contract de control de acceso en BSC (Hardhat, Remix IDE) usado para autenticación basada en wallet verificada on-chain.",
          "Implementé cifrado con AWS KMS, almacenamiento en S3, edición/preview de documentos con OnlyOffice y eventos en tiempo real con Socket.io; un servicio NestJS maneja admin/chat/auth.",
          "Diseñé y agregué nuevas pantallas y funcionalidades al frontend en Next.js/React.",
          "Corre en AWS EC2 detrás de Nginx.",
          "Sometí la plataforma a una auditoría de seguridad (ethical hacking) de DragonJar S.A.S.: de 19 vulnerabilidades identificadas (ninguna crítica), resolví 18.",
        ],
        stack: [
          "Next.js",
          "React",
          "NestJS",
          "Fastify",
          "MongoDB",
          "Solidity",
          "Hardhat",
          "Remix IDE",
          "Ethers.js",
          "AWS EC2",
          "AWS S3",
          "AWS KMS",
          "OnlyOffice",
          "Nginx",
          "Socket.io",
        ],
        link: "https://notrack.io",
      },
      {
        name: "LVLX & Dgallery",
        description: [
          "Diseñé, desarrollé y desplegué contratos ERC-1155 con sistema de referidos y staking (LVLX) para la gestión descentralizada de las finanzas de los usuarios.",
          "Diseñé, desarrollé y desplegué un marketplace NFT upgradeable (UUPS) con distribución de dividendos on-chain (Dgallery).",
          "Ambos verificados en BNB Smart Chain con Hardhat.",
        ],
        stack: ["Solidity", "ERC-1155", "Hardhat", "OpenZeppelin", "BNB Smart Chain"],
      },
      {
        name: "Sitio corporativo MiT Software",
        description: [
          "Modernicé el sitio, migrándolo de WordPress a un stack headless: frontend estático con Astro y backend CMS con Strapi, contenerizado con Docker.",
          "Automaticé la publicación de contenido: un webhook desde Strapi redespliega y regenera el sitio (SSG) cada vez que se crea o edita contenido.",
          "Aproveché la generación bilingüe automática (ES/EN) de Strapi para servir contenido localizado al frontend.",
        ],
        stack: ["Astro", "Strapi", "Node.js", "Docker"],
        link: "https://mitsoftware.com",
      },
    ],
  },
  {
    role: "Software Engineer (Freelance)",
    company: "Independiente / Remoto",
    location: "Remoto",
    period: "Jul 2024 - Ene 2026 (paralelo a MiT Software)",
    summary: "",
    projects: [
      {
        name: "WeGo",
        description: [
          "Backend de app de movilidad (Jul 2024 - Ene 2025). Diseñé y desarrollé la lógica de negocio del backend en Cloud Functions de Firebase (TypeScript), con código limpio y escalable, pensado para soportar un alto volumen de usuarios.",
          "Implementé notificaciones push y mensajería transaccional vía Twilio y SendGrid sobre Firestore.",
        ],
        stack: ["Firebase", "Cloud Functions", "TypeScript", "Firestore", "Twilio", "SendGrid"],
        link: "https://eventswego.com",
      },
      {
        name: "Axinfy (antes Defily)",
        description: [
          "Protocolo DeFi en Polygon (Dic 2024 - Ene 2026). Diseñé, desarrollé y desplegué smart contracts que gestionan de forma descentralizada las finanzas de los usuarios: staking, tesorería, cuentas de membresía/NFT y vaults de liquidez, con proxies upgradeables UUPS (OpenZeppelin) y tooling automatizado de deploy/verificación en Hardhat.",
          "Desarrollé un microservicio en Express/MongoDB que automatiza la generación de NFTs únicos y los publica en IPFS vía Pinata.",
          "Diseñé y agregué nuevas pantallas y funcionalidades al frontend de la dapp en Next.js/React (conexión de wallet, gestión de vaults).",
          "El protocolo alcanzó un TVL de ~$219.065 USDC como Defily, y ronda los ~$106.500 USDC en su relanzamiento como Axinfy; la plataforma superó los 1.000 NFTs generados y comprados por usuarios.",
        ],
        stack: ["Next.js", "React", "Solidity", "Hardhat", "OpenZeppelin", "Polygon", "Express", "MongoDB", "IPFS/Pinata"],
        link: "https://av11.axinfy.com",
      },
    ],
  },
];

export const education = [
  {
    title: "Ingeniero de Sistemas",
    school: "Universidad Nacional Experimental de las Fuerzas Armadas (UNEFA)",
    location: "Zulia, Maracaibo",
    period: "Feb 2016 - Dic 2021",
    detail: "Título obtenido: Ingeniero de Sistemas.",
  },
];

export const courses = [
  {
    title: "Centro Electrónico de Idiomas English - Pre-Intermediate (A2-B1)",
    period: "Jun 2015",
  },
  {
    title: "Centro Electrónico de Idiomas English - Intermediate (B1)",
    period: "Dic 2015",
  },
  {
    title: "Centro Electrónico de Idiomas English - Upper-Intermediate (B2)",
    period: "Mar 2016",
  },
];

export const skills = [
  { name: "Node.js / NestJS", level: 95 },
  { name: "Solidity / Hardhat", level: 88 },
  { name: "MongoDB / PostgreSQL", level: 90 },
  { name: "AWS (EC2, S3, KMS)", level: 78 },
  { name: "Docker", level: 85 },
  { name: "Python / Flask", level: 78 },
  { name: "Angular / React / Next.js", level: 75 },
  { name: "RabbitMQ / Redis", level: 82 },
];

export const languages = [{ name: "Inglés", level: "Nivel intermedio (B2)" }];

export const aptitudes = [
  "Comunicación",
  "Trabajo en equipo",
  "Proactividad",
  "Resolución de problemas",
  "Productividad",
];
