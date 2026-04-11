import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaLocationDot, FaInstagram } from "react-icons/fa6";
import TextChange from "../TextChange";

const socialLinks = [
  { icon: <FaGithub size={18} />, href: "https://github.com/ujjwalkr7449", label: "GitHub" },
  { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/ujjwalllkumar/", label: "LinkedIn" },
  { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/ujjwalllkumar/", label: "Instagram" },
  { icon: <FaEnvelope size={18} />, href: "mailto:ujjwalkr7449@gmail.com", label: "Email" },
];

const Home = () => {
  return (
    <section
      id="Home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <div className="gradient-bg" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          right: "20%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          opacity: 0.15,
          filter: "blur(60px)",
          background: "var(--accent-primary)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(50px)",
          background: "var(--accent-cyan)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: "48px",
          }}
          className="lg:!flex-row lg:!gap-16"
        >
          {/* LEFT */}
          <div style={{ flex: 1 }}>
            {/* Status */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "99px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  background: "rgba(52,211,153,0.08)",
                  color: "var(--accent-emerald)",
                  border: "1px solid rgba(52,211,153,0.15)",
                  marginBottom: "20px",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-emerald)" }} className="animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p style={{ fontSize: "0.938rem", color: "var(--text-muted)", marginBottom: "8px" }}>Hey there 👋, I'm</p>
              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "16px" }}>
                Ujjwal{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Kumar
                </span>
              </h1>
            </motion.div>

            {/* Streaming role */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", fontWeight: 500, color: "var(--accent-secondary)", minHeight: "40px", marginBottom: "16px" }}
            >
              <TextChange />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "520px", marginBottom: "12px" }}
            >
              I build scalable web applications and AI-powered solutions using React, FastAPI, LangChain, and modern web technologies. Currently working as a FullStack Engineer at TNP Lab.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.813rem", color: "var(--text-muted)", marginBottom: "28px" }}
            >
              <FaLocationDot size={13} />
              Bhopal, MP, India
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}
            >
              <a href="#Contact" className="btn-primary">
                <FaEnvelope size={15} />
                Hire Me
              </a>
              <a href="#Projects" className="btn-outline">
                View Projects
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: "flex", gap: "10px" }}
            >
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "var(--text-secondary)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.12)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
                    e.currentTarget.style.color = "var(--accent-secondary)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ flexShrink: 0, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                filter: "blur(50px)",
                opacity: 0.2,
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                pointerEvents: "none",
              }}
            />
            <div className="gradient-border" style={{ borderRadius: "50%" }}>
              <img
                src="/src/assets/Uk.jpg"
                alt="Ujjwal Kumar"
                style={{
                  width: "clamp(200px, 25vw, 300px)",
                  height: "clamp(200px, 25vw, 300px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid var(--bg-primary)",
                }}
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                padding: "5px 10px",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--accent-emerald)",
                background: "rgba(10,10,15,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              🚀 AI/ML
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "-4px",
                padding: "5px 10px",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--accent-cyan)",
                background: "rgba(10,10,15,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              ⚡ Full Stack
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;