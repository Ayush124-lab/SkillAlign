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

const candidateData = {
  1: [
    {
      name: "Aarav Sharma",
      skills: "Python • SQL • Machine Learning",
      matched: ["Python ✓", "SQL ✓", "ML ✓"],
      missing: ["TensorFlow ✕"],
      match: 91,
    },
    {
      name: "Ishita Kulkarni",
      skills: "Python • TensorFlow • SQL",
      matched: ["Python ✓", "TensorFlow ✓", "SQL ✓"],
      missing: ["Machine Learning ✕"],
      match: 86,
    },
    {
      name: "Kabir Mehta",
      skills: "Python • Machine Learning • TensorFlow",
      matched: ["Python ✓", "ML ✓", "TensorFlow ✓"],
      missing: ["SQL ✕"],
      match: 83,
    },
    {
      name: "Sneha Patil",
      skills: "Python • SQL • Statistics",
      matched: ["Python ✓", "SQL ✓"],
      missing: ["Machine Learning ✕", "TensorFlow ✕"],
      match: 74,
    },
  ],

  2: [
    {
      name: "Aditya Mehta",
      skills: "Python • Django • SQL • Git",
      matched: ["Python ✓", "Django ✓", "SQL ✓", "Git ✓"],
      missing: [],
      match: 94,
    },
    {
      name: "Kunal Shah",
      skills: "Python • Django • Git",
      matched: ["Python ✓", "Django ✓", "Git ✓"],
      missing: ["SQL ✕"],
      match: 88,
    },
    {
      name: "Meera Joshi",
      skills: "Python • SQL • Git",
      matched: ["Python ✓", "SQL ✓", "Git ✓"],
      missing: ["Django ✕"],
      match: 81,
    },
    {
      name: "Vivek Rao",
      skills: "Python • SQL • Java",
      matched: ["Python ✓", "SQL ✓"],
      missing: ["Django ✕", "Git ✕"],
      match: 73,
    },
  ],

  3: [
    {
      name: "Ananya Rao",
      skills: "Python • SQL • Excel • Power BI",
      matched: ["Python ✓", "SQL ✓", "Excel ✓", "Power BI ✓"],
      missing: [],
      match: 93,
    },
    {
      name: "Siddharth Joshi",
      skills: "SQL • Excel • Power BI",
      matched: ["SQL ✓", "Excel ✓", "Power BI ✓"],
      missing: ["Python ✕"],
      match: 87,
    },
    {
      name: "Megha Desai",
      skills: "Python • SQL • Statistics",
      matched: ["Python ✓", "SQL ✓"],
      missing: ["Excel ✕", "Power BI ✕"],
      match: 78,
    },
    {
      name: "Rahul Verma",
      skills: "Excel • Power BI • SQL",
      matched: ["Excel ✓", "Power BI ✓", "SQL ✓"],
      missing: ["Python ✕"],
      match: 76,
    },
  ],

  4: [
    {
      name: "Ishan Kapoor",
      skills: "JavaScript • React • HTML • CSS",
      matched: ["JavaScript ✓", "React ✓", "HTML ✓", "CSS ✓"],
      missing: [],
      match: 92,
    },
    {
      name: "Kavya Nair",
      skills: "HTML • CSS • React",
      matched: ["HTML ✓", "CSS ✓", "React ✓"],
      missing: ["JavaScript ✕"],
      match: 87,
    },
    {
      name: "Arjun Malhotra",
      skills: "JavaScript • React • CSS",
      matched: ["JavaScript ✓", "React ✓", "CSS ✓"],
      missing: ["HTML ✕"],
      match: 81,
    },
    {
      name: "Simran Kapoor",
      skills: "HTML • CSS • JavaScript",
      matched: ["HTML ✓", "CSS ✓", "JavaScript ✓"],
      missing: ["React ✕"],
      match: 75,
    },
  ],
};

const FindCandidates = () => {
  const navigate = useNavigate();

  const [vacancies, setVacancies] = useState(() => {
    const saved = localStorage.getItem("skillAlignVacancies");

    return saved ? JSON.parse(saved) : initialVacancies;
  });

  // Multiple vacancy cards can now stay open at the same time
  const [selectedRoles, setSelectedRoles] = useState([]);

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

  const toggleCandidates = (id) => {
    setSelectedRoles((prev) =>
      prev.includes(id)
        ? prev.filter((roleId) => roleId !== id)
        : [...prev, id]
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
                selectedRoles.includes(item.id)
                  ? "vacancy-role-card-selected"
                  : ""
              }`}
              key={item.id}
              onClick={() => toggleCandidates(item.id)}
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
                  toggleCandidates(item.id);
                }}
              >
                {selectedRoles.includes(item.id)
                  ? "Hide Candidates"
                  : "Review Candidates"}
              </button>

              {selectedRoles.includes(item.id) && (

                <div className="candidate-preview">

                  <h3>
                    Matching Candidates
                  </h3>

                  {candidateData[item.id].map(
                    (candidate) => (

                      <div
                        className="candidate-item"
                        key={candidate.name}
                      >

                        <div className="candidate-info">

                          <strong>
                            {candidate.name}
                          </strong>

                          <p>
                            {candidate.skills}
                          </p>

                          <div className="candidate-skill-row">

                            {candidate.matched.map(
                              (skill) => (
                                <span
                                  className="skill-match"
                                  key={skill}
                                >
                                  {skill}
                                </span>
                              )
                            )}

                            {candidate.missing.map(
                              (skill) => (
                                <span
                                  className="skill-missing"
                                  key={skill}
                                >
                                  {skill}
                                </span>
                              )
                            )}

                          </div>

                          <div className="candidate-match-bar">

                            <div
                              className="candidate-match-fill"
                              style={{
                                width: `${candidate.match}%`,
                              }}
                            ></div>

                          </div>

                        </div>

                        <div className="candidate-match">

                          <strong>
                            {candidate.match}%
                          </strong>

                          <span>
                            Skill Match
                          </span>

                        </div>

                      </div>

                    )
                  )}

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