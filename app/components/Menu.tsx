"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const menuItems = [
  {
    name: "Eggs Benedict Florentine",
    desc: "Perfectly poached eggs perched on toasted English muffins with wilted spinach, Canadian bacon, and our velvety house-made hollandaise. Served with crispy golden breakfast potatoes.",
    tag: "Signature",
    featured: false,
    gradient: "from-[#8B4513] to-[#5C2E0E]",
  },
  {
    name: "Monte Cristo French Toast",
    desc: "Thick-cut brioche stuffed with shaved ham, roasted turkey, and melted Swiss, battered and pan-fried until golden. Dusted with powdered sugar and served with house-made berry preserves.",
    tag: "Signature",
    featured: true,
    gradient: "from-[#7B3F00] to-[#4A2400]",
  },
  {
    name: "Oversized Buttermilk Pancakes",
    desc: "Fluffy, golden, plate-sized stacks of our legendary buttermilk pancakes. Light as air but big enough to share. Or not. Your call.",
    tag: "Fan Favorite",
    featured: false,
    gradient: "from-[#9B6B3D] to-[#6B4423]",
  },
  {
    name: "Cinnamon Swirl French Toast",
    desc: "Thick slices of cinnamon-swirl bread dipped in our vanilla custard batter and griddled to golden perfection. Crowned with whipped cream and real maple syrup.",
    tag: null,
    featured: false,
    gradient: "from-[#8B5E3C] to-[#5C3D25]",
  },
  {
    name: "Steak and Egg'r",
    desc: "A hearty slab of hand-cut beef steak griddled to order alongside two eggs any style, golden toast, and a mountain of home fries. Built for a big day.",
    tag: "Hearty",
    featured: false,
    gradient: "from-[#654321] to-[#3D2914]",
  },
  {
    name: "House-Made Corned Beef Hash",
    desc: "Our legendary scratch-made corned beef hash, slow-cooked and pan-crisped to perfection. Topped with two eggs any style. A west-side classic that people drive across town for.",
    tag: "Signature",
    featured: true,
    gradient: "from-[#7B4B2A] to-[#4C2E17]",
  },
  {
    name: "Oatmeal with House Granola",
    desc: "Creamy steel-cut oats topped with our crunchy house-made granola, fresh seasonal fruit, and a drizzle of local honey. Light, warm, and satisfying.",
    tag: null,
    featured: false,
    gradient: "from-[#A0785A] to-[#6B4F3A]",
  },
  {
    name: "Signature Omelets & Skillets",
    desc: "Build-your-own omelets stuffed to the brim, or try our cast-iron skillets loaded with sauteed veggies, meats, melted cheese, and crispy potatoes.",
    tag: "Build Your Own",
    featured: false,
    gradient: "from-[#8C6239] to-[#5E4125]",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="relative bg-buttercream py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em]">
            The Menu
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-4xl sm:text-5xl lg:text-6xl text-center leading-tight mb-12"
        >
          Morning Favorites
        </motion.h2>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden mb-16 -mx-6 sm:-mx-8"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-barlow-condensed)] text-charcoal/[0.04] text-6xl sm:text-8xl lg:text-9xl font-bold uppercase tracking-wider mx-4"
              >
                BREAKFAST &bull; BRUNCH &bull; LUNCH &bull;&nbsp;
              </span>
            ))}
          </div>
        </motion.div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className={`group ${item.featured ? "sm:col-span-2" : ""}`}
            >
              <div
                className={`bg-cream/50 border border-charcoal/5 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  item.featured ? "flex flex-col md:flex-row" : ""
                }`}
              >
                {/* Food photo placeholder */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${item.gradient} ${
                    item.featured
                      ? "md:w-2/5 h-48 md:h-auto md:min-h-[280px]"
                      : "h-48"
                  }`}
                  role="img"
                  aria-label={`Photo of ${item.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-[family-name:var(--font-shadows-into-light)] text-white/40 text-2xl">
                        {item.name.split(" ")[0]}
                      </p>
                    </div>
                  </div>
                  {/* Tag badge */}
                  {item.tag && (
                    <div className="absolute top-4 left-4">
                      <span
                        className={`font-[family-name:var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
                          item.tag === "Signature"
                            ? "bg-ketchup text-white"
                            : "bg-egg-yolk text-coffee"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text content */}
                <div className={`p-6 ${item.featured ? "md:w-3/5 md:p-8" : ""}`}>
                  <h3
                    className={`font-[family-name:var(--font-dm-serif-display)] text-charcoal leading-snug mb-3 ${
                      item.featured ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`font-[family-name:var(--font-lora)] text-charcoal/60 leading-relaxed ${
                      item.featured ? "text-base" : "text-sm"
                    }`}
                  >
                    {item.desc}
                  </p>
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
          className="text-center mt-14"
        >
          <p className="font-[family-name:var(--font-shadows-into-light)] text-maple text-xl mb-4">
            Plus seasonal specials, rotating dishes, and so much more...
          </p>
          <a
            href="tel:+16164537853"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-barlow-condensed)] text-maple hover:text-charcoal text-sm font-semibold uppercase tracking-[0.2em] border-2 border-maple/30 hover:border-maple px-8 py-3 rounded-full transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call for Full Menu: (616) 453-7853
          </a>
        </motion.div>
      </div>
    </section>
  );
}
