export interface Project {
  name: string;
  description: string;
  stack: string[];
  tag: string;
  github?: string;
  demo?: string;
  npm?: string;
  isFeatured?: boolean;
  stats?: {
    label: string;
    value: string;
    suffix?: string;
  }[];
}

export const projects: Project[] = [
  {
    name: "AfterLink",
    description: "A custom application-layer binary TCP protocol for Node.js. 10-byte frames, persistent connections, native pub/sub, Zod schema validation, and sub-1ms latency.",
    stack: ["binary-protocol", "nodejs", "real-time", "pub-sub", "tcp"],
    tag: "Custom Protocol",
    isFeatured: true,
    github: "https://github.com/AJAYMYTH/AfterLink",
    npm: "https://www.npmjs.com/package/afterlink",
    demo: "#",
    stats: [
      { label: "msg/sec", value: "30167", suffix: "" },
      { label: "latency", value: "0.033", suffix: "ms" },
      { label: "> WS", value: "76", suffix: "%" },
      { label: "header", value: "10", suffix: "B" }
    ]
  },
  {
    name: "TaskAIR",
    description: "CLI + web dashboard task manager with encrypted Google Drive storage.",
    stack: ["Node.js", "Supabase", "Socket.IO", "AES-256-GCM"],
    tag: "Tool",
    github: "https://github.com/AJAYMYTH/TaskAIR",
    demo: "#"
  },
  {
    name: "AttendanceByIntelligence",
    description: "Smart attendance system with WhatsApp integration and Excel import for GTTC.",
    stack: ["Node.js", "Supabase", "WhatsApp API"],
    tag: "Productivity",
    github: "https://github.com/AJAYMYTH/AttendanceByIntelligence",
    demo: "#"
  }
];
