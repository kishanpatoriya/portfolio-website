import React, { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name : "Services", href: "#services"},
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;

      navLinks.forEach((link) => {
        const targetId = link.href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const topOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <nav
        className={`w-full px-4 sm:px-8 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/85 border-b border-slate-800/80 backdrop-blur-xl shadow-xl shadow-blue-950/15"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Name */}
          <a
            href="#"
            className="text-lg sm:text-xl font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            Kishan Patoriya
          </a>

          {/* Sliding Blue Pill Navigation */}
          <LayoutGroup id="navbar-pill">
            <div className="hidden md:flex items-center gap-1 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-colors duration-200 select-none ${
                      isActive ? "text-blue-300" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {/* Continuous Sliding Blue Box */}
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute inset-0 bg-blue-600/25 border border-blue-500/50 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20 active:scale-95"
            >
              Hire Me <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-slate-950/95 border-b border-slate-800 px-6 py-6 shadow-2xl backdrop-blur-2xl flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.name}
                type="button"
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-sm"
                    : "text-slate-300 hover:text-blue-400 hover:bg-slate-900"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm"
          >
            Hire Me <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}