import { Link } from "react-router-dom";
import HeroScene from "../scenes/HeroScene";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-tag">Software Engineer</p>

        <h1>
          Hi, I'm <span>Chas</span>
        </h1>

        <p className="hero-description">
          Building web applications, networking solutions, and interactive
          experiences with React, Java, Rust, and modern cloud technologies.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-scene">
        <HeroScene />
      </div>
    </section>
  );
}

export default Hero;
