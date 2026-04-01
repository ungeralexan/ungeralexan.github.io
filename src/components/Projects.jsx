function Projects() {
  const projects = [
    {
      title: "Time Series Forecasting",
      description:
        "Exploring forecasting approaches for financial and economic data.",
    },
    {
      title: "ML for Finance",
      description:
        "Applying machine learning methods to structured financial datasets.",
    },
    {
      title: "More Projects Coming Soon",
      description:
        "This section will later include detailed projects and case studies.",
    },
  ];

  return (
    <section id="projects" className="section">
      <h3>Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;