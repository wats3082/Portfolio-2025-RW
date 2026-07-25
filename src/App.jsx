import { useState } from "react"
import "./App.css"

const tabs = [
  { id: "about",     label: "About" },
  { id: "resume",    label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact",   label: "Contact" },
]

function Header({ onNavigate }) {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.body.setAttribute("data-theme", next)
  }
  return (
    <header className="site-header">
      <div className="header-brand">
        <div className="brand-copy">
          <p className="eyebrow">Security Software Specialist</p>
          <h1>Russell Watson</h1>
          <p className="hero-copy">Specialized in secure software development, threat detection systems, and security automation for enterprise environments.</p>
        </div>
        <div className="header-actions">
          <button className="button button-primary" onClick={() => onNavigate("portfolio")}>View Portfolio</button>
          <button className="button button-secondary" onClick={() => onNavigate("contact")}>Contact Me</button>
          <button className="button button-ghost" onClick={toggleTheme}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>
        </div>
      </div>
    </header>
  )
}

function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {tabs.map(tab => (
          <button key={tab.id} className={"nav-tab" + (active === tab.id ? " active" : "")} onClick={() => onNavigate(tab.id)}>
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

function About() {
  return (
    <section className="section">
      <div className="section-header"><h2>Professional Summary</h2></div>
      <div className="section-body">
        <p>Security Software Specialist with deep expertise in building secure applications, automated threat detection pipelines, cloud security tooling, and enterprise-grade security platforms. I write code that protects systems — from secure API design to AI-assisted vulnerability detection and CI/CD security automation.</p>
      </div>
      <div className="skill-grid">
        <article className="skill-card"><h3>Secure Software Development</h3><p>Building security-first applications with threat modeling, input validation, and secure coding standards baked in from the start.</p></article>
        <article className="skill-card"><h3>Security Automation & CI/CD</h3><p>Automated vulnerability scanning, SAST/DAST integration, and security gates built into deployment pipelines.</p></article>
        <article className="skill-card"><h3>AI & Cloud Security Tools</h3><p>Leveraging AI and cloud-native services to build intelligent threat detection, anomaly detection, and response automation.</p></article>
        <article className="skill-card"><h3>Continuous Learning</h3><p>Staying ahead of emerging threats, new attack surfaces, and evolving security frameworks and compliance standards.</p></article>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section className="section">
      <div className="section-header"><h2>Experience & Impact</h2></div>
      <div className="timeline-list">
        <article className="timeline-card"><div className="timeline-badge">2023 — 2026</div><div><h3>Principal Security Architect</h3><p>Leading enterprise security architecture, secure-by-design platform patterns, and AI-assisted cyber defense initiatives across modern cloud environments.</p></div></article>
        <article className="timeline-card"><div className="timeline-badge">2021 — 2023</div><div><h3>Security Consultant</h3><p>Delivered security assessments, automation pipelines, and incident detection strategies while aligning stakeholders across operations, engineering, and leadership.</p></div></article>
        <article className="timeline-card"><div className="timeline-badge">2018 — 2021</div><div><h3>Cloud Architect & Delivery Lead</h3><p>Built secure full-stack applications, API integrations, and deployment workflows for hybrid and cloud-native environments.</p></div></article>
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    { title: "Open Weather App", desc: "Professional weather API dashboard built with Flask and Python.", img: "https://images.unsplash.com/photo-1504608524841-42f86b77c1e3?w=600&q=80", url: "https://github.com/wats3082/Project_API-Local-Weather" },
    { title: "AI Translator App", desc: "Real-time language translation using IBM Watson AI services.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80", url: "https://github.com/wats3082/Project_API-English_French-Translator" },
    { title: "Web Scraper Automation", desc: "Automated data collection into Excel-ready output for analytics.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", url: "https://github.com/wats3082/Project-Web-Scraper" },
    { title: "Movie Review Database", desc: "Searchable MongoDB-backed review system for dynamic content.", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80", url: "https://github.com/wats3082/Project-Movie-Reviews-Database" },
  ]
  return (
    <section className="section">
      <div className="section-header"><h2>Selected Work</h2></div>
      <div className="project-grid">
        {projects.map(p => (
          <article className="project-card" key={p.title}>
            <a href={p.url} target="_blank" rel="noreferrer">
              <div className="project-image" style={{ backgroundImage: `url('${p.img}')` }} />
              <div className="project-meta"><span>{p.title}</span><p>{p.desc}</p></div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ fullname: "", email: "", message: "" })
  const valid = form.fullname && form.email && form.message
  return (
    <section className="section">
      <div className="section-header"><h2>Get in Touch</h2></div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Contact Details</h3>
          <p><strong>Email</strong><br /><a href="mailto:russellalanwatson@gmail.com">russellalanwatson@gmail.com</a></p>
          <p><strong>Phone</strong><br /><a href="tel:+14804167911">(480) 416-7911</a></p>
          <p><strong>Location</strong><br />Arizona, USA</p>
          <div className="social-links">
            <a href="https://github.com/wats3082" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/r-wats3082" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/russell.watson.92" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="input-row">
            <label><span>Name</span><input className="form-input" type="text" placeholder="Full name" value={form.fullname} onChange={e => setForm({...form, fullname: e.target.value})} /></label>
            <label><span>Email</span><input className="form-input" type="email" placeholder="Email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></label>
          </div>
          <label><span>Message</span><textarea className="form-input" rows="5" placeholder="Your message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></label>
          <button className="form-btn" type="submit" disabled={!valid}>✈ Send Message</button>
        </form>
      </div>
    </section>
  )
}

const pages = { about: About, resume: Resume, portfolio: Portfolio, contact: Contact }

export default function App() {
  const [activePage, setActivePage] = useState("about")
  const PageComponent = pages[activePage]
  return (
    <div className="page-shell">
      <Header onNavigate={setActivePage} />
      <div className="main-container">
        <Sidebar active={activePage} onNavigate={setActivePage} />
        <div className="content-wrapper">
          <PageComponent />
        </div>
      </div>
      <footer className="site-footer">
        <p>Russell Watson — Security Software Specialist</p>
      </footer>
    </div>
  )
}
