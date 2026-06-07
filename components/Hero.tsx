import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <h1
            className="
            text-7xl
            lg:text-[5.2rem]
            font-black
            leading-[0.9]
            tracking-tight
            mb-6
          "
          >
            Vanshika
            <br />
            Panwar
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Software Engineer | AI/ML | Data & Cloud Technologies
          </h2>

          <p
              className="
              text-slate-300
              text-[1.35rem]
              leading-[1.8]
              max-w-[620px]
              mb-10
            "
            >
            Building intelligent software solutions through
            Artificial Intelligence, Cloud Technologies,
            Data Analytics, and Modern Application Development.
          </p>

          <div className="flex gap-5 mb-8">

          <a
            href="/Shivansh_Deshwal_Resume.pdf"
            target="_blank"
            className="hero-primary-btn"
          >
            Resume
          </a>

          <a
  href="https://github.com/vanshika2810"
  target="_blank"
  className="hero-secondary-btn github-btn"
>
  GitHub
</a>

          <a
  href="https://www.linkedin.com/in/vanshikapanwar28/"
  target="_blank"
  className="hero-secondary-btn linkedin-btn"
>
  LinkedIn
</a>

        </div>
          <div className="specialization-box">

  <h3 className="specialization-title">
    SPECIALIZATIONS
  </h3>

  <div className="specialization-grid">

    <div className="specialization-item">
      <Brain className="text-cyan-400" />
      <span>AI & Machine Learning</span>
    </div>

    <div className="specialization-item">
      <Code2 className="text-purple-400" />
      <span>Software Development</span>
    </div>

    <div className="specialization-item">
      <Cloud className="text-cyan-400" />
      <span>Cloud Technologies</span>
    </div>

    <div className="specialization-item">
      <BarChart3 className="text-purple-400" />
      <span>Analytics & Insights</span>
    </div>

  </div>

</div>
</div>

        {/* Right */}

        <div className="relative flex justify-center items-center">

          <div className="absolute top-8 -left-18 glass-badge badge-aqua">
            🚀 AquaVerse-AI
          </div>

          <div className="absolute top-34 -right-24 glass-badge badge-bone">
            🧠 Bone Fracture AI
          </div>

          <div className="absolute bottom-65 -left-20 glass-badge badge-cloud">
            📈 Data Analytics
          </div>

          <div className="absolute bottom-24 -right-24 glass-badge badge-analytics">
            🤖 AI Chat Assistant
          </div>

          <div className="hero-image-card">
            <img
              src="/images/profile.jpeg"
              alt="Shivansh"
              className="w-[410px] h-[520px] object-cover rounded-[28px] block"
            />
          </div>

        </div>

      </div>
    </section>
  );
}