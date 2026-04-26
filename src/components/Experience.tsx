"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";
import { FiChevronDown, FiCalendar, FiMapPin } from "react-icons/fi";

const container = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 32px)",
  width: "100%",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={container} ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "13px", marginBottom: "8px", textAlign: "center" }}
        >
          02. work history
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "64px", color: "white" }}
        >
          Experience
        </motion.h2>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #00f5ff, #8b5cf6, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                style={{ position: "relative", paddingLeft: "clamp(48px, 8vw, 64px)" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "24px",
                    top: "28px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: expanded === i ? exp.color : "#8b5cf6",
                    border: "2px solid #050508",
                    transform: "translateX(-50%)",
                    boxShadow: expanded === i ? `0 0 16px ${exp.color}80` : "none",
                    transition: "background 0.3s, box-shadow 0.3s",
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "clamp(16px, 3vw, 24px)",
                    
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 10px",
                          borderRadius: "9999px",
                          fontSize: "11px",
                          fontWeight: 700,
                          marginBottom: "10px",
                          background: `${exp.color}22`,
                          color: exp.color,
                          border: `1px solid ${exp.color}44`,
                        }}
                      >
                        {exp.logo}
                      </span>
                      <h3 style={{ fontSize: "17px", fontWeight: 700, color: "white", marginBottom: "4px" }}>{exp.role}</h3>
                      <p style={{ color: "#00f5ff", fontWeight: 600, fontSize: "14px", marginBottom: "8px" }}>{exp.company}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "12px", color: "#94a3b8" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <FiCalendar size={11} /> {exp.duration}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <FiMapPin size={11} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <FiChevronDown
                      size={20}
                      color="#94a3b8"
                      style={{
                        flexShrink: 0,
                        marginTop: "4px",
                        transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <ul style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px", paddingLeft: 0, listStyle: "none" }}>
                          {exp.points.map((pt, j) => (
                            <li key={j} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.7 }}>
                              <span style={{ marginTop: "8px", width: "4px", height: "4px", borderRadius: "50%", background: exp.color, flexShrink: 0 }} />
                              {pt}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              style={{
                                padding: "3px 10px",
                                borderRadius: "6px",
                                fontSize: "12px",
                                fontFamily: "monospace",
                                background: `${exp.color}18`,
                                color: exp.color,
                                border: `1px solid ${exp.color}30`,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
