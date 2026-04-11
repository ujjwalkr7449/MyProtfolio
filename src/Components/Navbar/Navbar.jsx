import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        transition: "background 0.35s ease, box-shadow 0.35s ease",
        background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.04)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a href="#Home" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#fff",
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
            }}
          >
            U
          </div>
          <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Ujjwal<span style={{ color: "var(--accent-primary)" }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul
          style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
            margin: 0,
            padding: 0,
          }}
          className="md:!flex"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  display: "block",
                  padding: "8px 16px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  borderRadius: "8px",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--text-primary)";
                  e.target.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--text-secondary)";
                  e.target.style.background = "transparent";
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li style={{ marginLeft: "12px" }}>
            <a href="#Contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.813rem" }}>
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:!hidden"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "10px",
            color: "var(--text-primary)",
            cursor: "pointer",
          }}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <RiCloseLine size={20} /> : <RiMenu2Line size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:!hidden"
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                maxWidth: "1120px",
                margin: "0 auto",
                padding: "0 24px 16px",
              }}
            >
              <div
                style={{
                  background: "rgba(18, 18, 26, 0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "14px",
                  padding: "8px 0",
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setMenu(false)}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      fontSize: "0.938rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "var(--text-primary)";
                      e.target.style.background = "rgba(255,255,255,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "var(--text-secondary)";
                      e.target.style.background = "transparent";
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div style={{ padding: "8px 20px 12px" }}>
                  <a
                    href="#Contact"
                    className="btn-primary"
                    onClick={() => setMenu(false)}
                    style={{ display: "flex", justifyContent: "center", width: "100%", padding: "10px" }}
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;