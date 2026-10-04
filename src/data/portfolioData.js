/**
 * Portfolio Data for Muskan Lohar - MERN Stack Developer
 * Synchronized with official resume details.
 */

export const personalInfo = {
  name: "Muskan Lohar",
  title: "Full Stack Developer | MERN Stack",
  subTitle: "Entry-level Full Stack Developer focused on the MERN stack, building responsive, secure, and scalable web applications.",
  location: "Indore, Madhya Pradesh, India",
  email: "muskanlohar0@gmail.com",
  phone: "6261507425",
  phoneFormatted: "+91 6261507425",
  
  // Asset Paths
  profilePhoto: "/muskan-profile-photo.jpg",
  resumePath: "/muskanlohar-mern-resume.pdf",

  // Official Verified Social Profile URLs
  githubUrl: "https://github.com/MuskanLohar",
  linkedinUrl: "https://www.linkedin.com/in/muskan-lohar-fullstack",
  
  status: "Open to Work",
  availabilityText: "Available for Full Stack Developer / MERN Stack Developer Roles",

  targetRoles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Node.js Backend Developer"
  ]
};

export const aboutData = {
  paragraph1: "I'm Muskan Lohar, an entry-level Full Stack Developer focused on the MERN stack, currently pursuing an MCA at Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Indore. Completed hands-on training in MongoDB, Express.js, React.js, and Node.js, building full-stack web applications with JWT authentication, REST APIs, and responsive interfaces.",
  paragraph2: "Skilled in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Git. Eager to contribute to real-world software development projects and continuously enhance my technical expertise.",
  
  training: {
    title: "MERN Stack Development Training",
    organization: "eSkill, Indore",
    duration: "6 Months",
    description: "Hands-on training in React.js, Node.js, Express.js, MongoDB, REST APIs, authentication, and CRUD operations."
  },

  coreCapabilities: [
    "React.js & Modern Frontend Development",
    "Node.js & Express.js REST API Architecture",
    "MongoDB Database & Mongoose Integration",
    "JWT Authentication & Role-Based Access Control",
    "Gemini AI API & Third-Party Integrations",
    "Git, GitHub & Postman Workflows",
    "Responsive, Accessible & Mobile-First Web UI"
  ]
};

export const skillsCategorized = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript", isCore: true },
      { name: "TypeScript", isCore: true }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML5", isCore: true },
      { name: "CSS3", isCore: true },
      { name: "React.js", isCore: true },
      { name: "Redux Toolkit", isCore: true },
      { name: "Tailwind CSS", isCore: true },
      { name: "Next.js", isCore: false }
    ]
  },
  {
    category: "APIs & Integration",
    icon: "Webhook",
    skills: [
      { name: "REST APIs", isCore: true },
      { name: "API Integration", isCore: true }
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", isCore: true },
      { name: "Express.js", isCore: true }
    ]
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", isCore: true },
      { name: "Mongoose", isCore: true }
    ]
  },
  {
    category: "Authentication",
    icon: "ShieldCheck",
    skills: [
      { name: "JWT", isCore: true },
      { name: "bcrypt", isCore: true }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      { name: "Git", isCore: true },
      { name: "GitHub", isCore: true },
      { name: "Postman", isCore: true }
    ]
  },
  {
    category: "Cloud & Services",
    icon: "Cloud",
    skills: [
      { name: "Render", isCore: true },
      { name: "Gemini API", isCore: true }
    ]
  }
];

export const projectsData = [
  {
    id: "hrms-management",
    name: "HRMS – Human Resource Management System",
    projectType: "MERN Stack Application",
    tagline: "Full-stack Human Resource Management System for managing employee records and HR operations.",
    shortDescription: "Built with React.js, Node.js, Express.js, MongoDB, Mongoose, and JWT authentication with role-based access for employee directory management.",
    featured: true,
    isPrimary: true,
    badgeText: "FEATURED MERN PROJECT",
    category: "MERN Stack",
    imageTheme: "indigo",
    cardTechStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub",
      "Postman"
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["React.js", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication", items: ["JWT"] }
    ],
    overview: "A full-stack Human Resource Management System (HRMS) engineered to manage employee records, role-based user management, and HR operations efficiently.",
    problem: "Managing employee records and HR requests manually leads to administrative inefficiencies. HRMS provides a streamlined web solution.",
    solution: "Developed a secure MERN stack application featuring JWT authentication, role-based access control, comprehensive employee CRUD operations, and leave management.",
    myRoleTitle: "Full Stack Developer",
    myRole: "Designed frontend interfaces in React.js, engineered backend REST APIs in Express.js, created MongoDB database schemas with Mongoose, and implemented JWT authentication.",
    keyFeatures: [
      "Developed a full-stack Human Resource Management System for managing employee records and HR operations.",
      "Implemented JWT-based authentication and role-based access for secure user management.",
      "Built REST APIs and CRUD functionality for employee management and integrated them with the React frontend.",
      "Implemented leave application and management functionality with MongoDB for data storage."
    ],
    challengesSolved: [
      "Connecting React frontend with Node.js/Express backend via REST APIs.",
      "Securing administrative and employee routes with JWT authentication.",
      "Structuring relational Mongoose schemas for leave applications and employee profiles."
    ],
    liveDemoUrl: "https://hrms-management-8l03.onrender.com/",
    githubUrl: "https://github.com/MuskanLohar/HRMS-management-",
    liveDemoText: "Live Demo",
    githubText: "GitHub Repository"
  },
  {
    id: "eventspark",
    name: "EventSpark – Event Management Platform",
    projectType: "MERN Stack Platform",
    tagline: "Full-stack event management platform for discovering events and managing user RSVPs.",
    shortDescription: "Built with React.js, Node.js, Express.js, MongoDB, Mongoose, Redux, JWT, Multer, and Gemini API for AI-powered description generation.",
    featured: true,
    isPrimary: false,
    badgeText: "AI INTEGRATED MERN PROJECT",
    category: "MERN Stack + AI",
    imageTheme: "emerald",
    cardTechStack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API"],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "Gemini API",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub",
      "Postman"
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["React.js", "Redux", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Multer"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication & AI", items: ["JWT", "Gemini API"] }
    ],
    overview: "EventSpark is a full-stack event management platform where users can explore events, manage RSVPs, and leverage Gemini AI to generate automated event descriptions.",
    problem: "Coordinating event discovery, registration tracking, and event details requires a modern interactive platform.",
    solution: "Built a MERN application supporting event search, RSVP attendance tracking, admin controls, image/file uploads via Multer, and Gemini API integration for automated content generation.",
    myRoleTitle: "Full Stack Developer",
    myRole: "Built frontend with React & Redux, created backend REST APIs in Node.js/Express, set up MongoDB data models, integrated Gemini AI API, and handled file uploads.",
    keyFeatures: [
      "Developed a full-stack event management platform for discovering events and managing user RSVPs.",
      "Implemented event search, RSVP functionality, attendance tracking, and admin-based event management.",
      "Built REST APIs for event, authentication, and RSVP operations with secure JWT-based authentication.",
      "Integrated Gemini API for AI-powered event description generation and implemented file upload functionality."
    ],
    challengesSolved: [
      "Integrating Gemini API for AI content generation on event listings.",
      "Managing complex global application state with Redux Toolkit.",
      "Handling multipart form uploads and file storage for event banners."
    ],
    liveDemoUrl: "https://eventspark-zpfl.onrender.com/login",
    githubUrl: "https://github.com/MuskanLohar/EventSpark",
    liveDemoText: "Live Demo",
    githubText: "GitHub Repository"
  }
];

export const educationData = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    status: "Currently Pursuing",
    statusType: "current",
    displayBadge: "Pursuing • 2025–2027 (Expected)",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Indore",
    location: "Indore, Madhya Pradesh, India",
    period: "2025 – 2027 (Expected)",
    description: "Master's degree program focusing on modern software engineering, web architectures, backend systems, database management, and advanced full-stack development."
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    status: "Completed",
    statusType: "completed",
    displayBadge: "Completed • 2022–2025",
    institution: "Mandsaur University, Mandsaur",
    location: "Mandsaur, Madhya Pradesh, India",
    period: "2022 – 2025",
    description: "Undergraduate degree program establishing strong foundations in Computer Science, Data Structures, Database Systems, Object-Oriented Programming, and Web Technologies."
  }
];
