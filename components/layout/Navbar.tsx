"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Darshan Timings", href: "#darshan" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Donate", href: "#donate" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-400"
        style={{
          backgroundColor: scrolled ? "rgba(10,5,3,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212,175,55,0.2)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-display"
            style={{
              color: "#FDF8F5",
              fontSize: "22px",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}
          >
            <span style={{ color: "#FF8C00", fontSize: "20px" }}>ॐ</span>
            Dutta Mandir
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="gold-link font-ui text-sm font-medium transition-colors duration-300"
                style={{
                  color: "rgba(253,248,245,0.85)",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#darshan")}
              className="btn-shimmer font-ui text-sm font-medium px-5 py-2 rounded-full transition-all duration-300"
              style={{
                border: "1.5px solid #D4AF37",
                color: "#D4AF37",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF8C00";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#FF8C00";
                (e.currentTarget as HTMLButtonElement).style.color = "#1A0D08";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37";
                (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37";
              }}
            >
              Plan Your Visit
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-6 h-0.5 rounded-full"
                style={{ backgroundColor: "#FDF8F5" }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9100] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#0A0503" }}
          >
            {/* Close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-3xl"
              style={{ color: "#D4AF37" }}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* OM logo */}
            <div
              className="font-devanagari mb-12"
              style={{ color: "#FF8C00", fontSize: "48px", opacity: 0.4 }}
            >
              ॐ
            </div>

            {/* Nav links */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-2xl"
                  style={{ color: "#0A0503" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              onClick={() => scrollTo("#darshan")}
              className="mt-12 px-8 py-3 rounded-full font-ui font-medium"
              style={{
                border: "1.5px solid #D4AF37",
                color: "#D4AF37",
              }}
            >
              Plan Your Visit
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
