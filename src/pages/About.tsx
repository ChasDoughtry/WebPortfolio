import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="about-container">
          <div className="about-content">
              <h2>About Me</h2>
              <p>I’m Chas Doughtry, a recent Computer Science graduare and software
                engineer with a background in developing,
                testing, and maintaining reliable software solutions.
                I enjoy solving complex problems, learning new technologies,
                and building applications that are both practical and scalable.
                My experience spans full-stack development, databases, system
                configuration, and software testing, with hands-on experience
                using technologies such as React, Java, PHP, Python, C#, SQL, and
                Docker. Outside of technology, I enjoy reading, basketball, and
                video games, and I’m always looking for opportunities to grow
                my skills and take on new challenges.
              </p>

              <h2>Community Impact</h2>
              <p> Beyond technical work, I care about giving back and uplifting those
                around me. While attending Baylor University I served as the
                Nationals Planning Chair of the National Society of Black Engineers
                and as the Vice President of the Tau Alpha Chapter of Alpha Phi Alpha Inc.
                Through these roles I was able to uplift underrepresented students in
                the STEM community on campus by providing resources and events to promote
                career readiness, and plan the annual chapter trips to the NSBE National
                convention for 20+ students. As well as provide mentorship to students at
                local Waco, Texas schools where I would provide weekly mentorship to 15+ middle
                school and high school students.
              </p>
          </div>

          <div className="about-image">
             <img src="headshot.jpg" alt="Chas Doughtry" />
          </div>


        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
