"use client";

export default function MarqueeTicker({
  items,
  separator = "*",
  bgColor = "bg-buttercream",
  textColor = "text-coffee",
  separatorColor = "text-egg-yolk",
  speed = "20s",
  borderColor,
}: {
  items: string[];
  separator?: string;
  bgColor?: string;
  textColor?: string;
  separatorColor?: string;
  speed?: string;
  borderColor?: string;
}) {
  const content = items
    .map((item) => item)
    .join(`  ${separator}  `);
  const fullContent = `${content}  ${separator}  `;

  return (
    <div
      className={`${bgColor} overflow-hidden py-5 sm:py-6 ${borderColor ? `border-y ${borderColor}` : ""}`}
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: speed }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`font-[family-name:var(--font-barlow-condensed)] text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.15em] mx-0`}
          >
            {items.map((item, j) => (
              <span key={`${i}-${j}`}>
                <span className={textColor}>{item}</span>
                <span className={`${separatorColor} mx-4 sm:mx-6`}>
                  {separator}
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
