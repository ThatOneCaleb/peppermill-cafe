"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const hours = [
  { day: "Monday", open: "6:00 AM", close: "2:00 PM", isOpen: true },
  { day: "Tuesday", open: "6:00 AM", close: "2:00 PM", isOpen: true },
  { day: "Wednesday", open: "6:00 AM", close: "2:00 PM", isOpen: true },
  { day: "Thursday", open: "6:00 AM", close: "2:00 PM", isOpen: true },
  { day: "Friday", open: "6:00 AM", close: "2:00 PM", isOpen: true },
  { day: "Saturday", open: "6:00 AM", close: "2:00 PM", isOpen: true },
  { day: "Sunday", open: "7:00 AM", close: "2:00 PM", isOpen: true },
];

function isCurrentDay(day: string): boolean {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return days[today] === day;
}

export default function Hours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hours"
      className="relative bg-[#fdf6e3] py-20 lg:py-28 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#e8941a]/8 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5c842]/8 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-caveat)] text-[#e8941a] text-2xl mb-3"
          >
            Come Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-[#3b2010] text-4xl sm:text-5xl font-bold mb-4"
          >
            Hours &amp; Location
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-12 h-px bg-[#e8941a]" />
            <div className="w-2 h-2 rounded-full bg-[#e8941a]" />
            <div className="w-12 h-px bg-[#e8941a]" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Hours card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#fff9f0] border border-[#d4a96a]/30 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Card header */}
            <div className="bg-[#3b2010] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5c842]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#f5c842]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-lg font-bold">
                    Hours of Operation
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-xs">
                    Breakfast &amp; Brunch Only
                  </p>
                </div>
              </div>
            </div>

            {/* Hours list */}
            <div className="divide-y divide-[#d4a96a]/15">
              {hours.map((h, i) => {
                const isToday = isCurrentDay(h.day);
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between px-6 py-3.5 transition-colors ${
                      isToday ? "bg-[#e8941a]/10" : "hover:bg-[#f5c842]/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <div className="w-2 h-2 rounded-full bg-[#e8941a] animate-pulse" />
                      )}
                      <span
                        className={`font-[family-name:var(--font-lato)] text-sm ${
                          isToday
                            ? "text-[#3b2010] font-bold"
                            : "text-[#5d3a1a] font-semibold"
                        }`}
                      >
                        {h.day}
                        {isToday && (
                          <span className="ml-2 font-[family-name:var(--font-lato)] text-[10px] font-bold uppercase tracking-widest text-[#e8941a]">
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-lato)] text-sm text-[#3b2010] font-semibold tabular-nums">
                      {h.open} – {h.close}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Card footer */}
            <div className="bg-[#f5c842]/10 border-t border-[#d4a96a]/20 px-6 py-4">
              <p className="font-[family-name:var(--font-caveat)] text-[#e8941a] text-lg text-center">
                We serve until 2PM — come hungry!
              </p>
            </div>
          </motion.div>

          {/* Contact & Location */}
          <div className="space-y-6">
            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#fff9f0] border border-[#d4a96a]/30 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Map placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-[#5d3a1a] to-[#3b2010] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8941a]/15 to-transparent" />
                <div className="relative text-center">
                  <div className="text-5xl mb-2">📍</div>
                  <p className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm uppercase tracking-widest">
                    Heart of Standale
                  </p>
                  <a
                    href="https://maps.google.com/?q=4511+Lake+Michigan+Dr+NW+Grand+Rapids+MI+49544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 font-[family-name:var(--font-lato)] text-[#f5c842] hover:text-[#fde68a] text-xs font-semibold uppercase tracking-widest transition-colors"
                  >
                    Get Directions
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3b2010]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8941a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-lato)] text-[#3b2010] text-sm font-bold">Address</p>
                    <p className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-sm">
                      4511 Lake Michigan Dr NW<br />
                      Grand Rapids, MI 49544
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3b2010]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8941a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-lato)] text-[#3b2010] text-sm font-bold">Phone</p>
                    <a
                      href="tel:+16164537853"
                      className="font-[family-name:var(--font-lato)] text-[#e8941a] hover:text-[#3b2010] text-sm font-semibold transition-colors"
                    >
                      (616) 453-7853
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3b2010]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8941a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-lato)] text-[#3b2010] text-sm font-bold">Email</p>
                    <a
                      href="mailto:pmc4511@gmail.com"
                      className="font-[family-name:var(--font-lato)] text-[#e8941a] hover:text-[#3b2010] text-sm font-semibold transition-colors"
                    >
                      pmc4511@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* "Heart of Standale" callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#3b2010] rounded-2xl p-6 text-center"
            >
              <div className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-3xl mb-2">
                Right in the heart of Standale.
              </div>
              <p className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm leading-relaxed">
                On Lake Michigan Drive NW — easy to find, impossible to forget.
                Free parking available. Walk-ins always welcome.
              </p>
              <a
                href="https://maps.google.com/?q=4511+Lake+Michigan+Dr+NW+Grand+Rapids+MI+49544"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-[family-name:var(--font-lato)] bg-[#e8941a] hover:bg-[#f5c842] text-[#3b2010] text-sm font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
