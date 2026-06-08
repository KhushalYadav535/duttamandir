"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MandalaSVG from "@/components/ui/MandalaSVG";
import LotusRule from "@/components/ui/LotusRule";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${8 + Math.random() * 10}s`,
  size: `${2 + Math.random() * 3}px`,
}));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const mandalaY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      {/* Layer 1: Background gradient + particles */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #1A1005 0%, #0A0503 45%, #050201 100%)",
          }}
        />
        {/* Conic glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(212,175,55,0.15) 0deg, rgba(10,5,3,0.4) 120deg, rgba(10,5,3,0.6) 240deg, rgba(212,175,55,0.15) 360deg)",
            mixBlendMode: "screen",
          }}
        />
        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              backgroundColor: "#D4AF37",
              boxShadow: `0 0 6px #FFD700`,
              animation: `floatUp ${p.duration} ${p.delay} infinite linear`,
              opacity: 0.7,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2: Mandala */}
      <motion.div
        style={{ y: mandalaY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            width: 600,
            height: 600,
            animation: "rotateSlow 120s linear infinite",
          }}
        >
          <MandalaSVG />
        </motion.div>
      </motion.div>

      {/* Layer 3: Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-7 px-5 py-2 rounded-full inline-flex items-center gap-2 font-devanagari text-sm"
          style={{
            border: "1px solid rgba(212,175,55,0.5)",
            backgroundColor: "rgba(10,5,3,0.6)",
            backdropFilter: "blur(8px)",
            color: "#FF8C00",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "#D4AF37" }}>✦</span>
          ॐ श्री गुरुदेव दत्त
          <span style={{ color: "#D4AF37" }}>✦</span>
        </motion.div>

        {/* Title — three stacked lines */}
        <h1 className="font-display leading-none" style={{ letterSpacing: "-0.01em" }}>

          {/* "SHRI" — small caps top line */}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="block"
            style={{
              fontSize: "clamp(22px, 3.5vw, 44px)",
              color: "#C8A85A",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "0.05em",
            }}
          >
            Shri
          </motion.span>

          {/* "DUTTA" — hero word, gold gradient */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.65, ease: "easeOut" }}
            className="block"
            style={{
              fontSize: "clamp(72px, 13vw, 148px)",
              background:
                "linear-gradient(135deg, #FFF8E7 0%, #D4AF37 35%, #FFD700 60%, #B8922A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 0.9,
              filter: "drop-shadow(0 0 48px rgba(212,175,55,0.55))",
            }}
          >
            Dutta
          </motion.span>

          {/* "MANDIR" — medium spaced bottom */}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.6, ease: "easeOut" }}
            className="block"
            style={{
              fontSize: "clamp(28px, 4.5vw, 58px)",
              color: "#F0E8DA",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginTop: "0.1em",
              textShadow: "0 0 24px rgba(212,175,55,0.2)",
            }}
          >
            Mandir
          </motion.span>
        </h1>

        {/* Sanskrit subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-devanagari mt-5 mb-4"
          style={{
            fontSize: "clamp(17px, 2.2vw, 26px)",
            color: "#D4AF37",
            letterSpacing: "0.1em",
          }}
        >
          श्री क्षेत्र, भोपाल
        </motion.p>

        {/* Ornate divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.05, duration: 0.8, ease: "easeInOut" }}
          className="mb-5 origin-center"
          style={{ width: "min(400px, 80vw)" }}
        >
          <LotusRule />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="font-body"
          style={{
            fontSize: "clamp(13px, 1.4vw, 17px)",
            color: "#B8A898",
            lineHeight: 1.8,
            maxWidth: "520px",
            margin: "0 auto 2rem",
          }}
        >
          A sacred abode of Lord Dattatreya in the heart of Bhopal.
          <br />
          Experience peace, devotion, and divine blessings.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-wrap gap-5 justify-center mb-7"
        >
          {/* Primary CTA — gold gradient */}
          <button
            onClick={() => {
              document.querySelector("#darshan")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-ui font-semibold rounded-full transition-all duration-300"
            style={{
              padding: "14px 36px",
              background: "linear-gradient(135deg, #F5D062 0%, #D4AF37 40%, #B8922A 100%)",
              color: "#1A0D08",
              fontSize: "14px",
              letterSpacing: "0.06em",
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.3), 0 8px 32px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "linear-gradient(135deg, #FFD700 0%, #FF9500 50%, #FF6B00 100%)";
              el.style.boxShadow =
                "0 0 0 1px rgba(255,140,0,0.4), 0 8px 40px rgba(255,120,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)";
              el.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "linear-gradient(135deg, #F5D062 0%, #D4AF37 40%, #B8922A 100%)";
              el.style.boxShadow =
                "0 0 0 1px rgba(212,175,55,0.3), 0 8px 32px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.25)";
              el.style.transform = "translateY(0) scale(1)";
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Aarti Timings
              <span style={{ opacity: 0.7 }}>→</span>
            </span>
          </button>

          {/* Secondary CTA — glassmorphism */}
          <button
            onClick={() => {
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-ui font-semibold rounded-full transition-all duration-300"
            style={{
              padding: "14px 36px",
              border: "1.5px solid rgba(212,175,55,0.55)",
              color: "#D4AF37",
              backgroundColor: "rgba(212,175,55,0.05)",
              backdropFilter: "blur(12px)",
              fontSize: "14px",
              letterSpacing: "0.06em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "rgba(212,175,55,0.12)";
              el.style.borderColor = "rgba(212,175,55,0.9)";
              el.style.boxShadow =
                "0 4px 28px rgba(212,175,55,0.2), inset 0 1px 0 rgba(212,175,55,0.15)";
              el.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "rgba(212,175,55,0.05)";
              el.style.borderColor = "rgba(212,175,55,0.55)";
              el.style.boxShadow =
                "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.1)";
              el.style.transform = "translateY(0) scale(1)";
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              View Gallery
            </span>
          </button>
        </motion.div>

        {/* Info row — glassmorphism pill cards */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 justify-center font-ui"
        >
          {/* Address pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "7px 16px 7px 8px",
              borderRadius: "100px",
              backgroundColor: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.2)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.08)",
            }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.08))",
                border: "1px solid rgba(212,175,55,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                flexShrink: 0,
              }}
            >
              📍
            </span>
            <span style={{ color: "#C8B89A", fontSize: "12.5px", letterSpacing: "0.03em" }}>
              E-4, Arera Colony, Bhopal
            </span>
          </div>

          {/* Glowing dot divider */}
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #D4AF37 0%, rgba(212,175,55,0.2) 100%)",
              boxShadow: "0 0 6px rgba(212,175,55,0.6)",
            }}
          />

          {/* Phone pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "7px 16px 7px 8px",
              borderRadius: "100px",
              backgroundColor: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.2)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.08)",
            }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.08))",
                border: "1px solid rgba(212,175,55,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                flexShrink: 0,
              }}
            >
              📞
            </span>
            <span style={{ color: "#C8B89A", fontSize: "12.5px", letterSpacing: "0.03em" }}>
              0755 246 1796
            </span>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator — premium */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <div
          className="font-ui uppercase"
          style={{
            fontSize: "9px",
            letterSpacing: "0.28em",
            color: "#D4AF37",
            opacity: 0.55,
          }}
        >
          Scroll to Explore
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <div
            style={{
              width: "1px",
              height: "32px",
              background: "linear-gradient(to bottom, rgba(212,175,55,0.7), rgba(212,175,55,0))",
              boxShadow: "0 0 6px rgba(212,175,55,0.4)",
            }}
          />
          <div
            style={{
              animation: "bounceSlow 1.8s ease-in-out infinite",
              color: "#D4AF37",
              fontSize: "16px",
              opacity: 0.8,
              transform: "rotate(90deg)",
              lineHeight: 1,
            }}
          >
            ›
          </div>
        </div>
      </motion.div>
    </section>
  );
}
