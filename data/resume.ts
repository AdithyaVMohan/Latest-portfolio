// All content below is sourced directly from Adithya V Mohan's CV.
// Nothing here is invented — update this file if the CV changes.

export const profile = {
  name: "Adithya V Mohan",
  title: "Full Stack Developer",
  stack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  email: "adithyavmohan@gmail.com",
  phone: "+971 563787981",
  location: "Sharjah, UAE",
  residency: "UAE Resident — no employer sponsorship required",
  photo: "/assets/adithya.jpg",
  summaryphoto:"/assets/bwphoto.jpeg",
  links: {
    linkedin: "https://www.linkedin.com/in/adithyavmohan/", 
    github: "https://github.com/AdithyaVMohan",
    portfolio: "",
  },
};

// Roles to rotate through under the name in the Hero — the titles you want
// to surface for when someone (or an ATS) scans the page.
export const targetRoles = [
  "Node.js Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "React Developer",
  "JavaScript Developer",
];

export const summary = [
  "Full Stack Developer with hands-on experience building end-to-end web applications using React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB. Experienced in developing responsive frontends, RESTful APIs, authentication, database integration, CRUD workflows, and application features across the full development lifecycle.",
  "Brings 4+ years of enterprise software development experience at Accenture, along with prior UAE application development experience at Nuroil Trading LLC, Sharjah. Currently focused on modern full-stack development, building complete applications from requirements through frontend, backend, database integration, testing, and deployment.",
  "Based in Sharjah, UAE with independent UAE work authorization and actively seeking Full Stack Developer opportunities in Dubai and across the UAE.",
];

export const skillGroups = [
  {
    label: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Redux",
      "JSON",
      "NPM",
    ],
  },

  {
    label: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication & Authorization",
      "Server-side Validation",
    ],
  },

  {
    label: "Database Technologies",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "MSSQL",
      "MySQL",
    ],
  },

  {
    label: "UI / Design",
    skills: [
      "Figma",
      "UI/UX Design",
      "Responsive Design",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    label: "Version Control & Tools",
    skills: [
      "Git",
      "GitHub",
      "Confluence",
    ],
  },

  {
    label: "Cloud & Platforms",
    skills: [
      "AWS",
      "Google Cloud Platform",
      "Vercel",
      "Render",
    ],
  },

  {
    label: "Testing & Debugging",
    skills: [
      "Manual Testing",
      "API Testing",
      "Debugging & Troubleshooting",
      "Log Analysis",
    ],
  },

  {
    label: "Programming & Scripting",
    skills: [
      "JavaScript",
      "PowerShell",
      "Bash",
    ],
  },

  {
    label: "Professional Strengths",
    skills: [
      "SDLC",
      "Cross-functional Collaboration",
      "Production-grade Application Handling",
      "Performance & Reliability Focus",
    ],
  },
];

export const experience = [
  {
    employer: "Upcode, India",
    role: "Full Stack Developer",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Build and ship modular, scalable features across the MERN stack (MongoDB, Express.js, React.js, Node.js), owning delivery from requirement analysis through deployment.",
      "Develop responsive, reusable React.js components (JavaScript ES6+, HTML5, CSS3), improving UI consistency and cutting duplicate frontend code across the application.",
      "Design and integrate RESTful APIs in Node.js/Express.js with full CRUD functionality and server-side validation, reducing invalid-data errors reaching production.",
      "Implement JWT-based authentication with protected routes, securing user sessions and access control across the application.",
      "Design MongoDB schemas and manage data collections integrated into backend services to support scalable data access.",
      "Apply prior production-support experience to debug issues faster and improve application stability, resolving defects proactively before they affect users.",
      "Collaborate via Git/GitHub with the engineering team, participating in code reviews to keep the codebase clean and maintainable.",
    ],
  },
  {
    employer: "Accenture Solutions Private Ltd, India",
    role: "Application Development Analyst",
    period: "Dec 2021 – April 2025",
    current: false,
    points: [
      "Developed and delivered frontend and backend features for enterprise web applications using React.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Translated business requirements into functional UI features and backend logic across multiple release cycles.",
      "Developed and maintained SQL Server, MySQL, and MSSQL database logic and implemented monthly change requests across development and production environments.",
      "Performed root-cause analysis, debugging, log analysis, and preventive fixes for production issues.",
      "Automated deployment and operational activities for GCP-hosted applications using PowerShell.",
      "Worked with Git-based version control and CI/CD workflows for application releases.",
      "Collaborated with cross-functional teams to analyze requirements, troubleshoot defects, and deliver application changes.",
    ],
  },
  {
    employer: "Nuroil Trading LLC, Sharjah",
    role: "Application Developer",
    tag: "UAE Experience",
    period: "Jun 2020 – Dec 2020",
    current: false,
    points: [
      "Gathered requirements directly from HR stakeholders and end users to design full-stack modules for an internal HRMS platform covering onboarding, leave management, performance tracking, and payroll.",
      "Built backend business logic and data-access layers on SQL Server, designing and optimizing relational schemas for reliability at scale.",
      "Integrated the HRMS with external and legacy systems to keep data consistent across departments.",
      "Ran end-to-end testing and debugging ahead of production releases, and built dynamic HR reports and dashboards to support decision-making.",
    ],
  },
];

export const projects = [
  {
    title: "CRM Management System",
    subtitle: "Full Stack",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Material UI"],
    points: [
      "Developing a full-stack CRM application using Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and Material UI.",
      "Built responsive and reusable user interfaces using Next.js, TypeScript, and Material UI (MUI) for CRM modules including Companies, Leads, Deals, and Tickets.",
      "Implemented advanced UI features such as data tables, search, filtering, pagination, forms, and validation for efficient data management.",
      "Developing RESTful APIs using Node.js and Express.js for CRUD operations and integrating frontend with backend services.",
      "Designed and managed PostgreSQL database schemas for storing CRM-related data and handling application workflows.",
      "Followed component-based architecture, API integration practices, and clean code structure for scalable application development.",
    ],
    link: "https://github.com/AdithyaVMohan/CRM-Admin",
  },
  {
    title: "E-Commerce Web Application",
    subtitle: "Full Stack",
    stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "JWT"],
    points: [
      "Built a full-stack e-commerce web application with product browsing, cart, authentication, and order management features.",
      "Developed RESTful APIs using Node.js and Express for products, users, cart, and orders.",
      "Implemented JWT authentication with protected routes for secure user access.",
      "Used React with Redux for state management of cart and authentication.",
      "Designed PostgreSQL database schema for Users, Products, and Orders with sample data.",
    ],
    link: "https://github.com/AdithyaVMohan/AdithyaVMohan/tree/mainproject",
  },
];

export const certifications = [
  { name: "ITIL® Foundation Certification", issuer: "PeopleCert", validity: "April 2025 – April 2028" },
  { name: "PL-300: Power BI Data Analyst", issuer: "Microsoft", validity: "Jan 2025 – Jan 2026" },
  { name: "GitHub Copilot Certification", issuer: "GitHub", validity: "March 2025 – March 2028" },
];

export const education = [
  {
    school: "Thejus Engineering College",
    degree: "BTech — Computer Science Engineering (Lateral Entry)",
    period: "2016 – 2019",
    score: "CGPA: 7.11",
  },
  {
    school: "Government Polytechnic College, Chelakkara",
    degree: "Diploma in Hardware Engineering",
    period: "2013 – 2016",
    score: "CGPA: 8.6",
  },
];

export const languages = [
  { name: "English", abilities: ["Read", "Write", "Speak"] },
  { name: "Hindi", abilities: ["Read", "Write", "Speak"] },
  { name: "Malayalam", abilities: ["Read", "Write", "Speak"] },
  { name: "Tamil", abilities: ["Read", "Speak"] },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
