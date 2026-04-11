import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaLocationDot, FaHeart, FaInstagram } from "react-icons/fa6";

const contactLinks = [
  {
    icon: <FaEnvelope size={20} />,
    label: "Email",
    value: "ujjwalkr7449@gmail.com",
    href: "mailto:ujjwalkr7449@gmail.com",
    color: "#fb7185",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    value: "ujjwalllkumar",
    href: "https://www.linkedin.com/in/ujjwalllkumar/",
    color: "#60a5fa",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "ujjwalkr7449",
    href: "https://github.com/ujjwalkr7449",
    color: "#f1f5f9",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    value: "ujjwalllkumar",
    href: "https://www.instagram.com/ujjwalllkumar/",
    color: "#e879f9",
  },
];

const Footer = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <footer id="Contact">
      {/* Glow separator */}
      <div className="glow-line" />

      <section style={{ paddingTop: "100px", paddingBottom: "40px" }}>
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
              {'<'} contact {'/>'} 
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "12px" }}>
              Let's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Connect
              </span>
            </h2>
            <p style={{ fontSize: "0.938rem", color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto" }}>
              Feel free to reach out — let's build something great together 🚀
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "12px",
              marginBottom: "48px",
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="glass-card"
                style={{ padding: "24px", textAlign: "center", cursor: "pointer" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                    background: hovered === i ? `${link.color}18` : "rgba(255,255,255,0.04)",
                    color: hovered === i ? link.color : "var(--text-secondary)",
                    border: `1px solid ${hovered === i ? `${link.color}30` : "rgba(255,255,255,0.06)"}`,
                    transition: "all 0.25s ease",
                  }}
                >
                  {link.icon}
                </div>
                <p style={{ fontSize: "0.69rem", color: "var(--text-muted)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 500 }}>
                  {link.label}
                </p>
                <p style={{ fontSize: "0.813rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "0.813rem",
              color: "var(--text-muted)",
              marginBottom: "48px",
            }}
          >
            <FaLocationDot size={13} />
            Bhopal, Madhya Pradesh, India — 462036
          </motion.div>

          {/* Bottom bar */}
          <div
            style={{
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.04)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
              Built with <FaHeart size={10} style={{ color: "#fb7185" }} /> by Ujjwal Kumar © {new Date().getFullYear()}
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {contactLinks
                .filter((l) => l.href.startsWith("http"))
                .map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--text-muted)",
                      transition: "color 0.2s, transform 0.2s",
                      display: "flex",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent-primary)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;