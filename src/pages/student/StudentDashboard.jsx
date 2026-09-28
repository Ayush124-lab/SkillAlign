import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showCareerGoal, setShowCareerGoal] = useState(false);

  // =========================
  // CAREER GOAL
  // =========================

  const [careerGoal, setCareerGoal] = useState("Data Scientist");

  const careerOptions = [
    "Software Developer",
    "AI/ML Engineer",
    "Data Scientist",
    "Data Analyst",
    "Web Developer",
    "Mobile App Developer",
    "Cybersecurity Engineer",
    "Cloud Engineer",
    "Other",
  ];

  // =========================
  // STUDENT SKILLS
  // =========================

  const [skills, setSkills] = useState({
    programming: "Python, C++, Java",
    frameworks: "React, Flutter",
    databases: "MySQL",
    tools: "Git, Firebase",
    experience:
      "Built a Flutter event management app and a Python machine learning project.",
  });

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    navigate("/student");
  };

  // =========================
  // SAVE SKILLS
  // =========================

  const handleSkillsChange = (field, value) => {
    setSkills((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // =========================
  // DUMMY DATA
  // =========================

  const skillMatch = 68;

  const strengths = [
    "Python",
    "SQL",
    "Problem Solving",
  ];

  const missingSkills = [
    "Deep Learning",
    "TensorFlow",
    "Docker",
  ];

  const skillGapData = [
    {
      skill: "Python",
      level: "Strong",
      gap: "Low",
      priority: "Low",
    },
    {
      skill: "SQL",
      level: "Good",
      gap: "Low",
      priority: "Low",
    },
    {
      skill: "TensorFlow",
      level: "None",
      gap: "High",
      priority: "High",
    },
    {
      skill: "Docker",
      level: "Basic",
      gap: "Medium",
      priority: "Medium",
    },
  ];

  const jobs = [
    {
      role: "Python Developer Intern",
      company: "TechCorp",
      match: 91,
      missing: "Docker",
    },
    {
      role: "Data Analyst Intern",
      company: "DataWorks",
      match: 86,
      missing: "Advanced SQL",
    },
    {
      role: "ML Intern",
      company: "InnovateLabs",
      match: 78,
      missing: "TensorFlow",
    },
  ];

  const futureOpportunities = [
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
    <div className="student-dashboard">

      {/* =========================
          NAVBAR
      ========================= */}

      <div className="dashboard-navbar">

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="navbar-logo">
          SkillAlign
        </div>

      </div>


      {/* =========================
          SIDE DRAWER
      ========================= */}

      {menuOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="side-drawer">

            <div className="drawer-header">
              <h2>SkillAlign</h2>
            </div>

            <div className="drawer-content">

              <button
                className="drawer-item"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/student/dashboard");
                }}
              >
                🏠 Dashboard
              </button>

              <button
                className="drawer-item"
                onClick={() => {
                  setMenuOpen(false);
                  setShowAccount(true);
                }}
              >
                👤 Account Info
              </button>

              <button
                className="drawer-item logout-item"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>

            </div>
          </div>
        </>
      )}


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="dashboard-content">

        {/* Greeting */}

        <div className="dashboard-greeting">
          <h1>Hello Ramesh 👋</h1>

          <p>
            Track your skills, discover opportunities and build your career.
          </p>
        </div>


        {/* =========================
            CAREER GOAL
        ========================= */}

        <div className="career-goal-section">

          <div>
            <span className="career-goal-label">
              YOUR CAREER GOAL
            </span>

            <h2>{careerGoal}</h2>

            <p>
              Select the role you want SkillAlign to prepare you for.
            </p>
          </div>

          <button
            className="career-goal-button"
            onClick={() => setShowCareerGoal(true)}
          >
            Change Career Goal
          </button>

        </div>


        {/* =========================
            SKILL MATCH
        ========================= */}

        <div className="skill-match-card">

          <div className="skill-match-info">

            <span className="section-label">
              YOUR CURRENT SKILL MATCH
            </span>

            <h2>
              How close are you to your target role?
            </h2>

            <p>
              Based on your current skills and the skills required
              for your selected career goal.
            </p>

            <div className="target-role-display">
              Target Role: <strong>{careerGoal}</strong>
            </div>

          </div>


          <div className="skill-circle">

            <div className="skill-circle-inner">
              <span>{skillMatch}%</span>
              <small>Skill Match</small>
            </div>

          </div>

        </div>


        {/* =========================
            DASHBOARD CARDS
        ========================= */}

        <div className="dashboard-grid">


          {/* MY SKILLS */}

          <div className="dashboard-card">

            <div className="card-icon">
              🧠
            </div>

            <h3>My Skills</h3>

            <p>
              View and update your current technical skills,
              experience and projects.
            </p>

            <button
              className="card-button"
              onClick={() => setShowSkills(true)}
            >
              View / Edit My Skills
            </button>

          </div>


          {/* ANALYZE SKILLS */}

          <div className="dashboard-card">

            <div className="card-icon">
              📊
            </div>

            <h3>Analyze Your Skills</h3>

            <p>
              Understand your strengths, weaknesses and
              skill gaps for your target role.
            </p>

            <button
              className="card-button"
              onClick={() => setShowAnalysis(true)}
            >
              Analyze Skills
            </button>

          </div>


          {/* ROADMAP */}

          <div className="dashboard-card">

            <div className="card-icon">
              🗺️
            </div>

            <h3>Personalized Learning Roadmap</h3>

            <p>
              Follow a step-by-step roadmap based on the
              skills required for your career goal.
            </p>

            <button
  className="card-button"
  onClick={() => navigate("/student/roadmap")}
>
  View Roadmap
</button>

          </div>


          {/* RECOMMENDED JOBS */}

          <div className="dashboard-card">

            <div className="card-icon">
              💼
            </div>

            <h3>Recommended Jobs</h3>

            <p>
              Find job opportunities that match your
              current skills.
            </p>

            <button
              className="card-button"
              onClick={() => navigate("/student/jobs")}
            >
              View Jobs
            </button>

          </div>


          {/* FUTURE OPPORTUNITIES */}

          <div className="dashboard-card future-card">

            <div className="card-icon">
              🚀
            </div>

            <h3>Future Opportunities</h3>

            <p>
              Explore potential roles and companies you
              could target after completing your roadmap.
            </p>

            <button
              className="card-button"
              onClick={() => navigate("/student/future-opportunities")}
            >
              Explore Opportunities
            </button>

          </div>

        </div>

      </main>


      {/* =====================================================
          CAREER GOAL MODAL
      ===================================================== */}

      {showCareerGoal && (

        <div
          className="modal-overlay"
          onClick={() => setShowCareerGoal(false)}
        >

          <div
            className="career-goal-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Select Your Career Goal</h2>

            <p>
              Choose the role you want SkillAlign to analyze
              your skills for.
            </p>


            <div className="career-options">

              {careerOptions.map((role) => (

                <button
                  key={role}
                  className={`career-option ${
                    careerGoal === role ? "selected" : ""
                  }`}
                  onClick={() => {
                    setCareerGoal(role);
                    setShowCareerGoal(false);
                  }}
                >
                  {role}
                </button>

              ))}

            </div>


            <button
              className="career-modal-close"
              onClick={() => setShowCareerGoal(false)}
            >
              Cancel
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          MY SKILLS MODAL
      ===================================================== */}

      {showSkills && (

        <div
          className="modal-overlay"
          onClick={() => setShowSkills(false)}
        >

          <div
            className="skills-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>My Skills</h2>

            <p>
              Update your current skills and experience.
            </p>


            <div className="skills-form">

              <label>
                Programming Languages
              </label>

              <input
                value={skills.programming}
                onChange={(e) =>
                  handleSkillsChange(
                    "programming",
                    e.target.value
                  )
                }
              />


              <label>
                Frameworks / Libraries
              </label>

              <input
                value={skills.frameworks}
                onChange={(e) =>
                  handleSkillsChange(
                    "frameworks",
                    e.target.value
                  )
                }
              />


              <label>
                Databases
              </label>

              <input
                value={skills.databases}
                onChange={(e) =>
                  handleSkillsChange(
                    "databases",
                    e.target.value
                  )
                }
              />


              <label>
                Tools & Technologies
              </label>

              <input
                value={skills.tools}
                onChange={(e) =>
                  handleSkillsChange(
                    "tools",
                    e.target.value
                  )
                }
              />


              <label>
                Projects / Experience
              </label>

              <textarea
                value={skills.experience}
                onChange={(e) =>
                  handleSkillsChange(
                    "experience",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="modal-actions">

              <button
                className="secondary-button"
                onClick={() => setShowSkills(false)}
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={() => setShowSkills(false)}
              >
                Save Skills
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          ANALYSIS MODAL
      ===================================================== */}

      {showAnalysis && (

        <div
          className="modal-overlay"
          onClick={() => setShowAnalysis(false)}
        >

          <div
            className="analysis-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Skill Analysis</h2>

            <p>
              Analysis for target role:
              <strong> {careerGoal}</strong>
            </p>


            {/* STRENGTHS */}

            <div className="analysis-section">

              <h3>Your Strengths</h3>

              <div className="analysis-tags">

                {strengths.map((skill) => (
                  <span key={skill}>
                    ✓ {skill}
                  </span>
                ))}

              </div>

            </div>


            {/* MISSING SKILLS */}

            <div className="analysis-section">

              <h3>Skills You Need To Improve</h3>

              <div className="analysis-tags missing">

                {missingSkills.map((skill) => (
                  <span key={skill}>
                    + {skill}
                  </span>
                ))}

              </div>

            </div>


            {/* SKILL GAP TABLE */}

            <div className="analysis-section">

              <h3>Skill Gap</h3>

              <div className="skill-table-wrapper">

                <table className="skill-table">

                  <thead>
                    <tr>
                      <th>Required Skill</th>
                      <th>Current Level</th>
                      <th>Gap</th>
                      <th>Priority</th>
                    </tr>
                  </thead>

                  <tbody>

                    {skillGapData.map((item) => (

                      <tr key={item.skill}>

                        <td>{item.skill}</td>

                        <td>{item.level}</td>

                        <td>{item.gap}</td>

                        <td>{item.priority}</td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>


            {/* ROADMAP */}

            <div className="analysis-section">

              <h3>Recommended Roadmap</h3>

              <ol className="roadmap-list">

                <li>
                  <strong>Strengthen Python</strong>
                  <span>
                    Revise advanced Python, OOP and
                    problem solving.
                  </span>
                </li>

                <li>
                  <strong>Learn NumPy & Pandas</strong>
                  <span>
                    Build strong data manipulation skills.
                  </span>
                </li>

                <li>
                  <strong>Learn Machine Learning</strong>
                  <span>
                    Understand regression, classification
                    and model evaluation.
                  </span>
                </li>

                <li>
                  <strong>Learn TensorFlow</strong>
                  <span>
                    Start practical deep learning projects.
                  </span>
                </li>

                <li>
                  <strong>Learn Docker</strong>
                  <span>
                    Learn how to package and deploy
                    applications.
                  </span>
                </li>

                <li>
                  <strong>Build 2–3 Portfolio Projects</strong>
                  <span>
                    Create projects demonstrating your
                    target-role skills.
                  </span>
                </li>

                <li>
                  <strong>Start Applying</strong>
                  <span>
                    Apply to relevant internships and jobs.
                  </span>
                </li>

              </ol>

            </div>


            <button
              className="primary-button full-width"
              onClick={() => setShowAnalysis(false)}
            >
              Close Analysis
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          ACCOUNT MODAL
      ===================================================== */}

      {showAccount && (

        <div
          className="modal-overlay"
          onClick={() => setShowAccount(false)}
        >

          <div
            className="account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Account Information</h2>

            <div className="account-info">

              <div>
                <span>Name</span>
                <strong>Ramesh Kumar</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>ramesh@example.com</strong>
              </div>

              <div>
                <span>College</span>
                <strong>Wadia College of Engineering</strong>
              </div>

              <div>
                <span>Career Goal</span>
                <strong>{careerGoal}</strong>
              </div>

            </div>


            <button
              className="primary-button full-width"
              onClick={() => setShowAccount(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default StudentDashboard;