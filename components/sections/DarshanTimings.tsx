"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";

const timings = [
  {
    id: 1,
    name: "Pratah Aarti",
    time: "5:30 AM – 7:00 AM",
    icon: "🌅",
    label: "Morning",
    desc: "Begin your day with divine blessings at the morning aarti.",
    accent: "#FF6B35",
    accentLight: "rgba(255,107,53,0.15)",
    accentGlow: "rgba(255,107,53,0.35)",
    gradient: "linear-gradient(135deg, rgba(255,107,53,0.12) 0%, rgba(10,5,3,0) 60%)",
  },
  {
    id: 2,
    name: "Madhyan Darshan",
    time: "10:00 AM – 12:00 PM",
    icon: "☀️",
    label: "Afternoon",
    desc: "Midday darshan for devotees seeking the Lord's grace.",
    accent: "#D4AF37",
    accentLight: "rgba(212,175,55,0.15)",
    accentGlow: "rgba(212,175,55,0.4)",
    gradient: "linear-gradient(135deg, rgba(212,175,55,0.14) 0%, rgba(10,5,3,0) 60%)",
  },
  {
    id: 3,
    name: "Sandhya Aarti",
    time: "6:30 PM – 8:30 PM",
    icon: "🪔",
    label: "Evening",
    desc: "Evening prayers with the sacred lamp ceremony.",
    accent: "#C084FC",
    accentLight: "rgba(192,132,252,0.15)",
    accentGlow: "rgba(192,132,252,0.35)",
    gradient: "linear-gradient(135deg, rgba(192,132,252,0.12) 0%, rgba(10,5,3,0) 60%)",
  },
];

export default function DarshanTimings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="darshan" ref={sectionRef} className="relative overflow-hidden">
      <SectionDivider fromColor="#050201" toColor="#0A0503" />

      {/* Deep atmospheric background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 90% 60% at 50% 30%, #140A04 0%, #080402 50%, #030201 100%)",
          }}
        />
        {/* Ambient light orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
      </motion.div>

      <div className="relative py-24 px-6" style={{ backgroundColor: "transparent" }}>
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-3 mb-5 px-5 py-2 rounded-full"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                backgroundColor: "rgba(212,175,55,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
              <span
                className="font-ui uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#D4AF37",
                }}
              >
                Daily Schedule
              </span>
              <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
            </div>

            {/* Title */}
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                color: "#FDF8F5",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Darshan{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFF8E7, #D4AF37, #B8922A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Timings
              </span>
            </h2>

            {/* Ornament */}
            <div className="flex items-center justify-center gap-4">
              <div
                style={{
                  height: "1px",
                  width: "80px",
                  background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))",
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  boxShadow: "0 0 12px rgba(212,175,55,0.8)",
                }}
              />
              <div
                style={{
                  height: "1px",
                  width: "80px",
                  background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))",
                }}
              />
            </div>
          </motion.div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {timings.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.14, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="relative rounded-3xl overflow-hidden group cursor-default"
                style={{
                  background: "linear-gradient(145deg, #1C0E07 0%, #0F0703 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: `0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)`,
                }}
              >
                {/* Coloured ambient glow on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: t.gradient,
                    opacity: 0,
                    transition: "opacity 0.4s",
                    pointerEvents: "none",
                  }}
                  className="group-hover:opacity-100"
                />

                {/* Top glowing accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                    boxShadow: `0 0 16px ${t.accentGlow}`,
                  }}
                />

                {/* Decorative corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${t.accentLight} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ padding: "28px 28px 32px" }}>
                  {/* Icon row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                    }}
                  >
                    {/* Icon bubble */}
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${t.accentLight}, rgba(0,0,0,0.2))`,
                        border: `1px solid ${t.accentLight}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        boxShadow: `0 4px 16px ${t.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.08)`,
                      }}
                    >
                      {t.icon}
                    </div>

                    {/* Label badge */}
                    <span
                      className="font-ui uppercase"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: t.accent,
                        backgroundColor: t.accentLight,
                        border: `1px solid ${t.accentLight}`,
                        padding: "5px 12px",
                        borderRadius: "100px",
                      }}
                    >
                      {t.label}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: `linear-gradient(to right, ${t.accentLight}, transparent)`,
                      marginBottom: "20px",
                    }}
                  />

                  {/* Name */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "22px",
                      color: "#FDF8F5",
                      marginBottom: "8px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.name}
                  </h3>

                  {/* Time — large & glowing */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: t.accent,
                        boxShadow: `0 0 8px ${t.accent}`,
                        flexShrink: 0,
                        animation: "pulse 2s ease-in-out infinite",
                      }}
                    />
                    <p
                      className="font-ui font-semibold"
                      style={{
                        fontSize: "18px",
                        color: t.accent,
                        letterSpacing: "0.02em",
                        textShadow: `0 0 20px ${t.accentGlow}`,
                      }}
                    >
                      {t.time}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className="font-body"
                    style={{
                      fontSize: "14px",
                      color: "#9E8E7E",
                      lineHeight: 1.7,
                    }}
                  >
                    {t.desc}
                  </p>
                </div>

                {/* Bottom shimmer line on hover */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "20%",
                    right: "20%",
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.4s",
                  }}
                  className="group-hover:opacity-60"
                />
              </motion.div>
            ))}
          </div>

          {/* ── Special Notice ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,5,3,0.4) 100%)",
              border: "1px solid rgba(212,175,55,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent)",
              }}
            />
            {/* Side glow */}
            <div
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "22px 28px",
              }}
            >
              {/* Star icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.08))",
                  border: "1px solid rgba(212,175,55,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                ⭐
              </div>

              <div style={{ flex: 1 }}>
                <p
                  className="font-ui font-semibold uppercase mb-1"
                  style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                  }}
                >
                  Special Days
                </p>
                <p
                  className="font-body"
                  style={{ color: "#E8D5C4", fontSize: "15px", lineHeight: 1.65 }}
                >
                  <strong style={{ color: "#FDF8F5", fontWeight: 600 }}>
                    Mangalwar &amp; Guruvar:
                  </strong>{" "}
                  Special Puja at 7:00 PM. All devotees are welcome to join and receive prasad.
                </p>
              </div>

              {/* Right decorative element */}
              <div
                className="hidden md:flex"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: 0,
                  opacity: 0.4,
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "#D4AF37",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
