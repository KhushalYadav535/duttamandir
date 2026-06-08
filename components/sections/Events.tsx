"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Events() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="events" ref={sectionRef} className="relative overflow-hidden">
      <SectionDivider fromColor="#050201" toColor="#080402" />

      {/* ── Atmospheric background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 80% at 50% 20%, #140A04 0%, #080402 40%, #030201 100%)",
          }}
        />
        {/* Gold ambient top-center */}
        <div
          style={{
            position: "absolute",
            top: "-5%",
            left: "30%",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Orange right orb */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            mask: "radial-gradient(ellipse 90% 70% at 50% 40%, black 0%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      </motion.div>

      <div className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
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
              <span
                className="font-ui uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#D4AF37" }}
              >
                Calendar of Divinity
              </span>
              <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
            </div>

            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(34px, 5.5vw, 62px)",
                color: "#FDF8F5",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Upcoming{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFF8E7, #D4AF37, #B8922A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Festivals
              </span>{" "}
              &amp; Events
            </h2>

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

          {/* ── Bento Grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto",
              gap: "16px",
            }}
          >
            {/* ── CARD 1: Datta Jayanti — hero card (col-span-2, row-span-2) ── */}
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.75, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl"
              style={{
                gridColumn: "1 / 3",
                gridRow: "1 / 3",
                minHeight: "440px",
                background: "linear-gradient(145deg, #1C0E04 0%, #0C0602 100%)",
                border: "1px solid rgba(212,175,55,0.18)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)",
                cursor: "default",
              }}
            >
              {/* Animated gold glow top */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)",
                  boxShadow: "0 0 20px rgba(212,175,55,0.8)",
                }}
              />

              {/* Large background OM glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  right: "-40px",
                  fontSize: "280px",
                  lineHeight: 1,
                  fontFamily: "serif",
                  color: "rgba(212,175,55,0.04)",
                  userSelect: "none",
                  transform: "rotate(-15deg)",
                }}
              >
                ॐ
              </div>

              {/* Rotating mandala bg */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "60px",
                  transform: "translateY(-50%)",
                  width: "240px",
                  height: "240px",
                  opacity: 0.06,
                  animation: "rotateSlow 90s linear infinite",
                }}
              >
                <svg viewBox="0 0 240 240">
                  <g transform="translate(120,120)">
                    <circle r="115" fill="none" stroke="#D4AF37" strokeWidth="1" />
                    <circle r="80" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                    <circle r="45" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                    {Array.from({ length: 12 }, (_, i) => {
                      const a = (i * 360) / 12;
                      const rr = (a * Math.PI) / 180;
                      return (
                        <line
                          key={i}
                          x1={Math.cos(rr) * 45} y1={Math.sin(rr) * 45}
                          x2={Math.cos(rr) * 115} y2={Math.sin(rr) * 115}
                          stroke="#D4AF37" strokeWidth="0.8"
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>

              {/* Ambient hover glow */}
              <div
                className="group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
                  opacity: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "36px 40px 36px",
                }}
              >
                <div>
                  {/* Badge */}
                  <span
                    className="font-ui uppercase inline-flex items-center gap-2 mb-6"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "#D4AF37",
                      backgroundColor: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      padding: "5px 14px",
                      borderRadius: "100px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#D4AF37",
                        boxShadow: "0 0 6px #D4AF37",
                        display: "inline-block",
                      }}
                    />
                    Grand Festival
                  </span>

                  <h3
                    className="font-display mb-3"
                    style={{
                      fontSize: "clamp(28px, 3.5vw, 44px)",
                      color: "#FDF8F5",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                    }}
                  >
                    Datta Jayanti{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #FFF8E7, #D4AF37)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Mahotsav
                    </span>
                  </h3>

                  {/* Date pill */}
                  <div
                    className="inline-flex items-center gap-2 mb-5"
                    style={{
                      padding: "8px 16px",
                      borderRadius: "12px",
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span
                      className="font-ui font-semibold"
                      style={{ fontSize: "15px", color: "#D4AF37", letterSpacing: "0.02em" }}
                    >
                      December 2025
                    </span>
                  </div>

                  <p
                    className="font-body"
                    style={{
                      fontSize: "15px",
                      color: "#7A6A5A",
                      lineHeight: 1.8,
                      maxWidth: "380px",
                    }}
                  >
                    Join us for the grand celebration of Lord Dattatreya&apos;s
                    divine appearance. Special puja, kirtan, and annadanam for
                    all devotees.
                  </p>
                </div>

                {/* CTA button */}
                <div style={{ marginTop: "32px" }}>
                  <button
                    className="font-ui font-semibold rounded-full transition-all duration-300"
                    style={{
                      padding: "13px 32px",
                      background: "linear-gradient(135deg, #F5D062 0%, #D4AF37 40%, #B8922A 100%)",
                      color: "#1A0D08",
                      fontSize: "14px",
                      letterSpacing: "0.05em",
                      boxShadow:
                        "0 4px 24px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "linear-gradient(135deg, #FFD700 0%, #FF9500 60%, #FF6B00 100%)";
                      el.style.boxShadow = "0 6px 32px rgba(255,140,0,0.5)";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "linear-gradient(135deg, #F5D062 0%, #D4AF37 40%, #B8922A 100%)";
                      el.style.boxShadow = "0 4px 24px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      Register Free
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ── CARD 2: Guruvar Satsang ── */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl cursor-default"
              style={{
                gridColumn: "3 / 4",
                gridRow: "1 / 2",
                background: "linear-gradient(145deg, #1A0A02 0%, #0E0601 100%)",
                border: "1px solid rgba(255,140,0,0.2)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
                padding: "28px",
              }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
            >
              {/* Orange accent top */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #FF8C00, transparent)",
                  boxShadow: "0 0 12px rgba(255,140,0,0.6)",
                }}
              />
              {/* Ambient corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(255,140,0,0.2), rgba(255,140,0,0.06))",
                  border: "1px solid rgba(255,140,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "16px",
                  boxShadow: "0 4px 16px rgba(255,140,0,0.15)",
                }}
              >
                🕉️
              </div>

              <span
                className="font-ui uppercase inline-block mb-3"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  color: "#FF8C00",
                  backgroundColor: "rgba(255,140,0,0.1)",
                  border: "1px solid rgba(255,140,0,0.2)",
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}
              >
                Weekly · Every Thursday
              </span>

              <h3
                className="font-display mb-2"
                style={{ fontSize: "20px", color: "#FDF8F5", letterSpacing: "-0.01em" }}
              >
                Guruvar Satsang
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "13.5px", color: "#6A5A4A", lineHeight: 1.7 }}
              >
                Every Thursday evening — bhajans, pravachan, and prasad for all.
              </p>
            </motion.div>

            {/* ── CARD 3: Annadanam ── */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl cursor-default"
              style={{
                gridColumn: "3 / 4",
                gridRow: "2 / 3",
                background: "linear-gradient(145deg, #1A0E04 0%, #0C0804 100%)",
                border: "1px solid rgba(212,175,55,0.18)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
                padding: "28px",
              }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
            >
              {/* Gold accent top */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  boxShadow: "0 0 12px rgba(212,175,55,0.6)",
                }}
              />
              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.06))",
                  border: "1px solid rgba(212,175,55,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "16px",
                  boxShadow: "0 4px 16px rgba(212,175,55,0.15)",
                }}
              >
                🍱
              </div>

              <h3
                className="font-display mb-2"
                style={{ fontSize: "20px", color: "#D4AF37", letterSpacing: "-0.01em" }}
              >
                Annadanam Seva
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "13.5px", color: "#6A5A4A", lineHeight: 1.7 }}
              >
                Volunteer to serve food to hundreds of devotees on festival days.
              </p>
            </motion.div>

            {/* ── CARD 4: Navratri (col-span-1) ── */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl cursor-default"
              style={{
                gridColumn: "1 / 2",
                gridRow: "3 / 4",
                background: "linear-gradient(145deg, #1E0E10 0%, #120609 100%)",
                border: "1px solid rgba(192,132,252,0.2)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
                padding: "28px",
              }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
            >
              {/* Purple accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #C084FC, transparent)",
                  boxShadow: "0 0 12px rgba(192,132,252,0.5)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-20px", right: "-20px",
                  width: "80px", height: "80px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)",
                  filter: "blur(15px)",
                }}
              />

              {/* Coming Soon tag */}
              <span
                className="font-ui uppercase absolute top-5 right-5"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  color: "#C084FC",
                  backgroundColor: "rgba(192,132,252,0.1)",
                  border: "1px solid rgba(192,132,252,0.2)",
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}
              >
                Coming Soon
              </span>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(192,132,252,0.2), rgba(192,132,252,0.06))",
                  border: "1px solid rgba(192,132,252,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "16px",
                  boxShadow: "0 4px 16px rgba(192,132,252,0.15)",
                }}
              >
                🪷
              </div>

              <h3
                className="font-display mb-2"
                style={{ fontSize: "20px", color: "#FDF8F5", letterSpacing: "-0.01em" }}
              >
                Navratri Celebrations
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "13.5px", color: "#6A5A4A", lineHeight: 1.7 }}
              >
                Nine nights of devotion, dance, and divine worship. Stay tuned for dates.
              </p>
            </motion.div>

            {/* ── CARD 5: Newsletter (col-span-2) ── */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl"
              style={{
                gridColumn: "2 / 4",
                gridRow: "3 / 4",
                background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(26,13,8,0.6) 100%)",
                border: "1px solid rgba(212,175,55,0.22)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)",
                padding: "32px 36px",
              }}
            >
              {/* Top gold line */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.7), transparent)",
                }}
              />
              {/* Left glow orb */}
              <div
                style={{
                  position: "absolute",
                  left: "-30px", top: "50%",
                  transform: "translateY(-50%)",
                  width: "120px", height: "120px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "28px",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.07))",
                    border: "1px solid rgba(212,175,55,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    flexShrink: 0,
                    boxShadow: "0 6px 20px rgba(212,175,55,0.2)",
                  }}
                >
                  📿
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: "160px" }}>
                  <h3
                    className="font-display mb-1"
                    style={{ fontSize: "20px", color: "#D4AF37", letterSpacing: "-0.01em" }}
                  >
                    Temple Newsletter
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: "14px", color: "#6A5A4A", lineHeight: 1.6 }}
                  >
                    Get updates on events, puja timings, and festival news.
                  </p>
                </div>

                {/* Form */}
                <div style={{ minWidth: "280px", flex: 1 }}>
                  {subscribed ? (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-ui text-sm"
                      style={{ color: "#D4AF37", textAlign: "center", padding: "12px" }}
                    >
                      🙏 Jai Gurudev! You are subscribed.
                    </motion.p>
                  ) : (
                    <form
                      onSubmit={handleSubscribe}
                      style={{ display: "flex", gap: "8px" }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="font-ui"
                        style={{
                          flex: 1,
                          padding: "12px 16px",
                          borderRadius: "14px",
                          background: "rgba(212,175,55,0.05)",
                          border: "1px solid rgba(212,175,55,0.2)",
                          color: "#FDF8F5",
                          fontSize: "13px",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212,175,55,0.08)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                      <button
                        type="submit"
                        className="font-ui font-semibold rounded-2xl transition-all duration-300"
                        style={{
                          padding: "12px 22px",
                          background: "linear-gradient(135deg, #F5D062, #D4AF37, #B8922A)",
                          color: "#1A0D08",
                          fontSize: "13px",
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                          boxShadow: "0 4px 16px rgba(212,175,55,0.35)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLButtonElement;
                          el.style.background = "linear-gradient(135deg, #FFD700, #FF9500, #FF6B00)";
                          el.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLButtonElement;
                          el.style.background = "linear-gradient(135deg, #F5D062, #D4AF37, #B8922A)";
                          el.style.transform = "translateY(0)";
                        }}
                      >
                        Subscribe →
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
