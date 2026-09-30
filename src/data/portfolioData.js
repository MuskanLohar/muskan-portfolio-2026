/**
 * Portfolio Data for Muskan - MERN Stack Developer
 * All content, links, and project details can be edited directly in this file.
 */

export const personalInfo = {
  name: "Muskan",
  title: "MERN Stack Developer",
  subTitle: "Building modern, responsive, and scalable full-stack web applications using the MERN stack.",
  location: "Indore, Madhya Pradesh, India",
  email: "muskanlohar0@gmail.com",
  phone: "6261507425",
  phoneFormatted: "+91 6261507425",
  
  // Asset Paths (Replace files in public/ folder when ready)
  profilePhoto: "/muskan-profile-photo.jpg", // Place photo in public/muskan-profile-photo.jpg
  resumePath: "/muskan-resume.pdf",          // Place PDF in public/muskan-resume.pdf

  // Official Verified Social Profile URLs
  githubUrl: "https://github.com/MuskanLohar",
  linkedinUrl: "https://www.linkedin.com/in/muskan-lohar-fullstack",
  
  status: "Open to Work",
  availabilityText: "Available for MERN Stack / Full Stack Developer Roles",

  targetRoles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Junior Software Developer"
  ]
};

export const aboutData = {
  paragraph1: "I’m Muskan, a MERN Stack Developer with a completed BCA and currently pursuing MCA. I have completed a 6-month MERN Stack Development training course from eSkills, Indore, where I gained hands-on experience in building full-stack web applications using React.js, Node.js, Express.js and MongoDB.",
  paragraph2: "I enjoy solving problems, learning new technologies and building practical web applications. I’m currently looking for opportunities as a MERN Stack Developer / Full Stack Developer.",
  
  coreCapabilities: [
    "React.js & Modern Frontend Architecture",
    "Node.js & Express.js REST API Design",
    "MongoDB Database Schema & Mongoose",
    "Secure JWT Authentication & Authorization",
    "Third-Party & AI API Integrations",
    "Git & GitHub Version Control Workflows",
    "Responsive, Accessible & Mobile-First UI Design"
  ]
};

export const skillsCategorized = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML", isCore: false },
      { name: "CSS", isCore: false },
      { name: "JavaScript", isCore: true },
      { name: "TypeScript", isCore: true },
      { name: "React.js", isCore: true },
      { name: "Redux", isCore: true },
      { name: "Tailwind CSS", isCore: true },
      { name: "Next.js", isCore: false }
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", isCore: true },
      { name: "Express.js", isCore: true },
      { name: "RESTful APIs", isCore: true }
    ]
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", isCore: true },
      { name: "Mongoose ODM", isCore: true }
    ]
  },
  {
    category: "Tools & Version Control",
    icon: "Wrench",
    skills: [
      { name: "Git", isCore: true },
      { name: "GitHub", isCore: true },
      { name: "VS Code", isCore: false },
      { name: "Postman", isCore: true }
    ]
  },
  {
    category: "Deployment & Hosting",
    icon: "Cloud",
    skills: [
      { name: "Vercel", isCore: false },
      { name: "Render", isCore: false }
    ]
  },
  {
    category: "Specialized & Architecture",
    icon: "ShieldCheck",
    skills: [
      { name: "JWT Authentication", isCore: true },
      { name: "API Integration", isCore: true },
      { name: "AI API Integration", isCore: true }
    ]
  }
];

export const projectsData = [
  {
    id: "eventspark",
    name: "EventSpark",
    projectType: "MERN Stack Event Management Platform",
    tagline: "MERN Stack Event Management Platform",
    shortDescription: "Full-stack event management platform with authentication, RSVP management, admin controls and AI-powered event description generation.",
    featured: true,
    isPrimary: true,
    badgeText: "PRIMARY FEATURED PROJECT",
    category: "Full Stack",
    imageTheme: "emerald",
    cardTechStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI"],
    techStack: [
      "React.js",
      "Redux",
      "JavaScript",
      "CSS / Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Gemini AI API",
      "Multer",
      "Git",
      "GitHub",
      "Postman"
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["React.js", "Redux", "JavaScript", "CSS / Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication", items: ["JWT"] },
      { category: "Other", items: ["Gemini AI API", "Multer", "Git", "GitHub", "Postman"] }
    ],
    overview: "EventSpark is a full-stack event management web application where users can discover events, view event details and RSVP to events. It also provides administrative features for managing events and monitoring RSVPs.",
    problem: "Managing events, registrations and attendee information manually can be difficult. EventSpark provides a centralized web application for discovering events, managing event information and handling user RSVPs.",
    solution: "I built a MERN Stack application that allows authenticated users to browse and search events, view event details and RSVP with different attendance preferences. Administrators can manage events and monitor RSVP information from the admin side.",
    myRoleTitle: "Full-Stack Developer",
    myRole: "I worked on both frontend and backend development, including UI development, API integration, authentication, database operations and application features.",
    keyFeatures: [
      "User registration and login",
      "JWT-based authentication",
      "Event listing and event details",
      "Event search",
      "RSVP functionality",
      "Going / Interested / Not Going attendance options",
      "Attendance tracking",
      "Admin authentication",
      "Admin event management",
      "Event CRUD operations",
      "RSVP management",
      "AI-powered event description generation",
      "Responsive user interface",
      "REST API integration"
    ],
    challengesSolved: [
      "Connecting the React frontend with the Node.js/Express backend through REST APIs.",
      "Implementing authentication and protecting authenticated routes.",
      "Managing RSVP states and attendance information.",
      "Building separate user and admin functionality.",
      "Integrating AI-powered event description generation.",
      "Handling file uploads and backend API integration.",
      "Managing application state using Redux."
    ],
    liveDemoUrl: "https://eventspark-zpfl.onrender.com/login",
    githubUrl: "https://github.com/MuskanLohar/EventSpark",
    liveDemoText: "Live Demo",
    githubText: "GitHub Repository"
  },
  {
    id: "hrms-management",
    name: "HRMS Management",
    projectType: "MERN Stack Human Resource Management System",
    tagline: "MERN Stack Human Resource Management System",
    shortDescription: "Full-stack HR management system with authentication, employee CRUD, role-based operations and leave management.",
    featured: true,
    isPrimary: false,
    category: "Enterprise Web App",
    imageTheme: "indigo",
    cardTechStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    techStack: [
      "React.js",
      "JavaScript",
      "CSS / Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Git",
      "GitHub",
      "Postman"
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["React.js", "JavaScript", "CSS / Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication", items: ["JWT"] },
      { category: "Tools", items: ["Git", "GitHub", "Postman"] }
    ],
    overview: "HRMS Management is a full-stack MERN application designed to manage employees, authentication, roles and leave-related operations in an organized system.",
    problem: "Managing employee records, role permissions, and leave requests manually creates administrative friction. HRMS Management provides a structured digital workspace to resolve these operations.",
    solution: "I engineered a centralized MERN application with role-based access control (Admin, HR, Manager), comprehensive employee directory CRUD, and leave quota tracking.",
    myRoleTitle: "Full-Stack Developer",
    myRole: "Full-Stack Developer - Built frontend interfaces in React with Tailwind CSS, created secure backend REST endpoints in Express, designed Mongoose schemas, and handled JWT auth.",
    keyFeatures: [
      "User authentication",
      "JWT-based authentication",
      "Employee management",
      "Employee CRUD operations",
      "Role-based access",
      "HR/Admin/Manager functionality",
      "Leave application and management",
      "Leave quota handling",
      "REST API integration",
      "MongoDB database operations",
      "Responsive interface"
    ],
    challengesSolved: [
      "Connecting React frontend with Express backend",
      "Implementing JWT authentication",
      "Creating protected routes",
      "Managing employee CRUD operations",
      "Handling role-based functionality",
      "Managing leave application and leave data",
      "Connecting APIs with MongoDB"
    ],
    liveDemoUrl: "https://hrms-management-8l03.onrender.com/",
    githubUrl: "https://github.com/MuskanLohar/HRMS-management-",
    liveDemoText: "Live Demo",
    githubText: "GitHub Repository"
  },
  {
    id: "ai-chatboard",
    name: "AI Chatboard",
    projectType: "AI-Powered MERN Chat Application",
    tagline: "AI-Powered MERN Chat Application",
    shortDescription: "AI-powered chat application with Gemini API integration, conversation history and a modern responsive interface.",
    featured: true,
    isPrimary: false,
    category: "AI Integration",
    imageTheme: "cyan",
    cardTechStack: ["React", "Vite", "Node.js", "Express", "Gemini AI", "Tailwind CSS"],
    techStack: [
      "React.js",
      "Vite",
      "Axios",
      "Tailwind CSS",
      "React Markdown",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "@google/genai",
      "REST API",
      "CORS",
      "dotenv",
      "Git",
      "GitHub"
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["React.js", "Vite", "Axios", "Tailwind CSS", "React Markdown"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "AI", items: ["Google Gemini API", "@google/genai"] },
      { category: "Other", items: ["REST API", "CORS", "dotenv", "Git", "GitHub"] }
    ],
    overview: "AI Chatboard is an AI-powered chat application where users can send prompts and receive AI-generated responses through a backend API connected with Google's Gemini API.",
    problem: "Standard web chat interfaces often lack lightweight prompt workspaces with markdown response rendering. AI Chatboard offers a dedicated AI assistant interface.",
    solution: "I developed a responsive React chat application powered by an Express backend that communicates securely with Google's Gemini API (@google/genai) to render Markdown responses and track conversation history.",
    myRoleTitle: "Full-Stack Developer",
    myRole: "Full-Stack Developer - Developed the React chat interface, built backend Express proxy routes for AI requests, integrated the Gemini AI API, and structured real-time response handling.",
    keyFeatures: [
      "AI chat interface",
      "Prompt-based conversations",
      "Gemini AI integration",
      "Backend API for AI requests",
      "Conversation history support",
      "React frontend",
      "Express backend",
      "REST API integration",
      "Responsive dark UI",
      "Markdown response rendering"
    ],
    challengesSolved: [
      "Integrating frontend with backend AI API",
      "Connecting Gemini API securely through backend",
      "Handling user prompts and AI responses",
      "Managing conversation history",
      "Rendering AI responses properly",
      "Creating a responsive chat interface"
    ],
    liveDemoUrl: "https://aichatboard.onrender.com/",
    githubUrl: "https://github.com/MuskanLohar/AIchatBoard",
    liveDemoText: "Live Demo",
    githubText: "GitHub Repository"
  },
  {
    id: "imaginex",
    name: "Imaginex",
    projectType: "MERN Stack AI Image Generation Application",
    tagline: "MERN Stack AI Image Generation Application",
    shortDescription: "AI-powered image generation platform built with MERN, Gemini AI, JWT authentication and Cloudinary.",
    featured: true,
    isPrimary: false,
    category: "Creative Web App",
    imageTheme: "purple",
    cardTechStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI", "Cloudinary"],
    techStack: [
      "React.js",
      "JavaScript",
      "CSS / Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Google GenAI / Gemini",
      "Cloudinary",
      "Git",
      "GitHub",
      "Postman"
    ],
    techStackCategorized: [
      { category: "Frontend", items: ["React.js", "JavaScript", "CSS / Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Authentication", items: ["JWT", "bcrypt"] },
      { category: "AI", items: ["Google GenAI / Gemini"] },
      { category: "Cloud", items: ["Cloudinary"] },
      { category: "Tools", items: ["Git", "GitHub", "Postman"] }
    ],
    overview: "Imaginex is a MERN-based AI image generation application that allows users to generate images using AI and manage generated images through cloud storage.",
    problem: "Generating and managing AI imagery requires combining user authentication, AI API prompt processing, and reliable media cloud storage. Imaginex provides a single platform for this workflow.",
    solution: "Built a full-stack MERN application integrating Google GenAI / Gemini for AI image synthesis, JWT for secure user access, and Cloudinary for uploading and serving media assets.",
    myRoleTitle: "Full-Stack Developer",
    myRole: "Full-Stack Developer - Designed frontend components in React, created Node.js REST endpoints, integrated Gemini AI image generation logic, and configured Cloudinary image storage.",
    keyFeatures: [
      "User registration/login",
      "JWT authentication",
      "AI image generation",
      "Gemini/Google GenAI integration",
      "Cloudinary integration",
      "Image upload and storage",
      "MongoDB database",
      "REST API integration",
      "Responsive UI",
      "Modern dark interface"
    ],
    challengesSolved: [
      "Integrating AI image generation",
      "Connecting React with backend APIs",
      "Implementing authentication",
      "Managing generated images",
      "Uploading/storing images with Cloudinary",
      "Connecting MongoDB with application data",
      "Handling API integration"
    ],
    liveDemoUrl: "",
    githubUrl: "https://github.com/MuskanLohar/imaginex",
    liveDemoText: "Live Demo — Coming Soon",
    githubText: "GitHub Repository"
  }
];

export const educationData = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    status: "Currently Pursuing",
    statusType: "current",
    displayBadge: "Currently Pursuing • 2025–2027",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Indore",
    location: "Indore, Madhya Pradesh, India",
    period: "2025 – 2027",
    description: "Advanced master's degree program focusing on software engineering principles, enterprise database architecture, modern web technologies, and advanced full-stack development."
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
    description: "Undergraduate degree program building strong core foundations in Computer Science, Object-Oriented Programming, Database Systems, Data Structures, and Web Development."
  }
];
