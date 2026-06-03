export interface Skill {
  name: string;
  icon: string; // Lucide icon name or category key
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Runtime",
    skills: [
      { name: "JavaScript", icon: "Code2" },
      { name: "TypeScript", icon: "Code2" },
      { name: "Node.js", icon: "Server" },
      { name: "Python", icon: "Terminal" },
      { name: "HTML/CSS", icon: "Layout" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "Layers" },
      { name: "Vite", icon: "Cpu" },
      { name: "Astro.js", icon: "Rocket" },
      { name: "Express.js", icon: "Server" },
      { name: "Tailwind CSS", icon: "Sparkles" },
      { name: "Socket.IO", icon: "Share2" }
    ]
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Claude API", icon: "Bot" },
      { name: "OpenRouter", icon: "Bot" },
      { name: "RAG Pipelines", icon: "Cpu" },
      { name: "pgvector", icon: "Database" },
      { name: "Supabase Vector", icon: "Database" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "Cloud" },
      { name: "Vercel", icon: "Cloud" },
      { name: "Google Cloud", icon: "Cloud" },
      { name: "n8n", icon: "Shuffle" },
      { name: "GitHub Actions", icon: "GitBranch" }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "Supabase", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "Google Drive API", icon: "HardDrive" },
      { name: "Google Sheets API", icon: "Table" }
    ]
  },
  {
    title: "Protocols & Networking",
    skills: [
      { name: "TCP/IP", icon: "Network" },
      { name: "AfterLink Binary Protocol", icon: "Network" },
      { name: "WebSocket", icon: "Activity" },
      { name: "HTTP/REST", icon: "Globe" },
      { name: "JWT", icon: "Lock" },
      { name: "TLS", icon: "ShieldCheck" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "GitPullRequest" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "FileCode2" },
      { name: "Postman", icon: "Send" },
      { name: "Figma (basic)", icon: "Palette" }
    ]
  }
];
