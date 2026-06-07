export default function Education() {
  return (
    <section
      id="education"
      className="education-section"
    >
      <div className="container-custom">

        <div className="education-heading">
          <p className="education-subtitle">
            ACADEMIC JOURNEY
          </p>

          <h2 className="education-title">
            Education
          </h2>
        </div>

        {/* B.Tech Card */}

        <div className="education-main-card">

          <div className="education-content">

            <h3>
              Bachelor of Technology (B.Tech)
            </h3>

            <h4>
              Computer Science & Engineering
            </h4>

            <p className="education-university">
              Lovely Professional University, Punjab
            </p>

            <p className="education-duration">
              Aug 2022 – May 2026
            </p>

            <div className="education-cgpa">
              CGPA: <span>8.40</span>
            </div>

            <div className="education-focus">

              <div className="focus-group">
                <strong>Minor Specialization</strong>
                <span>Data Science</span>
              </div>

              <div className="focus-group">
                <strong>Elective Courses</strong>
                <span>
                  AWS • Project Management •
                  Marketing Management
                </span>
              </div>

            </div>

            <div className="education-tags">
              <span>Artificial Intelligence</span>
              <span>Machine Learning</span>
              <span>Data Analytics</span>
              <span>Cloud Computing</span>
              <span>Software Engineering</span>
              <span>DBMS</span>
            </div>

          </div>
          <div className="education-logo">
    <img
      src="/images/lpu-logo.png"
      alt="LPU Logo"
    />
  </div>

        </div>

        {/* School Cards */}

        <div className="education-grid">

          <div className="education-card">

  <h3>Intermediate (Class XII)</h3>

  <p>
    Rainbow School
  </p>

  <p>
    Saharanpur, Uttar Pradesh
  </p>

  <p className="education-board">
    CBSE Board
  </p>

  <div className="education-score">
    89.8%
  </div>

  <span>2020 – 2022</span>

</div>

          <div className="education-card">

  <h3>Matriculation (Class X)</h3>

  <p>
    Rainbow School
  </p>

  <p>
    Saharanpur, Uttar Pradesh
  </p>

  <p className="education-board">
    CBSE Board
  </p>

  <div className="education-score">
    94.0%
  </div>

  <span>2018 – 2020</span>

</div>

        </div>

      </div>
    </section>
  );
}