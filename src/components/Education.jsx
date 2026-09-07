import useReveal from "../hooks/useReveal";

const SCHOOLS = [
  {
    degree: "B.Sc. Business Administration and Economics",
    org: "University of Hohenheim",
    detail: "Stuttgart, Germany",
    dates: "Oct 2019 to Aug 2024",
  },
  {
    degree: "M.Sc. Data Science in Business and Economics",
    org: "University of Tübingen",
    detail: "GPA 1.4",
    dates: "Oct 2024 to Jan 2027",
  },
  {
    degree: "Exchange Semester, Data Mining",
    org: "National Chengchi University",
    detail: "Taipei, Taiwan",
    dates: "Sep 2026 to Jan 2027",
  },
];

function Education() {
  const reveal = useReveal();

  return (
    <section id="education" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Where I've studied</div>
        <h3>Education</h3>
      </div>

      <div className="timeline">
        {SCHOOLS.map((item) => (
          <div className="timeline-item" key={item.org}>
            <div className="role">{item.degree}</div>
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

export default Education;
