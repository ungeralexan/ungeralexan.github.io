import useReveal from "../hooks/useReveal";

const ROLES = [
  {
    role: "Working Student, Data Science & Analytics",
    org: "Mercedes-Benz AG",
    detail: "Customer Journey",
    dates: "Apr 2024 to Aug 2026",
  },
  {
    role: "Intern, Data Science & Analytics",
    org: "Mercedes-Benz AG",
    detail: "Customer Experience",
    dates: "Sep 2023 to Mar 2024",
  },
  {
    role: "Student Assistant",
    org: "University of Hohenheim",
    detail: "Econometrics & Statistics",
    dates: "Mar 2023 to Jul 2023",
  },
];

function Experience() {
  const reveal = useReveal();

  return (
    <section id="experience" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Where I've worked</div>
        <h3>Experience</h3>
      </div>

      <div className="timeline">
        {ROLES.map((item) => (
          <div className="timeline-item" key={`${item.org}-${item.role}`}>
            <div className="role">{item.role}</div>
            <div className="org">
              {item.org} · {item.detail}
            </div>
            <p className="muted" style={{ marginTop: "0.4rem", marginBottom: 0 }}>
              {item.dates}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
