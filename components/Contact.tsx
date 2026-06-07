import {
  Camera,
  Globe,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="container-custom">

        <div className="contact-heading">

          <p className="contact-subtitle">
            LET'S CONNECT
          </p>

          <h2 className="contact-title">
            Contact Me
          </h2>

          <p className="contact-description">
            I'm always open to discussing opportunities,
            collaborations, internships, AI projects,
            and innovative ideas.
          </p>

        </div>

        <div className="contact-grid">

          <a
            href="mailto:vanshikapanwar28@gmail.com"
            className="contact-card"
          >
            <Mail className="contact-icon" />

            <h3>Email</h3>

            <p>
              vanshikapanwar28@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/vanshikapanwar28/"
            target="_blank"
            className="contact-card"
          >
            <Globe className="contact-icon" />

            <h3>LinkedIn</h3>

            <p>
              Professional Profile
            </p>
          </a>

          <a
  href="https://www.instagram.com/vanshikaapanwarr"
  target="_blank"
  className="contact-card"
>
  <Camera className="contact-icon" />

  <h3>Instagram</h3>

  <p>
    @vanshikaapanwarr
  </p>
</a>

          <a
  href="https://wa.me/8218159269"
  target="_blank"
  className="contact-card"
>
  <MessageCircle className="contact-icon" />

  <h3>WhatsApp</h3>

  <p>
    Quick Contact
  </p>
</a>

        </div>

      </div>
    </section>
  );
}