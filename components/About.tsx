import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="container-custom max-w-6xl">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="about-subtitle">
            GET TO KNOW
          </p>

          <h2 className="about-title">
            About Me
          </h2>

        </div>

        {/* Main Content */}

        <div className="about-content">

  <h3
    className="
    text-4xl
    font-bold
    bg-gradient-to-r
    from-cyan-400
    to-purple-400
    bg-clip-text
    text-transparent
    "
  >
    Software Engineer | AI & Data Science
  </h3>

          <p className="about-description">
            I'm Vanshika Panwar, a Data Science graduate passionate about Artificial Intelligence, Data Analytics, Cloud Technologies, and Software Development.

          </p>

          <p className="about-description">
            My work includes AquaVerse-AI, Bone Fracture Classification using Deep Learning, AI Chat Assistants, and interactive dashboards built with Power BI and Tableau.
          </p>

          <p className="about-description">
            I enjoy building intelligent solutions that combine AI, cloud computing, and modern software engineering to solve real-world problems.
          </p>

        </div>

        {/* Skills */}

        <div className="about-skills">

          <div className="about-skill">
            <Brain className="text-cyan-400" />
            <span>AI & Machine Learning</span>
          </div>

          <div className="about-skill">
            <BarChart3 className="text-purple-400" />
            <span>Data Analytics & Visualization</span>
          </div>

          <div className="about-skill">
            <Cloud className="text-cyan-400" />
            <span>AWS Cloud Technologies</span>
          </div>

          <div className="about-skill">
            <Code2 className="text-purple-400" />
            <span>Software Development</span>
          </div>

        </div>

        {/* Stats */}

        <div className="about-stats">

          <div className="about-stat">
            <h3>8.40</h3>
            <p>CGPA</p>
          </div>

          <div className="about-stat">
            <h3>15+</h3>
            <p>Certifications</p>
          </div>

          <div className="about-stat">
            <h3>4+</h3>
            <p>Major Projects</p>
          </div>

          <div className="about-stat">
            <h3>B.Tech </h3>
            <p>2026</p>
          </div>

        </div>

      </div>
    </section>
  );
}