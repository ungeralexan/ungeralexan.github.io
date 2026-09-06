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
            To be defined – focus on econometrics and machine learning.
          </p>
        </WorkCard>

        <WorkCard>
          <h4>Nowcasting Platform</h4>
          <p className="muted">
            Developing a system for real-time economic prediction using
            high-frequency data.
          </p>
        </WorkCard>
      </div>
    </section>
  );
}

export default CurrentWork;
