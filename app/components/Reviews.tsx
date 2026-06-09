"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Grand Rapids, MI",
    rating: 5,
    text: "Absolutely a westside classic. I&apos;ve been coming here for years and the staff remembers my name every single time. The Country Benny is unreal — I dream about that sausage gravy. This place is a treasure.",
    highlight: "staff remembers your name",
    date: "Recent Review",
  },
  {
    name: "Jake T.",
    location: "Standale, MI",
    rating: 5,
    text: "Huge portions — I always need a box to take half of it home. The corned beef hash is the best I've ever had, and I've been around. Real, honest food at a fair price. This is what breakfast is supposed to be.",
    highlight: "huge portions",
    date: "Recent Review",
  },
  {
    name: "Linda K.",
    location: "Walker, MI",
    rating: 5,
    text: "Hidden gem right in our own backyard. Discovered Peppermill two years ago and now it&apos;s our Sunday ritual. The pancakes are the size of the plate and the coffee is always hot. Bring your appetite!",
    highlight: "hidden gem",
    date: "Recent Review",
  },
  {
    name: "Marcus B.",
    location: "Grand Rapids, MI",
    rating: 5,
    text: "Best breakfast spot on the west side, full stop. The Blu Suede Shoe waffle is something else — my kids go crazy for it. Staff is always friendly and you never wait too long. Five stars every visit.",
    highlight: "westside classic",
    date: "Recent Review",
  },
  {
    name: "Diane F.",
    location: "Grandville, MI",
    rating: 5,
    text: "Drove across town after a friend wouldn&apos;t stop talking about it. Worth every mile. The Monte Cristo French Toast is decadent in the best way. The whole place feels warm and cozy, like eating at a friend&apos;s house.",
    highlight: "warm and cozy",
    date: "Recent Review",
  },
  {
    name: "Tom R.",
    location: "Standale, MI",
    rating: 5,
    text: "This is our family&apos;s go-to for Sunday brunch. David and his crew have built something really special here. It&apos;s not just food — it&apos;s community. Everyone knows each other. And the cinnamon rolls? Don&apos;t miss them.",
    highlight: "community feel",
    date: "Recent Review",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-[#f5c842]" : "text-[#5d3a1a]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="reviews"
      className="relative bg-[#2a1508] py-20 lg:py-28 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b2010] via-[#2a1508] to-[#1a0a02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#e8941a]/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-2xl mb-3"
          >
            What People Are Saying
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-4xl sm:text-5xl font-bold mb-4"
          >
            The Peppermill Family
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

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-[#3b2010]/80 border border-[#d4a96a]/20 rounded-2xl px-6 py-4 mt-4"
          >
            <div className="text-center">
              <div className="font-[family-name:var(--font-playfair)] text-[#f5c842] text-4xl font-bold">4.7</div>
              <StarRating rating={5} />
            </div>
            <div className="w-px h-10 bg-[#5d3a1a]" />
            <div className="text-left">
              <p className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-sm font-semibold">400+ Reviews</p>
              <p className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-xs">Across all platforms</p>
            </div>
          </motion.div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="bg-[#3b2010] border border-[#5d3a1a]/60 rounded-2xl p-5 hover:border-[#e8941a]/50 transition-all duration-200 cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Quote mark */}
              <div className="font-[family-name:var(--font-playfair)] text-[#e8941a]/30 text-6xl font-bold leading-none mb-1 -mt-2">
                &ldquo;
              </div>

              {/* Highlight tag */}
              <span className="inline-block font-[family-name:var(--font-lato)] text-[10px] font-bold uppercase tracking-widest text-[#e8941a] bg-[#e8941a]/10 border border-[#e8941a]/20 px-2.5 py-1 rounded-full mb-3">
                {review.highlight}
              </span>

              {/* Review text */}
              <AnimatePresence initial={false}>
                <p className={`font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm leading-relaxed mb-4 ${expanded === i ? "" : "line-clamp-4"}`}>
                  {review.text}
                </p>
              </AnimatePresence>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-[#5d3a1a]/60">
                <div>
                  <div className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-sm font-semibold">
                    {review.name}
                  </div>
                  <div className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-xs">
                    {review.location}
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="font-[family-name:var(--font-caveat)] text-[#d4a96a] text-xl mb-3">
            Come see for yourself why everyone is talking about us.
          </p>
          <a
            href="https://www.facebook.com/peppermill.cafe.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-lato)] text-[#f5c842] hover:text-[#fdf6e3] text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Leave Us a Review on Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}
