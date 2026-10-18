// All content below is factual, taken from dp's resume and GitHub.
// Never invent employers, numbers, or links here.

export const LINKS = {
  email: "dpreddy.sathi@gmail.com",
  phone: "+91 7993371396",
  linkedin: "https://www.linkedin.com/in/dpreddys",
  github: "https://github.com/dpreddysathi",
  leetcode: "https://leetcode.com/dpreddy4444",
  oldPortfolio: "https://dpreddysathi.github.io/portfolio",
  resume: "./resume.pdf",
  hireMe:
    "mailto:dpreddy.sathi@gmail.com?subject=Opportunity%20for%20Sathi%20Durga%20Prasad%20Reddy",
};

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "LeetCode Solved" },
  { value: 100, suffix: "K+", label: "Txns / Run" },
  { value: 8.7, suffix: "", label: "CGPA" },
];

export interface StackGroup {
  title: string;
  items: string[];
}

export const STACK: StackGroup[] = [
  { title: "Languages", items: ["Core Java", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Backend",
    items: [
      "Spring Boot 3",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Spring Batch",
      "Spring Cloud",
      "Hibernate ORM",
      "Microservices",
      "REST API Design",
    ],
  },
  {
    title: "Messaging & Events",
    items: ["Apache Kafka", "RabbitMQ", "Eureka", "API Gateway", "Event-Driven Design"],
  },
  { title: "Databases", items: ["MySQL", "Redis", "Elasticsearch"] },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "Maven", "AWS (EC2, S3, RDS)", "Azure"],
  },
  {
    title: "Testing & Security",
    items: ["JUnit 5", "Mockito", "JWT", "OAuth2", "AES Encryption"],
  },
];

export interface ExpProject {
  name: string;
  client: string;
  bullets: string[];
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  projects: ExpProject[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Tata Consultancy Services (TCS Digital)",
    period: "Jul 2024 — Present",
    projects: [
      {
        name: "Electronic Document Management System (Documentum)",
        client: "EuroClear",
        bullets: [
          "Designed and delivered a full-stack Business Continuity Planning (BCP) app with React + Spring Boot, keeping 1M+ enterprise documents reachable during Documentum downtime; built sync and migration modules on Documentum REST APIs.",
          "Engineered an O365 mailbox ingestion pipeline (Microsoft Graph API + Spring Scheduler) across 20+ mailboxes with validation, retry and error-quarantine — 20,000+ documents/day with minimal manual intervention.",
          "Built an automated monitoring and alerting platform (Spring Scheduler, JavaMail, Kafka, ServiceNow) for rendition backlogs, indexing queues and SLA tracking — cut mean time to detect by 65% and manual escalations by 50%.",
          "Built a secured DQuery utility for parameterized DQL execution and a ZIP module handling nested archives up to 50MB — cut investigation effort by 60%.",
          "Added an AI-based document classification layer (metadata keyword scoring) that auto-suggests document types — 30% less manual tagging.",
        ],
        tags: ["React", "Spring Boot", "Documentum REST APIs", "Microsoft Graph API", "Kafka", "ServiceNow"],
      },
      {
        name: "Emerging Payments Orchestration System (EMPOS)",
        client: "Bank of Montreal",
        bullets: [
          "Built a bulk payment processing engine with Spring Batch — 100,000+ transactions per run, chunk-based execution with skip/retry policies, 99.9% ingestion success rate.",
          "Designed a multi-frequency feedback system (Spring Scheduler + Quartz) producing transaction status reports for 3 downstream banking teams — eliminated manual reconciliation, saving 4 person-hours/day.",
          "Developed a transaction validation and reconciliation layer (Spring Data JPA, Hibernate, MySQL) with sub-300ms write latency at 10,000 records/min; ServiceNow integration for automated incident creation improved traceability by 40%.",
        ],
        tags: ["Spring Batch", "Quartz", "Spring Data JPA", "Hibernate", "MySQL", "ServiceNow"],
      },
    ],
  },
];

export interface Project {
  icon: string;
  name: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    icon: "📈",
    name: "IPO Manager",
    description:
      "Full-stack IPO investment tracker — React frontend on GitHub Pages, Spring Boot backend in Docker. AES-256 encrypted KYC storage, JWT multi-user auth, daily mainboard IPO auto-sync, PAN-based allotment checking via registrar integrations, and a person-to-person settlement ledger with FIFO outstanding computation.",
    tags: ["React", "Spring Boot 3", "JWT", "Docker", "H2", "GitHub Actions"],
    github: "https://github.com/dpreddysathi/ipo-manager",
    demo: "https://dpreddysathi.github.io/ipo-manager/",
  },
  {
    icon: "✈️",
    name: "CarryMate",
    description:
      "Peer-to-peer traveler-courier marketplace: travelers list trips, shoppers request products from abroad. Deal state machine (proposed → confirmed), escrow payments, customs declaration with duty estimator, reviews and traveler verification.",
    tags: ["React", "Spring Boot 3", "JWT", "H2", "GitHub Actions"],
    github: "https://github.com/dpreddysathi/carrymate",
    demo: "https://dpreddysathi.github.io/carrymate/",
  },
  {
    icon: "🛒",
    name: "GroupKart",
    description:
      "Community group-buying platform: neighbours pool quantities under their names to unlock bulk price slabs while retailers and farmers post competing offers. Escrow payments, settlement splits with a transparent 2% platform fee, per-member savings calculator, monthly repeat buys.",
    tags: ["React", "Spring Boot 3", "JWT", "H2", "GitHub Actions"],
    github: "https://github.com/dpreddysathi/groupkart",
    demo: "https://dpreddysathi.github.io/groupkart/",
  },
  {
    icon: "⚖️",
    name: "e-Adalat",
    description:
      "Microservices-based Online Dispute Resolution platform: 5+ Spring Boot services (case management, scheduling, document vault, notifications, video hearings) behind Spring Cloud Gateway. Event-driven case workflow on Kafka at 1,000+ events/min, document vault with Redis caching, WebRTC video hearings.",
    tags: ["Spring Boot 3", "Kafka", "Redis", "WebRTC", "Docker", "Kubernetes", "MySQL"],
    github: "https://github.com/dpreddysathi/eadalat",
  },
];

export interface Achievement {
  emoji: string;
  title: string;
  text: string;
  org: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    emoji: "👏",
    title: "Customer Champ Award",
    text: "Recognized with the best customer applause in the team.",
    org: "TCS · Oct 2026",
  },
  {
    emoji: "🏆",
    title: "Best Employee Trophy",
    text: "Recognized at the EuroClear Tribe TownHall for delivery impact on the Documentum program.",
    org: "Jun 2026",
  },
  {
    emoji: "⚡",
    title: "On the Spot Award",
    text: "Awarded for going above and beyond on critical banking-domain deliverables.",
    org: "TCS",
  },
  {
    emoji: "🤝",
    title: "Best Team Award",
    text: "Part of the team recognized for outstanding collective delivery.",
    org: "TCS",
  },
  {
    emoji: "🔥",
    title: "300+ LeetCode Solved",
    text: "Consistent problem-solving across data structures, algorithms and system design.",
    org: "leetcode.com/dpreddy4444",
  },
  {
    emoji: "💻",
    title: "Runner-up, Hunt the Code",
    text: "Competitive programming event at college level.",
    org: "Puducherry Technological University",
  },
  {
    emoji: "🎓",
    title: "6 Professional Certifications",
    text: "Oracle Java SE 21 Developer · Spring Certified Professional (Broadcom) · Azure Developer Associate · Azure Fundamentals · GitHub Actions · GitHub Foundations.",
    org: "Oracle · Broadcom · Microsoft",
  },
];

export const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "achievements", label: "achievements" },
  { id: "contact", label: "contact" },
];
