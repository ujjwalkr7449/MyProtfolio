import React, { useState, useEffect, useMemo } from "react";

const TextChange = () => {
  const texts = useMemo(() => [
    "Full Stack Developer",
    "Generative AI Engineer",
    "Agentic AI Developer",
    "Frontend Specialist",
    "Backend Architect",
  ], []);

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = texts[index];
    let timeout;

    if (!isDeleting && charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <span className="streaming-cursor" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {currentText}
    </span>
  );
};

export default TextChange;