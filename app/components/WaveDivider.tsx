export default function WaveDivider({
  topColor = "#FFF8E7",
  bottomColor = "#C4601D",
  flip = false,
}: {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="120" fill={bottomColor} />
        <path
          d="M0,0 L0,60 C120,100 240,110 360,90 C480,70 600,30 720,30 C840,30 960,70 1080,85 C1200,100 1320,90 1440,60 L1440,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
