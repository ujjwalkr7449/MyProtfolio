import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Virtual Herbal Garden",
    description: "Interactive plant information platform with organized data, 3D models with zoom/rotation, home remedies, and chatbot-based search.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "3D model viewing with zoom & rotation",
      "Chatbot-based intelligent plant search",
      "User authentication & plant notes",
    ],
    githubLink: "https://github.com/ujjwalkr7449",
    liveLink: "https://github.com/ujjwalkr7449",
    accentColor: "#34d399",
    icon: "🌿",
  },
  {
    title: "AI PDF Chatbot (RAG)",
    description: "AI-powered PDF chatbot using RAG, leveraging vector embeddings and semantic search for context-aware responses.",
    techStack: ["FastAPI", "Groq API", "FAISS", "LangChain"],
    features: [
      "RAG-based document Q&A",
      "Vector embeddings with FAISS",
      "Real-time streaming responses",
    ],
    githubLink: "https://github.com/ujjwalkr7449",
    liveLink: "https://github.com/ujjwalkr7449",
    accentColor: "#6366f1",
    icon: "🤖",
  },
  {
    title: "Teacher Resource Allocation",
    description: "System where teachers raise class requests (tokens) managed via admin panel with real-time dashboard updates.",
    techStack: ["FastAPI", "React JS", "MySQL", "JWT"],
    features: [
      "Token-based class request system",
      "Admin panel for resource management",
      "JWT-based secure authentication",
    ],
    githubLink: "https://github.com/ujjwalkr7449",
    liveLink: "https://github.com/ujjwalkr7449",
    accentColor: "#22d3ee",
    icon: "📚",
  },
  {
    title: "English Assistance Chatbot",
    description: "AI chatbot for English improvement — grammar correction, sentence refinement, and conversational assistance in real time.",
    techStack: ["Streamlit", "Groq API", "NLP", "LangChain"],
    features: [
      "Grammar correction in real-time",
      "Sentence refinement suggestions",
      "LLM-powered conversational AI",
    ],
    githubLink: "https://github.com/ujjwalkr7449",
    liveLink: "https://ai-english-maam.streamlit.app/",
    accentColor: "#fbbf24",
    icon: "💬",
  },
];

const Projects = () => {
  return (
    <section id="Projects" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
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
            {'<'} projects {'/>'} 
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "12px" }}>
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p style={{ fontSize: "0.938rem", color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto" }}>
            Real-world applications built with modern tech stacks
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
          className="md:!grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://github.com/ujjwalkr7449"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;