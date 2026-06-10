"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Huge portions at very reasonable prices. The Country Benny alone is worth the drive. I always need a to-go box. This is what breakfast is supposed to be.",
  },
  {
    name: "Jake T.",
    text: "Staff remembers your name and your favorites. I have been coming here for years and they always make me feel like family. It is our Sunday ritual.",
  },
  {
    name: "Linda K.",
    text: "A westside classic -- best breakfast in GR, full stop. The corned beef hash is legendary. Honest, hearty food at a fair price.",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="relative bg-buttercream py-24 lg:py-40 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em]">
            What People Say
          </span>
        </motion.div>

        {/* Star rating - large editorial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-10"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              className={`w-8 h-8 sm:w-10 sm:h-10 ${i <= 5 ? "text-egg-yolk" : "text-egg-yolk/30"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </motion.div>

        {/* Featured pull-quote - massive editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="font-[family-name:var(--font-dm-serif-display)] text-coffee/10 text-8xl sm:text-9xl leading-none mb-2">
            &ldquo;
          </div>
          <blockquote className="font-[family-name:var(--font-dm-serif-display)] text-coffee text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight italic -mt-16 sm:-mt-20 mb-8 max-w-4xl mx-auto">
            Best breakfast in GR, full stop. The corned beef hash is legendary.
          </blockquote>
          <div className="font-[family-name:var(--font-barlow-condensed)] text-coffee/50 text-base uppercase tracking-[0.25em]">
            Linda K. &mdash; Google Review
          </div>
        </motion.div>

        {/* Additional reviews - minimal cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {reviews
            .filter((r) => r.name !== "Linda K.")
            .map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="bg-cream/60 border border-coffee/5 rounded-2xl p-8"
              >
                <p className="font-[family-name:var(--font-lora)] text-coffee/65 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-maple/10 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold">
                        {review.name[0]}
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-barlow-condensed)] text-coffee text-sm font-semibold uppercase tracking-wide">
                      {review.name}
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-egg-yolk"
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
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="font-[family-name:var(--font-shadows-into-light)] text-coffee/40 text-xl mb-4">
            Come see for yourself why everyone is talking about us.
          </p>
          <a
            href="https://www.facebook.com/peppermill.cafe.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-barlow-condensed)] text-maple hover:text-coffee text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
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
