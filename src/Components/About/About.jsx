import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaGraduationCap } from "react-icons/fa6";

const highlights = [
  {
    icon: <FaCode size={22} />,
    title: "Frontend Developer",
    desc: "Building modern, responsive interfaces with React JS, Redux Toolkit, React Hook Form, and Tailwind CSS.",
    color: "#22d3ee",
  },
  {
    icon: <FaServer size={22} />,
    title: "Backend Architect",
    desc: "Scalable APIs with FastAPI, REST APIs, JWT Auth, MySQL, and MongoDB. Clean architecture focused.",
    color: "#34d399",
  },
  {
    icon: <FaBrain size={22} />,
    title: "AI & GenAI Engineer",
    desc: "AI-powered apps using RAG, LangChain, LlamaIndex, Groq APIs, Vector DB, FAISS, and Transformers.",
    color: "#6366f1",
  },
  {
    icon: <FaGraduationCap size={22} />,
    title: "Education",
    desc: "B.Tech CSE from SISTEC, Bhopal (6.96 CGPA, 2022–2026). Strong in DSA and system design.",
    color: "#fbbf24",
  },
];

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "1+", label: "Year Experience" },
  { value: "6.96", label: "CGPA" },
  { value: "10+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="About" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: "99px",
              fontSize: "0.75rem",
              fontWeight: 500,
              background: "rgba(99,102,241,0.08)",
              color: "var(--accent-secondary)",
              border: "1px solid rgba(99,102,241,0.15)",
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: "16px",
            }}
          >
            {'<'} about me {'/>'} 
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "12px" }}>
            Turning Ideas into{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Reality
            </span>
          </h2>
          <p style={{ fontSize: "0.938rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            FullStack Engineer at TNP Lab (Feb 2025 – Present), designing UI and AI solution architectures while collaborating with cross-functional teams.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "16px",
            marginBottom: "48px",
          }}
          className="sm:!grid-cols-2"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card"
              style={{ padding: "28px", display: "flex", gap: "16px" }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${item.color}12`,
                  color: item.color,
                  border: `1px solid ${item.color}20`,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "6px", color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.813rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
          }}
          className="md:!grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;