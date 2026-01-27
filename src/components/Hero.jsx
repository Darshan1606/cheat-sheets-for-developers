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
  const stars = useMemo(() => generateStars(300), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#020408]" />

      {/* Subtle space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a20]/30 to-[#050510]/50" />

      {/* Distant nebula glow - very subtle */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-cyan/[0.03] rounded-full blur-[150px]" />
      <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-blue/[0.02] rounded-full blur-[120px]" />

      {/* Star field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.twinkle ? 'animate-[starTwinkle_3s_ease-in-out_infinite]' : ''}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 1 ? `0 0 ${star.size * 2}px rgba(255,255,255,0.3)` : 'none',
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="absolute top-[15%] left-[10%] animate-[shootingStar_8s_ease-out_infinite]">
        <div className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-white to-white rounded-full"
          style={{ transform: 'rotate(35deg)', boxShadow: '0 0 6px 1px rgba(255,255,255,0.4)' }}
        />
      </div>
      <div className="absolute top-[40%] right-[20%] animate-[shootingStar_12s_ease-out_infinite_4s]">
        <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-white/80 rounded-full"
          style={{ transform: 'rotate(40deg)', boxShadow: '0 0 4px 1px rgba(255,255,255,0.3)' }}
        />
      </div>
      <div className="absolute top-[60%] left-[30%] animate-[shootingStar_15s_ease-out_infinite_8s]">
        <div className="w-[60px] h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/60 to-accent-cyan/60 rounded-full"
          style={{ transform: 'rotate(45deg)', boxShadow: '0 0 4px 1px rgba(0,229,204,0.2)' }}
        />
      </div>

      {/* Distant star clusters - subtle bright spots */}
      <div className="absolute top-[25%] left-[70%] w-1 h-1 bg-white/60 rounded-full blur-[1px]" />
      <div className="absolute top-[65%] left-[15%] w-1 h-1 bg-accent-cyan/40 rounded-full blur-[1px]" />
      <div className="absolute top-[45%] right-[25%] w-1.5 h-1.5 bg-white/50 rounded-full blur-[1px]" />

      {/* Very subtle cosmic dust */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 20% 30%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0,229,204,0.2) 0%, transparent 40%)',
        }}
      />
    </div>
  );
};

const terminalLines = [
  { prompt: "~/projects", command: "git status", color: "text-accent-coral" },
  {
    prompt: "~/projects",
    command: "git add . && git commit -m 'feat: add new feature'",
    color: "text-accent-coral",
  },
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
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="rounded-xl overflow-hidden border border-border-default shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-bg-tertiary px-4 py-3 flex items-center gap-2 border-b border-border-default">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red/80" />
            <div className="w-3 h-3 rounded-full bg-yellow/80" />
            <div className="w-3 h-3 rounded-full bg-green/80" />
          </div>
          <span className="text-text-muted text-xs ml-2 font-mono">
            toolnotes ~ terminal
          </span>
        </div>

        {/* Terminal Body */}
        <div className="bg-bg-primary/95 p-5 font-mono text-sm min-h-[120px]">
          {/* Previous lines (faded) */}
          <div className="text-text-muted/50 mb-2 text-xs">
            <span className="text-green/50">$</span> Welcome to Tool Notes -
            Your Developer Cheat Sheets
          </div>

          {/* Current line */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`${line.color} opacity-80`}>{line.prompt}</span>
            <span className="text-accent-cyan">$</span>
            <span className="text-text-primary">{displayedText}</span>
            <span
              className={`inline-block w-2 h-5 bg-accent-cyan ${
                isTyping ? "animate-pulse" : ""
              }`}
            />
          </div>

          {/* Output preview */}
          <div className="mt-3 text-text-muted/60 text-xs">
            <span className="text-text-secondary/40">
              // Press Enter to explore {terminalLines[currentLine].prompt}{" "}
              commands
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const cheatSheets = [
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
  ];

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
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Space Background */}
        <SpaceBackground />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary/80 border border-border-default backdrop-blur-sm">
              <Icon name="sparkles" className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-text-secondary">
                Developer Reference Guides
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 tracking-tight">
            <span className="text-text-primary">Cheat Sheets for </span>
            <br />
            <span className="bg-gradient-to-r from-accent-coral via-accent-cyan to-blue bg-clip-text text-transparent">
              Modern Developers
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Quick reference guides for Git, SQL, MongoDB, Redis & Docker. Copy
            commands with a click, print for offline use, and master your tools
            faster.
          </p>

          {/* Terminal Window */}
          <TerminalWindow />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {cheatSheets.map((sheet) => (
              <Link
                key={sheet.path}
                to={sheet.path}
                className={`group relative bg-bg-secondary/50 backdrop-blur-sm rounded-2xl border ${colorStyles[sheet.color].border} p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl ${colorStyles[sheet.color].glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colorStyles[sheet.color].iconBg} flex items-center justify-center mb-5`}
                  >
                    <Icon
                      name={sheet.icon}
                      className={`w-7 h-7 ${colorStyles[sheet.color].icon}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center gap-2">
                    {sheet.title}
                    <Icon
                      name="chevron-right"
                      className="w-5 h-5 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                    {sheet.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-md ${colorStyles[sheet.color].badge}`}
                    >
                      {sheet.commands}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-bg-tertiary text-text-muted">
                      {sheet.categories}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative border-t border-border-default">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="w-12 h-12 rounded-xl bg-bg-secondary border border-border-default flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon}
                    className="w-6 h-6 text-text-secondary"
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-default">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-md text-text-muted">
            <div className="flex items-center ">
              <img
                src="/tn.png"
                alt="Tool Notes"
                className="w-18 h-18 rounded-xl object-cover"
              />
              <span className="bg-white bg-clip-text text-transparent text-3xl font-bold text-center tracking-tigh">
                Tool Notes
              </span>
            </div>
            <p>Built for developers who value their time</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
