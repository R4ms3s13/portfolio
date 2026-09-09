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
    "https://wa.me/584246674379?text=Hi%2C%20I%27m%20interested%20in%20working%20on%20a%20project",
  summary:
    "Full-stack / backend-leaning software engineer. I build event-driven and microservices systems, ship smart contracts, and I'm comfortable owning a product from the database schema up to the cloud infrastructure it runs on.",
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
    period: "Apr 2022 - Jul 2026",
    summary:
      "Delivered backend architecture and blockchain development across multiple client products in fintech, DeFi, and document-security domains.",
    projects: [
      {
        name: "Domoblock",
        description: [
          "Designed and developed the entire Domoblock backend: NestJS microservices (auth, KYC, payments, investments, blockchain, notifications) in a hexagonal/DDD architecture communicating over RabbitMQ, within an Nx monorepo. Deployed on Google Cloud Run with PostgreSQL and Firebase.",
          "Automated the end-to-end purchase flow: integrated the MangoPay eWallet payment gateway and automated withdrawals, token purchases, and top-ups.",
          "Led a development team of 4 building the microservices.",
          "Implemented on-chain token minting on Polygon.",
          "Designed and added new screens and features to the Angular frontend.",
          "The platform has accumulated over €58 million invested by users across its projects to date, several already distributing dividends.",
        ],
        stack: ["Angular", "NestJS", "RabbitMQ", "PostgreSQL", "Firebase", "MangoPay", "Polygon", "Google Cloud Run", "Docker"],
        link: "https://app.domoblock.io/",
      },
      {
        name: "Notrack",
        description: [
          "Designed and developed the entire Notrack backend (Fastify + MongoDB), including a file management system with version history.",
          "Designed, developed, and deployed the Solidity access-control smart contract (Hardhat, Remix IDE) used for on-chain wallet-based authentication.",
          "Implemented AWS KMS encryption, S3 file storage, OnlyOffice document editing/preview, and Socket.io real-time events; a NestJS service handles admin/chat/auth.",
          "Designed and added new screens and features to the Next.js/React frontend.",
          "Runs on AWS EC2 behind Nginx.",
          "Commissioned a DragonJar S.A.S. security audit (ethical hacking): of 19 vulnerabilities found (none critical), I resolved 18.",
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
          "Designed, developed, and deployed ERC-1155 NFT contracts with a referral and staking system (LVLX) for decentralized management of user finances.",
          "Designed, developed, and deployed a UUPS-upgradeable NFT marketplace with on-chain dividends distribution (Dgallery).",
          "Both verified on BNB Smart Chain with Hardhat.",
        ],
        stack: ["Solidity", "ERC-1155", "Hardhat", "OpenZeppelin", "BNB Smart Chain"],
      },
      {
        name: "MiT Software corporate website",
        description: [
          "Modernized the site, migrating it from WordPress to a headless stack: a static Astro frontend and a Strapi CMS backend, containerized with Docker.",
          "Automated content publishing: a Strapi webhook redeploys and regenerates the site (SSG) on every content change.",
          "Leveraged Strapi's automatic bilingual (ES/EN) content generation to serve localized content to the frontend.",
        ],
        stack: ["Astro", "Strapi", "Node.js", "Docker"],
        link: "https://mitsoftware.com",
      },
    ],
  },
  {
    role: "Software Engineer (Freelance)",
    company: "Independent / Remote",
    location: "Remote",
    period: "Jul 2024 - Jan 2026 (concurrent with MiT Software)",
    summary: "",
    projects: [
      {
        name: "WeGo",
        description: [
          "Mobility app backend (Jul 2024 - Jan 2025). Designed and developed the backend's business logic in Firebase Cloud Functions (TypeScript), with clean, scalable code designed to support a high volume of users.",
          "Implemented push notifications and transactional messaging via Twilio and SendGrid on top of Firestore.",
        ],
        stack: ["Firebase", "Cloud Functions", "TypeScript", "Firestore", "Twilio", "SendGrid"],
        link: "https://eventswego.com",
      },
      {
        name: "Axinfy (formerly Defily)",
        description: [
          "DeFi protocol on Polygon (Dec 2024 - Jan 2026). Designed, developed, and deployed smart contracts that decentrally manage user finances: staking, treasury management, membership/NFT accounts, and liquidity vaults, using UUPS upgradeable proxies (OpenZeppelin) and automated deployment/verification tooling built on Hardhat.",
          "Developed a standalone Express/MongoDB microservice that automates unique NFT generation and pins assets to IPFS via Pinata.",
          "Designed and added new screens and features to the Next.js/React dapp frontend (wallet connection, vault management).",
          "The protocol reached a TVL of ~$219,065 USDC as Defily, and holds around ~$106,500 USDC in its Axinfy relaunch; the platform surpassed 1,000 NFTs generated and purchased by users.",
        ],
        stack: ["Next.js", "React", "Solidity", "Hardhat", "OpenZeppelin", "Polygon", "Express", "MongoDB", "IPFS/Pinata"],
        link: "https://av11.axinfy.com",
      },
    ],
  },
];

export const education = [
  {
    title: "Systems Engineer",
    school: "Universidad Nacional Experimental de las Fuerzas Armadas (UNEFA)",
    location: "Zulia, Maracaibo",
    period: "Feb 2016 - Dec 2021",
    detail: "Degree earned: Systems Engineer.",
  },
];

export const courses = [
  {
    title: "Centro Electrónico de Idiomas English - Pre-Intermediate (A2-B1)",
    period: "Jun 2015",
  },
  {
    title: "Centro Electrónico de Idiomas English - Intermediate (B1)",
    period: "Dec 2015",
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

export const languages = [{ name: "English", level: "Upper-Intermediate (B2)" }];

export const aptitudes = [
  "Communication",
  "Teamwork",
  "Proactivity",
  "Problem solving",
  "Productivity",
];
