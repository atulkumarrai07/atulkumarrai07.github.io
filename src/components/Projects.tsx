"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 32px)",
  width: "100%",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={container} ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "13px", marginBottom: "8px", textAlign: "center" }}
        >
          04. things i&apos;ve built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "64px", color: "white" }}
        >
          Projects
        </motion.h2>

        {/* Featured */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px", marginBottom: "20px" }}>
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "clamp(20px, 4vw, 28px)",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
              whileHover={{ borderColor: "rgba(0,245,255,0.3)" } as never}
            >
              {/* Hover glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at top left, rgba(0,245,255,0.06) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <FiStar size={14} color="#00f5ff" />
                    <span style={{ fontSize: "11px", color: "#00f5ff", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Featured
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", transition: "color 0.2s", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", transition: "color 0.2s", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "white", marginBottom: "12px" }}>{project.title}</h3>
                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "20px" }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ padding: "3px 10px", borderRadius: "6px", fontSize: "12px", fontFamily: "monospace", background: "#8b5cf618", color: "#a78bfa", border: "1px solid #8b5cf630" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "16px" }}>
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                padding: "20px",
                transition: "border-color 0.3s",
              }}
              whileHover={{ borderColor: "rgba(255,255,255,0.15)" } as never}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{project.title}</h3>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8",  marginLeft: "8px", transition: "color 0.2s", flexShrink: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                    <FiGithub size={16} />
                  </a>
                )}
              </div>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "14px" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748b" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
