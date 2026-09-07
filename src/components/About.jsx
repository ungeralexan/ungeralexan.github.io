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
          Currently on academic exchange at National Chengchi University in
          Taipei, researching data mining methods in the context of Taiwan's
          pivotal and increasingly contested role at the center of the global
          semiconductor supply chain.
        </p>
      </div>

      <div className="about-grid">
        <div>
          <p className="muted">
            I'm especially interested in making machine learning genuinely
            useful for business decisions, which means going beyond
            prediction into explainability and causal machine learning. My
            research increasingly centers on causal AI, with a particular
            focus on interpretability and rigorous model evaluation. I also
            work hands-on with deep learning for image processing and deep
            learning for language processing, and I'm increasingly drawn to
            data mining techniques I'd like to go deeper into.
          </p>
          <p className="muted">
            I also have a strong interest in Natural Language Processing and
            Large Language Models, which I put into practice co-building
            tuevent, an AI platform that turns university communications into
            structured events and personalized recommendations through
            automated LLM workflows.
          </p>
        </div>

        <div className="stat-grid">
          <Stat end={3} label="Years in Data Science" />
          <Stat end={3} label="Live Projects" />
        </div>
      </div>
    </section>
  );
}

export default About;
