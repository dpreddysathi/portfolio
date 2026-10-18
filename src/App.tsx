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

export default function App() {
  const rootRef = useRevealRoot();
  return (
    <div ref={rootRef}>
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
    </div>
  );
}
