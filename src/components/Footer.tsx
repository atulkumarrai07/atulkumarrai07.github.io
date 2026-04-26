"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/lib/data";

const navLinks = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "56px clamp(16px, 4vw, 32px) 40px",
        background: "rgba(5,5,8,0.8)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "clamp(24px, 5vw, 40px)",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #00f5ff, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AKR.
            </span>
            <p style={{ color: "#64748b", fontSize: "13px", maxWidth: "220px", lineHeight: 1.7 }}>
              Software Engineer II · Sony Interactive Entertainment · San Mateo, CA
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
              Navigation
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 32px" }}>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
              Get in Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={`mailto:${personal.email}`} style={{ fontSize: "13px", color: "#64748b", textDecoration: "none", transition: "color 0.2s",  }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
                {personal.email}
              </a>
              <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                {[
                  { icon: FiGithub, href: personal.github, label: "GitHub" },
                  { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
                  { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#64748b",
                      textDecoration: "none",
                      transition: "color 0.2s, border-color 0.2s",
                      
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#00f5ff";
                      e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "28px" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#334155" }}>
            © {new Date().getFullYear()} Atul Kumar Rai · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
