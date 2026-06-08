export default function MandalaSVG() {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", opacity: 0.15 }}
    >
      <g transform="translate(300,300)">
        {/* Outer ring */}
        <circle r="290" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4 6" />
        <circle r="270" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
        <circle r="240" fill="none" stroke="#D4AF37" strokeWidth="0.8" />

        {/* Outer petals (16) */}
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 230;
          const y = Math.sin(rad) * 230;
          return (
            <ellipse
              key={`outer-petal-${i}`}
              cx={x}
              cy={y}
              rx="18"
              ry="8"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.6"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Mid petals (8) */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 180;
          const y = Math.sin(rad) * 180;
          return (
            <ellipse
              key={`mid-petal-${i}`}
              cx={x}
              cy={y}
              rx="30"
              ry="12"
              fill="rgba(212,175,55,0.05)"
              stroke="#D4AF37"
              strokeWidth="0.8"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Geometric pattern - star */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.cos(rad) * 140;
          const y1 = Math.sin(rad) * 140;
          const x2 = Math.cos(rad + Math.PI) * 140;
          const y2 = Math.sin(rad + Math.PI) * 140;
          return (
            <line
              key={`spoke-${i}`}
              x1={x1} y1={y1}
              x2={x2} y2={y2}
              stroke="#D4AF37"
              strokeWidth="0.5"
              opacity="0.6"
            />
          );
        })}

        {/* Inner lotus */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 90;
          const y = Math.sin(rad) * 90;
          return (
            <ellipse
              key={`inner-petal-${i}`}
              cx={x}
              cy={y}
              rx="25"
              ry="10"
              fill="rgba(212,175,55,0.08)"
              stroke="#D4AF37"
              strokeWidth="0.8"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Diamond pattern */}
        <polygon
          points="0,-120 120,0 0,120 -120,0"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.6"
        />
        <polygon
          points="0,-120 120,0 0,120 -120,0"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.4"
          transform="rotate(45)"
        />

        {/* Inner ring */}
        <circle r="70" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
        <circle r="50" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 5" />
        <circle r="30" fill="rgba(212,175,55,0.06)" stroke="#D4AF37" strokeWidth="1" />
        <circle r="8" fill="#D4AF37" opacity="0.3" />

        {/* Dots between petals */}
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 205;
          const y = Math.sin(rad) * 205;
          return (
            <circle key={`dot-${i}`} cx={x} cy={y} r="2" fill="#D4AF37" opacity="0.5" />
          );
        })}
      </g>
    </svg>
  );
}
