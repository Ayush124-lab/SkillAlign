import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InstituteDashboard.css";

const InstituteDashboard = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleLogout = () => {
    navigate("/institute");
  };

  return (
    <div className="institute-dashboard">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="institute-navbar">

        <div
          className="institute-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className="institute-logo">
          SkillAlign
        </div>

      </nav>


      {/* =========================
          DRAWER
      ========================= */}

      {menuOpen && (
        <>
          <div
            className="institute-drawer-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="institute-drawer">

            <div className="institute-drawer-header">
              SkillAlign
            </div>

            <div
              className="institute-drawer-item"
              onClick={() => {
                setMenuOpen(false);
                navigate("/institute/dashboard");
              }}
            >
              Dashboard
            </div>

            <div
              className="institute-drawer-item"
              onClick={() => {
                setMenuOpen(false);
                setShowAccount(true);
              }}
            >
              Account Info
            </div>

            <div
              className="institute-drawer-item institute-logout"
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

      <main className="institute-main">

        <section className="institute-welcome">

          <h1>
            Welcome, Institute 👋
          </h1>

          <p>
            Analyze your curriculum against current industry skill requirements.
          </p>

        </section>


        {/* =========================
            DASHBOARD CARDS
        ========================= */}

        <section className="institute-card-grid">

          {/* UPLOAD SYLLABUS */}

          <div className="institute-action-card">

            <div className="institute-card-icon">
              📚
            </div>

            <h2>
              Upload Syllabus
            </h2>

            <p>
              Upload your institute's syllabus so SkillAlign can
              analyze it against industry requirements.
            </p>

            <button
              onClick={() => navigate("/institute/upload-syllabus")}
            >
              Upload Syllabus
            </button>

          </div>


          {/* CURRICULUM ANALYSIS */}

          <div className="institute-action-card">

            <div className="institute-card-icon">
              📊
            </div>

            <h2>
              Curriculum Analysis
            </h2>

            <p>
              Identify relevant topics, areas to modify and
              skills that should be added to the curriculum.
            </p>

            <button
              onClick={() => navigate("/institute/curriculum-analysis")}
            >
              Analyze Curriculum
            </button>

          </div>

        </section>

      </main>


      {/* =========================
          ACCOUNT MODAL
      ========================= */}

      {showAccount && (
        <div
          className="institute-account-modal-overlay"
          onClick={() => setShowAccount(false)}
        >

          <div
            className="institute-account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>
              Account Information
            </h2>

            <div className="institute-account-info">

              <div>
                <span>Institute Name</span>
                <strong>Wadia College of Engineering</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>institute@example.com</strong>
              </div>

              <div>
                <span>Program</span>
                <strong>Computer Engineering</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Pune, Maharashtra</strong>
              </div>

            </div>

            <button
              className="institute-account-close"
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

export default InstituteDashboard;