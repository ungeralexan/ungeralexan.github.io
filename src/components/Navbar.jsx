import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "current", label: "Current Work" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <span
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        role="button"
        tabIndex={0}
      >
        Alexander Unger
      </span>

      <button
        className="nav-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link${active === link.id ? " active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
