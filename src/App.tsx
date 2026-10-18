import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import {
  About,
  Achievements,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  Stack,
} from "./components/Sections";
import { useRevealRoot } from "./hooks";
import "./styles.css";

const ORB = 500; // cursor-glow diameter in px (matches .cursor-glow)

/** Soft radial glow that follows the mouse with slight lag.
 *  Desktop only, disabled with prefers-reduced-motion, never intercepts clicks. */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let x = -ORB,
      y = -ORB,
      tx = -ORB,
      ty = -ORB,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - ORB / 2}px, ${y - ORB / 2}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}

function BackTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#top"
      className={`back-top${show ? " show" : ""}`}
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}

export default function App() {
  const rootRef = useRevealRoot();
  return (
    <div ref={rootRef}>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackTop />
    </div>
  );
}
