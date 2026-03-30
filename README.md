# Ujjwal Kumar - Generative AI Engineer Portfolio

Modern personal portfolio built with **React + Vite + Tailwind CSS** to target AI and software company roles.

## Features

- Recruiter-friendly, minimal one-page layout
- Sticky navigation with smooth scrolling
- Dark/light theme toggle (saved in localStorage)
- Hero, About, Skills, Projects, Experience, and Contact sections
- Project cards with hover effects and links
- Contact form integrated with EmailJS REST API
- SEO meta tags for discoverability
- Fully responsive (mobile + desktop)

## Tech Stack

- React + Vite
- Tailwind CSS
- EmailJS (REST API integration)

## Setup

```bash
npm install
npm run dev
```

## EmailJS environment variables

Create a `.env` file based on `.env.example`:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then configure your EmailJS template params: `from_name`, `from_email`, `message`.
