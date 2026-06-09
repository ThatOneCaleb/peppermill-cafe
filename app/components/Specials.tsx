"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const specials = [
  {
    name: "The Country Benny",
    annotation: "The one they all talk about",
    desc: "Grilled house-made biscuits stacked with tender sausage patties, sharp Cheddar cheese, two perfectly poached eggs, rich from-scratch sausage gravy, and a heap of golden taters. This is the dish Standale drives across town for.",
    details: [
      "House-made biscuits, baked fresh",
      "Sausage gravy from scratch",
      "Two poached eggs, any style",
      "Sharp Cheddar & golden taters",
    ],
  },
  {
    name: "The Blu Suede Shoe Waffle",
    annotation: "Elvis would approve",
    desc: "A golden, crispy-on-the-outside, fluffy-on-the-inside Belgian waffle loaded with fresh banana slices, peanut butter chips, a generous drizzle of chocolate sauce, and a cloud of whipped cream. This is dessert for breakfast and we are not sorry.",
    details: [
      "Belgian waffle, made to order",
      "Fresh banana & PB chips",
      "Chocolate drizzle & whipped cream",
      "Pairs with a hot cup of coffee",
    ],
  },
  {
    name: "Fresh Cinnamon Rolls",
    annotation: "Get here early -- they sell out",
    desc: "Soft, pillowy cinnamon rolls baked in-house every morning and glazed with sweet cream cheese frosting while still warm from the oven. Order one. Or two. We will not judge.",
    details: [
      "Baked fresh every single morning",
      "Cream cheese glaze, still warm",
      "Perfect with our house coffee",
      "Sell out fast -- come early!",
    ],
  },
];

export default function Specials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="specials"
      className="relative bg-coffee py-24 lg:py-32 overflow-hidden"
    >
      {/* Warm ambient glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-maple/8 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-egg-yolk/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-egg-yolk text-sm font-bold uppercase tracking-[0.3em]">
            Weekend Specials
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-dm-serif-display)] text-cream text-4xl sm:text-5xl lg:text-6xl text-center leading-tight mb-6"
        >
          Worth Waking Up For
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-[family-name:var(--font-lora)] text-cream/50 text-lg text-center max-w-xl mx-auto mb-16"
        >
          These are the dishes that keep our regulars coming back. The ones
          folks drive across town for.
        </motion.p>

        {/* Specials cards */}
        <div className="space-y-8">
          {specials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="relative rounded-3xl overflow-hidden border border-cream/10 warm-glow bg-gradient-to-r from-cream/[0.04] to-cream/[0.02]"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left: warm placeholder */}
                <div
                  className="md:col-span-2 relative h-56 md:h-auto md:min-h-[300px] bg-gradient-to-br from-[#5A3D2B] via-coffee to-[#2A1D14] flex items-center justify-center"
                  role="img"
                  aria-label={`Photo of ${item.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coffee/40 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 to-transparent md:hidden" />
                  <div className="relative text-center px-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-egg-yolk/10 border border-egg-yolk/20 flex items-center justify-center mb-4">
                      <span className="font-[family-name:var(--font-dm-serif-display)] text-egg-yolk text-3xl">
                        {i + 1}
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/40 text-xs font-bold uppercase tracking-[0.2em]">
                      Must Try
                    </span>
                  </div>
                </div>

                {/* Right: content */}
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  {/* Handwritten annotation */}
                  <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-xl mb-2">
                    {item.annotation}
                  </p>

                  <h3 className="font-[family-name:var(--font-dm-serif-display)] text-cream text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                    {item.name}
                  </h3>

                  <p className="font-[family-name:var(--font-lora)] text-cream/60 text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-egg-yolk flex-shrink-0" />
                        <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/50 text-sm tracking-wide">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-cream/5 border border-cream/10 rounded-2xl px-8 py-6">
            <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-2xl mb-2">
              Ask about our rotating daily specials!
            </p>
            <p className="font-[family-name:var(--font-lora)] text-cream/40 text-sm">
              We mix things up to keep it fresh. Call or stop in to see
              what&apos;s cooking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
