import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";
import ResumeModal from "./ResumeModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            CHAS
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/Experience">Experience</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>

          <button className="resume-button" onClick={() => setShowResume(true)}>
            Resume
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />

      {/* Backdrop */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sliding Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a href="/resume.pdf" onClick={() => setMenuOpen(false)}>
          Resume
        </a>
      </div>
    </>
  );
}

export default Navbar;
