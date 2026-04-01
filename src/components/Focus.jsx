function Focus() {
  const items = [
    "Machine Learning",
    "Deep Learning",
    "Finance",
    "Time Series",
    "Economic Data",
    "Quantitative Analysis",
  ];

  return (
    <section id="focus" className="section">
      <h3>Focus Areas</h3>
      <div className="card-grid">
        {items.map((item) => (
          <div key={item} className="card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Focus;