import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

function Stat({ end, suffix = "", label }) {
  const [ref, display] = useCountUp(end, { suffix });
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-num">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
  const reveal = useReveal();

  return (
    <section id="about" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Who I am</div>
        <h3>About</h3>
        <p className="section-lede">
          M.Sc. student in Data Science in Business and Economics at the
          University of Tübingen, specializing in econometrics, time series
          analysis, and machine learning.
        </p>
      </div>

      <div className="about-grid">
        <div>
          <p className="muted">
            My focus is on real-time prediction, forecasting models, and
            applied machine learning in economic and business contexts. I'm
            especially interested in bridging rigorous econometric methods
            with modern ML approaches to build models that hold up in the
            real world.
          </p>
          <p className="muted">
            I also have a strong interest in Natural Language Processing and
            Large Language Models, and I contribute to AI-related projects
            such as GermanPrep AI.
          </p>
        </div>

        <div className="stat-grid">
          <Stat end={2} label="Years in Data Science" />
          <Stat end={3} label="Live Projects" />
          <Stat end={1} label="Master Thesis in Progress" />
          <Stat end={100} suffix="%" label="Curiosity-Driven" />
        </div>
      </div>
    </section>
  );
}

export default About;
