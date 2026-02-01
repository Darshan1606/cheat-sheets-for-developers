import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { useState, useEffect, useMemo } from "react";

// Generate stars with varying properties
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random();
    stars.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: size < 0.7 ? 1 : size < 0.9 ? 2 : 3,
      opacity: Math.random() * 0.6 + 0.4,
      twinkle: Math.random() > 0.6,
      delay: Math.random() * 4,
    });
  }
  return stars;
};

const SpaceBackground = () => {
  const stars = useMemo(() => generateStars(100), []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div className="absolute inset-0 bg-[#020408]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a20]/30 to-[#050510]/50" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-cyan/[0.03] rounded-full blur-[150px]" />
      <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-blue/[0.02] rounded-full blur-[120px]" />

      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.twinkle ? "animate-[starTwinkle_3s_ease-in-out_infinite]" : ""}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            boxShadow:
              star.size > 1
                ? `0 0 ${star.size * 2}px rgba(255,255,255,0.3)`
                : "none",
          }}
        />
      ))}
    </div>
  );
};

const terminalLines = [
  { prompt: "~/projects", command: "git status", color: "text-accent-coral" },
  {
    prompt: "db",
    command: "SELECT * FROM users WHERE active = true;",
    color: "text-accent-cyan",
  },
  {
    prompt: "mongodb",
    command: "db.users.find({ status: 'active' }).limit(10)",
    color: "text-green",
  },
  {
    prompt: "redis",
    command: "SET session:user123 '{\"logged_in\": true}' EX 3600",
    color: "text-red",
  },
  {
    prompt: "docker",
    command: "docker compose up -d --build",
    color: "text-blue",
  },
  {
    prompt: "aws",
    command: "aws s3 ls && aws ec2 describe-instances",
    color: "text-orange",
  },
  {
    prompt: "dsa",
    command: "binarySearch(arr, target) // O(log n)",
    color: "text-purple",
  },
  {
    prompt: "~",
    command: "ls -la | grep '.conf' | head -5",
    color: "text-accent-cyan",
  },
  {
    prompt: "python",
    command: "model.fit(X_train, y_train)",
    color: "text-yellow",
  },
  {
    prompt: "ai",
    command: "You are an expert... Let's think step by step",
    color: "text-accent-coral",
  },
  {
    prompt: "langchain",
    command: "chain = prompt | llm | parser",
    color: "text-green",
  },
];

const TerminalWindow = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const line = terminalLines[currentLine];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex <= line.command.length) {
        setDisplayedText(line.command.slice(0, charIndex));
        charIndex++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayedText("");
          setCurrentLine((prev) => (prev + 1) % terminalLines.length);
        }, 2000);
        return;
      }
    };

    const interval = setInterval(typeChar, 50);
    return () => clearInterval(interval);
  }, [currentLine]);

  const line = terminalLines[currentLine];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 md:mb-12">
      <div className="rounded-xl overflow-hidden border border-border-default shadow-2xl">
        <div className="bg-bg-tertiary px-4 py-2.5 flex items-center gap-2 border-b border-border-default">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green/80" />
          </div>
          <span className="text-text-muted text-xs ml-2 font-mono">
            toolnotes ~ terminal
          </span>
        </div>
        <div className="bg-bg-primary/95 p-4 md:p-5 font-mono text-xs md:text-sm min-h-[100px] md:min-h-[120px]">
          <div className="text-text-muted/50 mb-2 text-xs">
            <span className="text-green/50">$</span> Welcome to Tool Notes -
            Your Developer Cheat Sheets
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`${line.color} opacity-80`}>{line.prompt}</span>
            <span className="text-accent-cyan">$</span>
            <span className="text-text-primary break-all">{displayedText}</span>
            <span
              className={`inline-block w-2 h-4 md:h-5 bg-accent-cyan ${isTyping ? "animate-pulse" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Cheat sheet card component
const CheatSheetCard = ({ sheet, colorStyles }) => (
  <Link
    to={sheet.path}
    className={`group relative bg-bg-secondary/50 backdrop-blur-sm rounded-xl md:rounded-2xl border ${colorStyles[sheet.color].border} p-4 md:p-5 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl`}
  >
    <div
      className={`absolute inset-0 rounded-xl md:rounded-2xl ${colorStyles[sheet.color].glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
    />
    <div className="relative">
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${colorStyles[sheet.color].iconBg} flex items-center justify-center mb-3 md:mb-4`}
      >
        <Icon
          name={sheet.icon}
          className={`w-5 h-5 md:w-6 md:h-6 ${colorStyles[sheet.color].icon}`}
        />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1.5 flex items-center gap-2">
        {sheet.title}
        <Icon
          name="chevron-right"
          className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
        />
      </h3>
      <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-2">
        {sheet.description}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-md ${colorStyles[sheet.color].badge}`}
        >
          {sheet.commands}
        </span>
        <span className="text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-bg-tertiary text-text-muted">
          {sheet.categories}
        </span>
      </div>
    </div>
  </Link>
);

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories with their cheat sheets
  const categories = [
    {
      id: "devops",
      name: "DevOps",
      icon: "server",
      color: "blue",
      sheets: [
        {
          title: "Git",
          description:
            "Version control commands for tracking changes and collaboration",
          icon: "git-branch",
          path: "/git",
          color: "coral",
          commands: "80+ commands",
          categories: "12 categories",
        },
        {
          title: "Docker",
          description:
            "Container commands for building, running, and managing apps",
          icon: "box",
          path: "/docker",
          color: "blue",
          commands: "85+ commands",
          categories: "12 categories",
        },
        {
          title: "AWS",
          description:
            "Amazon Web Services CLI commands for cloud infrastructure",
          icon: "cloud",
          path: "/aws",
          color: "orange",
          commands: "120+ commands",
          categories: "16 categories",
        },
        {
          title: "Linux",
          description:
            "Command line & Bash scripting for system administration",
          icon: "terminal",
          path: "/linux",
          color: "cyan",
          commands: "150+ commands",
          categories: "16 categories",
        },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      icon: "database",
      color: "green",
      sheets: [
        {
          title: "SQL",
          description: "Database queries for data manipulation and retrieval",
          icon: "database",
          path: "/sql",
          color: "cyan",
          commands: "70+ queries",
          categories: "10 categories",
        },
        {
          title: "MongoDB",
          description: "NoSQL database operations and aggregation pipelines",
          icon: "braces",
          path: "/mongodb",
          color: "green",
          commands: "65+ operations",
          categories: "9 categories",
        },
        {
          title: "Redis",
          description:
            "In-memory data store for caching, sessions, and real-time apps",
          icon: "database",
          path: "/redis",
          color: "red",
          commands: "90+ commands",
          categories: "12 categories",
        },
      ],
    },
    {
      id: "ai",
      name: "AI & ML",
      icon: "sparkles",
      color: "yellow",
      sheets: [
        {
          title: "AI/ML",
          description:
            "Machine Learning with NumPy, Pandas, Scikit-learn & PyTorch",
          icon: "sparkles",
          path: "/aiml",
          color: "yellow",
          commands: "160+ snippets",
          categories: "16 categories",
        },
        {
          title: "Prompts",
          description: "Prompt engineering techniques and patterns for AI/LLMs",
          icon: "message-square",
          path: "/prompt",
          color: "coral",
          commands: "100+ techniques",
          categories: "16 categories",
        },
        {
          title: "LLM Tools",
          description:
            "LangChain, LlamaIndex, RAG, Vector DBs, and AI frameworks",
          icon: "blocks",
          path: "/llmtools",
          color: "green",
          commands: "120+ concepts",
          categories: "16 categories",
        },
      ],
    },
    {
      id: "fundamentals",
      name: "CS Fundamentals",
      icon: "code",
      color: "purple",
      sheets: [
        {
          title: "DSA",
          description: "Data Structures & Algorithms patterns and complexities",
          icon: "code",
          path: "/dsa",
          color: "purple",
          commands: "170+ concepts",
          categories: "16 categories",
        },
      ],
    },
  ];

  const allSheets = categories.flatMap((cat) => cat.sheets);
  const totalCommands = "1000+";
  const totalCategories = categories.length;

  const filteredSheets =
    activeCategory === "all"
      ? allSheets
      : categories.find((c) => c.id === activeCategory)?.sheets || [];

  const colorStyles = {
    coral: {
      gradient: "from-accent-coral/20 to-accent-coral/5",
      border: "border-accent-coral/20 hover:border-accent-coral/40",
      icon: "text-accent-coral",
      iconBg: "bg-accent-coral/10",
      glow: "bg-accent-coral/20",
      badge: "bg-accent-coral/10 text-accent-coral",
    },
    cyan: {
      gradient: "from-accent-cyan/20 to-accent-cyan/5",
      border: "border-accent-cyan/20 hover:border-accent-cyan/40",
      icon: "text-accent-cyan",
      iconBg: "bg-accent-cyan/10",
      glow: "bg-accent-cyan/20",
      badge: "bg-accent-cyan/10 text-accent-cyan",
    },
    green: {
      gradient: "from-green/20 to-green/5",
      border: "border-green/20 hover:border-green/40",
      icon: "text-green",
      iconBg: "bg-green/10",
      glow: "bg-green/20",
      badge: "bg-green/10 text-green",
    },
    red: {
      gradient: "from-red/20 to-red/5",
      border: "border-red/20 hover:border-red/40",
      icon: "text-red",
      iconBg: "bg-red/10",
      glow: "bg-red/20",
      badge: "bg-red/10 text-red",
    },
    blue: {
      gradient: "from-blue/20 to-blue/5",
      border: "border-blue/20 hover:border-blue/40",
      icon: "text-blue",
      iconBg: "bg-blue/10",
      glow: "bg-blue/20",
      badge: "bg-blue/10 text-blue",
    },
    orange: {
      gradient: "from-orange/20 to-orange/5",
      border: "border-orange/20 hover:border-orange/40",
      icon: "text-orange",
      iconBg: "bg-orange/10",
      glow: "bg-orange/20",
      badge: "bg-orange/10 text-orange",
    },
    purple: {
      gradient: "from-purple/20 to-purple/5",
      border: "border-purple/20 hover:border-purple/40",
      icon: "text-purple",
      iconBg: "bg-purple/10",
      glow: "bg-purple/20",
      badge: "bg-purple/10 text-purple",
    },
    yellow: {
      gradient: "from-yellow/20 to-yellow/5",
      border: "border-yellow/20 hover:border-yellow/40",
      icon: "text-yellow",
      iconBg: "bg-yellow/10",
      glow: "bg-yellow/20",
      badge: "bg-yellow/10 text-yellow",
    },
  };

  const categoryTabColors = {
    all: "text-accent-cyan",
    devops: "text-blue",
    databases: "text-green",
    ai: "text-yellow",
    fundamentals: "text-purple",
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <section className="relative overflow-hidden">
        <SpaceBackground />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-28 pb-12 md:pb-20">
          {/* Badge */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-bg-secondary/80 border border-border-default backdrop-blur-sm">
              <Icon
                name="sparkles"
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-cyan"
              />
              <span className="text-xs md:text-sm text-text-secondary">
                {totalCommands} Commands • {totalCategories} Categories
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 tracking-tight px-2">
            <span className="text-text-primary">Cheat Sheets for </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-accent-coral via-accent-cyan to-blue bg-clip-text text-transparent">
              Modern Developers
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg text-text-secondary text-center max-w-2xl mx-auto mb-8 md:mb-10 px-4">
            Quick reference guides for DevOps, Databases, AI/ML & more. Copy
            commands with a click, print for offline use.
          </p>

          {/* Terminal Window */}
          <TerminalWindow />

          {/* Category Filter Tabs */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-bg-secondary/50 backdrop-blur-sm rounded-xl border border-border-default">
              <button
                onClick={() => setActiveCategory("all")}
                className={`cursor-pointer flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-bg-tertiary text-accent-cyan border border-accent-cyan/30"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                }`}
              >
                <Icon name="layers" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>All</span>
                <span className="hidden sm:inline text-text-muted">
                  ({allSheets.length})
                </span>
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`cursor-pointer flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? `bg-bg-tertiary ${categoryTabColors[cat.id]} border border-current/30`
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                  }`}
                >
                  <Icon name={cat.icon} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{cat.name}</span>
                  <span className="sm:hidden">{cat.name.split(" ")[0]}</span>
                  <span className="hidden md:inline text-text-muted">
                    ({cat.sheets.length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filteredSheets.map((sheet) => (
              <CheatSheetCard
                key={sheet.path}
                sheet={sheet}
                colorStyles={colorStyles}
              />
            ))}
          </div>

          {/* Quick Stats when viewing category */}
          {activeCategory !== "all" && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setActiveCategory("all")}
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
              >
                <Icon name="layers" className="w-4 h-4" />
                View all {allSheets.length} cheat sheets
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative border-t border-border-default">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "copy",
                title: "Click to Copy",
                description:
                  "Copy any command instantly with a single click. No more manual selection.",
              },
              {
                icon: "terminal",
                title: "Production Ready",
                description:
                  "Real-world commands organized by category. Find what you need fast.",
              },
              {
                icon: "file-text",
                title: "Print Friendly",
                description:
                  "Optimized layouts for printing. Keep a reference at your desk.",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-bg-secondary border border-border-default flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon
                    name={feature.icon}
                    className="w-5 h-5 md:w-6 md:h-6 text-text-secondary"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1.5 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-default">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm md:text-base text-text-muted">
            <div className="flex items-center">
              <img
                src="/tn.png"
                alt="Tool Notes"
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover"
              />
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight ml-1">
                Tool Notes
              </span>
            </div>
            <p className="text-xs md:text-sm">
              Built for developers who value their time
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
