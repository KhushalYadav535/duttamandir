"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";

const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    value: "Shri Kshetra, E-4, Arera Colony, Bhopal - 462016",
    link: null,
    accent: "#D4AF37",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "0755 246 1796",
    link: "tel:07552461796",
    accent: "#FF8C00",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "shrigurudevsewamandal@gmail.com",
    link: "mailto:shrigurudevsewamandal@gmail.com",
    accent: "#D4AF37",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "duttamandirbhopal.org",
    link: "https://duttamandirbhopal.org",
    accent: "#C084FC",
  },
  {
    icon: "📘",
    label: "Facebook",
    value: "Dutta Mandir Bhopal",
    link: "https://www.facebook.com/p/Dutta-Mandir-Bhopal-61554824762454/",
    accent: "#60A5FA",
  },
];

export default function LocationContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden">
      <SectionDivider fromColor="#0A0503" toColor="#050201" />

      {/* Atmospheric bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 110% 70% at 50% 50%, #100804 0%, #050201 60%, #020100 100%)" }} />
        <div style={{ position: "absolute", top: "20%", left: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px)", backgroundSize: "48px 48px", mask: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)", opacity: 0.3 }} />
      </motion.div>

      <div className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-5 px-5 py-2 rounded-full" style={{ border: "1px solid rgba(212,175,55,0.25)", backgroundColor: "rgba(212,175,55,0.06)", backdropFilter: "blur(8px)" }}>
              <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
              <span className="font-ui uppercase" style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#D4AF37" }}>Find Us</span>
              <span style={{ color: "#D4AF37", fontSize: "10px" }}>✦</span>
            </div>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(34px, 5.5vw, 62px)", color: "#FDF8F5", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
              Location &amp;{" "}
              <span style={{ background: "linear-gradient(135deg, #FFF8E7, #D4AF37, #B8922A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Contact</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4AF37", boxShadow: "0 0 12px rgba(212,175,55,0.8)" }} />
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))" }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ── Map ── */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
              {/* Outer glow frame */}
              <div style={{ position: "absolute", inset: "-2px", borderRadius: "26px", background: "linear-gradient(135deg, rgba(212,175,55,0.5) 0%, transparent 50%, rgba(212,175,55,0.2) 100%)", padding: "1px", zIndex: 0 }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "25px", background: "#050201" }} />
              </div>

              <div className="relative z-10 rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3", boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.1)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4935059956!2d77.4221!3d23.2126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzQ1LjQiTiA3N8KwMjUnMjAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Dutta+Mandir+Bhopal+E-4+Arera+Colony"
                  width="100%" height="100%"
                  style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dutta Mandir Bhopal Location"
                />
                {/* Top gold line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)", boxShadow: "0 0 12px rgba(212,175,55,0.6)" }} />
              </div>

              {/* Corner L-brackets */}
              {[{ top: "-10px", left: "-10px", bt: true, bl: true }, { top: "-10px", right: "-10px", bt: true, br: true }, { bottom: "-10px", left: "-10px", bb: true, bl: true }, { bottom: "-10px", right: "-10px", bb: true, br: true }].map((c, i) => (
                <div key={i} style={{ position: "absolute", width: "24px", height: "24px", top: c.top, left: c.left, right: c.right, bottom: c.bottom, zIndex: 20, borderTop: c.bt ? "2px solid rgba(212,175,55,0.7)" : undefined, borderLeft: c.bl ? "2px solid rgba(212,175,55,0.7)" : undefined, borderBottom: c.bb ? "2px solid rgba(212,175,55,0.7)" : undefined, borderRight: c.br ? "2px solid rgba(212,175,55,0.7)" : undefined }} />
              ))}
            </motion.div>

            {/* ── Contact card ── */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(145deg, #1C0E07 0%, #0F0703 100%)", border: "1px solid rgba(212,175,55,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)", boxShadow: "0 0 16px rgba(212,175,55,0.6)" }} />

              <div style={{ padding: "32px" }}>
                {/* Card header */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.06))", border: "1px solid rgba(212,175,55,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", boxShadow: "0 4px 16px rgba(212,175,55,0.15)" }}>
                    🛕
                  </div>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "20px", color: "#FDF8F5", letterSpacing: "-0.01em" }}>Shri Dutta Mandir</h3>
                    <p className="font-ui" style={{ fontSize: "12px", color: "#5A4A3A", letterSpacing: "0.04em" }}>Bhopal, Madhya Pradesh</p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "linear-gradient(to right, rgba(212,175,55,0.2), transparent)", marginBottom: "24px" }} />

                {/* Contact rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                  {contactDetails.map((c, i) => (
                    <motion.div key={c.label} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "12px 14px", borderRadius: "14px", background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.07)", transition: "all 0.25s" }}
                      className="group hover:border-[rgba(212,175,55,0.2)] hover:bg-[rgba(212,175,55,0.06)]"
                    >
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `linear-gradient(135deg, ${c.accent}22, ${c.accent}08)`, border: `1px solid ${c.accent}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0, boxShadow: `0 2px 8px ${c.accent}15` }}>
                        {c.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p className="font-ui uppercase" style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#3A2A1A", marginBottom: "3px" }}>{c.label}</p>
                        {c.link ? (
                          <a href={c.link} target={c.link.startsWith("http") ? "_blank" : undefined} rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-body" style={{ fontSize: "14px", color: "#C8B89A", lineHeight: 1.4, wordBreak: "break-all", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = c.accent)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#C8B89A")}
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="font-body" style={{ fontSize: "14px", color: "#C8B89A", lineHeight: 1.4 }}>{c.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://maps.google.com/?q=Dutta+Mandir+Bhopal+E-4+Arera+Colony"
                  target="_blank" rel="noopener noreferrer"
                  className="font-ui font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ padding: "14px", background: "linear-gradient(135deg, #F5D062 0%, #D4AF37 40%, #B8922A 100%)", color: "#1A0D08", fontSize: "14px", letterSpacing: "0.05em", boxShadow: "0 4px 24px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.2)", textDecoration: "none" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "linear-gradient(135deg, #FFD700, #FF9500, #FF6B00)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 32px rgba(255,140,0,0.4)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "linear-gradient(135deg, #F5D062 0%, #D4AF37 40%, #B8922A 100%)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 24px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Get Directions
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
