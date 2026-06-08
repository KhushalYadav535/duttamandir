"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";

const features = [
  { label: "Daily Aarti & Puja", icon: "🪔" },
  { label: "Community Sewa Programs", icon: "🤝" },
  { label: "Festival Celebrations", icon: "🎊" },
  { label: "Annadanam (Free Prasad)", icon: "🍚" },
];

const stats = [
  { value: "100+", label: "Years of\nTradition" },
  { value: "500+", label: "Daily\nDevotees" },
  { value: "365", label: "Days of\nSeva" },
];

export default function AboutMandir() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      <SectionDivider fromColor="#0A0503" toColor="#050201" />

      {/* ── Atmospheric background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 80% at 0% 60%, #120804 0%, #050201 50%, #030100 100%)",
          }}
        />
        {/* Large ambient gold orb (left side behind image) */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Right side purple orb */}
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(192,132,252,0.04) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Subtle diagonal texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(212,175,55,0.015) 0px, rgba(212,175,55,0.015) 1px, transparent 1px, transparent 60px)",
            mask: "radial-gradient(ellipse 70% 80% at 20% 50%, black 0%, transparent 100%)",
          }}
        />
      </motion.div>

      <div className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* ── LEFT: Cinematic Image Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="relative"
            >
              {/* Outer glow frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-2px",
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.5) 0%, transparent 40%, transparent 60%, rgba(212,175,55,0.3) 100%)",
                  padding: "1px",
                  zIndex: 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "27px",
                    background: "#050201",
                  }}
                />
              </div>

              {/* Main image card */}
              <motion.div
                style={{ y: imageY }}
                className="relative z-10 rounded-3xl overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  borderRadius: "24px",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,175,55,0.15), 0 0 60px rgba(212,175,55,0.08)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                {/* Background gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(175deg, #0D0804 0%, #1A0F06 20%, #C8963E 55%, #EDD5A3 75%, #FFF8E7 100%)",
                  }}
                />

                {/* Cinematic light beam */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse 50% 70% at 50% 60%, rgba(255,243,200,0.75) 0%, rgba(212,175,55,0.3) 40%, transparent 75%)",
                    animation: "glowPulse 5s ease-in-out infinite",
                  }}
                />

                {/* Rotating mandala */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.15,
                    animation: "rotateSlow 80s linear infinite",
                  }}
                >
                  <svg viewBox="0 0 300 300" style={{ width: "90%" }}>
                    <g transform="translate(150,150)">
                      <circle r="140" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                      <circle r="110" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                      <circle r="75" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                      <circle r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                      {Array.from({ length: 12 }, (_, i) => {
                        const a = (i * 360) / 12;
                        const r = (a * Math.PI) / 180;
                        const x1 = Math.cos(r) * 40;
                        const y1 = Math.sin(r) * 40;
                        const x2 = Math.cos(r) * 140;
                        const y2 = Math.sin(r) * 140;
                        return (
                          <line
                            key={i}
                            x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke="#D4AF37"
                            strokeWidth="0.5"
                            opacity="0.6"
                          />
                        );
                      })}
                      {Array.from({ length: 8 }, (_, i) => {
                        const a = (i * 360) / 8;
                        const r = (a * Math.PI) / 180;
                        const x = Math.cos(r) * 105;
                        const y = Math.sin(r) * 105;
                        return (
                          <ellipse
                            key={i}
                            cx={x} cy={y}
                            rx="22" ry="8"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="0.8"
                            transform={`rotate(${a} ${x} ${y})`}
                          />
                        );
                      })}
                      <circle r="8" fill="#D4AF37" opacity="0.5" />
                    </g>
                  </svg>
                </div>

                {/* OM symbol — large, centred */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    className="font-devanagari"
                    style={{
                      fontSize: "clamp(90px, 14vw, 140px)",
                      color: "#3D2200",
                      textShadow:
                        "0 0 60px rgba(212,175,55,0.6), 0 4px 20px rgba(0,0,0,0.4)",
                      lineHeight: 1,
                      opacity: 0.9,
                    }}
                  >
                    ॐ
                  </div>
                  <div
                    className="font-devanagari"
                    style={{ color: "#6B4000", fontSize: "20px", opacity: 0.8 }}
                  >
                    श्री दत्तात्रेय
                  </div>
                  <div
                    style={{
                      height: "1px",
                      width: "80px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(100,60,0,0.6), transparent)",
                    }}
                  />
                  <div
                    className="font-ui"
                    style={{
                      color: "#6B4000",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      opacity: 0.6,
                    }}
                  >
                    Shri Datta Mandir · Bhopal
                  </div>
                </div>

                {/* Top dark vignette */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "35%",
                    background:
                      "linear-gradient(to bottom, rgba(5,2,1,0.95) 0%, transparent 100%)",
                  }}
                />
                {/* Bottom dark vignette */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "25%",
                    background:
                      "linear-gradient(to top, rgba(5,2,1,0.8) 0%, transparent 100%)",
                  }}
                />
              </motion.div>

              {/* Corner decorations */}
              {[
                { top: "-14px", left: "-14px", borderTop: true, borderLeft: true },
                { top: "-14px", right: "-14px", borderTop: true, borderRight: true },
                { bottom: "-14px", left: "-14px", borderBottom: true, borderLeft: true },
                { bottom: "-14px", right: "-14px", borderBottom: true, borderRight: true },
              ].map((pos, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "32px",
                    height: "32px",
                    zIndex: 20,
                    borderTop: pos.borderTop ? "2px solid rgba(212,175,55,0.8)" : undefined,
                    borderLeft: pos.borderLeft ? "2px solid rgba(212,175,55,0.8)" : undefined,
                    borderBottom: pos.borderBottom ? "2px solid rgba(212,175,55,0.8)" : undefined,
                    borderRight: pos.borderRight ? "2px solid rgba(212,175,55,0.8)" : undefined,
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    bottom: pos.bottom,
                    boxShadow: "0 0 8px rgba(212,175,55,0.3)",
                  }}
                />
              ))}

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
                style={{
                  position: "absolute",
                  bottom: "24px",
                  right: "-20px",
                  zIndex: 30,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(26,13,8,0.95), rgba(15,7,3,0.98))",
                      border: "1px solid rgba(212,175,55,0.3)",
                      borderRadius: "14px",
                      padding: "10px 18px",
                      backdropFilter: "blur(20px)",
                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.1)",
                      minWidth: "120px",
                    }}
                  >
                    <div
                      className="font-display"
                      style={{
                        fontSize: "22px",
                        color: "#D4AF37",
                        lineHeight: 1.1,
                        textShadow: "0 0 16px rgba(212,175,55,0.5)",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="font-ui"
                      style={{
                        fontSize: "10px",
                        color: "#8A7060",
                        letterSpacing: "0.05em",
                        whiteSpace: "pre-line",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Text content ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 mb-5 self-start"
                style={{
                  padding: "6px 14px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,140,0,0.3)",
                  backgroundColor: "rgba(255,140,0,0.06)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#FF8C00",
                    boxShadow: "0 0 8px rgba(255,140,0,0.8)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="font-ui uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    color: "#FF8C00",
                  }}
                >
                  Est. 2024 · Arera Colony, Bhopal
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(30px, 4vw, 52px)",
                  color: "#FDF8F5",
                  lineHeight: 1.12,
                  letterSpacing: "-0.01em",
                }}
              >
                Abode of the{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #FFF8E7, #D4AF37, #B8922A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Guru
                </span>{" "}
                of the Universe
              </h2>

              {/* Horizontal divider */}
              <div
                style={{
                  height: "1px",
                  width: "60px",
                  background: "linear-gradient(to right, #D4AF37, transparent)",
                  marginBottom: "24px",
                }}
              />

              {/* Body text */}
              <p
                className="font-body mb-8"
                style={{
                  fontSize: "16px",
                  color: "#9E8E7E",
                  lineHeight: 1.85,
                  maxWidth: "480px",
                }}
              >
                Shri Dutta Mandir is a revered temple dedicated to{" "}
                <span style={{ color: "#D4AF37", fontWeight: 500 }}>Lord Dattatreya</span>,
                the divine trinity of Brahma, Vishnu, and Mahesh. Situated in
                the serene surroundings of E-4 Arera Colony, Bhopal, the mandir
                serves as a spiritual sanctuary for thousands of devotees seeking
                peace, wisdom, and divine blessings.
              </p>

              {/* Feature list */}
              <ul className="mb-10 flex flex-col gap-3">
                {features.map((f, i) => (
                  <motion.li
                    key={f.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.09, duration: 0.5 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "12px 16px",
                      borderRadius: "14px",
                      background: "rgba(212,175,55,0.04)",
                      border: "1px solid rgba(212,175,55,0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {/* Icon bubble */}
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.06))",
                        border: "1px solid rgba(212,175,55,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </span>
                    <span
                      className="font-body"
                      style={{ fontSize: "15px", color: "#E8D5C4" }}
                    >
                      {f.label}
                    </span>
                    {/* Right check */}
                    <span
                      style={{
                        marginLeft: "auto",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#D4AF37"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA link */}
              <motion.a
                href="#about"
                className="inline-flex items-center gap-3 self-start group"
                style={{ textDecoration: "none" }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.06))",
                    border: "1px solid rgba(212,175,55,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span
                  className="font-ui font-medium"
                  style={{
                    color: "#D4AF37",
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                  }}
                >
                  Our History
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
