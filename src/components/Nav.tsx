import { useState } from "react";
import { LINKS, NAV_ITEMS } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">&gt;_</span>
          <span>
            dp<span className="brand-em">.dev</span>
          </span>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              <span className="brand-em">~/</span>
              {n.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
          >
            résumé ↗
          </a>
          <a className="nav-hire" href={LINKS.hireMe}>
            Hire Me
          </a>
        </div>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {NAV_ITEMS.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            <span className="brand-em">~/</span>
            {n.label}
          </a>
        ))}
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          résumé ↗
        </a>
        <a
          href={LINKS.hireMe}
          className="mobile-hire"
          onClick={() => setOpen(false)}
        >
          Hire Me →
        </a>
      </div>
    </nav>
  );
}
