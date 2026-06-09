"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Huge portions at very reasonable prices. The Country Benny alone is worth the drive. I always need a to-go box. This is what breakfast is supposed to be.",
    highlight: "huge portions",
  },
  {
    name: "Jake T.",
    text: "Staff remembers your name and your favorites. I have been coming here for years and they always make me feel like family. It is our Sunday ritual.",
    highlight: "they know your name",
  },
  {
    name: "Linda K.",
    text: "A westside classic -- best breakfast in GR, full stop. The corned beef hash is legendary. Honest, hearty food at a fair price.",
    highlight: "best breakfast in GR",
  },
  {
    name: "Marcus B.",
    text: "Hidden gem in Standale! Discovered Peppermill two years ago and now we cannot stop going back. The pancakes are the size of the plate.",
    highlight: "hidden gem",
  },
  {
    name: "Diane F.",
    text: "Absolutely delicious, hearty meals. The Monte Cristo French Toast is decadent in the best way. The whole place feels warm and cozy.",
    highlight: "absolutely delicious",
  },
  {
    name: "Tom R.",
    text: "Cozy atmosphere, feels like family. David and his crew have built something really special here. It is not just food -- it is community.",
    highlight: "feels like family",
  },
];

function StarIcon({ filled, delay }: { filled: boolean; delay: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className={`w-5 h-5 ${filled ? "text-egg-yolk" : "text-egg-yolk/30"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </motion.svg>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="relative bg-buttercream py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-maple/3 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em]">
            What People Say
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-4xl sm:text-5xl lg:text-6xl text-center leading-tight mb-12"
        >
          The Reviews Speak
        </motion.h2>

        {/* Large rating display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-7xl sm:text-8xl lg:text-9xl leading-none mb-4">
            4.7
          </div>
          {inView && (
            <div className="flex gap-1.5 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= 5} delay={0.4 + i * 0.12} />
              ))}
            </div>
          )}
          <p className="font-[family-name:var(--font-barlow-condensed)] text-charcoal/40 text-sm uppercase tracking-[0.25em]">
            From 1,000+ Reviews
          </p>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -30 : 30,
              }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-cream/50 border border-charcoal/5 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="font-[family-name:var(--font-dm-serif-display)] text-maple/15 text-7xl font-bold leading-none -mt-3 mb-1">
                &ldquo;
              </div>

              {/* Highlight tag */}
              <span className="inline-block font-[family-name:var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.2em] text-maple bg-maple/8 border border-maple/15 px-3 py-1 rounded-full mb-4">
                {review.highlight}
              </span>

              {/* Review text */}
              <p className="font-[family-name:var(--font-lora)] text-charcoal/65 text-base leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-maple/10 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold">
                      {review.name[0]}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-charcoal text-sm font-semibold">
                    {review.name}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3.5 h-3.5 text-egg-yolk"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-14"
        >
          <p className="font-[family-name:var(--font-shadows-into-light)] text-charcoal/50 text-xl mb-4">
            Come see for yourself why everyone is talking about us.
          </p>
          <a
            href="https://www.facebook.com/peppermill.cafe.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-barlow-condensed)] text-maple hover:text-charcoal text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Leave a Review on Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}
