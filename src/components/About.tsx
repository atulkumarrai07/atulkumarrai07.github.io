"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";
import { FiMapPin } from "react-icons/fi";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "~$500K", label: "Annual Savings at Sony" },
  { value: "3", label: "Top-tier Companies" },
  { value: "3.93", label: "CMU GPA" },
];

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 clamp(16px, 4vw, 32px)",
  width: "100%",
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "96px 0", position: "relative", zIndex: 10 }}>
      <div style={container} ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "13px", marginBottom: "8px", textAlign: "center" }}
        >
          01. about me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "72px", color: "white" }}
        >
          Who I Am
        </motion.h2>

        {/* Photo + Bio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "64px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", width: "clamp(220px, 60vw, 300px)", height: "clamp(220px, 60vw, 300px)" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  padding: "2px",
                  background: "linear-gradient(135deg, #00f5ff, #8b5cf6, #f0abfc)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    background: "#050508",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/akr_2.jpg"
                    alt="Atul Kumar Rai"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                  />
                </div>
              </div>
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "32px",
                  background: "radial-gradient(ellipse, rgba(0,245,255,0.12) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94a3b8", fontSize: "13px" }}>
              <FiMapPin size={13} color="#00f5ff" />
              {personal.location}
            </div>
            <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8 }}>
              Software engineer with <strong style={{ color: "white" }}>7+ years</strong> designing and operating{" "}
              <strong style={{ color: "white" }}>distributed systems</strong> across PlayStation, AWS, and enterprise environments. Currently at{" "}
              <strong style={{ color: "#00f5ff" }}>Sony Interactive Entertainment</strong>, leading session management, GraphQL federation services, and platform-wide performance testing for PlayStation Network.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8 }}>
              Previously built event-driven microservices and anti-entropy systems at{" "}
              <strong style={{ color: "#ff9900" }}>Amazon Web Services</strong>. Earned my M.S. from{" "}
              <strong style={{ color: "#c41230" }}>Carnegie Mellon University</strong> (3.93 GPA).
            </p>
            <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8 }}>
              Focused on systems design, service reliability, observability, and performance optimization. Active mentor through AnitaB.org&apos;s GMX program.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
              {["Systems Design", "GraphQL Federation", "Service Reliability", "Observability", "Performance Optimization", "Mentorship"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 500,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "16px" }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #00f5ff, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "6px",
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: "13px", color: "#94a3b8" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
