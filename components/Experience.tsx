import {
  Brain,
  Briefcase,
  Database,
  GraduationCap,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-52 pb-32"
    >
      <div className="container-custom max-w-6xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="experience-subtitle">
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="experience-title">
            Experience
          </h2>

        </div>

        <div className="experience-container">

          {/* AquaVerse */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <Briefcase />
              </div>

              <div>
                <h3>Product Support Engineer - GreyOrange</h3>
                <span>July 2025 – July 2026</span>
              </div>

            </div>

            <ul>
              <li>
                Managed production systems and resolved live incidents to ensure high service availability and operational stability. Analyzed system behavior and logs to identify root causes . Contributed to automation initiatives that improved process efficiency and reduced manual effort. Developed monitoring Dashboards and collaborated with customers and cross-functional teams to maintain smooth operations.
              </li>
            </ul>

            <div className="experience-tags">
              <span>SQL</span>
              <span>Linux</span>
              <span>Docker</span>
              <span>Grafana</span>
              <span>Excel</span>
              <span>ELK</span>
            </div>

          </div>

          {/* Outlier */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <Brain />
              </div>

              <div>
                <h3>LLM Trainer (Freelance) – Outlier</h3>
                <span>Aug 2024 – Dec 2024</span>
              </div>

            </div>

            <ul>
              <li>
                Contributed to training and evaluation of Large Language Models. Performed prompt engineering and supervised fine-tuning. Reviewed and improved AI-generated code quality, reasoning, and overall performance.
              </li>
            </ul>

            <div className="experience-tags">
              <span>LLMs</span>
              <span>Generative AI</span>
              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
            </div>

          </div>

          {/* EdiGlobe */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <Database />
              </div>

              <div>
                <h3>Data Science Intern – EdiGlobe</h3>
                <span>Dec 2024 – Feb 2025</span>
              </div>

            </div>

            <ul>
              <li>
                Worked on data analysis and machine learning projects.
             
                Applied Python, SQL, and predictive analytics techniques.
             
                Performed EDA, visualization, and business intelligence tasks.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>Machine Learning</span>
              <span>Analytics</span>
            </div>

          </div>

          {/* CipherSchools */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <GraduationCap />
              </div>

              <div>
                <h3>Java Trainee – CodingSpoon</h3>
                <span>Jan 2025 – Feb 2025</span>
              </div>

            </div>

            <ul>
              <li>
                Completed Core Java training from Coding Spoon, gaining hands-on expertise in multithreading, exception handling, and problem-solving.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Tableau</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}