import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills = {
  "Generative AI": [
    "RAG Architecture",
    "LangChain",
    "Prompt Engineering",
    "LLM Evaluation",
    "Gemini API",
    "Hugging Face",
  ],
  Backend: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "MongoDB"],
  Frontend: ["React", "Tailwind CSS", "Redux Toolkit", "Vite", "Responsive UI"],
  DevOps: ["GitHub Actions", "Docker", "Render", "Vercel", "CI/CD", "Linux"],
};

const projects = [
  {
    title: "AI Teacher Allocation System (RAG-Based)",
    description:
      "An intelligent allocation platform that processes institutional PDFs and uses a retrieval-augmented pipeline to map teachers to subjects and workloads with context-aware recommendations.",
    tech: ["Python", "RAG", "LangChain", "Vector DB", "React"],
    live: "https://render.com",
    github: "https://github.com/ujjwalkr7449/your-repo",
    features: ["PDF upload + processing", "AI-based summarization", "RAG pipeline"],
  },
  {
    title: "Aushadi Veda – AI Ayurveda Platform",
    description:
      "A healthcare-focused AI platform delivering Ayurveda guidance through conversational AI, plant intelligence search, and practical home remedy workflows.",
    tech: ["React", "Node.js", "Gemini API", "MongoDB"],
    live: "https://vercel.com",
    github: "https://github.com/ujjwalkr7449/your-repo",
    features: ["AI chatbot", "Plant knowledge system", "Gemini API integration"],
  },
  {
    title: "AI Gym Coach Chatbot",
    description:
      "A personalized fitness assistant that generates adaptive workout guidance and responds to goals, constraints, and progression needs through AI chat.",
    tech: ["Python", "Streamlit", "LLM API", "Prompt Engineering"],
    live: "https://streamlit.io",
    github: "https://github.com/ujjwalkr7449/your-repo",
    features: ["Personalized workout plans", "AI assistant"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern recruiter-focused personal brand site built for AI and software company hiring pipelines with structured projects, timeline, and contact workflow.",
    tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
    live: "https://vercel.com",
    github: "https://github.com/ujjwalkr7449/MyProtfolio",
    features: ["Responsive design", "Projects showcase", "Contact form (EmailJS)"],
  },
];

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Yuga Yatra Retail (OPC) Pvt. Ltd.",
    period: "June 2025 – August 2025",
    points: [
      "Designed and implemented reusable UI components for customer-facing workflows.",
      "Debugged and resolved performance and usability issues to improve product quality.",
      "Collaborated with the team to ship stable releases on timeline.",
    ],
  },
  {
    role: "Generative AI Engineer (Projects)",
    company: "Independent Builder",
    period: "2024 – Present",
    points: [
      "Built multi-domain AI applications for education, healthcare, and fitness use-cases.",
      "Implemented retrieval pipelines, summarization chains, and production-ready UI layers.",
      "Focused on practical AI adoption for real users and recruiter-friendly delivery.",
    ],
  },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDark(saved === "dark");
      return;
    }
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const theme = useMemo(
    () =>
      isDark
        ? "bg-slate-950 text-slate-100"
        : "bg-slate-50 text-slate-900",
    [isDark],
  );

  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const payload = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Unable to send");

      setFormStatus("Message sent successfully. I will get back to you soon.");
      event.target.reset();
    } catch {
      setFormStatus("Message failed to send. Please verify EmailJS keys in .env.");
    }
  };

  return (
    <div className={`${theme} min-h-screen transition-colors duration-300`}>
      <header className={`sticky top-0 z-50 border-b ${isDark ? "border-slate-800 bg-slate-950/90" : "border-slate-200 bg-white/90"} backdrop-blur`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight">Ujjwal Kumar</a>
          <div className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cyan-500 transition-colors">{link.label}</a>
            ))}
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setIsDark((prev) => !prev)}
            className={`rounded-full p-2 ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 md:px-8">
        <section id="home" className="grid min-h-[85vh] items-center gap-10 py-20 md:grid-cols-2 reveal">
          <div>
            <p className="mb-3 text-cyan-500">Generative AI Engineer</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Building production-grade AI products for real business impact.</h1>
            <p className={`mt-6 max-w-xl text-base md:text-lg ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              I design and ship GenAI systems (RAG, chat assistants, AI workflows) with robust full-stack engineering. I am actively targeting high-impact AI and software opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">Hire Me</a>
              <a href="/resume.pdf" download className={`rounded-full border px-6 py-3 font-semibold ${isDark ? "border-slate-600 hover:bg-slate-800" : "border-slate-300 hover:bg-slate-200"}`}>
                Download Resume
              </a>
            </div>
            <div className="mt-8 flex gap-5 text-2xl">
              <a href="https://github.com/ujjwalkr7449" target="_blank" rel="noreferrer" className="hover:text-cyan-500"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ujjval-kumar-309074247" target="_blank" rel="noreferrer" className="hover:text-cyan-500"><FaLinkedin /></a>
            </div>
          </div>
          <div className={`rounded-3xl border p-8 ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
            <h2 className="text-xl font-semibold">Why companies hire me</h2>
            <ul className={`mt-4 space-y-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              <li>• AI-first thinking with software engineering discipline.</li>
              <li>• Able to bridge model experimentation and production deployment.</li>
              <li>• Strong end-to-end ownership: UI, APIs, data flows, and deployment.</li>
            </ul>
          </div>
        </section>

        <section id="about" className="py-16 reveal">
          <h2 className="section-title">About</h2>
          <p className={`mt-6 max-w-4xl leading-8 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            I am Ujjwal Kumar, a GenAI-focused engineer passionate about building practical AI systems for education, healthcare, and productivity use-cases. My strengths include Retrieval-Augmented Generation (RAG), API/backend development, and modern frontend architecture. I focus on shipping clean, scalable, and recruiter-ready products that solve real-world problems.
          </p>
        </section>

        <section id="skills" className="py-16 reveal">
          <h2 className="section-title">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <article key={category} className={`rounded-2xl border p-6 ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className={`rounded-full px-3 py-1 text-sm ${isDark ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-800"}`}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16 reveal">
          <h2 className="section-title">🚀 Live Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${isDark ? "border-slate-800 bg-slate-900 hover:shadow-cyan-950/40" : "border-slate-200 bg-white hover:shadow-slate-300"}`}>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className={`rounded-full px-3 py-1 text-xs font-medium ${isDark ? "bg-slate-800 text-cyan-200" : "bg-cyan-50 text-cyan-700"}`}>{t}</span>
                  ))}
                </div>
                <ul className={`mt-4 space-y-1 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 text-sm">
                  <a className="font-semibold text-cyan-500 hover:underline" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                  <a className="font-semibold text-cyan-500 hover:underline" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 reveal">
          <h2 className="section-title">Experience</h2>
          <div className="relative mt-8 border-l border-cyan-500/40 pl-6">
            {experiences.map((item) => (
              <article key={item.role} className="relative mb-10">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-cyan-500" />
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-cyan-500">{item.company}</p>
                <p className={`mb-3 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.period}</p>
                <ul className={`space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 reveal">
          <h2 className="section-title">Contact</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className={`rounded-2xl border p-6 ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
              <h3 className="text-xl font-semibold">Let's build AI that matters.</h3>
              <ul className={`mt-4 space-y-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li className="flex items-center gap-2"><HiOutlineMail /> ujjwalkr7449@gmail.com</li>
                <li className="flex items-center gap-2"><HiOutlineLocationMarker /> Bhopal, Madhya Pradesh, India</li>
                <li className="flex items-center gap-2"><FaLinkedin /> linkedin.com/in/ujjval-kumar-309074247</li>
              </ul>
            </div>
            <form onSubmit={sendEmail} className={`rounded-2xl border p-6 ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
              <label className="mb-2 block text-sm font-medium" htmlFor="name">Name</label>
              <input className={`mb-4 w-full rounded-lg border px-4 py-2 outline-none ${isDark ? "border-slate-700 bg-slate-950" : "border-slate-300 bg-slate-50"}`} id="name" name="name" required />
              <label className="mb-2 block text-sm font-medium" htmlFor="email">Email</label>
              <input className={`mb-4 w-full rounded-lg border px-4 py-2 outline-none ${isDark ? "border-slate-700 bg-slate-950" : "border-slate-300 bg-slate-50"}`} id="email" type="email" name="email" required />
              <label className="mb-2 block text-sm font-medium" htmlFor="message">Message</label>
              <textarea className={`mb-4 min-h-32 w-full rounded-lg border px-4 py-2 outline-none ${isDark ? "border-slate-700 bg-slate-950" : "border-slate-300 bg-slate-50"}`} id="message" name="message" required />
              <button type="submit" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">Send Message</button>
              {formStatus && <p className="mt-3 text-sm text-cyan-500">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
