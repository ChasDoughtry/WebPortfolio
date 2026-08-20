import { useState } from "react";
import "../styles/ProjectCard.css";

function ProjectCard({
  title,
  description,
  image,
  github,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>

        <div className="project-content">
          <h3>{title}</h3>

          <p>{description}</p>

          <div className="project-actions">


            <button onClick={() => setOpen(true)}>
              Learn More
            </button>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="project-modal-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <h2>{title}</h2>

            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
