import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

const ITEMS = [
  "Explainable Machine Learning",
  "Time Series Forecasting & Nowcasting",
  "Deep Learning & Causal Inference",
  "Machine Learning & Data Mining",
];

function FocusCard({ item }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);
  return (
    <div
      className="card"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {item}
    </div>
  );
}

function Focus() {
  const reveal = useReveal();

  return (
    <section id="focus" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Areas of expertise</div>
        <h3>Focus Areas</h3>
      </div>
      <div className="card-grid">
        {ITEMS.map((item) => (
          <FocusCard key={item} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Focus;
