import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndustrySkillDemand.css";

const skillDemand = [
  {
    skill: "Python",
    demand: 92,
    vacancies: 18,
  },
  {
    skill: "SQL",
    demand: 81,
    vacancies: 15,
  },
  {
    skill: "Machine Learning",
    demand: 74,
    vacancies: 12,
  },
  {
    skill: "JavaScript",
    demand: 68,
    vacancies: 11,
  },
  {
    skill: "React",
    demand: 61,
    vacancies: 9,
  },
  {
    skill: "TensorFlow",
    demand: 58,
    vacancies: 8,
  },
  {
    skill: "Docker",
    demand: 46,
    vacancies: 6,
  },
  {
    skill: "AWS",
    demand: 41,
    vacancies: 5,
  },
];

const roleDemand = [
  {
    role: "AI/ML Engineer",
    vacancies: 5,
    topSkill: "Python",
  },
  {
    role: "Python Developer",
    vacancies: 3,
    topSkill: "Python",
  },
  {
    role: "Data Analyst",
    vacancies: 2,
    topSkill: "SQL",
  },
  {
    role: "Frontend Developer",
    vacancies: 4,
    topSkill: "JavaScript",
  },
];

const IndustrySkillDemand = () => {
  const navigate = useNavigate();

  return (
    <div className="industry-demand-page">

      {/* Navbar */}
      <nav className="industry-demand-navbar">

        <button
          className="industry-demand-back"
          onClick={() => navigate("/company/dashboard")}
        >
          ←
        </button>

        <div className="industry-demand-logo">
          SkillAlign
        </div>

      </nav>


      {/* Main */}
      <main className="industry-demand-main">

        <div className="industry-demand-header">

          <h1>Industry Skill Demand</h1>

          <p>
            Understand which skills are currently demanded
            across active company vacancies.
          </p>

        </div>


        {/* Summary */}
        <section className="demand-summary">

          <div className="demand-summary-card">

            <span>
              Skills Tracked
            </span>

            <strong>
              8
            </strong>

            <p>
              Across active vacancies
            </p>

          </div>


          <div className="demand-summary-card">

            <span>
              Active Vacancies
            </span>

            <strong>
              14
            </strong>

            <p>
              Across all roles
            </p>

          </div>


          <div className="demand-summary-card">

            <span>
              Most Demanded Skill
            </span>

            <strong>
              Python
            </strong>

            <p>
              Appears in 92% of demand data
            </p>

          </div>

        </section>


        {/* Skill Demand */}
        <section className="skill-demand-section">

          <div className="section-heading">

            <h2>
              Most Demanded Skills
            </h2>

            <p>
              Skill demand based on current vacancy
              requirements.
            </p>

          </div>


          <div className="skill-demand-list">

            {skillDemand.map((item) => (

              <div
                className="skill-demand-item"
                key={item.skill}
              >

                <div className="skill-demand-info">

                  <strong>
                    {item.skill}
                  </strong>

                  <span>
                    {item.vacancies} vacancies
                  </span>

                </div>


                <div className="skill-demand-bar">

                  <div
                    className="skill-demand-fill"
                    style={{
                      width: `${item.demand}%`,
                    }}
                  ></div>

                </div>


                <strong className="skill-demand-percent">
                  {item.demand}%
                </strong>

              </div>

            ))}

          </div>

        </section>


        {/* Role Demand */}
        <section className="role-demand-section">

          <div className="section-heading">

            <h2>
              Role-wise Skill Demand
            </h2>

            <p>
              Skills most relevant to each active role.
            </p>

          </div>


          <div className="role-demand-grid">

            {roleDemand.map((item) => (

              <div
                className="role-demand-card"
                key={item.role}
              >

                <div className="role-demand-top">

                  <div>

                    <h3>
                      {item.role}
                    </h3>

                    <p>
                      {item.vacancies} open vacancies
                    </p>

                  </div>

                  <span>
                    Active
                  </span>

                </div>


                <div className="top-skill">

                  <span>
                    Most Required Skill
                  </span>

                  <strong>
                    {item.topSkill}
                  </strong>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* Insight */}
        <div className="demand-insight">

          <span>
            💡
          </span>

          <p>
            Companies can use these demand insights to
            understand which skills are most frequently
            required and identify emerging skill needs.
          </p>

        </div>

      </main>

    </div>
  );
};

export default IndustrySkillDemand;