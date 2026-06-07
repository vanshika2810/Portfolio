import {
  Code2,
  Brain,
  BarChart3,
  Cloud,
  Database,
  Laptop,
} from "lucide-react";
export default function Skills() {
  const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "SQL", "R"],
  },

  {
    title: "Computer Science Fundamentals",
    icon: Database,
    skills: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "Software Engineering",
      "SDLC",
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "ResNet50",
      "Generative AI",
      "LLMs",
      "NLP",
    ],
  },

  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    skills: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "Excel",
      "Data Visualization",
      "Statistical Analysis",
      "Predictive Analytics",
    ],
  },

  {
    title: "Software Development",
    icon: Laptop,
    skills: [
      "Flutter",
      "Next.js",
      "Streamlit",
      "Gradio",
      "REST APIs",
      "Firebase",
    ],
  },

  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
    ],
  },
];

  return (
    <section id="skills" className="skills-section">
      <div className="container-custom">

        <div className="skills-heading">
          <p className="skills-subtitle">
            TECHNICAL EXPERTISE
          </p>

          <h2 className="skills-title">
            Skills
          </h2>
        </div>

        <div className="skills-grid">

  {skillGroups.map((group) => (
    <div
      key={group.title}
      className="skills-card"
    >
      <div className="skills-card-header">
        <group.icon className="skills-icon" />
        <h3>{group.title}</h3>
      </div>

      <div className="skills-tags">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="skill-tag"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  ))}

</div>

<div className="skills-stats">

  <div className="skills-stat-card">
    <h3>20+</h3>
    <p>Technologies</p>
  </div>

  <div className="skills-stat-card">
    <h3>4+</h3>
    <p>Projects</p>
  </div>

  <div className="skills-stat-card">
    <h3>15+</h3>
    <p>Certifications</p>
  </div>

  <div className="skills-stat-card">
    <h3>Data Sc.</h3>
    <p>Specialization</p>
  </div>

  <div className="skills-stat-card">
    <h3>AI/ML</h3>
    <p>Focused</p>
  </div>

  <div className="skills-stat-card">
    <h3>Lead</h3>
    <p>Team Leadership</p>
  </div>

</div>

</div>
</section>
  );
}