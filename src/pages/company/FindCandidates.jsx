import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindCandidates.css";

const initialVacancies = [
  {
    id: 1,
    role: "AI/ML Engineer",
    company: "TechCorp",
    vacancies: 5,
    requiredSkills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
  },
  {
    id: 2,
    role: "Python Developer",
    company: "TechCorp",
    vacancies: 3,
    requiredSkills: ["Python", "Django", "SQL", "Git"],
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "TechCorp",
    vacancies: 2,
    requiredSkills: ["Python", "SQL", "Excel", "Power BI"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "TechCorp",
    vacancies: 4,
    requiredSkills: ["JavaScript", "React", "HTML", "CSS"],
  },
];

const FindCandidates = () => {
  const navigate = useNavigate();

  const [vacancies, setVacancies] = useState(() => {
    const saved = localStorage.getItem("skillAlignVacancies");

    return saved ? JSON.parse(saved) : initialVacancies;
  });

  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "skillAlignVacancies",
      JSON.stringify(vacancies)
    );
  }, [vacancies]);

  const increaseVacancy = (id) => {
    setVacancies((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              vacancies: item.vacancies + 1,
            }
          : item
      )
    );
  };

  const decreaseVacancy = (id) => {
    setVacancies((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              vacancies: Math.max(0, item.vacancies - 1),
            }
          : item
      )
    );
  };

  return (
    <div className="find-candidates-page">

      <nav className="find-candidates-navbar">

        <button
          className="find-candidates-back"
          onClick={() => navigate("/company/dashboard")}
        >
          ←
        </button>

        <div className="find-candidates-logo">
          SkillAlign
        </div>

      </nav>

      <main className="find-candidates-main">

        <div className="find-candidates-header">

          <h1>Find Candidates</h1>

          <p>
            Manage vacancies and find students who match
            your job requirements.
          </p>

        </div>

        <div className="vacancy-summary">

          <div>
            <span>Total Open Positions</span>

            <strong>
              {vacancies.reduce(
                (total, item) => total + item.vacancies,
                0
              )}
            </strong>
          </div>

          <div>
            <span>Active Roles</span>

            <strong>
              {
                vacancies.filter(
                  (item) => item.vacancies > 0
                ).length
              }
            </strong>
          </div>

        </div>

        <div className="vacancy-role-grid">

          {vacancies.map((item) => (

            <div
              className={`vacancy-role-card ${
                selectedRole === item.id
                  ? "vacancy-role-card-selected"
                  : ""
              }`}
              key={item.id}
              onClick={() =>
                setSelectedRole(
                  selectedRole === item.id
                    ? null
                    : item.id
                )
              }
            >

              <div className="vacancy-role-top">

                <div>
                  <h2>{item.role}</h2>

                  <p>{item.company}</p>
                </div>

                <span className="active-badge">
                  {item.vacancies > 0
                    ? "Active"
                    : "Closed"}
                </span>

              </div>

              <div className="vacancy-count-section">

                <span>Available Vacancies</span>

                <div className="vacancy-counter">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseVacancy(item.id);
                    }}
                    disabled={item.vacancies === 0}
                  >
                    −
                  </button>

                  <strong>
                    {item.vacancies}
                  </strong>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      increaseVacancy(item.id);
                    }}
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="required-skills">

                <span>Required Skills</span>

                <div className="skill-tags">

                  {item.requiredSkills.map(
                    (skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

              <button
                className="view-candidates-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRole(item.id);
                }}
              >
                View Matching Candidates
              </button>

              {selectedRole === item.id && (

                <div className="candidate-preview">

                  <h3>
                    Matching Candidates
                  </h3>

                  {/* Candidate 1 */}
                  <div className="candidate-item">

                    <div className="candidate-info">

                      <strong>
                        Aarav Sharma
                      </strong>

                      <p>
                        Python • SQL • Machine Learning
                      </p>

                      <div className="candidate-skill-row">

                        <span className="skill-match">
                          Python ✓
                        </span>

                        <span className="skill-match">
                          SQL ✓
                        </span>

                        <span className="skill-match">
                          ML ✓
                        </span>

                        <span className="skill-missing">
                          TensorFlow ✕
                        </span>

                      </div>

                      <div className="candidate-match-bar">

                        <div
                          className="candidate-match-fill"
                          style={{ width: "91%" }}
                        ></div>

                      </div>

                    </div>

                    <div className="candidate-match">

                      <strong>91%</strong>

                      <span>
                        Skill Match
                      </span>

                    </div>

                  </div>


                  {/* Candidate 2 */}
                  <div className="candidate-item">

                    <div className="candidate-info">

                      <strong>
                        Neha Deshmukh
                      </strong>

                      <p>
                        Python • TensorFlow • SQL
                      </p>

                      <div className="candidate-skill-row">

                        <span className="skill-match">
                          Python ✓
                        </span>

                        <span className="skill-match">
                          TensorFlow ✓
                        </span>

                        <span className="skill-match">
                          SQL ✓
                        </span>

                        <span className="skill-missing">
                          Docker ✕
                        </span>

                      </div>

                      <div className="candidate-match-bar">

                        <div
                          className="candidate-match-fill"
                          style={{ width: "87%" }}
                        ></div>

                      </div>

                    </div>

                    <div className="candidate-match">

                      <strong>87%</strong>

                      <span>
                        Skill Match
                      </span>

                    </div>

                  </div>


                  {/* Candidate 3 */}
                  <div className="candidate-item">

                    <div className="candidate-info">

                      <strong>
                        Rohan Kulkarni
                      </strong>

                      <p>
                        Python • ML • Git
                      </p>

                      <div className="candidate-skill-row">

                        <span className="skill-match">
                          Python ✓
                        </span>

                        <span className="skill-match">
                          ML ✓
                        </span>

                        <span className="skill-missing">
                          TensorFlow ✕
                        </span>

                        <span className="skill-missing">
                          SQL ✕
                        </span>

                      </div>

                      <div className="candidate-match-bar">

                        <div
                          className="candidate-match-fill"
                          style={{ width: "82%" }}
                        ></div>

                      </div>

                    </div>

                    <div className="candidate-match">

                      <strong>82%</strong>

                      <span>
                        Skill Match
                      </span>

                    </div>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      </main>

    </div>
  );
};

export default FindCandidates;