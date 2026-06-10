"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-buttercream overflow-hidden py-24 lg:py-32">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left - Large atmospheric photo (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Warm, inviting interior of a cozy breakfast restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 via-transparent to-transparent" />
            </div>

            {/* Handwritten quote overlay */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              animate={inView ? { opacity: 1, rotate: -3, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-6 sm:-bottom-8 sm:left-10 bg-egg-yolk px-6 py-4 rounded-2xl shadow-lg z-10"
            >
              <p className="font-[family-name:var(--font-shadows-into-light)] text-coffee text-lg sm:text-xl">
                &ldquo;Best little cafe on the west side&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Story text (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Section label */}
            <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em] block mb-4">
              Our Story
            </span>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight mb-8">
              A Little Cafe With A Big Heart
            </h2>

            {/* Body text */}
            <p className="font-[family-name:var(--font-lora)] text-coffee/70 text-lg leading-relaxed mb-6">
              Tucked right in the heart of Standale, Peppermill Cafe has been
              serving Grand Rapids&apos; west side with honest, hearty breakfasts
              and brunches that keep folks coming back week after week. We are not
              your big chain. We are your neighbors.
            </p>
            <p className="font-[family-name:var(--font-lora)] text-coffee/70 text-lg leading-relaxed mb-8">
              Owner David Vander Meer built this place on the belief that a great
              breakfast can make your whole day better. That means real ingredients,
              generous portions, and a warm smile when you walk through the door.
            </p>

            {/* Stats inline */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-4xl sm:text-5xl leading-none mb-1">
                  4.7
                </div>
                <div className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-semibold uppercase tracking-[0.2em]">
                  Star Rating
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-4xl sm:text-5xl leading-none mb-1">
                  1K+
                </div>
                <div className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-semibold uppercase tracking-[0.2em]">
                  Reviews
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-4xl sm:text-5xl leading-none mb-1">
                  2005
                </div>
                <div className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-semibold uppercase tracking-[0.2em]">
                  Established
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-4xl sm:text-5xl leading-none mb-1">
                  6AM
                </div>
                <div className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-semibold uppercase tracking-[0.2em]">
                  Doors Open
                </div>
              </div>
            </div>

            {/* Warm CTA */}
            <a
              href="tel:+16164537853"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow-condensed)] bg-coffee text-cream font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-maple transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
