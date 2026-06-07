"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleNavbarScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener(
    "scroll",
    handleNavbarScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleNavbarScroll
    );
}, []);

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    let current = "";

    sections.forEach((section) => {
      const top = section.offsetTop;

      if (window.scrollY >= top - 250) {
        current = section.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, []);

  return (
    <header
  className={`
    fixed top-0 left-0 w-full z-50
    backdrop-blur-md
    border-b border-white/10
    transition-all duration-300
    ${
      scrolled
        ? "bg-slate-900/90"
        : "bg-slate-900/70"
    }
  `}
>
      <div
  className={`
    container-custom
    flex items-center justify-between
    transition-all duration-300
    ${
      scrolled
        ? "h-16"
        : "h-20"
    }
  `}
>

        <h1
          className="
          text-xl md:text-2xl
          font-extrabold
          bg-gradient-to-r
          from-white
          to-cyan-300
          bg-clip-text
          text-transparent
        "
        >
          Vanshika Panwar
        </h1>

        <nav>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

            <li>
              <a
                href="#about"
                className={
                  activeSection === "about"
                    ? "nav-active"
                    : ""
                }
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className={
                  activeSection === "experience"
                    ? "nav-active"
                    : ""
                }
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={
                  activeSection === "projects"
                    ? "nav-active"
                    : ""
                }
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={
                  activeSection === "skills"
                    ? "nav-active"
                    : ""
                }
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#certifications"
                className={
                  activeSection === "certifications"
                    ? "nav-active"
                    : ""
                }
              >
                Certifications
              </a>
            </li>

            <li>
              <a
                href="#education"
                className={
                  activeSection === "education"
                    ? "nav-active"
                    : ""
                }
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#github"
                className={
                  activeSection === "github"
                    ? "nav-active"
                    : ""
                }
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={
                  activeSection === "contact"
                    ? "nav-active"
                    : ""
                }
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">

          <div
            className="
            flex items-center
            px-3 py-1.5
            rounded-full
            border border-green-500/30
            bg-green-500/10
            text-green-300
            text-xs
            font-medium
          "
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
            Available for Opportunities
          </div>

          <a
  href="/Shivansh_Deshwal_Resume.pdf"
  download="Shivansh_Deshwal_Resume.pdf"
  className="
    flex items-center
    px-5 py-2
    rounded-xl
    font-semibold
    bg-gradient-to-r
    from-purple-500
    to-cyan-400
    hover:scale-105
    transition-all
    duration-300
    shadow-[0_0_20px_rgba(56,189,248,0.35)]
  "
>
  📄 Download Resume
</a>

        </div>

      </div>
    </header>
  );
}