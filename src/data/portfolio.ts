export const profile = {
  name: "Yahya Mdarhri",
  titles: ["Data Project Manager", "Data Scientist", "PMP® Certified"],
  location: "Rabat-Salé-Kénitra, Morocco",
  phone: "+212 6 39 67 28 08",
  email: "yahyamdarhri00@gmail.com",
  age: "26 y.o.",
  photo: "",
  pitch:
    "I turn scattered spreadsheets, paperwork, and manual processes into structured data systems — and I run the project so it actually ships. Analysis with rigor, delivery with PMP® discipline.",
  summary:
    "PMP®-certified Data Scientist moving into project management, with 3 years of experience leading digital, data, and innovation projects within the Vice-Presidency for Research, Development, Innovation & Partnerships at the International University of Rabat. Combines hands-on expertise in data science, data engineering, and machine learning with a solid command of project management standards (PMP®, ongoing Master's in Project & Program Management) to scope, deliver, and deploy results-driven data solutions, coordinating technical teams and stakeholders up to the highest institutional level.",
};

export const stats = [
  { value: "3+", label: "Years leading data & innovation projects" },
  { value: "50k+", label: "Downloads on published Arabic NER model" },
  { value: "360+", label: "Researchers tracked via platform he built" },
  { value: "PMP®", label: "Certified Project Management Professional" },
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

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
];

export const gallery = [
  { caption: "Facilitating a citizen-data workshop with Les Citoyens", gradient: "from-blue-500 to-indigo-700", src: "" },
  { caption: "Attending a tech & innovation conference", gradient: "from-indigo-500 to-blue-700", src: "" },
  { caption: "Exploring Rabat's Kasbah des Oudayas", gradient: "from-orange-500 to-rose-600", src: "" },
  { caption: "Staying sharp — training discipline off the clock", gradient: "from-slate-600 to-slate-900", src: "" },
  { caption: "Field visit around Rabat, rain or shine", gradient: "from-blue-600 to-indigo-800", src: "" },
  { caption: "Working session on a data project", gradient: "from-orange-500 to-fuchsia-700", src: "" },
];

// Self-assessed proficiency (0-10), estimated from depth of experience described in the CV.
export const radarSkills = [
  { axis: "Project Mgmt", value: 8.5 },
  { axis: "Data Science", value: 9 },
  { axis: "Data Eng. & BI", value: 7 },
  { axis: "Cloud & Tools", value: 6 },
  { axis: "Leadership", value: 8 },
];

// Illustrative positioning of real projects — technical complexity vs business/institutional impact.
// Estimated from project scope as described, not a measured metric.
export const regressionProjects = [
  { name: "Research Intelligence Platform", complexity: 8, impact: 9 },
  { name: "University Rankings Program", complexity: 6, impact: 8 },
  { name: "Arabic NER (Hugging Face)", complexity: 9, impact: 8 },
  { name: "Tamkeen for Cities", complexity: 7, impact: 7 },
  { name: "Inn2Market Patent Valorization", complexity: 6, impact: 7 },
  { name: "AI-Generated AR/VR Scenes", complexity: 9, impact: 6 },
  { name: "BI Dashboards (Sanlam)", complexity: 4, impact: 5 },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  variant?: "deliver";
};

export const services: Service[] = [
  {
    index: "01",
    title: "Data & Innovation Project Leadership",
    description:
      "End-to-end ownership under PMI/PMP standards — scoping, planning, risk, budget, and stakeholder management, from first requirement to institutional adoption.",
    tags: ["PMP®", "Scoping", "Stakeholders"],
  },
  {
    index: "02",
    title: "Data Platforms & Systems",
    description:
      "Replacing scattered spreadsheets and paper trails with structured, single-source-of-truth platforms that become the tool people actually rely on daily.",
    tags: ["Platform design", "Data modeling", "Adoption"],
  },
  {
    index: "03",
    title: "Machine Learning & NLP",
    description:
      "Production-grade models built to answer a real question — including an Arabic NER model published on Hugging Face with 50,000+ downloads.",
    tags: ["Python", "NLP", "Model deployment"],
  },
  {
    index: "04",
    title: "BI & Data Engineering",
    description:
      "Pipelines, ETL, and dashboards that turn raw, unstructured data into decision-ready reporting your team can trust and act on.",
    tags: ["SQL", "ETL", "Tableau"],
  },
  {
    index: "05",
    title: "Stakeholder Coordination & Negotiation",
    description:
      "Running cross-institutional programs — from university-wide ranking submissions to database-renewal negotiations backed by usage-data analysis.",
    tags: ["Negotiation", "Cross-team", "Institutional"],
  },
  {
    index: "06",
    title: "Digital Workflow Transformation",
    description:
      "Turning manual, paper-based processes — patent valorization, city labeling programs — into structured, scalable digital workflows.",
    tags: ["Process design", "Automation", "Scalability"],
    variant: "deliver",
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  description: string;
  kind: "role" | "education" | "certification" | "volunteering";
  current?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "PMP® Certification",
    org: "Project Management Institute (PMI)",
    description: "Formalized how projects are scoped, planned, and delivered — bringing structured PM discipline into every data engagement.",
    kind: "certification",
  },
  {
    year: "Dec. 2023 — Present",
    title: "Digital Research & Development Engineer",
    org: "International University of Rabat (UIR)",
    description: "Leading data platforms, ranking programs, and digital workflow transformation for the Vice-Presidency for Research, Development, Innovation & Partnerships.",
    kind: "role",
    current: true,
  },
  {
    year: "Expected 2027",
    title: "Master's in Project & Program Management",
    org: "Rabat Business School",
    description: "Ongoing graduate studies deepening formal project and program management practice alongside full-time work.",
    kind: "education",
  },
  {
    year: "2023 (~5 months)",
    title: "AI / ML Engineer (Remote)",
    org: "Niloom (formerly abxr) — New York, USA",
    description: "Led development of an AI assistant generating AR/VR scenes and 3D assets from scratch, within a distributed engineering team.",
    kind: "role",
  },
  {
    year: "2023",
    title: "State Engineering Degree — Data Science & Cloud Computing",
    org: "ENSA Oujda",
    description: "Engineering degree specializing in data science and cloud computing.",
    kind: "education",
  },
  {
    year: "2022",
    title: "Business Intelligence Engineer",
    org: "Sanlam Data Factory — Casablanca, Morocco",
    description: "Designed financial and accounting dashboards in Tableau, turning raw data into decision-ready reporting.",
    kind: "role",
  },
  {
    year: "Ongoing",
    title: "Citizen Mentor (Volunteer)",
    org: "Les Citoyens",
    description: "Supporting data-driven citizen initiatives and mentoring teams during data hackathons.",
    kind: "volunteering",
  },
  {
    year: "2018",
    title: "Baccalaureate — Mathematical Sciences, Option B",
    org: "Rabat",
    description: "Foundation in mathematics that set the direction toward engineering and data science.",
    kind: "education",
  },
];
