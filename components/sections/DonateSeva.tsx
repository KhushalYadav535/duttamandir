"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sevaOptions = [
  {
    icon: "🪔",
    label: "Nitya Puja Seva",
    sanskrit: "नित्य पूजा सेवा",
    desc: "Daily lamp offering in the Lord's name",
    amount: "₹101",
    accent: "#FF8C00",
    accentRgb: "255,140,0",
    gradient: "linear-gradient(160deg, rgba(255,140,0,0.18) 0%, rgba(5,2,1,0) 65%)",
  },
  {
    icon: "🌸",
    label: "Flower Seva",
    sanskrit: "पुष्प सेवा",
    desc: "Adorn the deity with fresh flowers",
    amount: "₹251",
    accent: "#C084FC",
    accentRgb: "192,132,252",
    gradient: "linear-gradient(160deg, rgba(192,132,252,0.18) 0%, rgba(5,2,1,0) 65%)",
  },
  {
    icon: "🍱",
    label: "Annadanam Seva",
    sanskrit: "अन्नदानम् सेवा",
    desc: "Feed devotees on festival days",
    amount: "₹501",
    accent: "#D4AF37",
    accentRgb: "212,175,55",
    gradient: "linear-gradient(160deg, rgba(212,175,55,0.18) 0%, rgba(5,2,1,0) 65%)",
  },
  {
    icon: "🏛️",
    label: "Mandir Upkeep",
    sanskrit: "मंदिर संरक्षण",
    desc: "Contribute to temple maintenance",
    amount: "₹1001",
    accent: "#60A5FA",
    accentRgb: "96,165,250",
    gradient: "linear-gradient(160deg, rgba(96,165,250,0.15) 0%, rgba(5,2,1,0) 65%)",
  },
];

export default function DonateSeva() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const bgY     = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const flameY  = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section id="donate" ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: "100vh" }}>

      {/* ═══════════════════════════════════
          CINEMATIC BACKGROUND LAYERS
      ═══════════════════════════════════ */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        {/* Base — near-black */}
        <div style={{ position: "absolute", inset: 0, background: "#060200" }} />

        {/* Central flame — rich gold-to-deep */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 80% at 50% 65%, #C87000 0%, #8A4800 25%, #3A1800 55%, transparent 80%)" }} />

        {/* Upper haze — warm amber */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "60%", background: "linear-gradient(to bottom, #030100 0%, rgba(8,4,0,0) 100%)" }} />

        {/* Soft side glows */}
        <div style={{ position: "absolute", left: "-10%", top: "30%", width: "500px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,90,0,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", right: "-10%", top: "20%", width: "500px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,90,0,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />

        {/* Pulsing center radiance */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 45% at 50% 65%, rgba(255,190,50,0.18) 0%, transparent 70%)", animation: "glowPulse 5s ease-in-out infinite" }} />

        {/* Scanline texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 4px)", opacity: 0.5 }} />

        {/* Film grain overlay */}
        <div style={{ position: "absolute", inset: 0, background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.4 }} />
      </motion.div>

      {/* Floating mandalas */}
      {[
        { top: "6%",  left: "3%",  size: 180, spd: "24s", del: "0s",   op: 0.07 },
        { top: "50%", right: "4%", size: 260, spd: "32s", del: "4s",   op: 0.05 },
        { top: "15%", right: "18%",size: 110, spd: "20s", del: "2s",   op: 0.08 },
        { bottom:"8%",left: "16%", size: 140, spd: "28s", del: "1.5s", op: 0.06 },
        { top: "40%", left: "40%", size: 320, spd: "45s", del: "3s",   op: 0.025 },
      ].map((m, i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ top: (m as any).top, left: (m as any).left, right: (m as any).right, bottom: (m as any).bottom, width: m.size, height: m.size, opacity: m.op, animation: `rotateSlow ${m.spd} linear infinite`, animationDelay: m.del }}>
          <svg viewBox="0 0 100 100">
            <g transform="translate(50,50)">
              <circle r="48" fill="none" stroke="#7A3E00" strokeWidth="0.6" />
              <circle r="34" fill="none" stroke="#7A3E00" strokeWidth="0.4" />
              <circle r="20" fill="none" stroke="#7A3E00" strokeWidth="0.6" />
              {Array.from({ length: 12 }, (_, j) => {
                const a = (j*360)/12, rad = (a*Math.PI)/180;
                const x = Math.cos(rad)*34, y = Math.sin(rad)*34;
                return <ellipse key={j} cx={x} cy={y} rx="9" ry="3.5" fill="none" stroke="#7A3E00" strokeWidth="0.5" transform={`rotate(${a} ${x} ${y})`} />;
              })}
              {Array.from({ length: 6 }, (_, j) => {
                const a = (j*360)/6, rad = (a*Math.PI)/180;
                return <line key={j} x1={Math.cos(rad)*20} y1={Math.sin(rad)*20} x2={Math.cos(rad)*48} y2={Math.sin(rad)*48} stroke="#7A3E00" strokeWidth="0.4" />;
              })}
              <circle r="5" fill="#7A3E00" opacity="0.4" />
            </g>
          </svg>
        </div>
      ))}

      {/* ═══════════════════════════════════
          CONTENT
      ═══════════════════════════════════ */}
      <div className="relative z-10 py-36 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── HEADER ── */}
          <motion.div style={{ y: textY }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }} className="text-center mb-24">

            {/* Sanskrit pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="inline-flex items-center gap-4 mb-8 px-6 py-3 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(20,8,0,0.9), rgba(10,4,0,0.95))",
                border: "1px solid rgba(180,120,30,0.3)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,80,0.1), 0 0 0 1px rgba(180,120,30,0.1)",
              }}
            >
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C88A1E", boxShadow: "0 0 10px rgba(200,140,30,0.8)", animation: "pulse 2s infinite" }} />
              <span className="font-devanagari" style={{ fontSize: "16px", color: "rgba(212,175,55,0.85)", letterSpacing: "0.08em" }}>ॐ श्री गुरुदेव दत्त</span>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C88A1E", boxShadow: "0 0 10px rgba(200,140,30,0.8)", animation: "pulse 2s infinite 1s" }} />
            </motion.div>

            {/* Main title */}
            <div style={{ marginBottom: "24px" }}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-ui uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.3em", color: "rgba(180,110,20,0.6)", marginBottom: "12px", textAlign: "center" }}
              >
                Sacred Offering
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="font-display"
                style={{ fontSize: "clamp(44px, 8vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
              >
                <span style={{ display: "block", color: "rgba(255,255,255,0.88)", fontWeight: 300 }}>Support the</span>
                <span
                  style={{
                    display: "block",
                    background: "linear-gradient(135deg, #FFF8DC 0%, #FFD700 25%, #D4AF37 50%, #FF9500 75%, #FFD700 100%)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                    filter: "drop-shadow(0 0 40px rgba(212,175,55,0.35))",
                    animation: "shimmerText 4s ease-in-out infinite",
                  }}
                >
                  Mandir Seva
                </span>
              </motion.h2>
            </div>

            {/* Triple-line ornament */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, rgba(200,140,30,0.3))" }} />
              <div style={{ height: "1px", width: "30px", background: "rgba(200,140,30,0.5)" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", border: "1.5px solid rgba(200,140,30,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C88A1E", boxShadow: "0 0 8px rgba(200,140,30,0.8)" }} />
              </div>
              <div style={{ height: "1px", width: "30px", background: "rgba(200,140,30,0.5)" }} />
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, rgba(200,140,30,0.3))" }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body mx-auto"
              style={{ fontSize: "17px", color: "rgba(180,130,60,0.65)", lineHeight: 2.0, maxWidth: "480px", fontStyle: "italic", textAlign: "center" }}
            >
              &ldquo;Seva is the highest form of worship. Your offering becomes a prayer that reaches the divine.&rdquo;
            </motion.p>
          </motion.div>

          {/* ── SEVA CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {sevaOptions.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative overflow-hidden rounded-3xl cursor-default"
                style={{
                  background: "linear-gradient(165deg, #1A0C04 0%, #0C0602 50%, #080402 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)`,
                  padding: "0",
                }}
              >
                {/* Ambient colour wash on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: s.gradient }} />

                {/* Top glow bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`, boxShadow: `0 0 20px rgba(${s.accentRgb},0.6)`, opacity: 0.7 }} className="group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner glow */}
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "100px", height: "100px", borderRadius: "50%", background: `radial-gradient(circle, rgba(${s.accentRgb},0.2) 0%, transparent 70%)`, filter: "blur(20px)", pointerEvents: "none" }} />

                <div style={{ padding: "28px 22px 26px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", flex: 1, justifyContent: "space-between", minHeight: "320px" }}>
                  {/* Top block */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                    {/* Glowing icon orb */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "22px",
                        background: `linear-gradient(145deg, rgba(${s.accentRgb},0.22), rgba(${s.accentRgb},0.06))`,
                        border: `1px solid rgba(${s.accentRgb},0.28)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "32px",
                        marginBottom: "18px",
                        boxShadow: `0 8px 32px rgba(${s.accentRgb},0.22), inset 0 1px 0 rgba(255,255,255,0.08)`,
                      }}
                    >
                      {s.icon}
                    </motion.div>

                    {/* Accent divider */}
                    <div style={{ height: "1px", width: "44px", background: `linear-gradient(90deg, transparent, rgba(${s.accentRgb},0.55), transparent)`, marginBottom: "14px" }} />

                    {/* Sanskrit label */}
                    <p className="font-devanagari" style={{ fontSize: "12px", color: `rgba(${s.accentRgb},0.55)`, marginBottom: "8px", letterSpacing: "0.04em" }}>{s.sanskrit}</p>

                    {/* English name */}
                    <p className="font-ui font-semibold" style={{ fontSize: "14px", color: "#FDF8F5", marginBottom: "10px", letterSpacing: "-0.01em" }}>{s.label}</p>

                    {/* Description — flex grow to push amount down */}
                    <p className="font-body" style={{ fontSize: "12.5px", color: "rgba(100,72,40,0.85)", lineHeight: 1.75, padding: "0 4px" }}>{s.desc}</p>
                  </div>

                  {/* Bottom block — amount pill always pinned to bottom */}
                  <div style={{ marginTop: "20px" }}>
                    {/* Fine rule above amount */}
                    <div style={{ height: "1px", width: "100%", background: `linear-gradient(90deg, transparent, rgba(${s.accentRgb},0.15), transparent)`, marginBottom: "16px" }} />
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "8px 24px",
                        borderRadius: "100px",
                        background: `linear-gradient(135deg, rgba(${s.accentRgb},0.18), rgba(${s.accentRgb},0.06))`,
                        border: `1px solid rgba(${s.accentRgb},0.32)`,
                        boxShadow: `0 4px 20px rgba(${s.accentRgb},0.18), inset 0 1px 0 rgba(255,255,255,0.07)`,
                      }}
                    >
                      <span className="font-display" style={{ fontSize: "20px", color: s.accent, textShadow: `0 0 20px rgba(${s.accentRgb},0.55)`, letterSpacing: "0" }}>
                        {s.amount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom shimmer on hover */}
                <div className="opacity-0 group-hover:opacity-50 transition-opacity duration-400" style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: "1px", background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }} />
              </motion.div>
            ))}
          </div>

          {/* ── CTA SECTION — luxury panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(20,10,2,0.92) 0%, rgba(10,5,1,0.96) 100%)",
              border: "1px solid rgba(212,175,55,0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
              padding: "40px 44px",
            }}
          >
            {/* Top accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1.5px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), #FFD700, rgba(212,175,55,0.6), transparent)", boxShadow: "0 0 20px rgba(212,175,55,0.3)" }} />
            {/* Left ambient glow */}
            <div style={{ position: "absolute", left: "-40px", top: "50%", transform: "translateY(-50%)", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)", filter: "blur(30px)" }} />
            {/* Right ambient glow */}
            <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%)", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,140,0,0.08) 0%, transparent 70%)", filter: "blur(30px)" }} />

            <div className="relative" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "28px" }}>
              {/* Quote */}
              <div>
                <p className="font-devanagari" style={{ fontSize: "15px", color: "rgba(212,175,55,0.5)", letterSpacing: "0.06em", marginBottom: "8px" }}>दान परमो धर्मः</p>
                <p className="font-body" style={{ fontSize: "14px", color: "rgba(150,110,50,0.6)", fontStyle: "italic" }}>— Charity is the highest duty</p>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                {/* Primary — radiant gold */}
                <button
                  className="font-ui font-semibold rounded-full flex items-center gap-3 transition-all duration-300"
                  style={{
                    padding: "16px 44px",
                    background: "linear-gradient(135deg, #FFF0A0 0%, #D4AF37 30%, #FF9500 60%, #D4AF37 85%, #FFF0A0 100%)",
                    backgroundSize: "200% 100%",
                    color: "#1A0D08",
                    fontSize: "16px",
                    letterSpacing: "0.04em",
                    boxShadow: "0 8px 40px rgba(212,175,55,0.45), 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundPosition = "100% 0";
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = "0 16px 60px rgba(212,175,55,0.6), 0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundPosition = "0% 0";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 8px 40px rgba(212,175,55,0.45), 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)";
                  }}
                >
                  <div style={{ width: "28px", height: "28px", borderRadius: "9px", background: "rgba(26,13,8,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>🙏</div>
                  Donate Online
                </button>

                {/* Secondary — dark glass */}
                <button
                  className="font-ui font-semibold rounded-full flex items-center gap-3 transition-all duration-300"
                  style={{
                    padding: "16px 44px",
                    background: "rgba(12,6,2,0.9)",
                    color: "#C8A050",
                    fontSize: "16px",
                    letterSpacing: "0.04em",
                    border: "1px solid rgba(212,175,55,0.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(20,10,3,0.95)";
                    el.style.borderColor = "rgba(212,175,55,0.6)";
                    el.style.color = "#D4AF37";
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = "0 12px 48px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.15), inset 0 1px 0 rgba(212,175,55,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(12,6,2,0.9)";
                    el.style.borderColor = "rgba(212,175,55,0.3)";
                    el.style.color = "#C8A050";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)";
                  }}
                >
                  <div style={{ width: "28px", height: "28px", borderRadius: "9px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>🤝</div>
                  Volunteer
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>

              {/* Contact note */}
              <p className="font-ui" style={{ fontSize: "12.5px", color: "rgba(120,80,20,0.5)", letterSpacing: "0.04em" }}>
                For seva enquiries:{" "}
                <a href="mailto:shrigurudevsewamandal@gmail.com"
                  style={{ color: "rgba(180,130,40,0.65)", textDecoration: "underline", textUnderlineOffset: "3px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(212,175,55,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(180,130,40,0.65)")}
                >
                  shrigurudevsewamandal@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* shimmer text keyframe */}
      <style>{`
        @keyframes shimmerText {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
