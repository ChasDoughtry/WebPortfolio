import "../styles/ProjectTile.css";

interface ProjectTileProps {
  title: string;
  description: string;
  skills?: string[];
}

function ProjectTile({
  title,
  description,
  skills = [],
}: ProjectTileProps) {
  return (
    <article className="project-tile">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-skills">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
export default ProjectTile;
