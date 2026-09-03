// Illustrative skyline — a stand-in for real city photography, which was not
// provided. Suggests Sharjah/Dubai without claiming to depict a specific place.
export default function CitySilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cityFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#05070D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="url(#cityFade)">
        <rect x="40" y="140" width="46" height="180" />
        <rect x="100" y="90" width="30" height="230" />
        <polygon points="150,320 150,60 165,20 180,60 180,320" />
        <rect x="210" y="170" width="60" height="150" />
        <rect x="290" y="110" width="34" height="210" />
        <rect x="340" y="200" width="80" height="120" />
        <polygon points="460,320 460,40 480,0 500,40 500,320" />
        <rect x="540" y="150" width="40" height="170" />
        <rect x="600" y="180" width="100" height="140" />
        <rect x="730" y="90" width="26" height="230" />
        <polygon points="790,320 790,30 812,-10 834,30 834,320" />
        <rect x="880" y="160" width="50" height="160" />
        <rect x="950" y="120" width="34" height="200" />
        <rect x="1010" y="200" width="90" height="120" />
        <polygon points="1140,320 1140,50 1158,15 1176,50 1176,320" />
        <rect x="1220" y="170" width="40" height="150" />
        <rect x="1280" y="110" width="30" height="210" />
        <rect x="1340" y="190" width="70" height="130" />
      </g>
    </svg>
  );
}
