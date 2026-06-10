"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

export default function Specials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="specials"
      className="relative bg-buttercream py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em]">
            This Week&apos;s Star
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-4xl sm:text-5xl lg:text-6xl text-center leading-tight mb-16"
        >
          Worth Waking Up For
        </motion.h2>

        {/* Featured special - massive food photo with text */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Huge food photo (70%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800"
                alt="A beautiful breakfast plate with eggs, toast, and fresh ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-6 left-6 bg-ketchup text-white px-5 py-2 rounded-full"
              >
                <span className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.15em]">
                  Fan Favorite
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content (30%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-2xl mb-3">
              The one they all talk about
            </p>

            <h3 className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              The Country Benny
            </h3>

            <p className="font-[family-name:var(--font-lora)] text-coffee/70 text-lg leading-relaxed mb-8">
              Grilled house-made biscuits stacked with tender sausage patties,
              sharp Cheddar cheese, two perfectly poached eggs, rich from-scratch
              sausage gravy, and a heap of golden taters. This is the dish
              Standale drives across town for.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "House-made biscuits, baked fresh",
                "Sausage gravy from scratch",
                "Two poached eggs, any style",
                "Sharp Cheddar & golden taters",
              ].map((detail) => (
                <div key={detail} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-egg-yolk flex-shrink-0" />
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-coffee/60 text-base tracking-wide">
                    {detail}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="tel:+16164537853"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow-condensed)] bg-maple text-white font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-coffee transition-colors duration-300"
            >
              Order Now
            </a>
          </motion.div>
        </div>

        {/* Secondary specials row */}
        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-cream/80 rounded-3xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-56 sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600"
                alt="Fresh baked cinnamon pastry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-lg mb-1">
                Get here early -- they sell out
              </p>
              <h3 className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-2xl sm:text-3xl leading-snug mb-3">
                Fresh Cinnamon Rolls
              </h3>
              <p className="font-[family-name:var(--font-lora)] text-coffee/60 text-base leading-relaxed">
                Soft, pillowy cinnamon rolls baked in-house every morning and
                glazed with sweet cream cheese frosting while still warm.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="bg-cream/80 rounded-3xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-56 sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600"
                alt="Golden French toast topped with fresh berries"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-lg mb-1">
                Elvis would approve
              </p>
              <h3 className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-2xl sm:text-3xl leading-snug mb-3">
                Blu Suede Shoe Waffle
              </h3>
              <p className="font-[family-name:var(--font-lora)] text-coffee/60 text-base leading-relaxed">
                A golden Belgian waffle loaded with banana slices, peanut butter
                chips, chocolate drizzle, and a cloud of whipped cream.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
