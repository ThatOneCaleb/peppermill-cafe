"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
            ? "bg-buttercream/95 backdrop-blur-md shadow-lg shadow-coffee/5"
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
                scrolled ? "text-coffee" : "text-coffee"
              }`}
            >
              Peppermill
            </span>
            <span
              className={`font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.25em] leading-none transition-colors duration-500 ${
                scrolled ? "text-maple" : "text-maple"
              }`}
            >
              Cafe
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <span className="font-[family-name:var(--font-shadows-into-light)] text-coffee/40 text-sm hidden lg:inline">
              Open Daily from 6AM
            </span>
            <div className="w-px h-5 bg-coffee/15 hidden lg:block" />
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-[family-name:var(--font-barlow-condensed)] text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-maple ${
                  scrolled ? "text-coffee/70" : "text-coffee/70"
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
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, backgroundColor: "#F5ECD7" }
                  : { rotate: 0, y: 0, backgroundColor: "#3D2B1F" }
              }
              transition={{ duration: 0.3 }}
              className="block w-7 h-[2px] origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-7 h-[2px] bg-coffee"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, backgroundColor: "#F5ECD7" }
                  : { rotate: 0, y: 0, backgroundColor: "#3D2B1F" }
              }
              transition={{ duration: 0.3 }}
              className="block w-7 h-[2px] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen takeover */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-maple"
          >
            {/* Food photo peeking in */}
            <div className="absolute bottom-0 right-0 w-[200px] h-[300px] opacity-20">
              <Image
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400"
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="relative h-full flex flex-col justify-center px-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-[family-name:var(--font-dm-serif-display)] text-cream text-4xl sm:text-5xl py-3 text-left hover:text-egg-yolk transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:+16164537853"
                className="mt-10 font-[family-name:var(--font-barlow-condensed)] bg-cream text-coffee text-center text-base font-bold uppercase tracking-[0.15em] py-4 px-8 rounded-full self-start"
              >
                Call (616) 453-7853
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 font-[family-name:var(--font-shadows-into-light)] text-cream/70 text-lg"
              >
                Open Mon-Sat 6AM / Sun 7AM
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
