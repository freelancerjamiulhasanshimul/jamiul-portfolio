export const site = {
  name: "Jamiul H. Shimul",
  role: "Full Stack Web Developer & AI Automation Specialist",
  designation: "MANAGING DIRECTOR — WEBRAYZ IT SOLUTIONS",
  statement:
    "Building scalable web solutions and intelligent automation systems where technology, strategy, and human-centered thinking connect.",
  description:
    "Portfolio of Jamiul H. Shimul — Full Stack Web Developer and AI Automation Specialist, Managing Director at Webrayz IT Solutions.",
  url: "https://your-domain.com",
  webrayzUrl: "https://webrayz.com/",
  location: "Bangladesh · Available Worldwide",
};

export const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

export const contacts = {
  whatsappDisplay: "+880 1846-045990",
  whatsappLink: "https://wa.me/8801846045990",
  professionalEmail: "shimul@webrayz.com",
  personalEmail: "jamiulhasan291@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jamiul-hasan-shimul" },
    { label: "GitHub", href: "https://github.com/freelancerjamiulhasanshimul" },
    { label: "Fiverr", href: "https://www.fiverr.com/s/r37b8bb" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~0149cf054cc3869643?mp_source=share" },
  ],
};

export type Metric = { label: string; value: number; suffix?: string };

export const metrics: Metric[] = [
  { label: "PROJECTS.DELIVERED", value: 25, suffix: "+" },
  { label: "TECHNOLOGIES & TOOLS", value: 15, suffix: "+" },
  { label: "AUTOMATION.SYSTEMS", value: 10, suffix: "+" },
  { label: "QUALITY.FOCUS", value: 100, suffix: "%" },
];

export const skillGroups = [
  {
    id: "web",
    tag: "STACK.CORE",
    accent: "mint" as const,
    title: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "PHP"],
  },
  {
    id: "backend",
    tag: "STACK.SERVER",
    accent: "azure" as const,
    title: "Backend & Integration",
    items: ["Node.js", "MySQL", "REST APIs", "Third-Party API Integration"],
  },
  {
    id: "ai",
    tag: "STACK.INTELLIGENCE",
    accent: "violet" as const,
    title: "AI & Automation",
    items: [
      "AI-Powered Workflows",
      "AI Integrations",
      "Business Process Automation",
      "Intelligent Assistants",
    ],
  },
  {
    id: "cms",
    tag: "STACK.COMMERCE",
    accent: "coral" as const,
    title: "CMS & E-Commerce",
    items: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Yoast SEO",
      "Rank Math",
      "WP Rocket",
      "Shopify",
    ],
  },
  {
    id: "tools",
    tag: "STACK.OPS",
    accent: "mint" as const,
    title: "Tools & Optimization",
    items: ["Git", "SEO", "Performance Optimization"],
  },
];

export const services = [
  {
    id: "MODULE_01",
    title: "WordPress Development",
    description:
      "Custom, scalable WordPress websites designed for performance, flexibility, and growth.",
    capabilities: [
      "Custom Themes",
      "SEO Integration",
      "Performance Optimization",
      "Responsive Design",
    ],
    featured: false,
  },
  {
    id: "MODULE_02",
    title: "Custom Website Development",
    description:
      "Purpose-built digital experiences using modern web technologies and clean development practices.",
    capabilities: [
      "HTML",
      "CSS",
      "JavaScript",
      "Modern Frameworks",
      "Responsive Development",
    ],
    featured: false,
  },
  {
    id: "MODULE_03",
    title: "E-Commerce Solutions",
    description:
      "High-performing online stores built for seamless shopping experiences and efficient management.",
    capabilities: [
      "WooCommerce",
      "Payment Integration",
      "Product Management",
      "Checkout Optimization",
    ],
    featured: false,
  },
  {
    id: "MODULE_04",
    title: "Web Applications",
    description:
      "Functional and scalable web applications designed around real business requirements.",
    capabilities: [
      "Frontend",
      "Backend",
      "APIs",
      "Databases",
      "Custom Functionality",
    ],
    featured: false,
  },
  {
    id: "MODULE_05",
    title: "AI Automation & Intelligent Workflows",
    description:
      "Design and implementation of intelligent automation systems that help businesses reduce repetitive work, connect digital tools, streamline workflows, and improve operational efficiency.",
    capabilities: [
      "AI-Powered Workflows",
      "Business Process Automation",
      "API Integrations",
      "Automated Data Processing",
      "Intelligent Assistants",
      "Workflow Optimization",
    ],
    featured: true,
  },
];

export type ProjectVisual = "dashboard" | "storefront" | "agency" | "workflow";

export const projects = [
  {
    id: "PROJECT_001",
    category: "CATEGORY / SAAS PLATFORM",
    title: "NexaFlow",
    description:
      "A streamlined project management platform designed to help modern teams organize workflows, track performance, and collaborate efficiently.",
    stack: "React · Node.js · MongoDB",
    primary: "OPEN PROJECT ↗",
    secondary: "VIEW SOURCE ↗",
    href: "#",
    sourceHref: "#",
    visual: "dashboard" as ProjectVisual,
  },
  {
    id: "PROJECT_002",
    category: "CATEGORY / E-COMMERCE",
    title: "UrbanCart",
    description:
      "A modern e-commerce experience focused on intuitive product discovery, optimized checkout, and seamless store management.",
    stack: "WordPress · WooCommerce · PHP",
    primary: "OPEN PROJECT ↗",
    secondary: "VIEW SOURCE ↗",
    href: "#",
    sourceHref: "#",
    visual: "storefront" as ProjectVisual,
  },
  {
    id: "PROJECT_003",
    category: "CATEGORY / DIGITAL AGENCY",
    title: "Elevate Digital",
    description:
      "A high-end agency website designed to showcase services, expertise, and generate qualified leads.",
    stack: "Next.js · JavaScript · API Integration",
    primary: "OPEN PROJECT ↗",
    secondary: "VIEW SOURCE ↗",
    href: "#",
    sourceHref: "#",
    visual: "agency" as ProjectVisual,
  },
  {
    id: "PROJECT_004",
    category: "CATEGORY / AI AUTOMATION",
    title: "FlowSync AI",
    description:
      "An intelligent workflow automation system designed to connect business tools, automate repetitive processes, and use AI-powered systems to improve workflow efficiency.",
    stack: "AI Integration · API Automation · Workflow Design · Data Processing",
    primary: "OPEN PROJECT ↗",
    secondary: "VIEW SYSTEM ↗",
    href: "#",
    sourceHref: "#",
    visual: "workflow" as ProjectVisual,
  },
];

export const processSteps = [
  {
    id: "01 / DISCOVER",
    description:
      "Analyze goals, requirements, users, workflows, and technical challenges.",
  },
  {
    id: "02 / STRATEGIZE",
    description:
      "Define the structure, technology, automation opportunities, and development roadmap.",
  },
  {
    id: "03 / BUILD",
    description:
      "Develop scalable websites, applications, integrations, or automation systems.",
  },
  {
    id: "04 / REFINE",
    description:
      "Test, optimize, automate, improve, and prepare the solution for deployment.",
  },
];

export const leadershipPoints = [
  "Project Coordination",
  "Client Communication",
  "Team Collaboration",
  "Digital Strategy",
  "Technical Understanding",
  "Quality-Focused Delivery",
];

export const testimonials = [
  {
    quote:
      "Placeholder testimonial — replace with a real client quote about reliability, communication, and delivery quality.",
    name: "Client Name",
    role: "Project Role",
    company: "Company Name",
    initials: "CN",
  },
  {
    quote:
      "Placeholder testimonial — replace with feedback highlighting automation impact or development speed.",
    name: "Client Name",
    role: "Project Role",
    company: "Company Name",
    initials: "CN",
  },
  {
    quote:
      "Placeholder testimonial — replace with words about long-term collaboration and trusted partnership.",
    name: "Client Name",
    role: "Project Role",
    company: "Company Name",
    initials: "CN",
  },
];

export const projectTypes = [
  "Website Development",
  "WordPress / CMS",
  "E-Commerce Store",
  "Web Application",
  "AI Automation",
  "Other / Not Sure Yet",
];

export const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
  "Flexible",
];
