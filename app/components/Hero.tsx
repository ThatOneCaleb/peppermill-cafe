"use client";

import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee noise-bg diner-check"
    >
      {/* Deep warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee via-[#2A1D14] to-[#1A0F08]" />

      {/* Warm ambient glows */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-maple/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-egg-yolk/6 blur-[100px]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,236,215,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,236,215,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
        {/* Handwritten tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-2xl sm:text-3xl mb-6"
        >
          Standale&apos;s Favorite Breakfast &amp; Brunch
        </motion.p>

        {/* PEPPERMILL - massive display type */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
          className="font-[family-name:var(--font-dm-serif-display)] text-cream text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] leading-[0.9] tracking-tight mb-2"
        >
          PEPPERMILL
        </motion.h1>

        {/* CAFE - condensed, letterspaced */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" as const }}
          className="font-[family-name:var(--font-barlow-condensed)] text-egg-yolk text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-[0.5em] sm:tracking-[0.6em] mb-10"
        >
          CAFE
        </motion.p>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" as const }}
          className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border border-cream/15 rounded-full px-6 py-3 mb-10"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className={`w-5 h-5 ${i <= 4 ? "text-egg-yolk" : "text-egg-yolk/50"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          <span className="font-[family-name:var(--font-barlow-condensed)] text-cream text-base font-semibold tracking-wide">
            4.7 Stars
          </span>
          <span className="text-cream/30">|</span>
          <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/70 text-sm tracking-wide">
            1,000+ Reviews
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <button
            onClick={() => handleScroll("#menu")}
            className="font-[family-name:var(--font-barlow-condensed)] bg-maple hover:bg-maple/90 text-white font-bold text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-maple/30"
          >
            See the Menu
          </button>
          <button
            onClick={() => handleScroll("#visit")}
            className="font-[family-name:var(--font-barlow-condensed)] border-2 border-cream/30 hover:border-cream/60 text-cream hover:text-white font-bold text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Find Us
          </button>
        </motion.div>

        {/* Hours pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" as const }}
          className="inline-flex items-center gap-4 bg-cream/5 border border-cream/10 rounded-full px-6 py-2.5"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/70 text-sm tracking-wide">
              Mon-Sat 6AM-2PM
            </span>
          </div>
          <div className="w-px h-4 bg-cream/20" />
          <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/70 text-sm tracking-wide">
            Sun 7AM-2PM
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/40 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-5 h-9 border-2 border-cream/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cream/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
