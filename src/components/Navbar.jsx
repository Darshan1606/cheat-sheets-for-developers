import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { useState, useRef, useEffect } from "react";
import { useAnalytics } from "../hooks/useAnalytics";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const { trackMobileMenu, trackNavDropdown } = useAnalytics();

  const handleMobileMenuToggle = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    trackMobileMenu(newState ? "opened" : "closed");
  };

  const handleDropdownToggle = (categoryName, isMobile = false) => {
    const isOpening = activeDropdown !== categoryName;
    setActiveDropdown(isOpening ? categoryName : null);
    trackNavDropdown(categoryName, isOpening ? "opened" : "closed");
    if (isMobile && isOpening) {
      trackMobileMenu("category_expanded");
    }
  };

  // Organized by categories
  const categories = [
    {
      name: "DevOps",
      icon: "server",
      color: "blue",
      items: [
        { path: "/git", label: "Git", icon: "git-branch", color: "coral" },
        { path: "/docker", label: "Docker", icon: "box", color: "blue" },
        { path: "/aws", label: "AWS", icon: "cloud", color: "orange" },
        { path: "/linux", label: "Linux", icon: "terminal", color: "cyan" },
      ],
    },
    {
      name: "Databases",
      icon: "database",
      color: "green",
      items: [
        { path: "/sql", label: "SQL", icon: "database", color: "cyan" },
        { path: "/mongodb", label: "MongoDB", icon: "braces", color: "green" },
        { path: "/redis", label: "Redis", icon: "database", color: "red" },
      ],
    },
    {
      name: "AI & ML",
      icon: "sparkles",
      color: "yellow",
      items: [
        { path: "/aiml", label: "AI/ML", icon: "sparkles", color: "yellow" },
        {
          path: "/prompt",
          label: "Prompts",
          icon: "message-square",
          color: "coral",
        },
        {
          path: "/llmtools",
          label: "LLM Tools",
          icon: "blocks",
          color: "green",
        },
      ],
    },
    {
      name: "CS Fundamentals",
      icon: "code",
      color: "purple",
      items: [{ path: "/dsa", label: "DSA", icon: "code", color: "purple" }],
    },
  ];

  const colorClasses = {
    coral: "text-accent-coral bg-accent-coral/10 border-accent-coral/30",
    cyan: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30",
    green: "text-green bg-green/10 border-green/30",
    red: "text-red bg-red/10 border-red/30",
    blue: "text-blue bg-blue/10 border-blue/30",
    orange: "text-orange bg-orange/10 border-orange/30",
    purple: "text-purple bg-purple/10 border-purple/30",
    yellow: "text-yellow bg-yellow/10 border-yellow/30",
  };

  const categoryColorClasses = {
    blue: "text-blue",
    green: "text-green",
    yellow: "text-yellow",
    purple: "text-purple",
  };

  const isCategoryActive = (category) => {
    return category.items.some((item) => location.pathname === item.path);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-xl border-b border-border-default print:hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/tn.png"
              alt="Tool Notes"
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover"
            />
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight ml-1">
              Tool Notes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {categories.map((category) => (
              <div key={category.name} className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(category.name, false)}
                  className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isCategoryActive(category)
                      ? `${categoryColorClasses[category.color]} bg-bg-secondary`
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                  }`}
                >
                  <Icon name={category.icon} className="w-4 h-4" />
                  <span>{category.name}</span>
                  <Icon
                    name="chevron-right"
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === category.name ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Desktop Dropdown */}
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-bg-secondary border border-border-default rounded-xl shadow-2xl py-2 z-50">
                    {category.items.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                            isActive
                              ? colorClasses[item.color]
                              : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                          }`}
                        >
                          <Icon name={item.icon} className="w-4 h-4" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div
            className="relative z-10 bg-bg-primary border-t border-border-default max-h-[calc(100vh-4rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 space-y-2">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="border-b border-border-default/50 pb-3 last:border-0"
                >
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle(category.name, true)}
                    className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isCategoryActive(category)
                        ? `${categoryColorClasses[category.color]} bg-bg-secondary`
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={category.icon} className="w-5 h-5" />
                      <span>{category.name}</span>
                    </div>
                    <Icon
                      name="chevron-right"
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === category.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Accordion Items - Using Link like desktop */}
                  {activeDropdown === category.name && (
                    <div className="mt-2 ml-4 space-y-1">
                      {category.items.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={(e) => e.stopPropagation()}
                            className={`block px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                              isActive
                                ? colorClasses[item.color]
                                : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon name={item.icon} className="w-4 h-4" />
                              <span>{item.label}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
