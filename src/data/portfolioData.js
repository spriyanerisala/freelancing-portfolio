export const PERSONAL_INFO = {
  name: "NERISALA SIVA PRIYA",
  tagline: "Freelancer • Full Stack Developer • AI & Workflow Automation Engineer",
  shortBio: "Freelance Full-Stack & AI Automation Engineer building high-performance, realistic, client-grade web applications with React, Node.js, Supabase, n8n, and tailored AI workflows.",
  availability: "Available for Freelance Contracts & Remote Projects",
  status: "🟢 Taking on Client Projects",
  location: "Remote (Global)",
  email: "nspriya005@gmail.com",
  phone: "+91 8885023504",
  whatsappUrl: "https://wa.me/918885023504?text=Hi%20Siva%20Priya,%20I'd%20like%20to%20discuss%20a%20freelance%20project!",
  socials: {
    github: "https://github.com/spriyanerisala",
    linkedin: "https://www.linkedin.com/in/siva-priya-nerisala-304aa92ab",
    leetcode: "https://leetcode.com/u/WrAEWBsWV8/",
    email: "mailto:nspriya005@gmail.com"
  },
  stats: [
    { label: "Production Web Apps", value: "8+" },
    { label: "Core Roles Covered", value: "4-in-1" },
    { label: "Avg. Turnaround", value: "1–3 Wks" },
    { label: "Code Quality & Uptime", value: "99.9%" }
  ]
};

export const SERVICES = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    subtitle: "End-to-end web apps from architecture to deployment",
    badge: "Most Requested",
    description: "Complete design, frontend UI, backend API engine, secure databases, user authentication, and cloud deployment on Vercel/Netlify/Render.",
    deliverables: [
      "Custom RESTful APIs & MVC Architecture",
      "Supabase / MongoDB / Redis integration",
      "Authentication & Role-Based Access (RLS/JWT)"
    ],
    tech: ["React.js", "Node.js", "Express.js", "Supabase", "MongoDB"]
  },
  {
    id: "frontend",
    title: "Frontend & UI/UX Engineering",
    subtitle: "Pixel-perfect, fluid, high-converting interfaces",
    badge: "Fast Delivery",
    description: "Translating Figma designs or business concepts into ultra-responsive, accessible, and fast web experiences with smooth animations.",
    deliverables: [
      "Mobile-first, responsive layouts",
      "Framer Motion & 3D WebGL interactions",
      "SEO & Lighthouse 95+ score optimization",
      "Cross-browser and mobile device fidelity"
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript ES6+", "HTML5/CSS3"]
  },
  {
    id: "backend",
    title: "Backend, APIs & Payment Integration",
    subtitle: "Robust server logic, security & payments",
    badge: "High Security",
    description: "Building scalable server infrastructure, integrating payment gateways (Razorpay, Stripe), webhook listeners, and third-party SaaS APIs.",
    deliverables: [
      "Razorpay & Stripe checkout workflows",
      "Server-side payment signature verification",
      "Secure CRUD endpoints with schema validation",
      "Database indexing, caching, and rate limiting"
    ],
    tech: ["Node.js", "Express.js", "Razorpay", "Stripe", "Redis"]
  },
  {
    id: "ai-automation",
    title: "AI Integration & Automation",
    subtitle: "Intelligent workflows, LLMs & smart agents",
    badge: "Competitive Edge",
    description: "Equipping your web platform with AI-powered chatbots, automated customer lead funnels, RAG document search, and n8n background workflows.",
    deliverables: [
      "Custom AI assistants & conversational concierge",
      "n8n webhook automations & pipeline triggers",
      "RAG vector database search (Qdrant)",
      "Gemini & OpenAI API integration"
    ],
    tech: ["n8n", "LLMs", "Gemini API", "Qdrant", "RAG", "AI Agents"]
  }
];

export const PROJECTS = [
  {
    id: "avenue-hospital",
    title: "Avenue Hospital",
    category: "Full Stack",
    tagline: "Realistic Healthcare App with Payments & Role Portals",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    description: "A production-ready, realistic, premium healthcare web application featuring modern UI/UX, an appointment booking engine, server-verified Razorpay payment integration, Supabase authentication & Row Level Security (RLS), and dedicated role-based portals for Patients, Doctors, and Hospital Administrators.",
    tech: ["React.js", "Express.js", "Node.js", "Supabase (Database)", "Razorpay"],
    demo: "https://avenue-hospital.vercel.app/",
    github: "https://github.com/spriyanerisala/avenue-hospital",
    isFlagship: true,
    highlights: [
      "Server-verified Razorpay payment flow",
      "Supabase Authentication & Row Level Security (RLS)",
      "Tri-role portals: Patients, Doctors, & Admins",
      "Dynamic Doctor Appointment booking engine"
    ],
    freelanceOutcome: "Demonstrates capability to engineer mission-critical, HIPAA-conscious, FinTech-integrated platforms with complex permission layers."
  },
  {
    id: "aura-bliss-salon",
    title: "Aura Bliss — Luxury Salon & Beauty Studio",
    category: "Frontend & UI/UX",
    tagline: "High-End Luxury Spa & Salon with WhatsApp Booking Engine",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    description: "A luxury salon & beauty studio web application featuring an editorial aesthetic with Cormorant Garamond typography, an interactive booking engine with direct WhatsApp confirmation formatting, an automated beauty concierge chatbot ('Aura'), and an administrative manager dashboard.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://aura-bliss-saloon.vercel.app/",
    github: "https://github.com/spriyanerisala/saloon-web",
    isFlagship: true,
    highlights: [
      "Bespoke editorial luxury design with fluid micro-interactions",
      "Interactive appointment scheduler with specialist & time selection",
      "Direct structured WhatsApp booking ticket generator (#BOOKING_ID)",
      "'Aura' interactive beauty concierge chatbot with quick replies",
      "Administrative manager dashboard for scheduling and salon ops"
    ],
    freelanceOutcome: "Showcases premium branding execution, luxury consumer aesthetics, high-converting customer booking journeys, and smooth client engagement."
  },
  {
    id: "titan-forge-gym",
    title: "Titan Forge Gym — Elite Athletic Club",
    category: "Frontend & UI/UX",
    tagline: "High-Performance Athletic Fitness Web App with Plan Selector",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    description: "A modern, high-impact athletic fitness and gym club web application featuring an interactive membership tier selector, dynamic fitness programs catalog, 1-on-1 coach booking engine, gym facilities tour, animated promotional offers with confetti celebrations, and a dedicated AI fitness concierge chatbot.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://gym-web-gules-gamma.vercel.app/",
    github: "https://github.com/spriyanerisala/gym_web",
    isFlagship: false,
    highlights: [
      "Interactive membership tier selector with custom inquiry routing",
      "Dynamic fitness programs catalog & 1-on-1 trainer booking system",
      "Interactive gym concierge chatbot & floating WhatsApp booking integration",
      "High-contrast dark-mode athletic UI with Framer Motion micro-interactions"
    ],
    freelanceOutcome: "Demonstrates mastery of fast modern frontend architectures, high-converting commercial landing pages, and interactive client booking funnels."
  },
  {
    id: "studentpilot-ai",
    title: "StudentPilot AI",
    category: "AI & Full Stack",
    tagline: "All-in-One AI Student Learning & Career Platform",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "All-in-one AI student learning and career platform featuring interactive course viewers, a 24/7 AI mentor, n8n-powered PDF note summarization, smart resume ATS scoring, AI mock interview simulator, and placement analytics.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "n8n", "Supabase", "Stripe"],
    demo: "https://student-copilot-ten.vercel.app/",
    imagesUrl: "https://github.com/spriyanerisala/student_copilot/tree/main/project_pics",
    statusNotice: "n8n monthly subscription is completed — this project is live, but backend automation workflows are currently inactive.",
    github: "https://github.com/spriyanerisala/student_copilot",
    isFlagship: false,
    highlights: [
      "AI mock interview simulator with real-time feedback",
      "ATS resume scanner with semantic scoring",
      "Stripe subscription monetization & Supabase auth",
      "Automated PDF lecture notes summarization via n8n"
    ],
    freelanceOutcome: "Full SaaS MVP product execution from subscription billing to multi-modal AI."
  },
  {
    id: "ai-job-copilot",
    title: "AI Job Copilot",
    category: "AI & Full Stack",
    tagline: "AI-Powered Career & Resume Tailoring Engine",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    description: "Developed an AI-powered career assistant for resume analysis, ATS scoring, job matching, interview preparation, and role-specific resume generation using React.js, Tailwind CSS, n8n, and Gemini AI.",
    tech: ["React.js", "Tailwind CSS", "n8n", "Gemini AI"],
    demo: "https://ai-job-copilot-jet.vercel.app/",
    imagesUrl: "https://github.com/spriyanerisala/ai_job_copilot/tree/main/ai_job_copilot_images",
    statusNotice: "n8n monthly subscription is completed — this project is live, but backend automation workflows are currently inactive.",
    github: "https://github.com/spriyanerisala/ai_job_copilot.git",
    isFlagship: false,
    highlights: [
      "Gemini AI prompt engineering for resume tuning",
      "Job role semantic matching algorithms",
      "n8n webhook automated pipeline",
      "Interactive ATS score analyzer with gap recommendations"
    ],
    freelanceOutcome: "Proves ability to integrate modern generative AI APIs directly into commercial SaaS workflows."
  },
  {
    id: "resume-analyzer-rag",
    title: "AI Resume Analyzer & RAG Chatbot",
    category: "AI & Full Stack",
    tagline: "Semantic Search & Vector Embeddings for Documents",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "AI-powered resume analysis chatbot with semantic search and vector embeddings. Implemented a RAG-based workflow to answer natural language questions from resume data with context-aware responses built with React.js, n8n, and Qdrant vector database.",
    tech: ["React.js", "n8n", "Qdrant", "Embeddings", "LLMs"],
    demo: "https://resume-analyser-khaki-zeta.vercel.app/",
    imagesUrl: "https://github.com/spriyanerisala/resume_analyse_n8n_vector_rag/tree/main/images_n8n",
    statusNotice: "n8n monthly subscription is completed — this project is live, but backend automation workflows are currently inactive.",
    github: "https://github.com/spriyanerisala/resume_analyse_n8n_vector_rag.git",
    isFlagship: false,
    highlights: [
      "Qdrant vector store indexing & semantic retrieval",
      "Context-augmented prompt generation",
      "Multi-document parsing and question answering",
      "Zero-latency conversational interface"
    ],
    freelanceOutcome: "Deep knowledge in state-of-the-art Vector DBs, RAG pipelines, and conversational AI."
  },
  {
    id: "alumni-website",
    title: "Alumni Network & Community Hub",
    category: "Full Stack",
    tagline: "Full-Stack Community Platform with Admin Controls",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description: "Full-stack alumni management web app with secure user/admin authentication. Admin panel with CRUD operations using MongoDB & Express.js. Responsive React UI deployed on Vercel.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Vercel"],
    demo: "https://alumni-website-clg.vercel.app/",
    github: "https://github.com/spriyanerisala/alumni_website",
    isFlagship: false,
    highlights: [
      "Community directory with search & filters",
      "Role-based administrative moderation",
      "Scalable REST API endpoints on Express.js",
      "Fast response times with MongoDB aggregation"
    ],
    freelanceOutcome: "Demonstrates scalable relational & non-relational database design for community platforms."
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion", "Three.js / 3D Canvas", "Responsive Design", "UI/UX Prototyping"]
  },
  {
    name: "Backend & Systems",
    icon: "Server",
    skills: ["Node.js", "Express.js", "TypeScript", "RESTful APIs", "Authentication & Authorization (RBAC)", "JWT Auth", "MVC Architecture", "Webhook Handling", "Server Security"]
  },
  {
    name: "Databases & Cloud",
    icon: "Database",
    skills: ["MySQL", "Supabase (PostgreSQL)", "MongoDB", "Redis (Caching)", "Row Level Security (RLS)", "Vercel", "Netlify", "Render"]
  },
  {
    name: "FinTech & Payments",
    icon: "CreditCard",
    skills: ["Razorpay Integration", "Stripe Checkout", "Signature Verification", "Webhook Listeners", "Order Invoicing"]
  },
  {
    name: "AI & Automation",
    icon: "Cpu",
    skills: ["n8n Workflow Automation", "AI Agents", "LLMs", "Vector Embeddings", "Gemini API", "RAG Architecture", "Qdrant Vector DB", "Model Context Protocol (MCP)"]
  },
  {
    name: "Workflow & Tools",
    icon: "Wrench",
    skills: ["Git & GitHub", "Postman", "Cursor", "Antigravity", "Claude AI", "VS Code"]
  }
];

export const FREELANCE_WORKFLOW = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We discuss your business goals, target audience, technical requirements, timeline, and feature priorities to produce a concrete project spec."
  },
  {
    step: "02",
    title: "Interactive Prototyping & Design",
    description: "I craft intuitive, responsive UI mockups and component systems ensuring high visual appeal and smooth user journeys before code."
  },
  {
    step: "03",
    title: "Full-Stack Development & Testing",
    description: "Writing clean, modular code with secure APIs, database modeling, payment gateways, and end-to-end testing with continuous progress updates."
  },
  {
    step: "04",
    title: "Deployment, Handover & Support",
    description: "Production launch on Vercel/Render with custom domains, full source code handover on GitHub, and post-launch maintenance guarantee."
  }
];

export const FREELANCE_FAQS = [
  {
    question: "What roles and project types do you take on?",
    answer: "I take on contracts as a Full Stack Developer, Frontend Specialist, Backend Engineer, or complete Web App Developer. Whether you need a brand-new MVP from scratch, a payment gateway integration (Razorpay/Stripe), custom AI chatbots, or a redesign of your existing web app, I deliver end-to-end."
  },
  {
    question: "How long does a typical project take?",
    answer: "A focused landing page or frontend project typically takes 4–7 days. Complete full-stack web applications with authentication, databases, and payment integration generally take 2–3 weeks depending on scope."
  },
  {
    question: "How do we collaborate and communicate during the build?",
    answer: "We connect directly via WhatsApp (+91 8885023504) or Google Meet. I provide staging URLs on Vercel so you can test real-time progress every 48 hours, ensuring no surprises."
  },
  {
    question: "Do you provide source code and post-launch support?",
    answer: "Yes! You receive 100% full ownership of the clean GitHub repository, environment setup instructions, and 14–30 days of free post-launch bug fixes."
  }
];
