import useReveal from "../hooks/useReveal";

function Experience() {
  const reveal = useReveal();

  return (
    <section id="experience" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Where I've worked</div>
        <h3>Experience</h3>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="role">Working Student – Data Science &amp; Analytics</div>
          <div className="org">Mercedes-Benz AG</div>
          <ul>
            <li>Applied regression and machine learning methods</li>
            <li>Built and improved data pipelines</li>
            <li>Analyzed customer behavior and feedback data</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
