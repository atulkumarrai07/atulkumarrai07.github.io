"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const roles = [
  "Software Engineer II @ PlayStation",
  "Ex-Amazon Web Services",
  "Distributed Systems · GraphQL · Kubernetes",
  "7+ Years · 3 Top-tier Companies",
  "CMU Grad · 3.93 GPA",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(72px, 12vh, 100px) clamp(16px, 4vw, 32px) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div style={{ position: "fixed", top: "20%", left: "10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "20%", right: "10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── Split layout ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(0px, 2vw, 32px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(32px, 5vw, 60px)",
        }}
      >
        {/* LEFT — text */}
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "13px",
              color: "#94a3b8",
              width: "fit-content",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
            Open to senior / staff roles
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ margin: 0, lineHeight: 1.05 }}
          >
            <span style={{ display: "block", color: "white", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Hi, I&apos;m
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, #00f5ff 0%, #8b5cf6 50%, #f0abfc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Atul Kumar Rai
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ fontFamily: "monospace", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", color: "#94a3b8", minHeight: "40px", display: "flex", alignItems: "center", gap: "2px" }}
          >
            <span>{displayed}</span>
            <span style={{ color: "#00f5ff", animation: "blink 1s step-end infinite" }}>|</span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ padding: "14px 28px", borderRadius: "9999px", fontWeight: 700, fontSize: "14px", color: "#000", background: "linear-gradient(135deg, #00f5ff, #8b5cf6)", textDecoration: "none", boxShadow: "0 0 30px rgba(0,245,255,0.2)",  transition: "transform 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "14px 28px", borderRadius: "9999px", fontWeight: 700, fontSize: "14px", color: "white", background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none",  transition: "border-color 0.2s, color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.color = "#00f5ff"; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ display: "flex", gap: "12px" }}
          >
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
                style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", textDecoration: "none",  transition: "color 0.2s, border-color 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#00f5ff"; e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Profile photo with animated glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.0, ease: "easeOut" }}
          className="hero-photo"
          style={{
            flex: "0 0 auto",
            position: "relative",
            width: "340px",
            height: "340px",
          }}
        >
          {/* Animated rotating gradient border */}
          <div
            style={{
              position: "absolute",
              inset: "-3px",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #00f5ff, #8b5cf6, #f0abfc, #00f5ff)",
              animation: "spin 4s linear infinite",
            }}
          />
          {/* Dark inner ring to create border effect */}
          <div
            style={{
              position: "absolute",
              inset: "3px",
              borderRadius: "50%",
              background: "#050508",
            }}
          />
          {/* Photo */}
          <div
            style={{
              position: "absolute",
              inset: "6px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/akr_1.jpg"
              alt="Atul Kumar Rai"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="340px"
              priority
            />
          </div>
          {/* Glow behind */}
          <div
            style={{
              position: "absolute",
              inset: "-40px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,245,255,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
              filter: "blur(30px)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#475569", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
        >
          <span>scroll</span>
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .hero-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
}
