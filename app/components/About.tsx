"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const features = [
  {
    icon: "☕",
    title: "Community First",
    desc: "We're not just a restaurant — we're the heartbeat of the Standale neighborhood. A place where everyone knows your name.",
  },
  {
    icon: "🍳",
    title: "Made From Scratch",
    desc: "From our house-made corned beef hash to our fresh-baked cinnamon rolls, everything is crafted with care every single morning.",
  },
  {
    icon: "🏠",
    title: "Family Friendly",
    desc: "Kids welcome, big appetites welcome, dogs in the parking lot welcome. We're your home away from home.",
  },
  {
    icon: "⭐",
    title: "Huge Portions",
    desc: "We believe in feeding people right. You won't leave hungry — that's a Peppermill promise.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-[#fdf6e3] overflow-hidden py-20 lg:py-28">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5c842]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e8941a]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-caveat)] text-[#e8941a] text-2xl mb-3"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              The Best Little Cafe
              <span className="block text-[#e8941a]">on the West Side</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 font-[family-name:var(--font-lato)] text-[#5d3a1a] text-base leading-relaxed"
            >
              <p>
                Tucked right in the heart of Standale, Peppermill Cafe has been serving up
                Grand Rapids&apos; west side with honest, hearty breakfasts and brunches that
                keep folks coming back week after week. We&apos;re not your big chain — we&apos;re
                your neighbors.
              </p>
              <p>
                Owner David Vander Meer built this place on the belief that a great breakfast
                can make your whole day better. That means real ingredients, generous portions,
                and a warm smile when you walk through the door.
              </p>
              <p>
                Whether you&apos;re a regular who takes the same booth every Sunday or a first-timer
                who just discovered us, you&apos;ll feel it the moment you sit down. This is what
                a hometown diner is supposed to feel like.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-5xl font-bold">4.7</span>
                <span className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-sm">Average Rating</span>
              </div>
              <div className="w-px h-12 bg-[#d4a96a]" />
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-5xl font-bold">400+</span>
                <span className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-sm">Happy Reviews</span>
              </div>
              <div className="w-px h-12 bg-[#d4a96a]" />
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-5xl font-bold">6AM</span>
                <span className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-sm">Open Daily</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Image placeholder + feature cards */}
          <div className="space-y-6">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#5d3a1a] to-[#3b2010] flex items-center justify-center border border-[#d4a96a]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8941a]/20 via-transparent to-[#f5c842]/10" />
              <div className="relative text-center">
                <div className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-5xl mb-2">
                  Since Day One
                </div>
                <div className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm uppercase tracking-widest">
                  Standale&apos;s Kitchen Table
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#f5c842]/50 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#f5c842]/50 rounded-br-lg" />
            </motion.div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-[#fff9f0] border border-[#d4a96a]/20 rounded-xl p-4 hover:border-[#e8941a]/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-sm font-bold mb-1">
                    {f.title}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
