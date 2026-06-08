export default function LotusRule() {
  return (
    <svg
      viewBox="0 0 480 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Left line */}
      <line x1="0" y1="12" x2="200" y2="12" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />
      {/* Left small diamond */}
      <polygon points="202,8 210,12 202,16 194,12" fill="none" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Center lotus */}
      <g transform="translate(240,12)">
        {/* Petals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = Math.cos(rad) * 7;
          const cy = Math.sin(rad) * 7;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="4"
              ry="2.5"
              fill="rgba(212,175,55,0.25)"
              stroke="#D4AF37"
              strokeWidth="0.7"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        <circle r="3" fill="#D4AF37" opacity="0.6" />
      </g>

      {/* Right small diamond */}
      <polygon points="270,8 278,12 270,16 262,12" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
      {/* Right line */}
      <line x1="280" y1="12" x2="480" y2="12" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />

      {/* Small dot accents */}
      <circle cx="100" cy="12" r="1.5" fill="#D4AF37" opacity="0.5" />
      <circle cx="380" cy="12" r="1.5" fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}
