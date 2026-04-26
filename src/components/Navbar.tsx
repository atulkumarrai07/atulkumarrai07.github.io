"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Inner container — grid with 3 columns so links are truly centered */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 32px)",
          height: "64px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Logo — left */}
        <motion.a
          href="#hero"
          onClick={() => handleClick("#hero")}
          whileHover={{ scale: 1.05 }}
          style={{
            fontWeight: 800,
            fontSize: "18px",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            
            justifySelf: "start",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #00f5ff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AKR
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>.</span>
        </motion.a>

        {/* Nav links — truly centered */}
        <ul
          style={{
            display: "none",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "32px",
          }}
          className="md-nav-links"
        >
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#94a3b8",
                  
                  padding: "4px 0",
                  position: "relative",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side — resume + hamburger */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "12px" }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            style={{
              display: "none",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 600,
              border: "1.5px solid #00f5ff",
              color: "#00f5ff",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
              
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00f5ff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#00f5ff";
            }}
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "white",
                  borderRadius: "2px",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform:
                    open
                      ? i === 0
                        ? "rotate(45deg) translateY(7px)"
                        : i === 2
                        ? "rotate(-45deg) translateY(-7px)"
                        : "scaleX(0)"
                      : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(5,5,8,0.95)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <ul style={{ padding: "16px clamp(16px, 4vw, 32px) 24px", display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", margin: 0 }}>
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleClick(l.href)}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "15px",
                      color: "#94a3b8",
                      
                      padding: "12px 0",
                      transition: "color 0.2s",
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md-nav-links { display: flex !important; }
          .resume-btn { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
