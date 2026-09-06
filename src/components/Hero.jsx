import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Data Science M.Sc. Student",
  "Econometrician",
  "Machine Learning Enthusiast",
  "Time Series Forecaster",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const heroRef = useRef(null);

  // Typewriter effect cycling through ROLES.
  useEffect(() => {
    const current = ROLES[roleIndex % ROLES.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        TYPE_SPEED
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        DELETE_SPEED
      );
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, TYPE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  // Cursor-follow spotlight glow.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-spotlight" />

      <span className="eyebrow">
        <span className="eyebrow-dot" />
        Available for working student &amp; research opportunities
      </span>

      <h1>Alexander Unger</h1>

      <div className="hero-role" aria-live="polite">
        {text}
        <span className="typed-cursor">&nbsp;</span>
      </div>

      <p className="hero-text">
        Building data-driven models for real-world decision making — with a
        focus on econometrics, forecasting, and applied machine learning in
        economic and business contexts.
      </p>

      <div className="hero-cta">
        <a
          className="btn btn-primary"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Projects
        </a>
        <a
          className="btn btn-ghost"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in Touch
        </a>
      </div>

      <div className="scroll-cue">
        <div className="scroll-cue-mouse" />
        Scroll
      </div>
    </section>
  );
}

export default Hero;
