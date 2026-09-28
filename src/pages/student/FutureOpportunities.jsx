import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentExtraPages.css";

const FutureOpportunities = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      skill: "TensorFlow",
      roles: "AI/ML Engineer, Deep Learning Intern",
      companies: "Google, NVIDIA, Microsoft",
    },
    {
      skill: "Docker",
      roles: "ML Engineer, Backend Engineer",
      companies: "Amazon, Microsoft, Adobe",
    },
    {
      skill: "Deep Learning",
      roles: "Computer Vision Engineer, AI Engineer",
      companies: "NVIDIA, Google, Meta",
    },
  ];

  return (
    <div className="extra-page">

      <div className="extra-navbar">

        <button
          className="back-button"
          onClick={() => navigate("/student/dashboard")}
        >
          ←
        </button>

        <div className="extra-navbar-logo">
          SkillAlign
        </div>

      </div>


      <main className="extra-page-content">

        <div className="page-heading">

          <span className="page-label">
            FUTURE OPPORTUNITIES
          </span>

          <h1>Where Your Roadmap Could Lead</h1>

          <p>
            These are potential opportunities associated with
            the skills in your learning roadmap.
          </p>

        </div>


        <div className="future-container">

          {opportunities.map((item) => (

            <div
              className="future-opportunity-card"
              key={item.skill}
            >

              <div className="future-skill-icon">
                🚀
              </div>

              <div className="future-content">

                <span className="future-skill">
                  Learn {item.skill}
                </span>

                <h2>{item.roles}</h2>

                <p>
                  Potential companies:
                </p>

                <strong>
                  {item.companies}
                </strong>

              </div>

            </div>

          ))}

        </div>


        <div className="future-note">

          <strong>Note:</strong>

          <span>
            These are potential career opportunities, not
            guaranteed job outcomes. Actual opportunities
            depend on skills, experience, vacancies and
            other requirements.
          </span>

        </div>

      </main>

    </div>
  );
};

export default FutureOpportunities;