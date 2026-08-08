export const profile = {
  name: "Yahya Mdarhri",
  titles: ["Data Project Manager", "Data Scientist", "PMP® Certified"],
  location: "Rabat-Salé-Kénitra, Morocco",
  phone: "+212 6 39 67 28 08",
  email: "yahyamdarhri00@gmail.com",
  age: "26 y.o.",
  summary:
    "PMP®-certified Data Scientist moving into project management, with 3 years of experience leading digital, data, and innovation projects within the Vice-Presidency for Research, Development, Innovation & Partnerships at the International University of Rabat. Combines hands-on expertise in data science, data engineering, and machine learning with a solid command of project management standards (PMP®, ongoing Master's in Project & Program Management) to scope, deliver, and deploy results-driven data solutions, coordinating technical teams and stakeholders up to the highest institutional level.",
};

export const stats = [
  { value: "3+", label: "Years leading data & innovation projects" },
  { value: "50k+", label: "Downloads on published Arabic NER model" },
  { value: "360+", label: "Researchers tracked via platform he built" },
  { value: "PMP®", label: "Certified Project Management Professional" },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: { title: string; text: string }[];
};

export const experiences: Experience[] = [
  {
    role: "Digital Research & Development Engineer",
    org: "International University of Rabat (UIR)",
    period: "Dec. 2023 – Present",
    location: "Rabat, Morocco · Vice-Presidency for Research, Development, Innovation & Partnerships",
    bullets: [
      {
        title: "Research Intelligence Platform",
        text: "End-to-end project lead (PMI/PMP standards). Faced with 360+ researchers tracked manually in scattered Excel files with no single source of truth, scoped the need, then designed and deployed a data solution as a full project lifecycle. The platform became the university's real-time single source of truth, now at the core of institutional communications and activity reports.",
      },
      {
        title: "University Rankings Lead",
        text: "To strengthen UIR's positioning in international rankings (THE, THE Impact, QS), led and coordinated stakeholders across the entire university to acquire, analyze, optimize, and submit ranking data, turning a fragmented process into a structured, repeatable submission cycle.",
      },
      {
        title: '"Inn2Market" — Patent Ideation & Valorization',
        text: "The patent ideation and valorization process relied on scattered paperwork and manual follow-up, making it hard to track ideas from submission to industrial uptake. Working with the Technology Transfer Office and industrial partners, led requirements gathering, planning, and delivery to move it from a paper-based process to a structured data system — a single, trackable pipeline from idea to market.",
      },
      {
        title: "Strategic Research-Database Negotiations",
        text: "Facing costly renewals for key databases (Scopus, ScienceDirect), led negotiations backed by usage-data analysis to inform renewal decisions and optimize institutional spending.",
      },
      {
        title: '"Tamkeen for Cities" Labeling Program',
        text: "The labeling of sustainable and innovative cities was run manually, slow to process and hard to compare across cities. In partnership with the Innovation & Entrepreneurship Center and the Ministry of the Interior, introduced a data-driven approach that structured evaluation criteria and evidence into a digital workflow — faster, more consistent, and scalable across cities.",
      },
      {
        title: "Institutional Governance",
        text: "Contributed to institutional governance as a member of the R&D ethics committee and the university's environmental committee.",
      },
    ],
  },
  {
    role: "AI / ML Engineer (Remote)",
    org: "Niloom (formerly abxr)",
    period: "2023 · ~5 months",
    location: "New York, USA (distributed team)",
    bullets: [
      {
        title: "AI-Driven Content Generation for AR/VR",
        text: "Led the development of an AI assistant that generates AR/VR scenes automatically, and built generative-AI capabilities to create 3D assets from scratch — core features of the startup's world-class AR/VR product, delivered within an internationally distributed engineering team.",
      },
    ],
  },
  {
    role: "Business Intelligence Engineer",
    org: "Sanlam Data Factory",
    period: "2022",
    location: "Casablanca, Morocco",
    bullets: [
      {
        title: "Financial & Accounting Reporting",
        text: "Designed and deployed financial and accounting dashboards in Tableau, transforming raw, unstructured data into decision-ready reporting used to support business monitoring.",
      },
    ],
  },
];

export type Project = {
  name: string;
  tag: string;
  description: string;
  highlights: string[];
  gradient: string;
};

export const projects: Project[] = [
  {
    name: "Research Intelligence Platform",
    tag: "Project Leadership · Data Platform",
    description:
      "End-to-end data platform replacing scattered spreadsheets used to track 360+ researchers, now the university's real-time single source of truth for institutional communications and activity reports.",
    highlights: ["Full project lifecycle (PMI/PMP)", "Real-time single source of truth", "Institutional-wide adoption"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "University Rankings Program",
    tag: "Stakeholder Coordination · Data Strategy",
    description:
      "Structured, repeatable data-submission cycle for THE, THE Impact, and QS rankings, coordinating stakeholders across the entire university to acquire, analyze, and optimize ranking data.",
    highlights: ["Cross-university coordination", "Repeatable submission cycle", "THE / THE Impact / QS"],
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    name: 'Inn2Market — Patent Valorization',
    tag: "Requirements & Delivery Lead",
    description:
      "Moved patent ideation and valorization from paper-based tracking to a structured data system, giving the Technology Transfer Office and industrial partners a single trackable pipeline from idea to market.",
    highlights: ["Technology Transfer Office", "Idea-to-market pipeline", "Industrial partnerships"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Tamkeen for Cities",
    tag: "Digital Workflow · Public Sector",
    description:
      "Data-driven labeling workflow for sustainable and innovative cities, built with the Innovation & Entrepreneurship Center and the Ministry of the Interior — faster, consistent, and scalable evaluation.",
    highlights: ["Ministry of the Interior partnership", "Structured evaluation criteria", "Scalable across cities"],
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Arabic Named Entity Recognition (NER)",
    tag: "Machine Learning · NLP · Open Source",
    description:
      "Developed and published an Arabic NER model on Hugging Face that surpassed 50,000 downloads, addressing the scarcity of production-ready Arabic NLP resources. Built for Medtech Group.",
    highlights: ["50,000+ downloads", "Published on Hugging Face", "Production-ready Arabic NLP"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "AI-Generated AR/VR Scenes",
    tag: "Generative AI · Product Engineering",
    description:
      "Led development of an AI assistant that automatically generates AR/VR scenes and 3D assets from scratch, shipped as a core feature of Niloom's AR/VR product within a distributed engineering team.",
    highlights: ["Generative 3D assets", "Distributed engineering team", "Core product feature"],
    gradient: "from-cyan-500 to-blue-600",
  },
];

export const skills = [
  {
    category: "Project & Program Management",
    items: [
      "PMI / PMP®",
      "Agile (Scrum)",
      "Scoping & requirements gathering",
      "Planning, risk & budget management",
      "Stakeholder management",
      "Change management",
      "Reporting & negotiation",
    ],
  },
  {
    category: "Data Science & Machine Learning",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP (NER)",
      "Model design & training",
      "Deployment",
      "Exploratory & statistical analysis",
    ],
  },
  {
    category: "Data Engineering & BI",
    items: [
      "Data pipelines",
      "Web scraping",
      "SQL",
      "ETL",
      "Workflow automation",
      "Business Intelligence",
      "Data visualization",
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      "Cloud computing",
      "Collaborative development environments",
      "Institutional data management & reliability",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Team leadership & coordination",
      "Executive communication",
      "Stakeholder management",
      "Negotiation",
      "Analytical & results-oriented mindset",
      "Autonomy & adaptability",
      "Distributed teamwork",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Project & Program Management",
    school: "Rabat Business School",
    period: "Expected 2027",
  },
  {
    degree: "State Engineering Degree — Data Science & Cloud Computing",
    school: "ENSA Oujda",
    period: "2023",
  },
  {
    degree: "Baccalaureate — Mathematical Sciences, Option B",
    school: "Rabat",
    period: "2018",
  },
];

export const certifications = [
  {
    name: "Project Management Professional (PMP)®",
    issuer: "Project Management Institute (PMI)",
    period: "2026",
  },
];

export const volunteering = [
  {
    role: "Citizen Mentor (Volunteer)",
    org: "Les Citoyens",
    text: "Supported the association's data-driven citizen initiatives (public-interest censuses and studies led by civil society) and mentored teams during data hackathons and events.",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
];

export const gallery = [
  { caption: "Facilitating a citizen-data workshop with Les Citoyens", gradient: "from-emerald-500 to-teal-700" },
  { caption: "Attending a tech & innovation conference", gradient: "from-indigo-500 to-blue-700" },
  { caption: "Exploring Rabat's Kasbah des Oudayas", gradient: "from-amber-500 to-rose-600" },
  { caption: "Staying sharp — training discipline off the clock", gradient: "from-slate-600 to-slate-900" },
  { caption: "Field visit around Rabat, rain or shine", gradient: "from-cyan-600 to-indigo-800" },
  { caption: "Working session on a data project", gradient: "from-fuchsia-500 to-purple-700" },
];
