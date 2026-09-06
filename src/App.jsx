import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CurrentWork from "./components/CurrentWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ui/ParticleBackground";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

function App() {
  return (
    <>
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />

      <Hero />

      <div className="container">
        <About />
        <Focus />
        <Experience />
        <Projects />
        <CurrentWork />
        <Contact />
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
