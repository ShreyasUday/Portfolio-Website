export type PortfolioLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  summary: string;
  role?: string;
  tech: string[];
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
};

export type LearningStage = {
  title: string;
  description: string;
  skills: string[];
};

export type Portfolio = {
  name: string;
  headline: string;
  location: string;
  bio: string;
  hero3d?: {
    provider: "spline";
    sceneUrl: string;
  };
  links: {
    primary: PortfolioLink[];
    social: PortfolioLink[];
  };
  projects: Project[];
  learningPath: LearningStage[];
};

export const portfolio: Portfolio = {
  name: "Shreyas Uday",
  headline: "Backend Engineer • Platform / DevOps • Node.js + Docker + PostgreSQL",
  location: "",
  bio: "I build backend systems and deployment workflows: secure auth, clean APIs, relational schemas, and production-style infrastructure (Docker, AWS EC2, Nginx, PM2).",
  // Optional: replace the right-side hero 3D with a hosted embed.
  // Add your Spline scene URL here when you pick one.
  // Example scene URL format: https://my.spline.design/xxxxxx/
  // hero3d: { provider: "spline", sceneUrl: "https://my.spline.design/..." },
  links: {
    primary: [
      { label: "Email", href: "mailto:udayshreyas123@gmail.com" },
      {
        label: "Resume",
        href: "https://drive.google.com/file/d/1IVAC7g3CUN1_xgCn8clhF3K9cmriDa_s/view?usp=drive_link",
      },
    ],
    social: [
      { label: "GitHub", href: "https://github.com/ShreyasUday" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shreyas-uday-530482286/",
      },
      { label: "Phone", href: "tel:+916299404118" },
      { label: "LeetCode", href: "https://leetcode.com/u/URvtp3SHOy/" },
    ],
  },
  projects: [
    {
      name: "DeployStation",
      summary:
        "A self-hosted Heroku-style PaaS that deploys Node.js apps from GitHub into isolated Docker containers with lifecycle management and real-time status tracking.",
      role: "Backend + platform engineering",
      tech: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Docker",
        "GitHub OAuth",
        "JWT (httpOnly cookies)",
        "React",
        "TypeScript",
      ],
      highlights: [
        "Docker build/run pipeline: clone → build image → run container → dynamic port mapping",
        "Transparent runtime patching to rewrite localhost bindings to 0.0.0.0 for container reachability",
        "Dual auth flows: email/password + GitHub OAuth, cookie-based JWT",
      ],
      repoUrl: "https://github.com/ShreyasUday/DeployStation",
    },
    {
      name: "ReccoFlix",
      summary:
        "Full-stack anime discovery + tracking app with a persistent library and OAuth + local auth. Integrates Kitsu API for search/browse and stores user libraries in PostgreSQL.",
      role: "Backend-heavy full-stack",
      tech: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Passport.js",
        "Sessions",
        "EJS",
        "Kitsu API",
      ],
      highlights: [
        "Search + browse experiences powered by real-time Kitsu API data",
        "Persistent user library with tracked statuses (Watching / Planned / Completed / On Hold / Dropped)",
        "Auth with Passport (Local + Google OAuth) and PostgreSQL-backed sessions",
      ],
      repoUrl: "https://github.com/ShreyasUday/ReccoFlix",
      liveUrl: "https://reccoflix.app",
    },
    {
      name: "MoodTune",
      summary:
        "Mood-based music recommendation system using an ML service (FastAPI) behind an Express API gateway, enriched with Spotify metadata.",
      role: "Backend integration + ML service wiring",
      tech: [
        "Python",
        "FastAPI",
        "Node.js",
        "Express",
        "scikit-learn",
        "Spotify API",
      ],
      highlights: [
        "Service architecture: frontend → Express gateway → FastAPI ML service",
        "Spotify enrichment: album art, previews, deep links",
        "K-Means + KNN based similarity for recommendations",
      ],
      repoUrl:
        "https://github.com/ShreyasUday/MoodTune-Mood-Based-Music-Recommendation-System",
    },
    {
      name: "Legal FAQ Agent",
      summary:
        "AI-powered legal assistant to help explain rights and answer frequently asked legal questions using LLMs.",
      role: "AI / Backend",
      tech: ["Python", "FastAPI", "LLMs"],
      highlights: [
        "Natural language legal question answering",
        "Automated rights explanation workflow",
      ],
      repoUrl: "https://github.com/ShreyasUday/Legal-FAQ-and-rights-explanation-Agent",
    },
    {
      name: "Docker Learning",
      summary:
        "A hands-on, tutorial-style guide and repository for containerizing Node.js applications and orchestrating them with Docker Compose.",
      role: "Learning & Documentation",
      tech: ["Docker", "Node.js", "Docker Compose"],
      highlights: [
        "Comprehensive guide to Dockerfiles and containerization",
        "Multi-container setup examples",
      ],
      repoUrl: "https://github.com/ShreyasUday/Docker-Learning",
    },
    {
      name: "NeetCode Submissions",
      summary:
        "My personal collection of optimized data structures and algorithm solutions from NeetCode.io, focusing on efficiency and clean code.",
      role: "Algorithmic Problem Solving",
      tech: ["Java", "Data Structures", "Algorithms"],
      highlights: [
        "Solutions to top 150+ interview questions",
        "Focus on Time/Space complexity optimization",
      ],
      repoUrl: "https://github.com/ShreyasUday/neetcode-submissions",
    },
  ],
  learningPath: [
    {
      title: "Programming Fundamentals",
      description: "Building a strong foundation in logic, memory management, and problem-solving.",
      skills: ["C", "Java", "Data Structures", "Algorithms", "Object-Oriented Programming (OOP)"]
    },
    {
      title: "Web Technologies",
      description: "Stepping into the web ecosystem with interactive interfaces and version control.",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Git & GitHub"]
    },
    {
      title: "Backend Engineering",
      description: "Developing robust server-side logic, routing, and exposing data through APIs.",
      skills: ["Node.js", "Express.js", "RESTful APIs", "FastAPI", "Python"]
    },
    {
      title: "Database Architecture",
      description: "Mastering relational data, foreign keys, and performant query design.",
      skills: ["PostgreSQL", "Schema Design & Indexing"]
    },
    {
      title: "Security & Authentication",
      description: "Protecting user data and implementing secure authentication flows.",
      skills: ["Passport.js", "JWT", "Bcrypt", "Session Auth", "OAuth Integration"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Containerizing applications and managing production-grade servers.",
      skills: ["Docker", "AWS EC2", "Nginx Reverse Proxy", "PM2 Cluster Mode", "Security Groups", "Linux"]
    }
  ],
};

