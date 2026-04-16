import awsCert from "../assets/aws-cert.png";
import leetcodeImg from "../assets/leetcode.png";
import mongodbCert from "../assets/mongodb-cert.png";

export const headerData = {
  name: "SAIPRANEETH BACHAMPALLY",
  roles: ["Full Stack Developer", "Applied AI Engineer", "Competitive Programmer"],
  tagline: "Building scalable apps & intelligent automation systems",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const skillsData = [
  { category: "Programming", skills: ["C", "Java", "Python", "JavaScript", "C++", "Data Structures & Algorithms"] },
  { category: "Frontend", skills: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Databases", skills: ["MongoDB", "SQLite", "PostgreSQL"] },
  { category: "AI / ML", skills: ["LangChain", "LLMs", "Prompt Engineering", "Generative AI", "Gemini Flash"] },
  { category: "Tools & Other", skills: ["Git", "GitHub", "Linux", "Docker", "CI/CD", "Agile"] },
];

export const experienceData = [
  {
    role: "Full Stack Developer",
    company: "KL GLUG",
    duration: "Sep 2024 – May 2025",
    description: [
      "Collaborated with academic and administrative teams to support university operations.",
      "Developed a multilingual conversational AI chatbot using MERN stack and LLM-based architecture."
    ]
  },
  {
    role: "Project Lead and Frontend Developer",
    company: "ZEROONE CODECLUB",
    duration: "June 2023 – Aug 2024",
    description: [
      "Led the development of an IPL Dashboard project, managing a team and delivering a React.js application.",
      "Mentored junior developers and improved team productivity through technical guidance.",
      "Strengthened leadership and project management skills in university tech initiatives."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Hire Match",
    description: "An AI-powered resume analyzer that uses Gen AI and the MERN stack to process candidates' resumes and provide insights and matching scores.",
    tech: ["Gen AI", "MERN Stack", "OpenAI", "React"],
    image: "https://images.unsplash.com/photo-1586281380349-631531a3d245?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/saipraneeth4004/Hire-Match",
    live: "#",
  },
  {
    id: 2,
    title: "Checklist Automation Agent",
    description: "AI-powered financial checklist agent using Python, LangChain, and Gemini Flash. Automates month-end financial close workflows with rule-based validation pipelines.",
    tech: ["Python", "LangChain", "Gemini Flash", "LLMs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/saipraneeth4004/CheckList_Automation_Agent",
    live: "#",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "Full-stack application using React, Node.js, Express, and SQL. Features an interactive dashboard with charts, filtering, and RESTful APIs for efficient data management.",
    tech: ["React", "Node.js", "Express", "SQL"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    github: "https://github.com/saipraneeth4004/expense-Tracker",
    live: "#",
  },
];

export const achievementsData = [
  {
    id: 1,
    title: "200+ LeetCode Submissions",
    description: "Consistent coding practice on LeetCode with 200+ high-quality submissions and 150+ active days, mastering algorithms and patterns.",
    image: leetcodeImg,
    link: "https://leetcode.com/u/saipraneeth31549/",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    description: "Validation of overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
    image: awsCert,
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/524c5aee04064bde9b41ba9340ceb0a1",
  },
  {
    id: 3,
    title: "MongoDB Associate Developer",
    description: "Certified MongoDB Associate Developer, demonstrating proficiency in data modeling, querying, and database administration.",
    image: mongodbCert,
    link: "https://www.credly.com/badges/d0c73950-266b-458f-af5e-51d9d7f1be7c/public_url",
  },
];
