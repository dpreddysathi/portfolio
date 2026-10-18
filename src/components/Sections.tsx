import {
  ACHIEVEMENTS,
  EXPERIENCE,
  LINKS,
  PROJECTS,
  STACK,
  STATS,
} from "../data";
import { useCountUp } from "../hooks";

export function SectionLabel({ text }: { text: string }) {
  return <div className="sec-label">{"// "}{text}</div>;
}

export function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="hero-badge reveal">
        <span className="pulse-dot" />
        Open to opportunities
      </div>
      <h1 className="hero-name reveal">
        Sathi Durga Prasad
        <br />
        <span className="hl">Reddy</span>
      </h1>
      <p className="hero-role reveal">
        <span className="prompt">$</span> Java Backend Developer — Spring Boot ·
        Microservices · Kafka
      </p>
      <p className="hero-summary reveal">
        Backend engineer with <strong>2 years at TCS Digital</strong> building
        banking-domain systems — payment engines processing{" "}
        <strong>100,000+ transactions per run</strong> and document platforms
        serving <strong>1M+ documents</strong>.
      </p>
      <div className="hero-ctas reveal">
        <a className="btn btn-primary" href="#projects">
          View my work →
        </a>
        <a
          className="btn btn-ghost"
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
        >
          résumé ↗
        </a>
      </div>
      <div className="stats-band reveal">
        {STATS.map((s) => (
          <StatCell key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </header>
  );
}

function StatCell({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const decimals = Number.isInteger(value) ? 0 : 1;
  const { ref, display } = useCountUp(value, decimals);
  return (
    <div className="stat">
      <div className="stat-num">
        <span ref={ref}>{display}</span>
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section className="block wrap" id="about">
      <SectionLabel text="who i am" />
      <h2 className="sec-title reveal">About Me</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm a <strong>Java backend developer</strong> who builds systems that
            move real money and real documents. At TCS Digital I work in the
            banking domain — a bulk payment orchestration engine for{" "}
            <strong>Bank of Montreal</strong> and a document management platform
            for <strong>EuroClear</strong>.
          </p>
          <p>
            My sweet spot is <strong>Spring Boot microservices</strong>: batch
            processing, event-driven workflows on Kafka, and clean REST APIs —
            with Docker, Kubernetes and GitHub Actions taking it all to
            production. Off the clock, I'm usually on LeetCode —{" "}
            <strong>300+ problems</strong> and counting.
          </p>
          <p>
            I also build full-stack side projects end to end — three of them are
            live below, each with its own Spring Boot backend.
          </p>
          <p className="intern-note">
            $ internships — PTU web dev intern (2023) · French Institute of
            Pondicherry web dev intern (2022)
          </p>
        </div>
        <div className="info-card reveal">
          <div className="info-row">
            <span className="info-k">location</span>
            <span className="info-v">Chennai, India</span>
          </div>
          <div className="info-row">
            <span className="info-k">education</span>
            <span className="info-v">
              B.Tech CSE, Puducherry Technological University (2020–2024) · CGPA 8.7
            </span>
          </div>
          <div className="info-row">
            <span className="info-k">email</span>
            <span className="info-v">
              <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </span>
          </div>
          <div className="info-row">
            <span className="info-k">status</span>
            <span className="info-v">Open to opportunities · relocate anywhere in India · remote-friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section className="block wrap" id="stack">
      <SectionLabel text="what i use" />
      <h2 className="sec-title reveal">Tech Stack</h2>
      <div className="stack-grid">
        {STACK.map((g) => (
          <div className="stack-card reveal" key={g.title}>
            <h3>{g.title}</h3>
            <div className="tag-row">
              {g.items.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="block wrap" id="experience">
      <SectionLabel text="where i've worked" />
      <h2 className="sec-title reveal">Work Experience</h2>
      {EXPERIENCE.map((e) => (
        <div className="exp-item reveal" key={e.company}>
          <div className="exp-head">
            <h3 className="exp-role">{e.role}</h3>
            <span className="exp-period">{e.period}</span>
          </div>
          <p className="exp-company">{e.company}</p>
          {e.projects.map((p) => (
            <div key={p.name}>
              <p className="exp-project">
                {p.name}
                <span className="exp-client">— {p.client}</span>
              </p>
              <ul className="bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="tag-row" style={{ margin: "14px 0 6px" }}>
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export function Projects() {
  return (
    <section className="block wrap" id="projects">
      <SectionLabel text="what i've built" />
      <h2 className="sec-title reveal">Featured Projects</h2>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div className="project-card reveal" key={p.name}>
            <div className="project-top">
              <span className="project-icon">{p.icon}</span>
              <div className="project-links">
                {p.demo && (
                  <a
                    className="icon-link"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    title="Live demo"
                  >
                    ↗
                  </a>
                )}
                {p.github && (
                  <a
                    className="icon-link"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    title="View on GitHub"
                  >
                    &lt;/&gt;
                  </a>
                )}
              </div>
            </div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="block wrap" id="achievements">
      <SectionLabel text="recognition" />
      <h2 className="sec-title reveal">Achievements & Highlights</h2>
      <div className="ach-grid">
        {ACHIEVEMENTS.map((a) => (
          <div className="ach-card reveal" key={a.title}>
            <div className="ach-emoji">{a.emoji}</div>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <span className="ach-org">{a.org}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="block wrap" id="contact">
      <SectionLabel text="let's talk" />
      <div className="contact-box reveal">
        <h2>Get In Touch</h2>
        <p>
          I'm always open to new opportunities, collaborations, or just a good
          tech conversation. Feel free to reach out through any of the channels
          below.
        </p>
        <div className="contact-links">
          <a className="contact-btn" href={`mailto:${LINKS.email}`}>
            ✉ {LINKS.email}
          </a>
          <a className="contact-btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            in LinkedIn
          </a>
          <a className="contact-btn" href={LINKS.github} target="_blank" rel="noreferrer">
            &lt;/&gt; GitHub
          </a>
          <a className="contact-btn" href={LINKS.leetcode} target="_blank" rel="noreferrer">
            🔥 LeetCode
          </a>
        </div>
        <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          © 2026 Sathi Durga Prasad Reddy
        </span>
        <span>
          built with <span className="heart">♥</span> · react + vite ·{" "}
          <a href={LINKS.oldPortfolio} target="_blank" rel="noreferrer">
            v1 portfolio
          </a>
        </span>
      </div>
    </footer>
  );
}
