export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container-custom">

        <div className="projects-heading">
          <p className="projects-subtitle">
            FEATURED WORK
          </p>

          <h2 className="projects-title">
            Projects
          </h2>
        </div>

        {/* AquaVerse Featured */}

        <div className="project-featured">

          <div className="project-image">
            <img
              src="/images/aquaverse.png"
              alt="AquaVerse AI"
            />
          </div>

          <div className="project-content">

            <h3>AquaVerse-AI</h3>

            <p>
              AI-powered ocean intelligence and beach safety platform
              integrating real-time coastal monitoring, risk assessment,
              predictive forecasting, geospatial visualization, and
              intelligent chatbot assistance.
            </p>

            <div className="project-tags">
              <span>Flutter</span>
              <span>Gemini AI</span>
              <span>INCOIS</span>
              <span>Firebase</span>
              <span>Maps</span>
            </div>

            <a
              href="https://github.com/vanshika2810/AquaVerse-AI"
              target="_blank"
              className="project-btn"
            >
              View Project
            </a>

          </div>

        </div>

        {/* Row 2 */}

        <div className="projects-grid">

          <div className="project-card">

            <img
              src="/images/bone-fracture.png"
              alt="Bone Fracture AI"
            />

            <div className="project-card-content">

              <h3>Bone Fracture AI</h3>

              <p>
                Deep learning based fracture detection system using
                ResNet50 Transfer Learning with automated reporting
                and diagnostic support.
              </p>

              <div className="project-tags">
                <span>TensorFlow</span>
                <span>Keras</span>
                <span>ResNet50</span>
                <span>Gradio</span>
              </div>

              <a
                href="https://github.com/vanshika2810/BoneFractureClassification"
                target="_blank"
                className="project-btn"
              >
                View Project
              </a>

            </div>

          </div>

          <div className="project-card">

            <img
              src="/images/ai-assistant.png"
              alt="AI Assistant"
            />

            <div className="project-card-content">

              <h3>AI Chat Assistant</h3>

              <p>
                Local LLM-powered chatbot using Ollama and Mistral
                with web search integration and contextual memory.
              </p>

              <div className="project-tags">
                <span>Ollama</span>
                <span>Mistral</span>
                <span>SerpAPI</span>
                <span>Streamlit</span>
              </div>

              <a
                href="https://github.com/Shivansh-301/Ai-ChatBot"
                target="_blank"
                className="project-btn"
              >
                View Project
              </a>

            </div>

          </div>

        </div>

        {/* Dashboard */}

        <div className="project-featured dashboard-card">

          <div className="project-image">
            <img
              src="/images/dashboard.png"
              alt="Dashboard"
            />
          </div>

          <div className="project-content">

            <h3>Business Intelligence & Analytics Portfolio</h3>

            <p>
              Interactive analytics portfolio featuring Power BI,
              Tableau, SQL, and Excel dashboards for business
              intelligence and data-driven decision making.
            </p>

            <div className="project-tags">
              <span>Power BI</span>
              <span>Tableau</span>
              <span>SQL</span>
              <span>Excel</span>
              <span>Analytics</span>
            </div>

            <a
              href="https://github.com/vanshika2810/Amazon-prime-Dashboard"
              target="_blank"
              className="project-btn"
            >
              View Project
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}