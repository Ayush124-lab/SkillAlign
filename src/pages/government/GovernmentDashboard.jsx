import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GovernmentDashboard.css";

const districtData = {
  Pune: [
    {
      id: "pune-alpha",
      name: "Institute Alpha",
      program: "Computer Engineering",
      curriculum: 74,
      placement: 68,
      staff: 76,
      facilities: 71,
      eligibleStudents: 300,
      placedStudents: 204,
      requiredStaff: 22,
      availableStaff: 17,

      curriculumAreas: [
        "Cloud & deployment skills",
        "Modern software development practices",
        "Industry-oriented practical training",
      ],

      curriculumAction:
        "Add practical modules for cloud deployment and strengthen industry-oriented project work.",

      staffGaps: [
        "2 Software Development faculty",
        "1 Database Systems faculty",
        "2 Technical / Lab staff",
      ],

      equipmentGaps: [
        {
          name: "Computer Systems",
          required: 60,
          available: 48,
        },
        {
          name: "Cloud Training Systems",
          required: 20,
          available: 5,
        },
        {
          name: "Networking Equipment",
          required: 12,
          available: 7,
        },
        {
          name: "Software Testing Systems",
          required: 10,
          available: 3,
        },
      ],

      equipmentPriority: "High",

      availableFacilities: [
        "Computer Laboratory",
        "Internet Connectivity",
        "Classroom Infrastructure",
      ],

      facilityGaps: [
        "Networking Laboratory",
        "Advanced Software Training Facility",
      ],

      placementAreas: [
        "Lower placement in selected technical roles",
        "Need for stronger industry-readiness",
      ],
    },

    {
      id: "pune-nova",
      name: "Institute Nova",
      program: "Information Technology",
      curriculum: 61,
      placement: 52,
      staff: 64,
      facilities: 67,
      eligibleStudents: 260,
      placedStudents: 135,
      requiredStaff: 20,
      availableStaff: 13,

      curriculumAreas: [
        "Data analytics and visualization",
        "Application security",
        "Industry-based project exposure",
      ],

      curriculumAction:
        "Introduce stronger data analytics modules and improve practical security training.",

      staffGaps: [
        "2 Data Analytics faculty",
        "1 Cybersecurity faculty",
        "2 Technical / Lab staff",
        "2 Industry-oriented trainers",
      ],

      equipmentGaps: [
        {
          name: "Data Analytics Workstations",
          required: 50,
          available: 32,
        },
        {
          name: "Security Testing Systems",
          required: 15,
          available: 6,
        },
        {
          name: "Network Monitoring Equipment",
          required: 10,
          available: 4,
        },
        {
          name: "High-performance Computing Systems",
          required: 20,
          available: 11,
        },
      ],

      equipmentPriority: "High",

      availableFacilities: [
        "Computer Laboratory",
        "Basic Networking Laboratory",
        "Internet Connectivity",
      ],

      facilityGaps: [
        "Cybersecurity Training Lab",
        "Advanced Data Analytics Facility",
      ],

      placementAreas: [
        "Placement ratio below district average",
        "Limited exposure to industry projects",
        "Skill gaps in emerging technical roles",
      ],
    },
  ],

  Hyderabad: [
    {
      id: "hyderabad-horizon",
      name: "Institute Horizon",
      program: "Artificial Intelligence & Data Science",
      curriculum: 83,
      placement: 79,
      staff: 81,
      facilities: 74,
      eligibleStudents: 280,
      placedStudents: 221,
      requiredStaff: 24,
      availableStaff: 21,

      curriculumAreas: [
        "Advanced AI project exposure",
        "MLOps and deployment practices",
        "Industry datasets and real-world projects",
      ],

      curriculumAction:
        "Strengthen practical MLOps exposure and increase use of real-world industry datasets.",

      staffGaps: [
        "1 MLOps / Cloud faculty",
        "1 Industry Project mentor",
        "1 Technical / Lab staff",
      ],

      equipmentGaps: [
        {
          name: "GPU-enabled Systems",
          required: 30,
          available: 18,
        },
        {
          name: "Model Deployment Systems",
          required: 12,
          available: 5,
        },
        {
          name: "Data Storage Systems",
          required: 10,
          available: 6,
        },
        {
          name: "AI Development Workstations",
          required: 40,
          available: 31,
        },
      ],

      equipmentPriority: "Medium",

      availableFacilities: [
        "AI / Data Science Laboratory",
        "Computer Laboratory",
        "High-speed Internet",
      ],

      facilityGaps: [
        "Dedicated MLOps Training Facility",
        "Additional GPU Lab Capacity",
      ],

      placementAreas: [
        "Strong overall placement performance",
        "Need for more specialized AI industry exposure",
      ],
    },

    {
      id: "hyderabad-vertex",
      name: "Institute Vertex",
      program: "Electronics & Embedded Systems",
      curriculum: 69,
      placement: 57,
      staff: 72,
      facilities: 63,
      eligibleStudents: 240,
      placedStudents: 137,
      requiredStaff: 19,
      availableStaff: 14,

      curriculumAreas: [
        "IoT application development",
        "Embedded software practices",
        "Industry-oriented automation projects",
      ],

      curriculumAction:
        "Increase practical IoT and embedded development work with industry-oriented projects.",

      staffGaps: [
        "2 Embedded Systems faculty",
        "1 IoT faculty",
        "2 Laboratory staff",
      ],

      equipmentGaps: [
        {
          name: "Embedded Development Boards",
          required: 40,
          available: 24,
        },
        {
          name: "IoT Sensor Kits",
          required: 35,
          available: 19,
        },
        {
          name: "Automation Testing Systems",
          required: 12,
          available: 5,
        },
        {
          name: "Oscilloscopes",
          required: 10,
          available: 6,
        },
      ],

      equipmentPriority: "High",

      availableFacilities: [
        "Electronics Laboratory",
        "Basic Embedded Systems Lab",
        "Classroom Infrastructure",
      ],

      facilityGaps: [
        "Advanced IoT Laboratory",
        "Automation Training Facility",
      ],

      placementAreas: [
        "Lower placement in specialized embedded roles",
        "Limited industry exposure",
        "Need for stronger practical training",
      ],
    },
  ],
};

const GovernmentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedDistrict, setSelectedDistrict] = useState(
    location.state?.selectedDistrict || "Pune"
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const institutes = districtData[selectedDistrict];

  const handleLogout = () => {
    navigate("/government");
  };

  return (
    <div className="government-dashboard">

      <nav className="government-navbar">

        <div
          className="government-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className="government-logo">
          SkillAlign
        </div>

        <div className="government-role">
          Government
        </div>

      </nav>

      {menuOpen && (
        <>
          <div
            className="government-drawer-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="government-drawer">

            <div className="government-drawer-header">
              SkillAlign
            </div>

            <div
              className="government-drawer-item"
              onClick={() => {
                setMenuOpen(false);

                navigate("/government/dashboard", {
                  state: {
                    selectedDistrict,
                  },
                });
              }}
            >
              Dashboard
            </div>

            <div
              className="government-drawer-item"
              onClick={() => {
                setMenuOpen(false);
                setShowAccount(true);
              }}
            >
              Account Info
            </div>

            <div
              className="government-drawer-item government-logout"
              onClick={handleLogout}
            >
              Logout
            </div>

          </div>
        </>
      )}

      <main className="government-main">

        <section className="government-welcome">

          <span className="government-label">
            GOVERNMENT MONITORING
          </span>

          <h1>Government Dashboard</h1>

          <p>
            Monitor institutes, curriculum alignment,
            resources and placement outcomes across districts.
          </p>

        </section>

        <section className="government-district-section">

          <label htmlFor="district">
            Select District
          </label>

          <div className="government-select-wrapper">

            <select
              id="district"
              value={selectedDistrict}
              onChange={(e) =>
                setSelectedDistrict(e.target.value)
              }
            >
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>

          </div>

        </section>

        <section className="government-institutes-section">

          <div className="government-section-heading">

            <div>

              <h2>
                Institutes in {selectedDistrict}
              </h2>

              <p>
                Select an institute to view detailed information.
              </p>

            </div>

            <span className="government-institute-count">
              {institutes.length} Institutes
            </span>

          </div>

          <div className="government-institute-list">

            {institutes.map((institute) => (

              <div
                className="government-institute-card"
                key={institute.id}
              >

                <div className="government-institute-info">

                  <h3>{institute.name}</h3>

                  <p>{institute.program}</p>

                </div>

                <button
                  className="government-view-button"
                  onClick={() =>
                    navigate(
                      `/government/institute/${institute.id}`,
                      {
                        state: {
                          institute,
                          district: selectedDistrict,
                        },
                      }
                    )
                  }
                >
                  View Information
                  <span>→</span>
                </button>

              </div>

            ))}

          </div>

        </section>

      </main>

      {showAccount && (
        <div
          className="government-account-modal-overlay"
          onClick={() => setShowAccount(false)}
        >
          <div
            className="government-account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Account Information</h2>

            <div className="government-account-info">

              <div>
                <span>Department</span>
                <strong>Skill Development Department</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>government@example.com</strong>
              </div>

              <div>
                <span>Officer Role</span>
                <strong>
                  District Skill Development Officer
                </strong>
              </div>

              <div>
                <span>Region</span>
                <strong>Maharashtra</strong>
              </div>

            </div>

            <button
              className="government-account-close"
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

export { districtData };
export default GovernmentDashboard;