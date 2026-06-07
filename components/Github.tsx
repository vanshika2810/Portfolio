"use client";

import { useEffect, useState } from "react";

export default function GitHub() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/vanshika2810")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return (
      <section className="github-section">
        <div className="container-custom">
          <h2>Loading GitHub...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="github-section">
      <div className="container-custom">

        <div className="github-heading">

          <p className="github-subtitle">
            OPEN SOURCE JOURNEY
          </p>

          <h2 className="github-title">
            GitHub & Technical Profile
          </h2>

        </div>

        {/* Profile Card */}

        <div className="github-profile-card">

          <img
            src={user.avatar_url}
            alt="GitHub Avatar"
            className="github-avatar"
          />

          <div className="github-profile-content">

            <h3>{user.name}</h3>

            <p className="github-username">
              @{user.login}
            </p>

            <p className="github-description">
              Data Science Graduate passionate about
              Artificial Intelligence, Data Analytics,
              Business Intelligence, Cloud Computing,
              and Software Development.
            </p>

            <div className="github-profile-stats">

              <span>
                {user.public_repos} Repositories
              </span>

              <span>
                {user.followers} Followers
              </span>

              <span>
                {user.following} Following
              </span>

            </div>

          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="github-btn"
          >
            Visit GitHub
          </a>

        </div>

        {/* Statistics */}

        <div className="github-stats">

          <div className="github-stat-card">
            <h3>{user.public_repos}+</h3>
            <p>Repositories</p>
          </div>

          <div className="github-stat-card">
            <h3>4</h3>
            <p>Major Projects</p>
          </div>

          <div className="github-stat-card">
            <h3>Data Science</h3>
            <p>Primary Domain</p>
          </div>

          <div className="github-stat-card">
            <h3>2024</h3>
            <p>Open Source Journey</p>
          </div>

        </div>

        {/* Summary Card */}

        <div className="github-summary-card">

          <h3>
            Building Intelligent Solutions Through Data
          </h3>

          <p>
            Focused on creating real-world solutions that combine
            Data Science, Artificial Intelligence, Business
            Intelligence, Cloud Computing, and Software Development.
            Passionate about transforming data into meaningful
            insights and building impactful applications that solve
            practical problems.
          </p>

        </div>

      </div>
    </section>
  );
}