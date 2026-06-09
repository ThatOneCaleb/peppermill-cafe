export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a0a02] overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#e8941a] via-[#f5c842] to-[#e8941a]" />

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-3xl font-bold leading-tight block">
                Peppermill Cafe
              </span>
              <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-xs uppercase tracking-[0.2em]">
                Standale&apos;s Favorite Breakfast &amp; Brunch
              </span>
            </div>
            <p className="font-[family-name:var(--font-lato)] text-[#d4a96a]/80 text-sm leading-relaxed max-w-xs mb-5">
              The best little cafe on the west side of Grand Rapids. Right in the heart of Standale. Come hungry, leave happy.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/peppermill.cafe.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3b2010] border border-[#5d3a1a] flex items-center justify-center hover:bg-[#e8941a]/20 hover:border-[#e8941a]/60 transition-all duration-200 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 text-[#d4a96a] group-hover:text-[#f5c842] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:pmc4511@gmail.com"
                className="w-10 h-10 rounded-full bg-[#3b2010] border border-[#5d3a1a] flex items-center justify-center hover:bg-[#e8941a]/20 hover:border-[#e8941a]/60 transition-all duration-200 group"
                aria-label="Email us"
              >
                <svg
                  className="w-4 h-4 text-[#d4a96a] group-hover:text-[#f5c842] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+16164537853"
                className="w-10 h-10 rounded-full bg-[#3b2010] border border-[#5d3a1a] flex items-center justify-center hover:bg-[#e8941a]/20 hover:border-[#e8941a]/60 transition-all duration-200 group"
                aria-label="Call us"
              >
                <svg
                  className="w-4 h-4 text-[#d4a96a] group-hover:text-[#f5c842] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-base font-bold mb-4">
              Hours
            </h4>
            <div className="space-y-1.5">
              <div className="flex justify-between gap-4">
                <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm">Mon – Sat</span>
                <span className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-sm font-semibold">6AM – 2PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] text-sm">Sunday</span>
                <span className="font-[family-name:var(--font-lato)] text-[#fdf6e3] text-sm font-semibold">7AM – 2PM</span>
              </div>
            </div>
            <div className="mt-4 bg-[#e8941a]/10 border border-[#e8941a]/20 rounded-lg px-3 py-2">
              <p className="font-[family-name:var(--font-caveat)] text-[#f5c842] text-base text-center">
                Open 7 Days a Week
              </p>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-[#fdf6e3] text-base font-bold mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=4511+Lake+Michigan+Dr+NW+Grand+Rapids+MI+49544"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group"
              >
                <svg className="w-4 h-4 text-[#e8941a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] group-hover:text-[#f5c842] text-sm leading-snug transition-colors">
                  4511 Lake Michigan Dr NW<br />
                  Grand Rapids, MI 49544
                </span>
              </a>
              <a
                href="tel:+16164537853"
                className="flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-[#e8941a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] group-hover:text-[#f5c842] text-sm transition-colors">
                  (616) 453-7853
                </span>
              </a>
              <a
                href="mailto:pmc4511@gmail.com"
                className="flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-[#e8941a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-[family-name:var(--font-lato)] text-[#d4a96a] group-hover:text-[#f5c842] text-sm transition-colors">
                  pmc4511@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3b2010] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-xs text-center sm:text-left">
            &copy; {currentYear} Peppermill Cafe. All rights reserved. Grand Rapids, MI.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-3 h-3 text-[#f5c842]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-[family-name:var(--font-lato)] text-[#5d3a1a] text-xs">
              4.7/5 Rated on Google &amp; Facebook
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
