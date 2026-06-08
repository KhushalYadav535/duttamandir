"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { label: "Darshan Timings", href: "#darshan", icon: "🕐" },
  { label: "Upcoming Events", href: "#events", icon: "📅" },
  { label: "Sacred Gallery", href: "#gallery", icon: "🖼️" },
  { label: "About the Mandir", href: "#about", icon: "🛕" },
  { label: "Contact Us", href: "#contact", icon: "📍" },
  { label: "Donate / Seva", href: "#donate", icon: "🙏" },
];

const darshanTimings = [
  { label: "Pratah Aarti", time: "5:30 AM – 7:00 AM", icon: "🌅", accent: "#FF8C00" },
  { label: "Madhyan Darshan", time: "10:00 AM – 12:00 PM", icon: "☀️", accent: "#D4AF37" },
  { label: "Sandhya Aarti", time: "6:30 PM – 8:30 PM", icon: "🪔", accent: "#C084FC" },
  { label: "Guruvar Special Puja", time: "7:00 PM (Thu)", icon: "⭐", accent: "#D4AF37" },
];

const contactItems = [
  { icon: "📍", label: "Address", text: "Shri Kshetra, E-4, Arera Colony,\nBhopal - 462016", href: null, accent: "#D4AF37" },
  { icon: "📞", label: "Phone", text: "0755 246 1796", href: "tel:07552461796", accent: "#FF8C00" },
  { icon: "✉️", label: "Email", text: "shrigurudevsewamandal@gmail.com", href: "mailto:shrigurudevsewamandal@gmail.com", accent: "#C084FC" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#020100" }}>

      {/* ── Deep atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 120% 100% at 50% 0%, #130804 0%, #060302 50%, #020100 100%)" }} />
        {/* Gold ambient orb - top center */}
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)", filter: "blur(80px)" }} />
        {/* Left purple orb */}
        <div style={{ position: "absolute", top: "30%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(192,132,252,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Right orange orb */}
        <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,140,0,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Dot grid fading down */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.1) 1px, transparent 1px)", backgroundSize: "44px 44px", mask: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 70%)", opacity: 0.45 }} />
        {/* Subtle horizontal scan lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, rgba(212,175,55,0.015) 0px, rgba(212,175,55,0.015) 1px, transparent 1px, transparent 80px)", opacity: 1 }} />
      </div>

      {/* ── Top cinematic glow bar ── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 20%, #FFD700 50%, rgba(212,175,55,0.4) 80%, transparent 100%)", boxShadow: "0 0 30px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.15)" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">

        {/* ── HERO ROW: Large brand stamp ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          {/* OM + temple name lockup */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "12px" }}>
            <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4))" }} />
            <span
              className="font-devanagari"
              style={{ fontSize: "clamp(48px, 8vw, 80px)", background: "linear-gradient(135deg, #FF8C00, #FFD700, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(212,175,55,0.5))", lineHeight: 1 }}
            >
              ॐ
            </span>
            <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.4))" }} />
          </div>

          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: "8px" }}
          >
            <span style={{ background: "linear-gradient(135deg, #FFF8E7 0%, #D4AF37 40%, #B8922A 80%, #FFF8E7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shri Dutta Mandir
            </span>
          </h2>

          <p className="font-devanagari" style={{ fontSize: "16px", color: "rgba(212,175,55,0.35)", letterSpacing: "0.12em" }}>
            श्री क्षेत्र, भोपाल · मध्यप्रदेश
          </p>
        </motion.div>

        {/* ── Four column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Col 1: About + social */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Glass about card */}
            <div
              style={{
                padding: "20px",
                borderRadius: "18px",
                background: "linear-gradient(145deg, rgba(26,13,6,0.8) 0%, rgba(12,6,2,0.9) 100%)",
                border: "1px solid rgba(212,175,55,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                marginBottom: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1.5px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)" }} />
              <p className="font-body" style={{ fontSize: "13.5px", color: "#4A3A2A", lineHeight: 1.8 }}>
                A sacred temple dedicated to Lord Dattatreya — the divine trinity of Brahma, Vishnu &amp; Mahesh — serving devotees with grace and devotion.
              </p>
            </div>

            {/* Facebook social button */}
            <a
              href="https://www.facebook.com/p/Dutta-Mandir-Bhopal-61554824762454/"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full rounded-2xl transition-all duration-300"
              style={{ padding: "12px 16px", border: "1px solid rgba(212,175,55,0.15)", background: "rgba(212,175,55,0.04)", textDecoration: "none" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(212,175,55,0.35)"; el.style.background = "rgba(212,175,55,0.08)"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(212,175,55,0.15)"; el.style.background = "rgba(212,175,55,0.04)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(96,165,250,0.06))", border: "1px solid rgba(96,165,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#60A5FA"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div>
                <p className="font-ui font-medium" style={{ fontSize: "13px", color: "#8A7060", marginBottom: "1px" }}>Follow us</p>
                <p className="font-ui" style={{ fontSize: "11px", color: "#4A3A2A" }}>Dutta Mandir Bhopal</p>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="2" strokeLinecap="round" style={{ marginLeft: "auto" }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="font-ui font-semibold uppercase mb-6 flex items-center gap-3" style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.22em" }}>
              <div style={{ height: "1px", width: "20px", background: "linear-gradient(to right, #D4AF37, transparent)" }} />
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {quickLinks.map((link, i) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollTo(link.href)}
                    className="font-ui w-full text-left rounded-xl flex items-center gap-3 group"
                    style={{ fontSize: "13.5px", color: "#3A2A1A", background: "none", border: "none", cursor: "pointer", padding: "9px 12px", transition: "all 0.2s" }}
                    whileHover={{ x: 4 }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "#D4AF37";
                      el.style.background = "rgba(212,175,55,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "#3A2A1A";
                      el.style.background = "none";
                    }}
                  >
                    <span style={{ fontSize: "13px", flexShrink: 0 }}>{link.icon}</span>
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Darshan Timings */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="font-ui font-semibold uppercase mb-6 flex items-center gap-3" style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.22em" }}>
              <div style={{ height: "1px", width: "20px", background: "linear-gradient(to right, #D4AF37, transparent)" }} />
              Darshan Timings
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {darshanTimings.map((t) => (
                <li
                  key={t.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(26,13,6,0.7), rgba(12,6,2,0.8))",
                    border: "1px solid rgba(212,175,55,0.08)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Left accent bar */}
                  <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: "2px", borderRadius: "2px", background: t.accent, boxShadow: `0 0 6px ${t.accent}` }} />
                  <span style={{ fontSize: "15px", flexShrink: 0 }}>{t.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="font-ui" style={{ fontSize: "11px", color: "#3A2A1A", marginBottom: "2px" }}>{t.label}</p>
                    <p className="font-ui font-semibold" style={{ fontSize: "12px", color: t.accent }}>{t.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="font-ui font-semibold uppercase mb-6 flex items-center gap-3" style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.22em" }}>
              <div style={{ height: "1px", width: "20px", background: "linear-gradient(to right, #D4AF37, transparent)" }} />
              Contact
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {contactItems.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(26,13,6,0.7), rgba(12,6,2,0.8))",
                    border: "1px solid rgba(212,175,55,0.08)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: `linear-gradient(135deg, ${c.accent}18, ${c.accent}06)`, border: `1px solid ${c.accent}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="font-ui uppercase" style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#2A1A0A", marginBottom: "3px" }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-ui" style={{ fontSize: "12.5px", color: "#4A3A2A", lineHeight: 1.55, textDecoration: "none", whiteSpace: "pre-line", display: "block", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = c.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#4A3A2A")}
                      >{c.text}</a>
                    ) : (
                      <p className="font-ui" style={{ fontSize: "12.5px", color: "#4A3A2A", lineHeight: 1.55, whiteSpace: "pre-line" }}>{c.text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA to donate */}
            <button
              onClick={() => scrollTo("#donate")}
              className="font-ui font-semibold w-full rounded-2xl flex items-center justify-center gap-2 mt-4 transition-all duration-300"
              style={{ padding: "12px", background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))", border: "1px solid rgba(212,175,55,0.2)", color: "#D4AF37", fontSize: "13px", cursor: "pointer", boxShadow: "inset 0 1px 0 rgba(212,175,55,0.08)" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.08))"; el.style.borderColor = "rgba(212,175,55,0.4)"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))"; el.style.borderColor = "rgba(212,175,55,0.2)"; el.style.transform = "translateY(0)"; }}
            >
              🙏 Support the Seva
            </button>
          </motion.div>
        </div>

        {/* ── Bottom divider with ornament ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2))" }} />
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(212,175,55,0.3)" }} />
            <span className="font-devanagari" style={{ fontSize: "16px", color: "rgba(212,175,55,0.25)" }}>ॐ</span>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(212,175,55,0.3)" }} />
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.2))" }} />
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p className="font-ui" style={{ fontSize: "12px", color: "#1E1208", letterSpacing: "0.04em" }}>
            © 2025 Shri Dutta Mandir Bhopal. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,175,55,0.2)" }} />
            <p className="font-ui" style={{ fontSize: "12px", color: "#1E1208" }}>Designed with</p>
            <span className="font-devanagari" style={{ fontSize: "13px", color: "rgba(212,175,55,0.4)" }}>ॐ</span>
            <p className="font-ui" style={{ fontSize: "12px", color: "#1E1208" }}>&amp; devotion</p>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,175,55,0.2)" }} />
          </div>
          <p className="font-devanagari" style={{ fontSize: "12px", color: "rgba(212,175,55,0.2)", letterSpacing: "0.08em" }}>
            ॐ श्री गुरुदेव दत्त
          </p>
        </div>
      </div>
    </footer>
  );
}
