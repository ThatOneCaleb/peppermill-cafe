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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#3b2010]"
    >
      {/* Background texture layers */}
      <div className="absolute inset-0 bg-[#2a1508]" />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d3a1a]/60 via-[#3b2010]/80 to-[#1a0a02]/90" />

      {/* Decorative circles - warm bokeh effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#e8941a]/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#f5c842]/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c0392b]/5 blur-3xl" />

      {/* Placeholder for hero image — warm diner ambiance */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-[#5d3a1a] via-[#e8941a]/20 to-[#f5c842]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Handwritten top label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-2xl sm:text-3xl mb-4 tracking-wide"
        >
          Grand Rapids&apos; West Side Favorite
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          Peppermill
          <span className="block text-[#f5c842]">Cafe</span>
        </motion.h1>

        {/* Decorative rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-16 h-px bg-[#e8941a]" />
          <div className="w-2 h-2 rounded-full bg-[#e8941a]" />
          <div className="w-16 h-px bg-[#e8941a]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-lg sm:text-xl lg:text-2xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
        >
          Standale&apos;s Favorite Breakfast &amp; Brunch Spot
        </motion.p>

        {/* Hours quick info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-6 mb-10 text-sm"
        >
          <div className="flex items-center gap-2 text-[#fdf6e3]/80">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5c842]" />
            <span className="font-[family-name:var(--font-lato)]">Mon–Sat: 6AM – 2PM</span>
          </div>
          <div className="flex items-center gap-2 text-[#fdf6e3]/80">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5c842]" />
            <span className="font-[family-name:var(--font-lato)]">Sun: 7AM – 2PM</span>
          </div>
          <div className="flex items-center gap-2 text-[#fdf6e3]/80">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5c842]" />
            <span className="font-[family-name:var(--font-lato)]">4511 Lake Michigan Dr NW</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll("#menu")}
            className="font-[family-name:var(--font-lato)] bg-[#e8941a] hover:bg-[#f5c842] text-[#3b2010] font-bold text-base uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#e8941a]/30"
          >
            See Our Menu
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="font-[family-name:var(--font-lato)] border-2 border-[#d4a96a] hover:border-[#f5c842] text-[#fdf6e3] hover:text-[#f5c842] font-bold text-base uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
          >
            Our Story
          </button>
        </motion.div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-12 inline-flex items-center gap-2 bg-[#5d3a1a]/60 backdrop-blur-sm border border-[#d4a96a]/30 rounded-full px-5 py-2.5"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i === 5 ? "text-[#d4a96a]" : "text-[#f5c842]"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-sm font-semibold">
            4.7/5 Stars
          </span>
          <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm">
            • Standale&apos;s #1 Breakfast
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
        <span className="font-[family-name:var(--font-lato)] text-[#d4a96a]/60 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[#d4a96a]/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#d4a96a]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
