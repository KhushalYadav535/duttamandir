"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      dotX = lerp(dotX, mouseX, 0.35);
      dotY = lerp(dotY, mouseY, 0.35);
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);

      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      ring.style.transform = `translate(${ringX - (isHovering ? 20 : 12)}px, ${ringY - (isHovering ? 20 : 12)}px)`;

      animId = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => setIsHovering(true);
    const onMouseLeaveInteractive = () => setIsHovering(false);

    document.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [isHovering]);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#D4AF37",
          boxShadow: "0 0 8px #FFD700, 0 0 16px #D4AF37",
          transition: "width 0.2s, height 0.2s, background-color 0.2s",
          willChange: "transform",
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering ? "#FF8C00" : "#D4AF37"}`,
          opacity: isHovering ? 0.8 : 0.5,
          transition:
            "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
