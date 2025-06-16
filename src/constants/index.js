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
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Trainify - AI Workout Assitance',
    desc: 'Trainify is a revolutionary Software that helps in generating Workout and diet plans according to the user needs with the help of artificial intelligence , it also gives the option to make our own customised workout and track our journey.',
    subdesc:
      'Built as a unique Software with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Gemini,MongoDB is designed for optimal performance and scalability.',
    href: 'https://www.linkedin.com/posts/vishnu-dixit-b3815729a_fitnesstech-nextjs-webdevelopment-activity-7300491282722828288-W8_f?utm_source=share&utm_medium=member_android&rcm=ACoAAEhH9pwBnb_2pD0qzNGa2_FKbA_NLpQJfLk',
    texture: '/textures/project/project1.mp4',
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
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Next js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'JECRC MUN Website',
    desc: 'Developed and deployed a fully functional, live website for the JECRC MUN (Model United Nations) Club using React.js and Tailwind CSS. The site features event details, team information, and registration capabilities, all wrapped in a responsive and modern UI.',
    subdesc:
      'Managed the complete frontend development and deployment process, enhancing the club’s online presence and improving accessibility for participants and members.',
    href: 'https://www.jecrcmun.in/',
    texture: '/textures/project/project2.mp4',
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
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'MoodSync - Mini Mood Tracker',
    desc: 'A lightweight and intuitive mood tracking application built for quick emotional logging and self-awareness. Users can easily select and record their daily mood with just a tap, encouraging mindful habits.',
    subdesc:
      'MoodSync leverages modern frontend tools like React and Vite to deliver a clean, responsive user interface that works seamlessly across devices.',
    href: 'https://mood-tracker-w5lu.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/mood.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
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
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Next js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Legacy Portfolio Site',
    desc: 'My first personal portfolio built to showcase my early web development projects. It served as my introduction to frontend development and public deployment.',
    subdesc:
      'Built with Next.js 14, Tailwind CSS, Framer Motion ensures a smooth experience.',
    href: 'https://portfolio-vd-mu.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/Vishnu Dixit.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Next js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
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

export const skills = [
  {
    name: 'React / Next.js',
    icon: '/assets/react.svg',
    level: 'Frontend',
    animation: 'Wave',
    description: 'Building responsive SPAs & SSR sites with modern React architecture.',
  },
  {
    name: 'Node.js / Express',
    icon: '/assets/nodejs.svg',
    level: 'Backend',
    animation: 'Run',
    description: 'REST API development, authentication, and server-side logic.',
  },
  {
    name: 'Generative AI',
    icon: '/assets/generative.png',
    level: 'AI Integration',
    animation: 'Thinking',
    description: 'Prompt engineering and building tools using OpenAI & vector databases.',
  },
  {
    name: 'JavaScript / TypeScript',
    icon: '/assets/js.svg',
    level: 'Language',
    animation: 'Typing',
    description: 'Writing modern, type-safe, maintainable code.',
  },
  {
    name: 'MongoDB / PostgreSQL',
    icon: '/assets/mongodb.svg',
    level: 'Database',
    animation: 'Walk',
    description: 'Schema design, query optimization, and integrations.',
  },
  {
    name: 'THREE.js/ Framer Motion/ Tailwind CSS',
    icon: '/assets/three.svg',
    level: 'UI/UX & Animation',
    animation: 'Jump',
    description: 'Sleek UI designs with interactive 3D & animations.',
  },
 
];