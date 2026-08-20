import ProjectTile from "../components/ProjectTile";

function Projects() {
  return (
    <div>
      <h1 className="heading-title">Projects</h1>

      <div className="projects-grid">

        <ProjectTile
            title="Meals To You"
          description="Web-based application that generates efficient
            delivery routes for the Meals-to-You iniative, a free-lunch
            program partnered with the USDA to serve central Texas"
            skills={["React","Flask", "SQL"]}
        />
        <ProjectTile
          title="Time & Attendance - Paycom"
          description="Implemented maintenance improvements for Time-Off
          Management systems through bug fixes, legacy code updates, and
          feature-flag removals, supported by rigorous testing."
          skills={["PHP","React", "Docker"]}
        />
        <ProjectTile
            title="Client Lead System - Paycom"
          description="Enhanced lead-intake workflows by implementing
            client lead trackers for internal Client Relationship Manager
            system to improve client acquisition and data analytics used
            by 500+ sales representatives ."
          skills={["PHP","React", "SQL"]}
        />
        <ProjectTile
          title="FastDS-VS"
          description="System software for DMV locations nationwide.
            I implemented upgrades to increase efficiency and the
            modernize application tech stack."
          skills={["C#",".NET","SQL"]}
        />
      </div>
    </div>
  );
} export default Projects
