"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const hours = [
  { day: "Monday", open: "6:00 AM", close: "2:00 PM" },
  { day: "Tuesday", open: "6:00 AM", close: "2:00 PM" },
  { day: "Wednesday", open: "6:00 AM", close: "2:00 PM" },
  { day: "Thursday", open: "6:00 AM", close: "2:00 PM" },
  { day: "Friday", open: "6:00 AM", close: "2:00 PM" },
  { day: "Saturday", open: "6:00 AM", close: "2:00 PM" },
  { day: "Sunday", open: "7:00 AM", close: "2:00 PM" },
];

function isCurrentDay(day: string): boolean {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  return days[today] === day;
}

export default function Hours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="visit"
      className="relative bg-coffee py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Photo + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Atmospheric exterior/interior photo */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Warm interior of Peppermill Cafe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/50 via-transparent to-transparent" />

              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-cream text-lg sm:text-xl font-bold uppercase tracking-[0.1em] mb-1">
                  4511 Lake Michigan Dr NW
                </p>
                <p className="font-[family-name:var(--font-barlow-condensed)] text-cream/70 text-base tracking-wide">
                  Grand Rapids, MI 49544
                </p>
              </div>
            </div>

            {/* Get directions button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://maps.google.com/?q=4511+Lake+Michigan+Dr+NW+Grand+Rapids+MI+49544"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 font-[family-name:var(--font-barlow-condensed)] bg-maple text-cream font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-egg-yolk hover:text-coffee transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Get Directions
            </motion.a>
          </motion.div>

          {/* Right - Hours & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Section label */}
            <span className="font-[family-name:var(--font-barlow-condensed)] text-egg-yolk text-sm font-bold uppercase tracking-[0.3em] block mb-4">
              Visit Us
            </span>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-dm-serif-display)] text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-10">
              In the Heart of Standale
            </h2>

            {/* Hours */}
            <div className="space-y-0 mb-10">
              {hours.map((h) => {
                const isToday = isCurrentDay(h.day);
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-3 border-b border-cream/10 ${
                      isToday ? "" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <div className="w-2.5 h-2.5 rounded-full bg-egg-yolk animate-pulse" />
                      )}
                      <span
                        className={`font-[family-name:var(--font-barlow-condensed)] text-lg uppercase tracking-wide ${
                          isToday
                            ? "text-cream font-bold"
                            : "text-cream/60 font-medium"
                        }`}
                      >
                        {h.day}
                        {isToday && (
                          <span className="ml-2 text-egg-yolk text-xs font-bold uppercase tracking-[0.2em]">
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-[family-name:var(--font-barlow-condensed)] text-lg tabular-nums ${
                        isToday
                          ? "text-cream font-bold"
                          : "text-cream/60 font-medium"
                      }`}
                    >
                      {h.open} &ndash; {h.close}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+16164537853"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center flex-shrink-0 group-hover:bg-maple/30 transition-colors">
                  <svg
                    className="w-5 h-5 text-egg-yolk"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="font-[family-name:var(--font-barlow-condensed)] text-cream text-xl font-semibold group-hover:text-egg-yolk transition-colors">
                  (616) 453-7853
                </span>
              </a>

              <a
                href="mailto:pmc4511@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center flex-shrink-0 group-hover:bg-maple/30 transition-colors">
                  <svg
                    className="w-5 h-5 text-egg-yolk"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-[family-name:var(--font-lora)] text-cream/70 text-lg group-hover:text-egg-yolk transition-colors">
                  pmc4511@gmail.com
                </span>
              </a>
            </div>

            {/* Handwritten note */}
            <p className="font-[family-name:var(--font-shadows-into-light)] text-egg-yolk/60 text-xl">
              We serve until 2PM -- come hungry!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
