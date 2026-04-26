"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications } from "@/lib/data";
import { FiAward, FiMapPin } from "react-icons/fi";

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 32px)",
  width: "100%",
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={container} ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "13px", marginBottom: "8px", textAlign: "center" }}
        >
          05. academia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "64px", color: "white" }}
        >
          Education
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "20px", marginBottom: "48px" }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
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
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${edu.color}, transparent)`, borderRadius: "20px 20px 0 0" }} />
              <div style={{ marginTop: "8px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 12px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    marginBottom: "16px",
                    background: `${edu.color}22`,
                    color: edu.color,
                    border: `1px solid ${edu.color}44`,
                  }}
                >
                  {edu.duration}
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "6px" }}>{edu.school}</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "16px" }}>{edu.degree}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#94a3b8" }}>
                    <FiMapPin size={11} /> {edu.location}
                  </span>
                  <span style={{ fontSize: "20px", fontWeight: 900, color: edu.color }}>{edu.gpa}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#94a3b8",
                      }}
                    >
                      <FiAward size={10} color={edu.color} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 style={{ textAlign: "center", fontSize: "18px", fontWeight: 700, marginBottom: "24px", color: "#94a3b8" }}>Certifications</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "12px 20px",
                  transition: "border-color 0.3s",
                }}
                whileHover={{ borderColor: "rgba(0,245,255,0.3)" } as never}
              >
                <FiAward size={15} color="#00f5ff" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "#94a3b8" }}>{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
