import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyDashboard.css";

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleLogout = () => {
    navigate("/company");
  };

  return (
    <div className="company-dashboard">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="company-navbar">

        <div
          className="company-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className="company-logo">
          SkillAlign
        </div>

      </nav>


      {/* =========================
          DRAWER
      ========================= */}

      {menuOpen && (
        <>
          <div
            className="company-drawer-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="company-drawer">

            <div className="company-drawer-header">
              SkillAlign
            </div>

            <div
              className="company-drawer-item"
              onClick={() => {
                setMenuOpen(false);
                navigate("/company/dashboard");
              }}
            >
              Dashboard
            </div>

            <div
              className="company-drawer-item"
              onClick={() => {
                setMenuOpen(false);
                setShowAccount(true);
              }}
            >
              Account Info
            </div>

            <div
              className="company-drawer-item company-logout"
              onClick={handleLogout}
            >
              Logout
            </div>

          </div>
        </>
      )}


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="company-main">

        <section className="company-welcome">

          <h1>
            Welcome, TechCorp 👋
          </h1>

          <p>
            Find the right talent based on skill requirements.
          </p>

        </section>


        {/* =========================
            DASHBOARD CARDS
        ========================= */}

        <section className="company-card-grid">

          {/* POST VACANCY */}

          <div className="company-action-card">

            <div className="company-card-icon">
              📢
            </div>

            <h2>
              Post a Vacancy
            </h2>

            <p>
              Create a job opportunity and define the skills
              required for the role.
            </p>

            <button
              onClick={() => navigate("/company/post-vacancy")}
            >
              Post Vacancy
            </button>

          </div>


          {/* FIND CANDIDATES */}

          <div className="company-action-card">

            <div className="company-card-icon">
              👥
            </div>

            <h2>
              Find Candidates
            </h2>

            <p>
              Find students who match your vacancy requirements
              and skills.
            </p>

            <button
              onClick={() => navigate("/company/candidates")}
            >
              Find Candidates
            </button>

          </div>


          {/* APPLICANT INSIGHTS */}

          <div className="company-action-card">

            <div className="company-card-icon">
              📊
            </div>

            <h2>
              Applicant Insights
            </h2>

            <p>
              Understand common skill gaps among your applicants.
            </p>

            <button
              onClick={() => navigate("/company/applicant-insights")}
            >
              View Insights
            </button>

          </div>


          {/* INDUSTRY SKILL DEMAND */}

          <div className="company-action-card">

            <div className="company-card-icon">
              🔎
            </div>

            <h2>
              Industry Skill Demand
            </h2>

            <p>
              See which skills are currently demanded across
              job vacancies.
            </p>

            <button
              onClick={() => navigate("/company/skill-demand")}
            >
              View Demand
            </button>

          </div>

        </section>

      </main>


      {/* =========================
          ACCOUNT MODAL
      ========================= */}

      {showAccount && (
        <div
          className="company-account-modal-overlay"
          onClick={() => setShowAccount(false)}
        >

          <div
            className="company-account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>
              Account Information
            </h2>

            <div className="company-account-info">

              <div>
                <span>Company Name</span>
                <strong>TechCorp</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>company@example.com</strong>
              </div>

              <div>
                <span>Industry</span>
                <strong>Technology</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Pune, Maharashtra</strong>
              </div>

            </div>

            <button
              className="company-account-close"
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

export default CompanyDashboard;