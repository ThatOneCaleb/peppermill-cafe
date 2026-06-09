"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const specials = [
  {
    name: "The Country Benny",
    subtitle: "Our Signature Creation",
    desc: "Grilled house-made biscuits stacked with tender sausage patties, sharp Cheddar cheese, two perfectly poached eggs, rich sausage gravy, and a heap of golden home fries. This is the dish Standale talks about.",
    details: [
      "House-made biscuits, baked fresh",
      "Sausage gravy from scratch",
      "Two poached eggs, any style",
      "Sharp Cheddar, golden taters",
    ],
    badge: "The One & Only",
    bgGradient: "from-[#922b21] to-[#5d1a13]",
    accentColor: "#f5c842",
    textColor: "#fdf6e3",
  },
  {
    name: "The Blu Suede Shoe Waffle Combo",
    subtitle: "Elvis Would Approve",
    desc: "A golden, crispy-on-the-outside, fluffy-on-the-inside Belgian waffle loaded with fresh banana slices, peanut butter chips, a generous drizzle of chocolate sauce, and a cloud of fresh whipped cream. Pure dessert for breakfast.",
    details: [
      "Belgian waffle, made to order",
      "Fresh banana & peanut butter chips",
      "Chocolate drizzle & whipped cream",
      "Pairs perfect with a hot coffee",
    ],
    badge: "Weekend Must-Have",
    bgGradient: "from-[#5d3a1a] to-[#3b2010]",
    accentColor: "#f5c842",
    textColor: "#fdf6e3",
  },
  {
    name: "Fresh Cinnamon Rolls",
    subtitle: "Baked Right Here",
    desc: "Soft, pillowy cinnamon rolls baked in-house every morning and glazed with a sweet cream cheese frosting while still warm. Order one — or two. We won&apos;t judge.",
    details: [
      "Baked fresh every single morning",
      "Cream cheese glaze while warm",
      "Perfect with our house coffee",
      "Sell out fast — come early!",
    ],
    badge: "Baked Fresh Daily",
    bgGradient: "from-[#b45309] to-[#78350f]",
    accentColor: "#fdf6e3",
    textColor: "#fdf6e3",
  },
];

export default function Specials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="specials"
      className="relative bg-[#fff9f0] py-20 lg:py-28 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e8941a] via-[#f5c842] to-[#e8941a]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e8941a] via-[#f5c842] to-[#e8941a]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-caveat)] text-[#e8941a] text-2xl mb-3"
          >
            Can&apos;t-Miss Dishes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-4xl sm:text-5xl font-bold mb-4"
          >
            Weekend Specials
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-px bg-[#e8941a]" />
            <div className="w-2 h-2 rounded-full bg-[#e8941a]" />
            <div className="w-12 h-px bg-[#e8941a]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-base max-w-xl mx-auto"
          >
            These are the dishes that keep our regulars coming back. The ones folks drive across town for.
          </motion.p>
        </div>

        {/* Specials cards */}
        <div className="space-y-6">
          {specials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${item.bgGradient} shadow-xl`}
            >
              <div className="relative grid md:grid-cols-5 gap-0">
                {/* Left: Image placeholder */}
                <div className="md:col-span-2 relative h-52 md:h-auto min-h-[200px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative text-center px-6">
                    <div
                      className="font-[family-name:var(--font-caveat)] text-6xl sm:text-7xl mb-2"
                      style={{ color: item.accentColor }}
                    >
                      {i === 0 ? "🍳" : i === 1 ? "🧇" : "🥐"}
                    </div>
                    <span
                      className="inline-block font-[family-name:var(--font-lato)] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                      style={{
                        color: item.accentColor,
                        borderColor: `${item.accentColor}40`,
                        backgroundColor: `${item.accentColor}15`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-3 p-6 sm:p-8">
                  <p
                    className="font-[family-name:var(--font-caveat)] text-lg mb-1"
                    style={{ color: `${item.accentColor}cc` }}
                  >
                    {item.subtitle}
                  </p>
                  <h3
                    className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold mb-4 leading-tight"
                    style={{ color: item.textColor }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-lato)] text-sm leading-relaxed mb-5"
                    style={{ color: `${item.textColor}cc` }}
                  >
                    {item.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: item.accentColor }}
                        />
                        <span
                          className="font-[family-name:var(--font-lato)] text-xs leading-relaxed"
                          style={{ color: `${item.textColor}99` }}
                        >
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

        {/* Rotating specials note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-10 text-center bg-[#3b2010]/5 border border-[#d4a96a]/30 rounded-2xl p-6"
        >
          <p className="font-[family-name:var(--font-caveat)] text-[#e8941a] text-2xl mb-2">
            Ask about our rotating daily specials!
          </p>
          <p className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-sm">
            We mix things up to keep it fresh. Call us or stop in to find out what&apos;s cooking today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
