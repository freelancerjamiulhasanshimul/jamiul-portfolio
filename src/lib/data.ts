export const site = {
  name: "Jamiul H. Shimul",
  role: "Full Stack Web Developer & AI Automation Specialist",
  statement:
    "I build websites, online stores, and smart automations that solve real problems — and I make the process feel easy from first call to launch.",
  description:
    "Jamiul H. Shimul is a Full Stack Web Developer and AI Automation Specialist, and the Managing Director of Webrayz IT Solutions, helping businesses grow through thoughtful web development and automation.",
  url: "https://jamiul-portfolio-sigma.vercel.app",
  webrayzUrl: "https://webrayz.com/",
  location: "Bangladesh · Working with clients worldwide",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
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
  { label: "Projects delivered", value: 25, suffix: "+" },
  { label: "Technologies & tools", value: 15, suffix: "+" },
  { label: "Automation systems", value: 10, suffix: "+" },
  { label: "Commitment to quality", value: 100, suffix: "%" },
];

export const skillGroups = [
  {
    id: "web",
    tag: "The foundations of every site I build",
    accent: "accent" as const,
    title: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "PHP"],
  },
  {
    id: "backend",
    tag: "Connecting your site to the services it needs",
    accent: "sage" as const,
    title: "Backend & Integrations",
    items: ["Node.js", "MySQL", "REST APIs", "Third-party integrations"],
  },
  {
    id: "ai",
    tag: "Saving you time on the work that repeats itself",
    accent: "accent" as const,
    title: "AI & Automation",
    items: [
      "AI-powered workflows",
      "AI integrations",
      "Business process automation",
      "Intelligent assistants",
    ],
  },
  {
    id: "cms",
    tag: "Online stores and sites you can manage yourself",
    accent: "terracotta" as const,
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
    tag: "The details that make a site succeed",
    accent: "sage" as const,
    title: "Tools & Best Practices",
    items: ["Git", "SEO", "Performance optimization"],
  },
];

export const services = [
  {
    title: "WordPress Development",
    description:
      "A beautiful, easy-to-manage WordPress website built around your business — fast, flexible, and ready to grow with you.",
    capabilities: [
      "Custom themes",
      "SEO setup",
      "Performance tuning",
      "Mobile-friendly design",
    ],
    featured: false,
  },
  {
    title: "Custom Website Development",
    description:
      "A website designed and built from scratch for exactly what you need — no templates, no compromises, clean code throughout.",
    capabilities: [
      "Hand-crafted design",
      "Modern frameworks",
      "Responsive development",
      "Clean, maintainable code",
    ],
    featured: false,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "An online store your customers will love using — from browsing to checkout — and that you can manage without a headache.",
    capabilities: [
      "WooCommerce & Shopify",
      "Payment setup",
      "Product management",
      "Checkout optimization",
    ],
    featured: false,
  },
  {
    title: "Web Applications",
    description:
      "Web apps built around how your business actually works — booking systems, dashboards, portals, and everything in between.",
    capabilities: [
      "Frontend & backend",
      "Databases",
      "API development",
      "Custom features",
    ],
    featured: false,
  },
  {
    title: "AI Automation",
    description:
      "If your team spends hours on repetitive tasks, automation can give them that time back. I design AI-powered workflows that connect your tools and handle the busywork — reliably and quietly in the background.",
    capabilities: [
      "AI-powered workflows",
      "Process automation",
      "App integrations",
      "Data handling",
      "Intelligent assistants",
    ],
    featured: true,
  },
];

export type ProjectVisual = "dashboard" | "storefront" | "agency" | "workflow";

export const projects = [
  {
    category: "SaaS Platform",
    title: "NexaFlow",
    description:
      "A streamlined project management platform designed to help modern teams organize workflows, track performance, and collaborate efficiently.",
    stack: "React · Node.js · MongoDB",
    primary: "View Case Study",
    secondary: "View Source",
    href: "#",
    sourceHref: "#",
    visual: "dashboard" as ProjectVisual,
  },
  {
    category: "E-Commerce",
    title: "UrbanCart",
    description:
      "A modern e-commerce experience focused on intuitive product discovery, optimized checkout, and seamless store management.",
    stack: "WordPress · WooCommerce · PHP",
    primary: "View Case Study",
    secondary: "View Source",
    href: "#",
    sourceHref: "#",
    visual: "storefront" as ProjectVisual,
  },
  {
    category: "Digital Agency",
    title: "Elevate Digital",
    description:
      "A high-end agency website designed to showcase services, expertise, and generate qualified leads.",
    stack: "Next.js · JavaScript · API Integration",
    primary: "View Case Study",
    secondary: "View Source",
    href: "#",
    sourceHref: "#",
    visual: "agency" as ProjectVisual,
  },
  {
    category: "AI Automation",
    title: "FlowSync AI",
    description:
      "An intelligent workflow automation system designed to connect business tools, automate repetitive processes, and use AI-powered systems to improve workflow efficiency.",
    stack: "AI Integration · API Automation · Workflow Design · Data Processing",
    primary: "View Case Study",
    secondary: "View Details",
    href: "#",
    sourceHref: "#",
    visual: "workflow" as ProjectVisual,
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We start with a real conversation about your goals, your audience, and the challenges you're facing.",
  },
  {
    title: "Plan",
    description:
      "I map out the right technology and approach, and you get a clear plan with timeline and pricing.",
  },
  {
    title: "Build",
    description:
      "I design and develop your website, store, or automation — with regular check-ins so you're never left guessing.",
  },
  {
    title: "Launch & Support",
    description:
      "We test and polish everything together, launch with confidence, and I stay available after go-live.",
  },
];

export const leadershipPoints = [
  "Project coordination",
  "Client communication",
  "Team collaboration",
  "Digital strategy",
  "Technical guidance",
  "Quality-focused delivery",
];

export const testimonials = [
  {
    quote:
      "This is a placeholder — replace it with a real client quote about working together, communication, and results.",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    initials: "CN",
  },
  {
    quote:
      "This is a placeholder — replace it with feedback about an automation project or a website build.",
    name: "Client Name",
    role: "Marketing Lead",
    company: "Company Name",
    initials: "CN",
  },
  {
    quote:
      "This is a placeholder — replace it with words about long-term collaboration and trusted partnership.",
    name: "Client Name",
    role: "Operations Manager",
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
