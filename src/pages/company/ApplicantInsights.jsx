import React from "react";
import { useNavigate } from "react-router-dom";
import "./ApplicantInsights.css";

const skillGaps = [
  {
    skill: "TensorFlow",
    missing: 42,
    affected: 21,
  },
  {
    skill: "Docker",
    missing: 35,
    affected: 18,
  },
  {
    skill: "AWS",
    missing: 28,
    affected: 14,
  },
  {
    skill: "Power BI",
    missing: 24,
    affected: 12,
  },
];

const roleInsights = [
  {
    role: "AI/ML Engineer",
    applicants: 25,
    averageMatch: 86,
  },
  {
    role: "Python Developer",
    applicants: 18,
    averageMatch: 82,
  },
  {
    role: "Data Analyst",
    applicants: 14,
    averageMatch: 78,
  },
  {
    role: "Frontend Developer",
    applicants: 11,
    averageMatch: 84,
  },
];

const ApplicantInsights = () => {
  const navigate = useNavigate();

  return (
    <div className="applicant-insights-page">

      {/* Navbar */}
      <nav className="applicant-insights-navbar">

        <button
          className="applicant-insights-back"
          onClick={() => navigate("/company/dashboard")}
        >
          ←
        </button>

        <div className="applicant-insights-logo">
          SkillAlign
        </div>

      </nav>


      {/* Main */}
      <main className="applicant-insights-main">

        <div className="applicant-insights-header">

          <h1>Applicant Insights</h1>

          <p>
            Understand applicant skill gaps and compare
            candidate readiness across roles.
          </p>

        </div>


        {/* Summary Cards */}
        <section className="insights-summary">

          <div className="insight-summary-card">
            <span>Total Applicants</span>
            <strong>68</strong>
            <p>Across all active roles</p>
          </div>

          <div className="insight-summary-card">
            <span>Average Skill Match</span>
            <strong>82%</strong>
            <p>Across all applicants</p>
          </div>

          <div className="insight-summary-card">
            <span>Common Skill Gap</span>
            <strong>TensorFlow</strong>
            <p>42% applicants missing</p>
          </div>

        </section>


        {/* Skill Gap Section */}
        <section className="skill-gap-section">

          <div className="section-heading">

            <div>
              <h2>Common Skill Gaps</h2>

              <p>
                Skills frequently missing among applicants.
              </p>
            </div>

          </div>


          <div className="skill-gap-list">

            {skillGaps.map((item) => (

              <div
                className="skill-gap-item"
                key={item.skill}
              >

                <div className="skill-gap-info">

                  <strong>
                    {item.skill}
                  </strong>

                  <span>
                    {item.affected} applicants affected
                  </span>

                </div>


                <div className="skill-gap-bar-area">

                  <div className="skill-gap-bar">

                    <div
                      className="skill-gap-fill"
                      style={{
                        width: `${item.missing}%`,
                      }}
                    ></div>

                  </div>

                </div>


                <strong className="skill-gap-percent">
                  {item.missing}%
                </strong>

              </div>

            ))}

          </div>

        </section>


        {/* Role Insights */}
        <section className="role-insights-section">

          <div className="section-heading">

            <div>
              <h2>Role-wise Applicant Insights</h2>

              <p>
                Compare applicant readiness for each role.
              </p>
            </div>

          </div>


          <div className="role-insights-grid">

            {roleInsights.map((item) => (

              <div
                className="role-insight-card"
                key={item.role}
              >

                <div className="role-insight-top">

                  <div>
                    <h3>
                      {item.role}
                    </h3>

                    <p>
                      {item.applicants} applicants
                    </p>
                  </div>

                  <span className="role-match-badge">
                    {item.averageMatch}%
                  </span>

                </div>


                <div className="role-match-label">

                  <span>
                    Average Skill Match
                  </span>

                  <strong>
                    {item.averageMatch}%
                  </strong>

                </div>


                <div className="role-match-bar">

                  <div
                    className="role-match-fill"
                    style={{
                      width: `${item.averageMatch}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* Insight Note */}
        <div className="insight-note">

          <span>💡</span>

          <p>
            These insights can help companies identify
            frequently missing skills and understand where
            applicants need additional preparation.
          </p>

        </div>

      </main>

    </div>
  );
};

export default ApplicantInsights;