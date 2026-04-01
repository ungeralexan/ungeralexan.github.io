import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Focus />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;