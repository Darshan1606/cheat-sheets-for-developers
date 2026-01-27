import { Link } from "react-router-dom";
import { Icon } from "./Icon";

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
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-bg-secondary/50 to-transparent rounded-full" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

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
          <p className="text-lg md:text-xl text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Quick reference guides for Git, SQL, MongoDB, Redis & Docker. Copy
            commands with a click, print for offline use, and master your tools
            faster.
          </p>

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
