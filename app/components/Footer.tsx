"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Specials", href: "#specials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-coffee overflow-hidden" ref={ref}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-14">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <span className="font-[family-name:var(--font-dm-serif-display)] text-cream text-3xl block mb-1">
                Peppermill
              </span>
              <span className="font-[family-name:var(--font-barlow-condensed)] text-egg-yolk text-sm font-semibold uppercase tracking-[0.25em]">
                Cafe
              </span>
            </div>
            <p className="font-[family-name:var(--font-lora)] text-cream/40 text-base leading-relaxed mb-6 max-w-xs">
              The best little cafe on the west side of Grand Rapids. Right in
              the heart of Standale. Come hungry, leave happy.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com/peppermill.cafe.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cream/40 hover:text-egg-yolk transition-colors group"
              aria-label="Follow us on Facebook"
            >
              <div className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center group-hover:bg-egg-yolk/10 group-hover:border-egg-yolk/30 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-barlow-condensed)] text-sm tracking-wide">
                Facebook
              </span>
            </a>
          </motion.div>

          {/* Quick Links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-barlow-condensed)] text-cream text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block font-[family-name:var(--font-lora)] text-cream/40 hover:text-egg-yolk text-base transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-[family-name:var(--font-barlow-condensed)] text-cream text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=4511+Lake+Michigan+Dr+NW+Grand+Rapids+MI+49544"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <svg
                  className="w-4 h-4 text-maple mt-1 flex-shrink-0"
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
                <span className="font-[family-name:var(--font-lora)] text-cream/40 group-hover:text-egg-yolk text-base leading-snug transition-colors">
                  4511 Lake Michigan Dr NW
                  <br />
                  Grand Rapids, MI 49544
                </span>
              </a>
              <a
                href="tel:+16164537853"
                className="flex items-center gap-3 group"
              >
                <svg
                  className="w-4 h-4 text-maple flex-shrink-0"
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
                <span className="font-[family-name:var(--font-lora)] text-cream/40 group-hover:text-egg-yolk text-base transition-colors">
                  (616) 453-7853
                </span>
              </a>

              {/* Hours in footer */}
              <div className="pt-3 border-t border-cream/5">
                <div className="flex justify-between">
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/30 text-sm">
                    Mon &ndash; Sat
                  </span>
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/50 text-sm font-semibold">
                    6AM &ndash; 2PM
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/30 text-sm">
                    Sunday
                  </span>
                  <span className="font-[family-name:var(--font-barlow-condensed)] text-cream/50 text-sm font-semibold">
                    7AM &ndash; 2PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-barlow-condensed)] text-cream/25 text-xs tracking-wide text-center sm:text-left">
            &copy; {currentYear} Peppermill Cafe. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-shadows-into-light)] text-cream/20 text-base">
            Made with love in Standale
          </p>
        </div>
      </div>
    </footer>
  );
}
