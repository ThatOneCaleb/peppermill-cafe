"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { number: "4.7", label: "Rating" },
  { number: "1,000+", label: "Reviews" },
  { number: "2005", label: "Established" },
  { number: "6AM", label: "Doors Open" },
];

const features = [
  {
    title: "Huge Portions",
    desc: "We believe in feeding people right. You will not leave hungry -- that is the Peppermill promise. Bring your appetite.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Made From Scratch",
    desc: "From corned beef hash to cinnamon rolls, everything is crafted with care every single morning. No shortcuts, ever.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "They Know Your Name",
    desc: "We are not a chain. We are your neighbors. Our staff remembers your order and your kid's birthday. That is just how we do it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-buttercream overflow-hidden py-24 lg:py-32">
      {/* Subtle decorative bg */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-egg-yolk/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-maple/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em]">
            Our Story
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-4xl sm:text-5xl lg:text-6xl text-center leading-tight mb-8"
        >
          Where Standale<br />Eats Breakfast
        </motion.h2>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="font-[family-name:var(--font-lora)] text-charcoal/70 text-lg leading-relaxed mb-4">
            Tucked right in the heart of Standale, Peppermill Cafe has been
            serving Grand Rapids&apos; west side with honest, hearty breakfasts
            and brunches that keep folks coming back week after week. We are not
            your big chain. We are your neighbors.
          </p>
          <p className="font-[family-name:var(--font-lora)] text-charcoal/70 text-lg leading-relaxed">
            Owner David Vander Meer built this place on the belief that a great
            breakfast can make your whole day better. That means real ingredients,
            generous portions, and a warm smile when you walk through the door.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-4xl sm:text-5xl lg:text-6xl leading-none mb-2">
                {stat.number}
              </div>
              <div className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-semibold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              className="bg-cream/60 border border-charcoal/5 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center text-maple mb-5 group-hover:bg-maple group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-xl mb-3">
                {f.title}
              </h3>
              <p className="font-[family-name:var(--font-lora)] text-charcoal/60 text-base leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div
            className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-coffee via-[#5A3D2B] to-coffee flex items-center justify-center border border-maple/20"
            role="img"
            aria-label="Warm interior of Peppermill Cafe with diners enjoying breakfast"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-maple/15 via-transparent to-egg-yolk/10" />
            <div className="relative text-center">
              <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-4xl sm:text-5xl mb-3">
                Since 2005
              </p>
              <p className="font-[family-name:var(--font-barlow-condensed)] text-cream/60 text-sm uppercase tracking-[0.3em]">
                Standale&apos;s Kitchen Table
              </p>
            </div>
            {/* Corner accents */}
            <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-egg-yolk/30 rounded-tl-xl" />
            <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-egg-yolk/30 rounded-br-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
