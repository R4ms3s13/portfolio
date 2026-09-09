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

export const coreTech = [
  "Node.js",
  "NestJS",
  "Solidity",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "RabbitMQ",
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
        description:
          "Plataforma fintech de inversión inmobiliaria tokenizada. Construí el frontend en Angular junto con microservicios NestJS (auth, KYC, pagos, inversiones, blockchain, notificaciones) en arquitectura hexagonal/DDD comunicados vía RabbitMQ, dentro de un monorepo Nx. Integré la pasarela de pagos eWallet de MangoPay e implementé minteo de tokens on-chain en Polygon. Desplegado en Google Cloud Run con PostgreSQL y Firebase.",
        stack: ["Angular", "NestJS", "RabbitMQ", "PostgreSQL", "Firebase", "MangoPay", "Polygon", "Google Cloud Run", "Docker"],
        link: "https://app.domoblock.io/",
      },
      {
        name: "Notrack",
        description:
          "Plataforma segura de tracking y colaboración de archivos. Construí el frontend en Next.js/React sobre un backend principal en Fastify + MongoDB con auth basada en wallet verificada on-chain contra un smart contract de control de acceso en BSC que diseñé, desarrollé y desplegué con Hardhat y Remix IDE. Cifrado AWS KMS, almacenamiento S3, edición/preview de documentos con OnlyOffice y eventos en tiempo real con Socket.io; un servicio NestJS maneja admin/chat/auth. Corre en AWS EC2 detrás de Nginx.",
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
        description:
          "Plataformas NFT en BNB Smart Chain. Construí contratos ERC-1155 con sistema de referidos y staking (LVLX), y un marketplace NFT upgradeable (UUPS) con distribución de dividendos on-chain (Dgallery), desplegados y verificados con Hardhat.",
        stack: ["Solidity", "ERC-1155", "Hardhat", "OpenZeppelin", "BNB Smart Chain"],
      },
      {
        name: "Sitio corporativo MiT Software",
        description: "Construí y mantuve un backend headless CMS con Strapi, contenerizado con Docker.",
        stack: ["Strapi", "Node.js", "Docker"],
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
        description:
          "Backend de app de movilidad (Jul 2024 - Ene 2025). Construí Cloud Functions de Firebase (TypeScript) manejando notificaciones push y mensajería transaccional vía Twilio y SendGrid sobre Firestore.",
        stack: ["Firebase", "Cloud Functions", "TypeScript", "Firestore", "Twilio", "SendGrid"],
        link: "https://eventswego.com",
      },
      {
        name: "Axinfy (antes Defily)",
        description:
          "Protocolo DeFi en Polygon (Dic 2024 - Ene 2026). Desarrollé y actualicé smart contracts en Solidity para staking, tesorería, cuentas de membresía/NFT y vaults de liquidez con proxies upgradeables UUPS (OpenZeppelin), con tooling automatizado de deploy/verificación en Hardhat. Construí el frontend de la dapp en Next.js/React para conexión de wallet y gestión de vaults, más un microservicio Express/MongoDB que fija metadata de NFTs a IPFS vía Pinata.",
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
