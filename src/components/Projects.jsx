import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

function ProjectCard({ children }) {
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

function Projects() {
  const reveal = useReveal();

  return (
    <section id="projects" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Selected work</div>
        <h3>Projects</h3>
      </div>

      <div className="project-grid">
        <ProjectCard>
          <h4>AI-based University Event Recommendation System</h4>
          <p className="muted">
            Developed a recommendation system to personalize event discovery
            for students.
          </p>
          <div className="project-tags">
            <span className="tag">Recommender Systems</span>
            <span className="tag">Machine Learning</span>
          </div>
          <a href="https://tuevent.de/" target="_blank" rel="noreferrer">
            Live Demo →
          </a>
        </ProjectCard>

        <ProjectCard>
          <h4>Nowcasting Framework</h4>
          <p className="muted">
            Built forecasting models using econometrics and machine learning
            (MIDAS, Lasso, Ridge).
          </p>
          <div className="project-tags">
            <span className="tag">Econometrics</span>
            <span className="tag">Forecasting</span>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
