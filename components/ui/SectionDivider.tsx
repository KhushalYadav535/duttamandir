interface SectionDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export default function SectionDivider({ fromColor, toColor, flip }: SectionDividerProps) {
  return (
    <div
      style={{
        height: 48,
        backgroundColor: toColor,
        position: "relative",
        overflow: "hidden",
        transform: flip ? "scaleY(-1)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <path
          d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z"
          fill={fromColor}
        />
        {/* Lotus motif at center */}
        <g transform="translate(720,24)">
          <circle cx="0" cy="0" r="3" fill="#D4AF37" opacity="0.4" />
          <circle cx="-20" cy="0" r="2" fill="#D4AF37" opacity="0.3" />
          <circle cx="20" cy="0" r="2" fill="#D4AF37" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
