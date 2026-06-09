"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const menuItems = [
  {
    name: "Eggs Benedict Florentine",
    desc: "Classic eggs Benedict on a toasted English muffin with fresh spinach, Canadian bacon, and our rich house-made hollandaise. Served with golden breakfast potatoes.",
    tag: "House Favorite",
    color: "#c0392b",
  },
  {
    name: "Monte Cristo French Toast",
    desc: "Thick-cut brioche stuffed with ham, turkey, and Swiss, battered and pan-fried to a golden crisp. Dusted with powdered sugar and served with house-made preserves.",
    tag: "Sweet & Savory",
    color: "#e8941a",
  },
  {
    name: "Oversized Buttermilk Pancakes",
    desc: "Fluffy, golden, plate-sized stacks of our signature buttermilk pancakes. Light as air but big enough to share — or not. Your call.",
    tag: "A Stack to Remember",
    color: "#f5c842",
  },
  {
    name: "Steak and Egg'r",
    desc: "A hearty slab of hand-cut beef steak griddled to order alongside two eggs any style, golden toast, and a mountain of home fries. Built for a big day.",
    tag: "Hearty & Bold",
    color: "#922b21",
  },
  {
    name: "House-Made Corned Beef Hash",
    desc: "Our legendary scratch-made corned beef hash, slow-cooked and pan-crisped to perfection. Topped with two eggs any style. A west-side classic.",
    tag: "From Scratch",
    color: "#5d3a1a",
  },
  {
    name: "Cinnamon Swirl French Toast",
    desc: "Thick slices of cinnamon-swirl bread dipped in our vanilla custard batter and griddled to golden perfection. Topped with whipped cream and maple syrup.",
    tag: "Weekend Treat",
    color: "#d97706",
  },
  {
    name: "Oatmeal with House-Made Granola",
    desc: "Creamy steel-cut oats topped with our signature house-made granola, fresh seasonal fruit, and a drizzle of local honey. Light, warm, and satisfying.",
    tag: "Light & Wholesome",
    color: "#78350f",
  },
  {
    name: "Signature Omelets & Skillets",
    desc: "Build-your-own omelets stuffed to the brim, or try one of our cast-iron skillets loaded with sautéed veggies, meats, cheese, and crispy potatoes.",
    tag: "Endless Variety",
    color: "#b45309",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="relative bg-[#3b2010] py-20 lg:py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1508] via-[#3b2010] to-[#2a1508]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3b2010] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-2xl mb-3"
          >
            What We&apos;re Cooking
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-4xl sm:text-5xl font-bold mb-4"
          >
            Menu Highlights
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
            className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-base max-w-xl mx-auto"
          >
            Made from scratch every morning. Big flavors, bigger portions.
          </motion.p>
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group bg-[#2a1508] border border-[#5d3a1a]/60 rounded-2xl p-5 hover:border-[#e8941a]/60 hover:bg-[#331a0a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              {/* Color accent bar */}
              <div
                className="w-10 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: item.color }}
              />

              {/* Tag */}
              <span
                className="inline-block font-[family-name:var(--font-lato)] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                style={{
                  backgroundColor: `${item.color}20`,
                  color: item.color === "#f5c842" ? "#b45309" : item.color,
                  border: `1px solid ${item.color}40`,
                }}
              >
                {item.tag}
              </span>

              {/* Name */}
              <h3 className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-base font-bold leading-snug mb-3">
                {item.name}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="font-[family-name:var(--font-caveat)] text-[#d4a96a] text-xl mb-4">
            Plus seasonal specials, rotating dishes, and so much more...
          </p>
          <a
            href="tel:+16164537853"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-lato)] text-[#f5c842] hover:text-[#fdf6e3] text-sm font-semibold uppercase tracking-widest border border-[#f5c842]/40 hover:border-[#fdf6e3]/60 px-6 py-3 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call for Today&apos;s Menu: (616) 453-7853
          </a>
        </motion.div>
      </div>
    </section>
  );
}
