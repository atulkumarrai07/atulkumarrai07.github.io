"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Programming Languages": "#00f5ff",
  "Frameworks & Libraries": "#f0abfc",
  "Cloud & Infrastructure": "#ff9900",
  "Databases & Messaging": "#4ade80",
  "Testing & Performance": "#a78bfa",
  "Build & Observability": "#f59e0b",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 32px)",
  width: "100%",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        padding: "96px 0",
        position: "relative",
        zIndex: 10,
        background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)",
      }}
    >
      <div style={container} ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "13px", marginBottom: "8px", textAlign: "center" }}
        >
          03. toolkit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "64px", color: "white" }}
        >
          Skills & Technologies
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
          {Object.entries(skills).map(([category, items], ci) => {
            const color = categoryColors[category] ?? "#00f5ff";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "border-color 0.3s",
                }}
                whileHover={{ borderColor: "rgba(255,255,255,0.15)" } as never}
              >
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "3px",
                      height: "28px",
                      borderRadius: "2px",
                      background: `linear-gradient(to bottom, ${color}, transparent)`,
                    }}
                  />
                  <h3 style={{ fontWeight: 700, color: "white", fontSize: "15px" }}>{category}</h3>
                </div>

                {/* Skill chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.1 + si * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 } as never}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 500,
                        background: `${color}14`,
                        color: color,
                        border: `1px solid ${color}30`,
                        cursor: "default",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
