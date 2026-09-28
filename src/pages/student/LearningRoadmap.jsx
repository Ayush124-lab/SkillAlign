import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentExtraPages.css";

const LearningRoadmap = () => {
  const navigate = useNavigate();

  const roadmap = [
    {
      step: 1,
      title: "Strengthen Python",
      description:
        "Revise advanced Python, OOP concepts and problem solving.",
      duration: "2–3 Weeks",
    },
    {
      step: 2,
      title: "Learn NumPy & Pandas",
      description:
        "Build strong data manipulation and data analysis skills.",
      duration: "2 Weeks",
    },
    {
      step: 3,
      title: "Learn Machine Learning",
      description:
        "Understand regression, classification, model evaluation and basic ML workflows.",
      duration: "4–5 Weeks",
    },
    {
      step: 4,
      title: "Learn TensorFlow",
      description:
        "Start working with neural networks and practical deep learning projects.",
      duration: "3–4 Weeks",
    },
    {
      step: 5,
      title: "Learn Docker",
      description:
        "Learn how to package and deploy your applications.",
      duration: "1–2 Weeks",
    },
    {
      step: 6,
      title: "Build Portfolio Projects",
      description:
        "Build 2–3 projects that demonstrate your target-role skills.",
      duration: "4–6 Weeks",
    },
    {
      step: 7,
      title: "Start Applying",
      description:
        "Apply for internships and entry-level opportunities relevant to your skills.",
      duration: "Ongoing",
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
            PERSONALIZED LEARNING ROADMAP
          </span>

          <h1>Your Roadmap to Data Scientist</h1>

          <p>
            Follow these steps to improve your current skills
            and move closer to your selected career goal.
          </p>
        </div>

        <div className="roadmap-container">

          {roadmap.map((item) => (
            <div className="roadmap-page-card" key={item.step}>

              <div className="roadmap-number">
                {item.step}
              </div>

              <div className="roadmap-content">

                <div className="roadmap-title-row">
                  <h2>{item.title}</h2>

                  <span className="duration">
                    {item.duration}
                  </span>
                </div>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
};

export default LearningRoadmap;