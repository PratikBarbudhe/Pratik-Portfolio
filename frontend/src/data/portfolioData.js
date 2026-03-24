// Portfolio Data - Easy to update all content from one place
// Update this file to change your portfolio content
import certCyberFundamentals from '../assets/certificates/cert-cyber-fundamentals.svg';
import certNetworkingBasics from '../assets/certificates/cert-networking-basics.svg';
import certEthicalHacking from '../assets/certificates/cert-ethical-hacking.svg';

export const personalInfo = {
  name: "Pratik Barbudhe", // Replace with your actual name
  title: "MCA Cyber Security Student",
  tagline: "SOC Analyst Aspirant | Security Projects Builder",
  email: "pratikbarbudhe03@gmail.com", // Replace with your email
  phone: "+91 9403276797", // Replace with your phone (optional)
  location: "India, Pune",
  linkedin: "https://www.linkedin.com/in/pratik-barbudhe/", // Replace with your LinkedIn
  github: "https://github.com/PratikBarbudhe", // Replace with your GitHub
  resume: "/resume.pdf", // Add your resume to public folder
};

export const aboutData = {
  intro: `I'm a first-year MCA student specializing in Cyber Security, passionate about building secure systems and identifying vulnerabilities before malicious actors do.`,
  
  careerObjective: `Aspiring SOC Analyst with a strong foundation in web security, vulnerability assessment, and security tooling. I'm actively seeking internships and entry-level roles in Cyber Security (SOC Analyst / IT Audit / Cyber Consultant track) where I can apply my practical project experience and continue learning from industry professionals.`,
  
  highlights: [
    "MCA (2st Year) - Cyber Security Specialization",
    "Hands-on experience with OWASP Top 10 vulnerabilities",
    "Built production-ready security tools with Python & Flask",
    "Practical learner with a project-driven approach",
    "Strong documentation and research focus",
  ],
  
  interests: [
    "Security Operations Center (SOC)",
    "Web Application Security",
    "Vulnerability Assessment & Penetration Testing",
    "IT Audit & Compliance",
    "Security Automation",
  ],
  
  education: {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Cyber Security",
    year: "2st Year",
    status: "Currently Pursuing",
  },
};

export const projectsData = [
  {
    id: 1,
    title: "Web Vulnerability Scanner",
    subtitle: "Major Project",
    description: "A comprehensive web vulnerability scanning tool that detects OWASP Top 10 vulnerabilities including SQL Injection, XSS, and insecure headers. Features a user-friendly dashboard with severity-based reporting.",
    techStack: ["Python", "Flask", "MongoDB", "HTML/CSS", "JavaScript"],
    features: [
      "Scans websites for OWASP Top 10 vulnerabilities",
      "Detects SQL Injection, XSS, insecure headers",
      "Stores scan reports in MongoDB database",
      "Dashboard with results & severity levels",
      "Export reports in multiple formats",
    ],
    securityRelevance: "Directly addresses web application security by automating vulnerability detection, a critical skill for SOC analysts and security consultants.",
    github: "https://github.com/your-username/web-vulnerability-scanner",
    demo: null, // Add demo URL if available
    image: "https://placehold.co/1200x700/0b1020/00ff88?text=Web+Vulnerability+Scanner",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "AI-ML Classroom Attendance System",
    subtitle: "Academic Mini-Project",
    description: "An intelligent attendance management system that uses facial recognition to automatically mark student attendance from classroom photographs.",
    techStack: ["Python", "OpenCV", "Face Recognition", "NumPy"],
    features: [
      "Captures classroom photos for attendance",
      "Detects multiple faces in a single image",
      "Matches faces against student database",
      "Automatically marks attendance records",
      "Generates attendance reports",
    ],
    securityRelevance: "Demonstrates understanding of biometric authentication concepts, image processing, and secure data handling - relevant for identity and access management.",
    github: "https://github.com/your-username/ai-attendance-system",
    demo: null,
    image: "https://placehold.co/1200x700/10132b/00d4ff?text=AI-ML+Attendance+System",
    status: "Completed",
    featured: true,
    university: "Savitribai Phule Pune University",
  },
  {
    id: 3,
    title: "CodeNest - Learning Platform",
    subtitle: "Web Development Project",
    description: "A student-friendly e-learning platform featuring programming roadmaps, integrated book search functionality, and an intuitive user interface designed for aspiring developers.",
    techStack: ["HTML", "CSS", "Java", "MongoDB", "REST API"],
    features: [
      "Programming learning roadmaps",
      "Book search using external API integration",
      "Student-friendly responsive UI",
      "User progress tracking",
      "Resource recommendations",
    ],
    securityRelevance: "Implemented secure API integration, user authentication, and data validation - foundational skills for secure web development.",
    github: "https://github.com/your-username/codenest",
    demo: null,
    image: "https://placehold.co/1200x700/1a1336/7c3aed?text=CodeNest+Learning+Platform",
    status: "Completed",
    featured: false,
  },
];

export const skillsData = {
  categories: [
    {
      name: "Cyber Security",
      icon: "Shield",
      color: "cyber-primary",
      skills: [
        { name: "OWASP Top 10", level: 85 },
        { name: "SOC Fundamentals", level: 70 },
        { name: "Vulnerability Assessment", level: 80 },
        { name: "Web Application Security", level: 85 },
        { name: "Security Auditing", level: 65 },
      ],
    },
    {
      name: "Security Tools",
      icon: "Terminal",
      color: "cyber-secondary",
      skills: [
        { name: "Burp Suite", level: 75 },
        { name: "Nmap", level: 80 },
        { name: "Wireshark", level: 70 },
        { name: "Linux", level: 75 },
        { name: "Metasploit", level: 60 },
      ],
    },
    {
      name: "Programming",
      icon: "Code",
      color: "cyber-accent",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 70 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Bash Scripting", level: 65 },
      ],
    },
    {
      name: "Web Development",
      icon: "Globe",
      color: "cyber-warning",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "React.js", level: 70 },
        { name: "Flask", level: 80 },
        { name: "REST APIs", level: 75 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      name: "Databases",
      icon: "Database",
      color: "cyber-danger",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "Database Security", level: 65 },
      ],
    },
    {
      name: "Other Skills",
      icon: "Briefcase",
      color: "cyber-muted",
      skills: [
        { name: "Networking Fundamentals", level: 75 },
        { name: "Git & GitHub", level: 80 },
        { name: "Technical Documentation", level: 85 },
        { name: "Problem Solving", level: 80 },
      ],
    },
  ],
};

export const certificationsData = [
  {
    id: 1,
    title: "Cyber Security Fundamentals",
    issuer: "Coursera", // e.g., "Coursera", "Udemy", "NPTEL"
    date: "Apr 2024", // Update with actual date
    credentialId: "NVL7NHUVEXDZ", // Add if available
    credentialUrl: "https://coursera.org/verify/NVL7NHUVEXDZ", // Add verification URL
    image: certCyberFundamentals,
    description: "Completed foundational training covering key security principles and practical defensive strategies.",
    keyLearnings: [
      "Threat modeling basics",
      "CIA triad in real-world systems",
      "Incident response lifecycle",
    ],
    skills: ["Security Concepts", "Threat Analysis", "Risk Assessment"],
    featured: true,
  },
  {
    id: 2,
    title: "Networking Basics",
    issuer: "Add Issuer Name",
    date: "2024",
    credentialId: "XXXXX",
    credentialUrl: "#",
    image: certNetworkingBasics,
    description: "Learned core networking concepts needed for security analysis and monitoring.",
    keyLearnings: [
      "Subnetting and routing concepts",
      "Packet flow troubleshooting",
      "Common network attack vectors",
    ],
    skills: ["TCP/IP", "Network Protocols", "Network Security"],
    featured: true,
  },
  {
    id: 3,
    title: "Ethical Hacking & Security Awareness",
    issuer: "Add Issuer Name",
    date: "2024",
    credentialId: "XXXXX",
    credentialUrl: "#",
    image: certEthicalHacking,
    description: "Introduced ethical hacking workflows and vulnerability analysis mindset.",
    keyLearnings: [
      "Reconnaissance workflow",
      "Safe vulnerability validation",
      "Responsible disclosure process",
    ],
    skills: ["Penetration Testing", "Security Tools", "Vulnerability Analysis"],
    featured: true,
  },
  // Add more certifications as you earn them
  // {
  //   id: 4,
  //   title: "New Certification",
  //   issuer: "Issuer",
  //   date: "2025",
  //   credentialId: "ID",
  //   credentialUrl: "URL",
  //   skills: ["Skill1", "Skill2"],
  //   featured: false,
  // },
];

/**
 * Learning Journal entries.
 * Add new items at the top so the latest learning appears first.
 */
export const learningJournalData = [
  {
    id: 1,
    date: "2026-03-20",
    topic: "SIEM Log Correlation Basics",
    notes: "Practiced creating simple correlation ideas to detect brute-force login attempts and suspicious privilege escalation patterns.",
    snippetTitle: "Basic failed-login correlation logic",
    snippetLanguage: "javascript",
    snippet: `const isSuspiciousLoginPattern = (failedAttempts, minutesWindow) => {
  return failedAttempts >= 5 && minutesWindow <= 10;
};`,
  },
  {
    id: 2,
    date: "2026-03-18",
    topic: "OWASP Top 10 - Broken Access Control",
    notes: "Reviewed common IDOR scenarios and documented secure authorization checks for backend APIs.",
    snippetTitle: "Role and ownership authorization check",
    snippetLanguage: "javascript",
    snippet: `const canAccessRecord = ({ userId, role }, recordOwnerId) => {
  return role === 'admin' || userId === recordOwnerId;
};`,
  },
  {
    id: 3,
    date: "2026-03-15",
    topic: "Nmap Service Enumeration",
    notes: "Compared scan options for speed and detail, and wrote notes on interpreting open ports and service banners.",
    snippetTitle: "Sample nmap command set",
    snippetLanguage: "bash",
    snippet: `nmap -sV -sC target.example.com
nmap -p- --min-rate 1000 target.example.com`,
  },
  {
    id: 4,
    date: "2026-03-12",
    topic: "Secure Input Validation",
    notes: "Practiced whitelist-based validation and length restrictions before request processing.",
    snippetTitle: "Email validation helper",
    snippetLanguage: "javascript",
    snippet: `const isValidEmail = (email) =>
  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.trim());`,
  },
  {
    id: 5,
    date: "2026-03-09",
    topic: "JWT Session Security",
    notes: "Reviewed token expiration strategy and refresh token handling to reduce session hijack risk.",
    snippetTitle: "JWT expiry check",
    snippetLanguage: "javascript",
    snippet: `const isExpired = (expUnixSeconds) =>
  Date.now() >= expUnixSeconds * 1000;`,
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Certifications", path: "/certifications" },
  { name: "Learning Journal", path: "/learning-journal" },
  { name: "Contact", path: "/contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "Mail",
  },
];
