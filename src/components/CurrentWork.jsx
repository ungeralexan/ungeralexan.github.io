import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

function WorkCard({ children }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);
  return (
    <div
      className="project-card"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

function CurrentWork() {
  const reveal = useReveal();

  return (
    <section id="current" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Right now</div>
        <h3>Current Work</h3>
      </div>

      <div className="project-grid">
        <WorkCard>
          <h4>Master Thesis</h4>
          <p className="muted">
            Researching causal machine learning estimators, currently working
            with kappa-weighted approaches to estimate the Local Average
            Treatment Effect (LATE).
          </p>
        </WorkCard>

        <WorkCard>
          <h4>Bluesky Dashboard</h4>
          <p className="muted">
            Designing an in-production data science dashboard surfacing live
            insights from Bluesky, with the concept and scope still taking
            shape.
          </p>
        </WorkCard>
      </div>
    </section>
  );
}

export default CurrentWork;
