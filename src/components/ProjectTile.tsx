import "../styles/ProjectTile.css";

function ProjectTile({ title, description, skills = []  }) {
  return (
    <article className="project-tile">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-skills">
        {skills.map((skill, index) => (
           <span className="skill-tag" key={index}>
             {skill}
           </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectTile;
