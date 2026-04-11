import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaJs, FaPython, FaNode, FaAws,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiFastapi, SiStreamlit, SiLangchain,
  SiRedux, SiTailwindcss, SiJsonwebtokens,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa6";

const skillCategories = [
  {
    title: "Frontend",
    color: "#22d3ee",
    skills: [
      { name: "React JS", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & DB",
    color: "#34d399",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens /> },
    ],
  },
  {
    title: "AI & GenAI",
    color: "#6366f1",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "RAG / FAISS", icon: <FaBrain /> },
      { name: "Groq API", icon: <FaBrain /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#fbbf24",
    skills: [
      { name: "AWS Bedrock", icon: <FaAws /> },
      { name: "Netlify", icon: <FaAws /> },
      { name: "Vercel", icon: <FaAws /> },
      { name: "DSA", icon: <FaBrain /> },
    ],
  },
];

const Experience = () => {
  return (
    <section id="Skills" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
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
            {'<'} skills {'/>'} 
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "12px" }}>
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tech Stack
            </span>
          </h2>
          <p style={{ fontSize: "0.938rem", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px",
          }}
          className="md:!grid-cols-2"
        >
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.08 }}
              className="glass-card"
              style={{ padding: "28px" }}
            >
              {/* Category title */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: cat.color,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }}
                />
                <h3 style={{ fontSize: "0.938rem", fontWeight: 600, color: cat.color }}>{cat.title}</h3>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    whileHover={{ scale: 1.04, y: -1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 14px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "var(--text-secondary)",
                      fontSize: "0.813rem",
                      fontWeight: 500,
                      cursor: "default",
                      transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.color = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    <span style={{ fontSize: "1rem", display: "flex" }}>{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work Experience */}
        <div style={{ marginTop: "64px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, textAlign: "center", marginBottom: "32px" }}>
              Work{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Experience
              </span>
            </h3>

            <div className="glass-card" style={{ padding: "32px", maxWidth: "680px", margin: "0 auto" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                  }}
                >
                  T
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "6px" }}>
                    <h4 style={{ fontSize: "1.063rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      FullStack Engineer
                    </h4>
                    <span
                      style={{
                        fontSize: "0.69rem",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "99px",
                        background: "rgba(52,211,153,0.08)",
                        color: "var(--accent-emerald)",
                        border: "1px solid rgba(52,211,153,0.15)",
                      }}
                    >
                      Feb 2025 — Present
                    </span>
                  </div>
                  <p style={{ fontSize: "0.813rem", fontWeight: 500, color: "var(--accent-secondary)", marginBottom: "14px" }}>
                    TNP Lab Private Limited
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      "Designing and building UI and AI solution architecture",
                      "Collaborating with cross-functional teams including designers, developers, and project managers",
                      "Solving complex technical challenges and debugging issues for smooth user experiences",
                    ].map((point, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.813rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        <span style={{ marginTop: "7px", width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent-primary)", flexShrink: 0 }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;