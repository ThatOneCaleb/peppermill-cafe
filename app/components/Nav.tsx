"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Specials", href: "#specials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Hours", href: "#hours" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#3b2010] shadow-lg shadow-black/20"
            : "bg-[#3b2010]/95"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-tight group"
          >
            <span
              className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-2xl font-bold leading-tight group-hover:text-[#fde68a] transition-colors"
            >
              Peppermill
            </span>
            <span
              className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-[10px] uppercase tracking-[0.2em] leading-tight"
            >
              Cafe &amp; Restaurant
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-sm font-semibold uppercase tracking-widest hover:text-[#f5c842] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#hours")}
              className="font-[family-name:var(--font-lato)] bg-[#e8941a] hover:bg-[#f5c842] text-[#3b2010] text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#f5c842] origin-center transition-all"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[#f5c842]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#f5c842] origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#3b2010] border-t border-[#5d3a1a] shadow-xl"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-base font-semibold uppercase tracking-widest py-4 px-6 hover:bg-[#5d3a1a] hover:text-[#f5c842] transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-6 pt-2 pb-4">
                <button
                  onClick={() => handleNavClick("#hours")}
                  className="font-[family-name:var(--font-lato)] w-full bg-[#e8941a] hover:bg-[#f5c842] text-[#3b2010] text-sm font-bold uppercase tracking-widest py-3 rounded-full transition-all"
                >
                  Visit Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
