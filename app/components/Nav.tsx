"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Specials", href: "#specials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-buttercream/95 backdrop-blur-md shadow-lg shadow-charcoal/5 border-b border-maple/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-2 group"
          >
            <span
              className={`font-[family-name:var(--font-dm-serif-display)] text-3xl leading-none transition-colors duration-500 ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              Peppermill
            </span>
            <span
              className={`font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.25em] leading-none transition-colors duration-500 ${
                scrolled ? "text-maple" : "text-egg-yolk"
              }`}
            >
              Cafe
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-maple ${
                  scrolled ? "text-charcoal/70" : "text-cream/80"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+16164537853"
              className="font-[family-name:var(--font-barlow-condensed)] bg-maple hover:bg-maple/90 text-white text-sm font-bold uppercase tracking-[0.15em] px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-maple/20"
            >
              Call Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, backgroundColor: "#1A1A1A" }
                  : {
                      rotate: 0,
                      y: 0,
                      backgroundColor: scrolled ? "#1A1A1A" : "#F5ECD7",
                    }
              }
              transition={{ duration: 0.3 }}
              className="block w-7 h-[2px] origin-center"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              transition={{ duration: 0.2 }}
              className={`block w-7 h-[2px] ${
                scrolled ? "bg-charcoal" : "bg-cream"
              }`}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, backgroundColor: "#1A1A1A" }
                  : {
                      rotate: 0,
                      y: 0,
                      backgroundColor: scrolled ? "#1A1A1A" : "#F5ECD7",
                    }
              }
              transition={{ duration: 0.3 }}
              className="block w-7 h-[2px] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-buttercream z-40 shadow-2xl"
            >
              <div className="flex flex-col pt-28 px-8">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-2xl py-4 border-b border-charcoal/10 text-left hover:text-maple transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href="tel:+16164537853"
                  className="mt-8 font-[family-name:var(--font-barlow-condensed)] bg-maple text-white text-center text-base font-bold uppercase tracking-[0.15em] py-4 rounded-full"
                >
                  Call (616) 453-7853
                </motion.a>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 font-[family-name:var(--font-shadows-into-light)] text-maple text-lg text-center"
                >
                  Open Mon-Sat 6AM / Sun 7AM
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
