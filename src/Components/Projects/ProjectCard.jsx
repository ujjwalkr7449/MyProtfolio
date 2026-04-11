import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, techStack, features, githubLink, liveLink, accentColor, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-card"
      style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}
    >
      {/* Top accent bar */}
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

      <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Icon + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.15rem",
              background: `${accentColor}12`,
              border: `1px solid ${accentColor}20`,
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
          <h3 style={{ fontSize: "1.063rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ fontSize: "0.813rem", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "16px" }}>
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
            {features.map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    marginTop: "6px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: accentColor,
                    flexShrink: 0,
                  }}
                />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Push the rest to bottom */}
        <div style={{ marginTop: "auto" }}>
          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
            {techStack.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>

          {/* Buttons row — ALWAYS both GitHub and Live Demo */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon btn-github"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <FaGithub size={15} />
              GitHub
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon btn-live"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;