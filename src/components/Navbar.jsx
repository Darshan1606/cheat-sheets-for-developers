import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/git", label: "Git", icon: "git-branch", color: "coral" },
    { path: "/sql", label: "SQL", icon: "database", color: "cyan" },
    { path: "/mongodb", label: "MongoDB", icon: "braces", color: "green" },
    { path: "/redis", label: "Redis", icon: "database", color: "red" },
    { path: "/docker", label: "Docker", icon: "box", color: "blue" },
  ];

  const colorClasses = {
    coral: "text-accent-coral bg-accent-coral/10 border-accent-coral/30",
    cyan: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30",
    green: "text-green bg-green/10 border-green/30",
    red: "text-red bg-red/10 border-red/30",
    blue: "text-blue bg-blue/10 border-blue/30",
  };

  const activeColorClasses = {
    coral: "text-accent-coral",
    cyan: "text-accent-cyan",
    green: "text-green",
    red: "text-red",
    blue: "text-blue",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border-default print:hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-coral/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent-coral/20 to-accent-cyan/20 border border-border-default flex items-center justify-center">
                <Icon name="code" className="w-5 h-5 text-accent-coral" />
              </div>
            </div>
            <span className="font-semibold text-text-primary hidden sm:block">
              Cheat Sheets
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? colorClasses[item.color]
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                  }`}
                >
                  <Icon
                    name={item.icon}
                    className={`w-4 h-4 ${isActive ? activeColorClasses[item.color] : ""}`}
                  />
                  <span className="hidden sm:block">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
