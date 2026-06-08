"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-[9990] w-12 h-12 rounded-full flex items-center justify-center btn-shimmer"
          style={{
            backgroundColor: "#D4AF37",
            boxShadow:
              "0 4px 24px rgba(212,175,55,0.5), 0 0 0 1px rgba(212,175,55,0.3)",
            border: "1px solid rgba(240,192,96,0.4)",
          }}
          aria-label="Scroll to top"
        >
          <span style={{ fontSize: "20px" }}>🪔</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
