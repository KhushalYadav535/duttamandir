"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";

const testimonials1 = [
  {
    id: 1,
    quote: "Visiting Dutta Mandir brings immense peace to my soul. The morning aarti is truly divine — I feel Lord Dattatreya's presence strongly.",
    name: "Priya Sharma",
    initial: "P",
    place: "Bhopal Devotee",
    stars: 5,
  },
  {
    id: 2,
    quote: "This mandir has been our family's spiritual home for years. The serenity here is unmatched. Jai Gurudev!",
    name: "Ramesh Gupta",
    initial: "R",
    place: "Arera Colony",
    stars: 5,
  },
  {
    id: 3,
    quote: "The Guruvar satsang every Thursday evening is something I never miss. The bhajans fill the heart with devotion.",
    name: "Anita Verma",
    initial: "A",
    place: "Bhopal",
    stars: 5,
  },
  {
    id: 4,
    quote: "Lord Dattatreya's blessings have transformed our lives. This mandir is a true spiritual sanctuary in the city.",
    name: "Suresh Patel",
    initial: "S",
    place: "MP Nagar",
    stars: 5,
  },
  {
    id: 5,
    quote: "The priests here are highly learned and conduct all puja rituals with utmost devotion and precision.",
    name: "Kavitha Nair",
    initial: "K",
    place: "Bhopal Devotee",
    stars: 5,
  },
  {
    id: 6,
    quote: "Every Datta Jayanti here is an unforgettable spiritual experience. The entire atmosphere is charged with divine energy.",
    name: "Mohan Das",
    initial: "M",
    place: "Habibganj",
    stars: 5,
  },
];

const testimonials2 = [
  {
    id: 7,
    quote: "The annadanam seva at this temple embodies the true spirit of service. Blessed to have such a divine place in Bhopal.",
    name: "Deepika Singh",
    initial: "D",
    place: "Bhopal Devotee",
    stars: 5,
  },
  {
    id: 8,
    quote: "I travel 40km every Guruvar just to attend the evening puja. The divine energy here is inexplicable.",
    name: "Arun Kumar",
    initial: "A",
    place: "Hoshangabad",
    stars: 5,
  },
  {
    id: 9,
    quote: "The mandir's decoration during Navratri is absolutely breathtaking. Lord Datta's idol radiates pure divinity.",
    name: "Sunita Joshi",
    initial: "S",
    place: "Shyamala Hills",
    stars: 5,
  },
  {
    id: 10,
    quote: "This sacred place has given me strength in my most difficult times. Lord Dattatreya is truly the guru of gurus.",
    name: "Vikram Tiwari",
    initial: "V",
    place: "Bhopal Devotee",
    stars: 5,
  },
  {
    id: 11,
    quote: "The vibrations at this temple during aarti are something I have never experienced elsewhere. Pure bliss.",
    name: "Rekha Mehta",
    initial: "R",
    place: "Kolar Road",
    stars: 5,
  },
  {
    id: 12,
    quote: "Shri Dutta Mandir is a beacon of light for all devotees of Lord Dattatreya in Madhya Pradesh.",
    name: "Harish Chandra",
    initial: "H",
    place: "Bhopal",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#D4AF37">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote, name, initial, place, stars,
}: {
  quote: string; name: string; initial: string; place: string; stars: number;
}) {
  return (
    <div
      className="group flex-shrink-0 relative overflow-hidden"
      style={{
        width: 320,
        borderRadius: "20px",
        background: "linear-gradient(145deg, #1C0E07 0%, #0F0703 100%)",
        border: "1px solid rgba(212,175,55,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        padding: "28px",
        cursor: "default",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "1.5px",
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
        }}
      />

      {/* Corner glow on hover */}
      <div
        className="group-hover:opacity-100 transition-opacity duration-400"
        style={{
          position: "absolute",
          top: "-30px", right: "-30px",
          width: "100px", height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
          filter: "blur(20px)",
          opacity: 0,
        }}
      />

      {/* Large quote mark */}
      <div
        style={{
          fontSize: "56px",
          lineHeight: 1,
          color: "#D4AF37",
          opacity: 0.15,
          fontFamily: "Georgia, serif",
          marginBottom: "-8px",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <StarRating count={stars} />

      {/* Quote text */}
      <p
        className="font-body italic"
        style={{
          fontSize: "14px",
          color: "#B8A898",
          lineHeight: 1.8,
          marginBottom: "20px",
        }}
      >
        {quote}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, rgba(212,175,55,0.3), transparent)",
          marginBottom: "16px",
        }}
      />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Avatar */}
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #D4AF37, #B8922A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            fontWeight: 700,
            color: "#1A0D08",
            flexShrink: 0,
            boxShadow: "0 4px 12px rgba(212,175,55,0.3)",
            fontFamily: "var(--font-ui, sans-serif)",
          }}
        >
          {initial}
        </div>
        <div>
          <p
            className="font-ui font-semibold"
            style={{ fontSize: "14px", color: "#FDF8F5", marginBottom: "2px" }}
          >
            {name}
          </p>
          <p
            className="font-ui"
            style={{ fontSize: "11px", color: "#5A4A3A", letterSpacing: "0.04em" }}
          >
            {place}
          </p>
        </div>

        {/* Datta symbol right */}
        <div
          style={{
            marginLeft: "auto",
            fontSize: "20px",
            opacity: 0.12,
            fontFamily: "serif",
          }}
        >
          ॐ
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof testimonials1;
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{ display: "flex", gap: "16px", width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="testimonials" ref={sectionRef} className="relative overflow-hidden">
      <SectionDivider fromColor="#050201" toColor="#0A0503" />

      {/* Atmospheric bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 100% 70% at 50% 30%, #140A04 0%, #0A0503 50%, #040201 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%", left: "20%",
            width: "600px", height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%", right: "15%",
            width: "400px", height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,132,252,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            mask: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            opacity: 0.35,
          }}
        />
      </motion.div>

      <div className="relative py-28 overflow-hidden">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 mb-20"
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
              Devotee Stories
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
            Words of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFF8E7, #D4AF37, #B8922A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Devotees
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4AF37", boxShadow: "0 0 12px rgba(212,175,55,0.8)" }} />
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))" }} />
          </div>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-4 mt-8 px-6 py-3 rounded-2xl"
            style={{
              background: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ display: "flex", gap: "3px" }}>
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="font-display" style={{ fontSize: "22px", color: "#D4AF37" }}>5.0</span>
            <div style={{ width: "1px", height: "24px", background: "rgba(212,175,55,0.2)" }} />
            <span className="font-ui" style={{ fontSize: "13px", color: "#6A5A4A" }}>
              500+ devotees sharing their experience
            </span>
          </motion.div>
        </motion.div>

        {/* ── Marquee rows ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <MarqueeRow items={testimonials1} direction="left" />
          <MarqueeRow items={testimonials2} direction="right" />
        </div>

        {/* ── Bottom fade ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "120px",
            background: "linear-gradient(to top, #0A0503 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
