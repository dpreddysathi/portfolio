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
          <a className="nav-resume" href={LINKS.resume} download>
            résumé ↓
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
        <a href={LINKS.resume} download onClick={() => setOpen(false)}>
          résumé ↓
        </a>
      </div>
    </nav>
  );
}
