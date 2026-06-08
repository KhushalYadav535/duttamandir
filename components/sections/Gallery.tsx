"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    label: "Mandir Entrance",
    gradient: "linear-gradient(160deg, #2A1A04 0%, #7A5010 40%, #D4AF37 70%, #EDD5A3 100%)",
    icon: "🛕",
    accentColor: "#D4AF37",
    size: "tall", // 440px
  },
  {
    id: 2,
    label: "Morning Aarti",
    gradient: "linear-gradient(160deg, #1A0A02 0%, #6B3200 40%, #FF8C00 75%, #FFD700 100%)",
    icon: "🪔",
    accentColor: "#FF8C00",
    size: "normal", // 360px
  },
  {
    id: 3,
    label: "Lord Dattatreya",
    gradient: "linear-gradient(160deg, #1A1204 0%, #4A3A08 35%, #D4AF37 65%, #FFF8E7 100%)",
    icon: "ॐ",
    accentColor: "#FFD700",
    size: "tall",
  },
  {
    id: 4,
    label: "Prasad Ceremony",
    gradient: "linear-gradient(160deg, #1A0802 0%, #5A2800 40%, #D4A64A 70%, #FF8C00 100%)",
    icon: "🍱",
    accentColor: "#FF8C00",
    size: "normal",
  },
  {
    id: 5,
    label: "Festival Decor",
    gradient: "linear-gradient(160deg, #100E04 0%, #3A3010 40%, #C8A040 70%, #EDD5A3 100%)",
    icon: "🌸",
    accentColor: "#D4AF37",
    size: "tall",
  },
  {
    id: 6,
    label: "Devotee Darshan",
    gradient: "linear-gradient(160deg, #1A0A02 0%, #6B3800 40%, #D4AF37 70%, #FFD700 100%)",
    icon: "🙏",
    accentColor: "#FFD700",
    size: "normal",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    const dot = progressDotRef.current;
    if (!section || !track || !progress) return;

    const totalWidth = track.scrollWidth - window.innerWidth + 80;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1.5,
          onUpdate: (self) => {
            if (progress) progress.style.width = `${self.progress * 100}%`;
            if (dot) dot.style.left = `${self.progress * 100}%`;
          },
        },
      });
      tl.to(track, { x: -totalWidth, ease: "none" });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="relative">
      <SectionDivider fromColor="#080402" toColor="#050201" />

      <div className="overflow-hidden" style={{ backgroundColor: "#050201", minHeight: "100vh" }}>

        {/* Atmospheric bg */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 100% 60% at 50% 0%, #120A04 0%, #050201 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6 pt-24 pb-16"
        >
          <div
            className="inline-flex items-center gap-3 mb-5 px-5 py-2 rounded-full"
            style={{
              border: "1px solid rgba(212,175,55,0.25)",
              backgroundColor: "rgba(212,175,55,0.06)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
            <span className="font-ui uppercase" style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#D4AF37" }}>
              Divine Glimpses
            </span>
            <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
          </div>

          <h2
            className="font-display mb-6"
            style={{
              fontSize: "clamp(36px, 5.5vw, 64px)",
              color: "#FDF8F5",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Sacred{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFF8E7, #D4AF37, #B8922A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gallery
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4AF37", boxShadow: "0 0 12px rgba(212,175,55,0.8)" }} />
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))" }} />
          </div>

          <p className="font-body" style={{ fontSize: "13px", color: "#5A4A3A", letterSpacing: "0.05em" }}>
            Scroll down to journey through the divine →
          </p>
        </motion.div>

        {/* ── Horizontal scroll track ── */}
        <div
          ref={trackRef}
          style={{ display: "flex", gap: "20px", paddingLeft: "60px", paddingRight: "80px", alignItems: "center", width: "max-content" }}
        >
          {galleryItems.map((item, i) => {
            const h = item.size === "tall" ? 460 : 380;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative flex-shrink-0 overflow-hidden"
                style={{
                  width: 300,
                  height: h,
                  borderRadius: "24px",
                  transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.1), 0 0 40px ${item.accentColor}18`,
                  cursor: "default",
                }}
              >
                {/* Background gradient */}
                <div style={{ position: "absolute", inset: 0, background: item.gradient }} />

                {/* Cinematic light beam */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse 50% 60% at 50% 55%, ${item.accentColor}40 0%, transparent 70%)`,
                    animation: "glowPulse 4s ease-in-out infinite",
                  }}
                />

                {/* Top gold line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
                    boxShadow: `0 0 12px ${item.accentColor}`,
                  }}
                />

                {/* Rotating mandala watermark */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.08,
                    animation: "rotateSlow 60s linear infinite",
                  }}
                >
                  <svg viewBox="0 0 200 200" style={{ width: "80%" }}>
                    <g transform="translate(100,100)">
                      <circle r="90" fill="none" stroke={item.accentColor} strokeWidth="0.8" />
                      <circle r="60" fill="none" stroke={item.accentColor} strokeWidth="0.6" />
                      <circle r="30" fill="none" stroke={item.accentColor} strokeWidth="0.8" />
                      {Array.from({ length: 8 }, (_, j) => {
                        const a = (j * 360) / 8;
                        const r = (a * Math.PI) / 180;
                        return (
                          <line
                            key={j}
                            x1={Math.cos(r) * 30} y1={Math.sin(r) * 30}
                            x2={Math.cos(r) * 90} y2={Math.sin(r) * 90}
                            stroke={item.accentColor} strokeWidth="0.6"
                          />
                        );
                      })}
                    </g>
                  </svg>
                </div>

                {/* Icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ fontFamily: "serif" }}
                >
                  <span
                    style={{
                      fontSize: "72px",
                      color: "rgba(10,5,2,0.5)",
                      textShadow: `0 4px 24px rgba(0,0,0,0.6), 0 0 40px ${item.accentColor}40`,
                      lineHeight: 1,
                    }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end"
                  style={{
                    background: "linear-gradient(to top, rgba(5,2,1,0.95) 0%, rgba(5,2,1,0.4) 50%, transparent 100%)",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <div style={{ padding: "24px" }}>
                    <p
                      className="font-ui uppercase mb-1"
                      style={{ fontSize: "9px", letterSpacing: "0.2em", color: item.accentColor, opacity: 0.8 }}
                    >
                      View Photo
                    </p>
                    <p className="font-display" style={{ fontSize: "20px", color: "#FDF8F5", letterSpacing: "-0.01em" }}>
                      {item.label}
                    </p>
                    <div
                      style={{
                        height: "1px",
                        width: "40px",
                        background: `linear-gradient(to right, ${item.accentColor}, transparent)`,
                        marginTop: "8px",
                      }}
                    />
                  </div>
                </div>

                {/* Card number badge */}
                <div
                  className="absolute top-4 right-4"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    background: "rgba(5,2,1,0.5)",
                    border: `1px solid ${item.accentColor}40`,
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: item.accentColor,
                    fontFamily: "monospace",
                    letterSpacing: "0",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Bottom left corner decoration */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    width: "18px",
                    height: "18px",
                    borderBottom: `1.5px solid ${item.accentColor}60`,
                    borderLeft: `1.5px solid ${item.accentColor}60`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "18px",
                    height: "18px",
                    borderTop: `1.5px solid ${item.accentColor}60`,
                    borderLeft: `1.5px solid ${item.accentColor}60`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── Progress bar ── */}
        <div style={{ padding: "32px 60px 40px", position: "relative" }}>
          <div
            style={{
              height: "2px",
              width: "100%",
              borderRadius: "2px",
              backgroundColor: "rgba(212,175,55,0.1)",
              position: "relative",
              overflow: "visible",
            }}
          >
            {/* Filled track */}
            <div
              ref={progressRef}
              style={{
                height: "100%",
                borderRadius: "2px",
                background: "linear-gradient(to right, #B8922A, #D4AF37, #FFD700)",
                width: "0%",
                boxShadow: "0 0 12px rgba(212,175,55,0.6)",
                transition: "width 0.1s linear",
                position: "relative",
              }}
            />
            {/* Glowing dot */}
            <div
              ref={progressDotRef}
              style={{
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#D4AF37",
                boxShadow: "0 0 12px rgba(212,175,55,0.9), 0 0 24px rgba(212,175,55,0.4)",
                transition: "left 0.1s linear",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
            }}
          >
            <span className="font-ui" style={{ fontSize: "10px", color: "#3A2A1A", letterSpacing: "0.1em" }}>
              01
            </span>
            <span className="font-ui" style={{ fontSize: "10px", color: "#3A2A1A", letterSpacing: "0.1em" }}>
              0{galleryItems.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
