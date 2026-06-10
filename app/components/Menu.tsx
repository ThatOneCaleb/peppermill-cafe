"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const menuCategories = [
  {
    name: "Eggs & Omelets",
    items: [
      { name: "Eggs Benedict Florentine", price: "$13.99" },
      { name: "Signature Omelets", price: "$11.99" },
      { name: "Steak and Egg'r", price: "$15.99" },
      { name: "Two Eggs Any Style", price: "$8.99" },
    ],
  },
  {
    name: "Pancakes & French Toast",
    items: [
      { name: "Oversized Buttermilk Pancakes", price: "$9.99" },
      { name: "Cinnamon Swirl French Toast", price: "$10.99" },
      { name: "Blu Suede Shoe Waffle", price: "$12.99" },
      { name: "Monte Cristo French Toast", price: "$14.99" },
    ],
  },
  {
    name: "Benedicts",
    items: [
      { name: "Classic Benedict", price: "$12.99" },
      { name: "The Country Benny", price: "$14.99" },
      { name: "Florentine Benedict", price: "$13.99" },
      { name: "Avocado Benedict", price: "$14.49" },
    ],
  },
  {
    name: "Sandwiches & More",
    items: [
      { name: "House-Made Corned Beef Hash", price: "$12.99" },
      { name: "Breakfast Burrito", price: "$11.99" },
      { name: "BLT Club", price: "$10.99" },
      { name: "Oatmeal with House Granola", price: "$7.99" },
    ],
  },
];

const foodImages = [
  {
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
    alt: "Eggs Benedict with hollandaise sauce",
    className: "absolute top-12 -right-6 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl hidden lg:block",
    rotate: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600",
    alt: "Golden French toast with berries",
    className: "absolute bottom-24 -left-6 w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl hidden lg:block",
    rotate: -4,
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="relative overflow-hidden">
      {/* Red background section */}
      <div className="bg-maple py-24 lg:py-32 relative" ref={ref}>
        {/* Floating food images */}
        {foodImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: img.rotate } : {}}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
            className={img.className}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        ))}

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/60 text-sm font-bold uppercase tracking-[0.3em]">
              What We Serve
            </span>
          </motion.div>

          {/* Massive heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-dm-serif-display)] text-cream text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tight mb-16"
          >
            The<br />Menu
          </motion.h2>

          {/* Menu categories grid */}
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14">
            {menuCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              >
                {/* Category name */}
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-cream text-xl sm:text-2xl font-bold uppercase tracking-[0.15em] mb-6 pb-3 border-b border-cream/20">
                  {cat.name}
                </h3>

                {/* Items */}
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 group"
                    >
                      <span className="font-[family-name:var(--font-lora)] text-cream/90 text-base sm:text-lg group-hover:text-cream transition-colors">
                        {item.name}
                      </span>
                      <span className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk text-lg sm:text-xl flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          >
            <p className="font-[family-name:var(--font-shadows-into-light)] text-cream/60 text-xl">
              Plus seasonal specials and so much more...
            </p>
            <a
              href="tel:+16164537853"
              className="font-[family-name:var(--font-barlow-condensed)] bg-cream text-maple font-bold text-sm uppercase tracking-[0.15em] px-8 py-3 rounded-full hover:bg-egg-yolk hover:text-coffee transition-all duration-300 flex-shrink-0"
            >
              Call for Full Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
