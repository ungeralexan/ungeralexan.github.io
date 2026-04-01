function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      padding: "20px",
      borderBottom: "1px solid #eee"
    }}>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#current">Current Work</a>
    </nav>
  );
}

export default Navbar;