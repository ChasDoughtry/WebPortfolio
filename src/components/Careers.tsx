import "../styles/Careers.css";

function Careers() {
  return (
    <section className="careers">
          <h1 className="careers-title">Experience</h1>

          <div className="career-item">
            <h2>Software Developer</h2>
            <h3>Paycom · 06/2025 - 05/2026</h3>
            <p>
              Developed full stack features for the Client Relationship Manager system using PHP, React, TypeScript, MySQL, Docker, and Splunk, from requirements through testing and deployment with zero post-release defects.
            </p>
          </div>

          <div className="career-item">
            <h2>Software Engineer Intern</h2>
            <h3>Fast Enterprise · 05/2024 - 08/2024</h3>
            <p>
              Improved system performance on DMV software by converting VB.NET functions to C# and refining SQL queries.
            </p>
          </div>

          <div className="career-item">
            <h2>Data Processor</h2>
            <h3>Baylor University Office of Admissions · 08/2022 - 05/2025</h3>
            <p>
              Processed and verified academic records efficiently for thousands
              of Baylor University applicants weekly.            </p>
          </div>
        </section>
  );
}

export default Careers;
