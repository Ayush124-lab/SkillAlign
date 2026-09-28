import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentExtraPages.css";

const RecommendedJobs = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      role: "Python Developer Intern",
      company: "TechCorp",
      location: "Pune",
      match: 91,
      missing: "Docker",
    },
    {
      role: "Data Analyst Intern",
      company: "DataWorks",
      location: "Bangalore",
      match: 86,
      missing: "Advanced SQL",
    },
    {
      role: "ML Intern",
      company: "InnovateLabs",
      location: "Hyderabad",
      match: 78,
      missing: "TensorFlow",
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
            RECOMMENDED JOBS
          </span>

          <h1>Jobs Matching Your Skills</h1>

          <p>
            These opportunities are recommended based on your
            current skills and career goal.
          </p>

        </div>


        <div className="jobs-container">

          {jobs.map((job) => (

            <div className="job-card" key={job.role}>

              <div className="job-main">

                <div className="job-icon">
                  💼
                </div>

                <div>
                  <h2>{job.role}</h2>

                  <p className="company-name">
                    {job.company}
                  </p>

                  <p className="job-location">
                    📍 {job.location}
                  </p>
                </div>

              </div>


              <div className="job-right">

                <div className="match-box">
                  <strong>{job.match}%</strong>
                  <span>Match</span>
                </div>

                <p className="missing-skill">
                  Missing: {job.missing}
                </p>

                <button className="apply-button">
                  Apply
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
};

export default RecommendedJobs;