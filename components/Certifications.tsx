import {
  BarChart3,
  Brain,
  Cloud,
  GraduationCap,
} from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      items: [
        {
          name: "Generative AI with Large Language Models",
          file: "/certificates/Large language models.pdf",
        },
        {
          name: "Supervised Machine Learning",
          file: "/certificates/Supervised.pdf",
        },
        {
          name: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
          file: "/certificates/Build AI Apps with ChatGPT, Dall-E, and GPT-4.pdf",
        },
      ],
    },

    {
      title: "Cloud Computing & AWS",
      icon: Cloud,
      items: [
        {
          name: "NPTEL Cloud Computing (Elite)",
          file: "/certificates/NPTEL Cloud Computing.pdf",
        },
      ],
    },

    {
      title: "Data Analytics & BI",
      icon: BarChart3,
      items: [
        {
          name: "SAP Analytics Cloud",
          file: "/certificates/sap-analytics-cloud.pdf",
        },
        {
          name: "Data Analysis with Tableau",
          file: "/certificates/Data Analysis with Tableau.pdf",
        },
      ],
    },

    {
      title: "Training & Internship",
      icon: GraduationCap,
      items: [
        {
          name: "Product Support Engineer Intern - GreyOrange",
          file: "/certificates/ediglobe-in.pdf",
        },
        {
          name: "Data Science Internship - EdiGlobe",
          file: "/certificates/EdiGlobe.pdf",
        },
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="container-custom">

        <div className="certifications-heading">
          <p className="certifications-subtitle">
            PROFESSIONAL DEVELOPMENT
          </p>

          <h2 className="certifications-title">
            Certifications & Learning
          </h2>
        </div>

        <div className="certifications-grid">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="certification-card"
            >
              <div className="cert-header">
                <cert.icon className="cert-icon" />
                <h3>{cert.title}</h3>
              </div>

              <div className="cert-list">

                {cert.items.map((item) => (
                  <div
                    key={item.name}
                    className="cert-item"
                  >
                    <span>{item.name}</span>

                    <a
                      href={item.file}
                      target="_blank"
                      className="cert-btn"
                    >
                      View
                    </a>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        <div className="cert-stats">

          <div className="cert-stat-card">
            <h3>15+</h3>
            <p>Certifications</p>
          </div>

          <div className="cert-stat-card">
            <h3>6+</h3>
            <p>Domains</p>
          </div>

          <div className="cert-stat-card">
            <h3>2</h3>
            <p>Internships</p>
          </div>

          <div className="cert-stat-card">
            <h3>SAP</h3>
            <p>Cloud Certified</p>
          </div>

        </div>

      </div>
    </section>
  );
}