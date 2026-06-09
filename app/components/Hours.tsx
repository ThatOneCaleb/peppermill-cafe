"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

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

const badges = [
  { icon: "wifi", label: "Free Wi-Fi" },
  { icon: "bag", label: "Takeout" },
  { icon: "calendar", label: "Catering Available" },
];

export default function Hours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="visit"
      className="relative bg-cream py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maple/4 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-egg-yolk/4 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-maple text-sm font-bold uppercase tracking-[0.3em]">
            Visit Us
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-dm-serif-display)] text-charcoal text-4xl sm:text-5xl lg:text-6xl text-center leading-tight mb-16"
        >
          In the Heart of Standale
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-buttercream border border-charcoal/5 rounded-3xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="bg-coffee px-7 py-6">
                <h3 className="font-[family-name:var(--font-dm-serif-display)] text-cream text-xl">
                  Hours of Operation
                </h3>
                <p className="font-[family-name:var(--font-barlow-condensed)] text-cream/50 text-sm uppercase tracking-[0.2em] mt-1">
                  Breakfast &amp; Brunch Daily
                </p>
              </div>

              {/* Hours list */}
              <div className="divide-y divide-charcoal/5">
                {hours.map((h) => {
                  const isToday = isCurrentDay(h.day);
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between px-7 py-4 transition-colors ${
                        isToday ? "bg-maple/5" : "hover:bg-egg-yolk/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <div className="w-2.5 h-2.5 rounded-full bg-maple animate-pulse" />
                        )}
                        <span
                          className={`font-[family-name:var(--font-barlow-condensed)] text-base ${
                            isToday
                              ? "text-charcoal font-bold"
                              : "text-charcoal/70 font-medium"
                          }`}
                        >
                          {h.day}
                          {isToday && (
                            <span className="ml-2 font-[family-name:var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-maple">
                              Today
                            </span>
                          )}
                        </span>
                      </div>
                      <span
                        className={`font-[family-name:var(--font-barlow-condensed)] text-base tabular-nums ${
                          isToday
                            ? "text-charcoal font-bold"
                            : "text-charcoal/70 font-medium"
                        }`}
                      >
                        {h.open} &ndash; {h.close}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="bg-egg-yolk/10 border-t border-charcoal/5 px-7 py-4 text-center">
                <p className="font-[family-name:var(--font-shadows-into-light)] text-maple text-lg">
                  We serve until 2PM -- come hungry!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Location & Contact */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-buttercream border border-charcoal/5 rounded-3xl overflow-hidden shadow-lg"
            >
              <div
                className="relative h-52 bg-gradient-to-br from-coffee via-[#5A3D2B] to-coffee flex items-center justify-center"
                role="img"
                aria-label="Map showing Peppermill Cafe at 4511 Lake Michigan Dr NW, Grand Rapids MI"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-maple/10 to-transparent" />
                <div className="relative text-center">
                  <svg className="w-10 h-10 text-egg-yolk mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-cream/50 text-sm uppercase tracking-[0.25em]">
                    Heart of Standale
                  </p>
                  <a
                    href="https://maps.google.com/?q=4511+Lake+Michigan+Dr+NW+Grand+Rapids+MI+49544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 font-[family-name:var(--font-barlow-condensed)] text-egg-yolk hover:text-cream text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                  >
                    Get Directions
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-7 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-maple/8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-maple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-barlow-condensed)] text-charcoal text-sm font-bold uppercase tracking-[0.15em] mb-1">
                      Address
                    </p>
                    <p className="font-[family-name:var(--font-lora)] text-charcoal/60 text-base">
                      4511 Lake Michigan Dr NW
                      <br />
                      Grand Rapids, MI 49544
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-maple/8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-maple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-barlow-condensed)] text-charcoal text-sm font-bold uppercase tracking-[0.15em] mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+16164537853"
                      className="font-[family-name:var(--font-lora)] text-maple hover:text-charcoal text-base font-medium transition-colors"
                    >
                      (616) 453-7853
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-maple/8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-maple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-barlow-condensed)] text-charcoal text-sm font-bold uppercase tracking-[0.15em] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:pmc4511@gmail.com"
                      className="font-[family-name:var(--font-lora)] text-maple hover:text-charcoal text-base font-medium transition-colors"
                    >
                      pmc4511@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-buttercream border border-charcoal/5 rounded-full px-5 py-2.5"
                >
                  {badge.icon === "wifi" && (
                    <svg className="w-4 h-4 text-maple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                    </svg>
                  )}
                  {badge.icon === "bag" && (
                    <svg className="w-4 h-4 text-maple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  )}
                  {badge.icon === "calendar" && (
                    <svg className="w-4 h-4 text-maple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-charcoal/70 text-sm font-medium tracking-wide">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
