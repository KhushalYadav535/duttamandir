"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── 8 petals of the mandala ── */
const PETALS = Array.from({ length: 8 }, (_, i) => i);
/* ── 12 outer ring dots ── */
const RING_DOTS = Array.from({ length: 12 }, (_, i) => i);
/* ── floating particles ── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  delay: Math.random() * 2.5,
  dur: 2.5 + Math.random() * 2,
  size: 1.5 + Math.random() * 2.5,
}));

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"reveal" | "hold" | "exit">("reveal");

  useEffect(() => {
    /* Animate progress bar from 0 → 100 over 2.4 s */
    const start = Date.now();
    const total = 2400;
    const raf = requestAnimationFrame(function tick() {
      const p = Math.min(((Date.now() - start) / total) * 100, 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else setPhase("exit");
    });

    const hide = setTimeout(() => setIsVisible(false), 3200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99990] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#050100" }}
        >

          {/* ═══ LAYERED BACKGROUND ═══ */}
          {/* Deep radial base */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 100% at 50% 50%, #1A0900 0%, #0A0400 50%, #050100 100%)" }} />
          {/* Warm center flame */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 55% at 50% 50%, rgba(200,120,0,0.18) 0%, transparent 70%)", animation: "glowPulse 3s ease-in-out infinite" }} />
          {/* Fine dot grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5 }} />
          {/* Scanlines */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 4px)", opacity: 0.6 }} />

          {/* ═══ FLOATING GOLD PARTICLES ═══ */}
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              style={{
                position: "absolute",
                left: p.left,
                bottom: "-8px",
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: "50%",
                backgroundColor: "#D4AF37",
                boxShadow: `0 0 ${p.size * 3}px #FFD700`,
              }}
              animate={{ y: [0, -(typeof window !== "undefined" ? window.innerHeight : 800) - 20], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
            />
          ))}

          {/* ═══ MAIN CENTREPIECE ═══ */}
          <div className="relative flex flex-col items-center justify-center" style={{ gap: "32px" }}>

            {/* Outermost rotating ring of dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", width: "280px", height: "280px" }}
            >
              {RING_DOTS.map((i) => {
                const angle = (i / 12) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = 140 + Math.cos(rad) * 130;
                const y = 140 + Math.sin(rad) * 130;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: `${x}px`,
                      top: `${y}px`,
                      width: i % 3 === 0 ? "5px" : "3px",
                      height: i % 3 === 0 ? "5px" : "3px",
                      borderRadius: "50%",
                      background: i % 3 === 0 ? "#D4AF37" : "rgba(212,175,55,0.35)",
                      boxShadow: i % 3 === 0 ? "0 0 8px rgba(212,175,55,0.8)" : "none",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                );
              })}
            </motion.div>

            {/* Counter-rotating mandala */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", width: "220px", height: "220px", opacity: 0.18 }}
            >
              <svg viewBox="0 0 220 220" width="220" height="220">
                <g transform="translate(110,110)">
                  <circle r="105" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                  <circle r="70" fill="none" stroke="#D4AF37" strokeWidth="0.6" />
                  <circle r="38" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                  {PETALS.map((i) => {
                    const a = (i * 360) / 8;
                    const r = (a * Math.PI) / 180;
                    const x = Math.cos(r) * 70;
                    const y = Math.sin(r) * 70;
                    return (
                      <g key={i}>
                        <ellipse cx={x} cy={y} rx="20" ry="8" fill="none" stroke="#D4AF37" strokeWidth="0.8" transform={`rotate(${a} ${x} ${y})`} />
                        <line x1={Math.cos(r) * 38} y1={Math.sin(r) * 38} x2={Math.cos(r) * 105} y2={Math.sin(r) * 105} stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
                      </g>
                    );
                  })}
                  <circle r="8" fill="none" stroke="#D4AF37" strokeWidth="1" />
                </g>
              </svg>
            </motion.div>

            {/* Glowing ring — slow rotate forward */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(212,175,55,0.15)", boxShadow: "0 0 20px rgba(212,175,55,0.08) inset" }}
            >
              {/* bright arc segment */}
              <div
                style={{
                  position: "absolute",
                  top: "-1px", left: "50%",
                  width: "50px", height: "2px",
                  background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
                  boxShadow: "0 0 12px rgba(212,175,55,0.9)",
                  transform: "translateX(-50%)",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            {/* OM symbol — centrepiece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
              style={{ gap: "14px", zIndex: 10 }}
            >
              {/* OM */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1.04, 0.97] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="font-devanagari"
                style={{
                  fontSize: "110px",
                  lineHeight: 1,
                  background: "linear-gradient(160deg, #FFF8DC 0%, #FFD700 30%, #D4AF37 55%, #FF9500 80%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(212,175,55,0.6)) drop-shadow(0 0 60px rgba(212,175,55,0.2))",
                }}
              >
                ॐ
              </motion.div>

              {/* Sanskrit title */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
              >
                <p className="font-devanagari" style={{ fontSize: "18px", color: "rgba(212,175,55,0.8)", letterSpacing: "0.1em" }}>
                  श्री गुरुदेव दत्त
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ height: "1px", width: "30px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))" }} />
                  <p className="font-ui uppercase" style={{ fontSize: "9px", letterSpacing: "0.28em", color: "rgba(212,175,55,0.35)" }}>
                    Shri Dutta Mandir · Bhopal
                  </p>
                  <div style={{ height: "1px", width: "30px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))" }} />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ═══ BOTTOM AREA ═══ */}
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              width: "240px",
            }}
          >
            {/* Progress track */}
            <div style={{ width: "100%", height: "1px", background: "rgba(212,175,55,0.12)", borderRadius: "1px", overflow: "visible", position: "relative" }}>
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(to right, #B8922A, #D4AF37, #FFD700)",
                  borderRadius: "1px",
                  width: `${progress}%`,
                  boxShadow: "0 0 10px rgba(212,175,55,0.7)",
                  transition: "width 0.05s linear",
                }}
              />
              {/* Glowing tip */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: `${progress}%`,
                  transform: "translate(-50%, -50%)",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FFD700",
                  boxShadow: "0 0 12px rgba(255,215,0,1), 0 0 24px rgba(212,175,55,0.5)",
                  transition: "left 0.05s linear",
                }}
              />
            </div>

            {/* Percentage + label */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <span className="font-ui" style={{ fontSize: "10px", color: "rgba(212,175,55,0.3)", letterSpacing: "0.15em" }}>
                LOADING
              </span>
              <span className="font-display" style={{ fontSize: "14px", color: "rgba(212,175,55,0.5)", letterSpacing: "0.05em" }}>
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* ═══ EXIT CURTAIN ═══ */}
          <AnimatePresence>
            {phase === "exit" && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#050100",
                  transformOrigin: "top",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
