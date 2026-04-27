"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";

const githubDisplay = personal.github.replace(/^https?:\/\//, "");

const links = [
  { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "#00f5ff" },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/atulkumarrai", href: personal.linkedin, color: "#0a66c2" },
  { icon: FiGithub, label: "GitHub", value: githubDisplay, href: personal.github, color: "#f0abfc" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        padding: "96px 0",
        position: "relative",
        zIndex: 10,
        background: "radial-gradient(ellipse at 50% 100%, rgba(0,245,255,0.04) 0%, transparent 60%)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 32px)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "13px", marginBottom: "8px" }}
        >
          06. get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "24px", color: "white" }}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, marginBottom: "56px" }}
        >
          I&apos;m always open to discussing new opportunities, interesting engineering challenges, or just
          grabbing a virtual coffee. My inbox is open — feel free to reach out.
        </motion.p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginBottom: "56px" }}>
          {links.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 } as never}
              style={{
                flex: "1 1 200px",
                maxWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "24px 20px",
                textDecoration: "none",
                
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={20} color={color} />
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "white", whiteSpace: "nowrap", lineHeight: 1.4 }}>
                  {value} <FiArrowUpRight size={11} color="#64748b" style={{ display: "inline", verticalAlign: "middle" }} />
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={`mailto:${personal.email}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.04 } as never}
          whileTap={{ scale: 0.97 } as never}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 40px",
            borderRadius: "9999px",
            fontWeight: 700,
            color: "#000",
            fontSize: "16px",
            background: "linear-gradient(135deg, #00f5ff, #8b5cf6)",
            boxShadow: "0 0 40px rgba(0,245,255,0.2)",
            textDecoration: "none",
            
          }}
        >
          <FiMail size={20} />
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
