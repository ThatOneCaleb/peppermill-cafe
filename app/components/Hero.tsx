"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-buttercream overflow-hidden flex items-center"
    >
      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-80px)]">
          {/* Left side - Typography */}
          <div className="relative z-10 lg:pr-8">
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm sm:text-base font-bold uppercase tracking-[0.3em] mb-4"
            >
              Standale&apos;s Favorite Since 2005
            </motion.p>

            {/* THE */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-[family-name:var(--font-barlow-condensed)] text-coffee/50 text-xl sm:text-2xl font-semibold uppercase tracking-[0.4em]"
            >
              THE
            </motion.p>

            {/* BREAKFAST */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem] leading-[0.85] tracking-tight -ml-1"
            >
              Breakfast
            </motion.h1>

            {/* SPOT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-[family-name:var(--font-dm-serif-display)] text-maple text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[0.9] italic"
            >
              Spot.
            </motion.p>

            {/* Accent sticker labels */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: -3 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 inline-block"
            >
              <span className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-2xl sm:text-3xl">
                &ldquo;Huge portions, friendly faces&rdquo;
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => handleScroll("#menu")}
                className="font-[family-name:var(--font-barlow-condensed)] bg-maple hover:bg-coffee text-white font-bold text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-maple/30"
              >
                See the Menu
              </button>
              <button
                onClick={() => handleScroll("#visit")}
                className="font-[family-name:var(--font-barlow-condensed)] border-2 border-coffee/30 hover:border-coffee text-coffee font-bold text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Find Us
              </button>
            </motion.div>

            {/* Rating badge inline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="mt-8 inline-flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i <= 4 ? "text-egg-yolk" : "text-egg-yolk/40"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-[family-name:var(--font-barlow-condensed)] text-coffee/70 text-sm font-semibold tracking-wide">
                4.7 Stars / 1,000+ Reviews
              </span>
            </motion.div>
          </div>

          {/* Right side - Food hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
            className="relative lg:-mr-8"
          >
            {/* Main food image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800"
                alt="A towering stack of fluffy golden pancakes with fresh berries and syrup"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              {/* Warm overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 via-transparent to-transparent" />
            </div>

            {/* Floating sticker accent - top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -top-4 -right-2 sm:top-2 sm:right-4 bg-egg-yolk text-coffee rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-lg z-10"
            >
              <span className="font-[family-name:var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.15em]">
                Since
              </span>
              <span className="font-[family-name:var(--font-dm-serif-display)] text-2xl sm:text-3xl leading-none">
                2005
              </span>
            </motion.div>

            {/* Floating secondary food image - bottom left overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-buttercream z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"
                alt="A warm cup of specialty coffee"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-[family-name:var(--font-barlow-condensed)] text-coffee/30 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="w-5 h-9 border-2 border-coffee/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-coffee/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
