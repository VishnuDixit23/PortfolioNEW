export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Skills',
    href: '#resume',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Trainify - AI Workout & Diet Platform',
    desc: 'Developed a full-stack fitness platform that generates personalized workout and diet plans based on user goals, fitness level, and training preferences.',
    subdesc:
      'Implemented secure JWT-based authentication, protected routes, and user profile management with workout tracking and progress monitoring features to log activities and visualize fitness gains over time.',
    href: 'https://trainify-green.vercel.app/',
    github: 'https://github.com/VishnuDixit23/Trainify',
    texture: '/assets/trainifyvid.mp4',
    logo: '/assets/Trainify.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'JECRC MUN Website',
    desc: 'Developed and maintained the official website for a large-scale Model United Nations conference, serving as the primary platform for participant registrations and event information.',
    subdesc:
      'Built responsive and reusable UI components using React.js and Tailwind CSS with Framer Motion animations, ensuring seamless user experience across devices.',
    href: 'https://www.jecrcmun.in/',
    github: 'https://github.com/VishnuDixit23/JECRCMUN25',
    texture: '/assets/mun2026.mp4',
    logo: '/assets/mun.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'United For Animal Welfare',
    desc: 'Collaborated with a 3-member development team to design, develop, and deploy the official website for an animal welfare NGO, providing a centralized platform for awareness campaigns, volunteering initiatives, and community engagement.',
    subdesc:
      'Built responsive frontend interfaces using React.js and integrated backend services with Java and SQL, delivering a scalable, user-friendly experience across desktop and mobile devices.',
    href: 'https://www.unitedforanimalwelfare.org/',
    github: 'https://github.com/VishnuDixit23/UAW',
    texture: '/assets/uawvid.mp4',
    logo: '/assets/uaw-logo.jpeg',
    logoStyle: {
      backgroundColor: '#0D2116',
      border: '0.2px solid #144026',
      boxShadow: '0px 0px 60px 0px rgba(34, 197, 94, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Java',
        path: '/assets/java.svg',
      },
      {
        id: 3,
        name: 'SQL',
        path: '/assets/sql.svg',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'GTA VI Landing Page',
    desc: 'Engineered a highly interactive GTA VI-inspired landing page featuring advanced GSAP animations, scroll-triggered effects, and immersive visual storytelling.',
    subdesc:
      'Implemented dynamic masking and logo reveal animations synchronized with user scrolling to create a cinematic browsing experience using React, GSAP, and Tailwind CSS.',
    href: 'https://gta-6-landing-page-bffc.vercel.app/',
    github: 'https://github.com/VishnuDixit23/gta-6-landing-page',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/gta6-logo.jpg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'GSAP',
        path: '/assets/gsap.jpg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    type: 'Freelance',
    company: 'United For Animal Welfare',
    period: 'Production Deployment',
    liveUrl: 'https://www.unitedforanimalwelfare.org/',
    githubUrl: 'https://github.com/VishnuDixit23/UAW',
    highlights: [
      'Collaborated with a 3-member development team to design, develop, and deploy the official website for an animal welfare NGO, providing a centralized platform for awareness campaigns, volunteering initiatives, and community engagement.',
      'Built responsive frontend interfaces using React.js and integrated backend services with Java and SQL, delivering a scalable and user-friendly experience across desktop and mobile devices.',
      'Implemented performance optimization and structured content management practices to improve accessibility, responsiveness, and the NGO\'s digital presence, helping expand outreach and public engagement.',
    ],
  },
];

export const education = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  institution: 'Jaipur Engineering College and Research Centre',
  status: 'Final-Year Undergraduate',
  summary: 'Specialized in AI systems, full-stack software development, data algorithms, and building reliable applications that deliver user value.',
};

export const skills = [
  {
    name: 'React / Next.js',
    icon: '/assets/react.svg',
    level: 'Frontend',
    badge: 'frontend',
    proficiency: 92,
    description: 'Modern SPA/SSR web architecture, server components, and responsive state management.',
  },
  {
    name: 'Node.js / Express.js',
    icon: '/assets/nodejs.svg',
    level: 'Backend',
    badge: 'backend',
    proficiency: 85,
    description: 'REST API architectures, JWT authentication, server middleware, and microservices.',
  },
  {
    name: 'Generative AI & LLMs',
    icon: '/assets/generative.png',
    level: 'AI / LLM',
    badge: 'ai',
    proficiency: 88,
    description: 'LangChain, vector embeddings, Gemini/OpenAI API integrations, and prompt engineering.',
  },
  {
    name: 'Agentic AI & RAG',
    icon: '/assets/generative.png',
    level: 'AI / LLM',
    badge: 'ai',
    proficiency: 85,
    description: 'Autonomous AI agents, RAG retrieval pipelines, LangGraph workflows, and tool execution.',
  },
  {
    name: 'JavaScript / TypeScript',
    icon: '/assets/js.svg',
    level: 'Language',
    badge: 'language',
    proficiency: 90,
    description: 'Modern ES6+, asynchronous programming, strict types, and robust full-stack logic.',
  },
  {
    name: 'Java & Python',
    icon: '/assets/java.svg',
    level: 'Language',
    badge: 'language',
    proficiency: 82,
    description: 'Object-oriented programming, backend services, scripting, and data structures.',
  },
  {
    name: 'THREE.js',
    icon: '/assets/three.svg',
    level: 'UI / 3D',
    badge: 'animation',
    proficiency: 78,
    description: 'Immersive 3D scene rendering, custom shaders, camera rigging, and lighting models.',
  },
  {
    name: 'GSAP & Framer Motion',
    icon: '/assets/gsap.jpg',
    level: 'UI / 3D',
    badge: 'animation',
    proficiency: 85,
    description: 'Cinematic scroll-triggered timelines, interactive transitions, and smooth physics.',
  },
  {
    name: 'Tailwind CSS',
    icon: '/assets/tailwindcss.png',
    level: 'Frontend',
    badge: 'frontend',
    proficiency: 92,
    description: 'Utility-first responsive layouts, modern design tokens, and sleek dark interfaces.',
  },
  {
    name: 'MongoDB & SQL',
    icon: '/assets/mongodb.svg',
    level: 'Database',
    badge: 'database',
    proficiency: 82,
    description: 'Relational & NoSQL database schemas, queries, indexing, and data modeling.',
  },
];