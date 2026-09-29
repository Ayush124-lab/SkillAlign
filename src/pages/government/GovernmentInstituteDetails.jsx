import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GovernmentInstituteDetails.css";

const GovernmentInstituteDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const institute = location.state?.institute;
  const district = location.state?.district || "District";

  if (!institute) {
    return (
      <div className="government-details-error">

        <h2>Institute information not found.</h2>

        <button
          onClick={() => navigate("/government/dashboard")}
        >
          Back to Government Dashboard
        </button>

      </div>
    );
  }

  return (
    <div className="government-details-page">

      <nav className="government-details-navbar">

        <button
          className="government-back-button"
          onClick={() =>
            navigate("/government/dashboard", {
              state: {
                selectedDistrict: district,
              },
            })
          }
        >
          ← Back to {district}
        </button>

        <div className="government-details-logo">
          SkillAlign
        </div>

        <span className="government-details-role">
          Government
        </span>

      </nav>

      <main className="government-details-main">

        <section className="government-institute-header">

          <span className="government-details-label">
            INSTITUTE INFORMATION
          </span>

          <h1>{institute.name}</h1>

          <p>{institute.program}</p>

        </section>

        {/* SUMMARY */}

        <section className="government-summary-grid">

          <div className="government-summary-card">
            <span>Curriculum</span>
            <strong>{institute.curriculum}%</strong>
            <small>Industry Alignment</small>
          </div>

          <div className="government-summary-card">
            <span>Placement</span>
            <strong>{institute.placement}%</strong>
            <small>Placement Ratio</small>
          </div>

          <div className="government-summary-card">
            <span>Staff</span>
            <strong>{institute.staff}%</strong>
            <small>Capacity</small>
          </div>

          <div className="government-summary-card">
            <span>Facilities</span>
            <strong>{institute.facilities}%</strong>
            <small>Readiness</small>
          </div>

        </section>


        {/* CURRICULUM */}

        <section className="government-detail-section">

          <div className="government-detail-heading">

            <span className="government-detail-icon">
              📚
            </span>

            <div>

              <h2>Curriculum Alignment</h2>

              <p>
                High-level comparison with current industry
                requirements.
              </p>

            </div>

          </div>

          <div className="government-detail-card">

            <div className="government-progress-row">

              <div>
                <span>Industry Alignment</span>
                <strong>
                  {institute.curriculum}%
                </strong>
              </div>

              <div className="government-progress">

                <div
                  style={{
                    width: `${institute.curriculum}%`,
                  }}
                ></div>

              </div>

            </div>

            <div className="government-subsection">

              <h3>Key Improvement Areas</h3>

              <ul>

                {institute.curriculumAreas.map(
                  (area, index) => (
                    <li key={index}>{area}</li>
                  )
                )}

              </ul>

            </div>

            <div className="government-recommendation">

              <span>Recommended Improvement</span>

              <p>
                {institute.curriculumAction}
              </p>

            </div>

          </div>

        </section>


        {/* PLACEMENT */}

        <section className="government-detail-section">

          <div className="government-detail-heading">

            <span className="government-detail-icon">
              📊
            </span>

            <div>

              <h2>Placement Overview</h2>

              <p>
                Rough placement outcome for the institute.
              </p>

            </div>

          </div>

          <div className="government-detail-card">

            <div className="government-stat-grid">

              <div>
                <span>Eligible Students</span>
                <strong>
                  {institute.eligibleStudents}
                </strong>
              </div>

              <div>
                <span>Placed Students</span>
                <strong>
                  {institute.placedStudents}
                </strong>
              </div>

              <div>
                <span>Placement Ratio</span>
                <strong>
                  {institute.placement}%
                </strong>
              </div>

            </div>

            <div className="government-subsection">

              <h3>Areas Requiring Attention</h3>

              <ul>

                {institute.placementAreas.map(
                  (area, index) => (
                    <li key={index}>{area}</li>
                  )
                )}

              </ul>

            </div>

          </div>

        </section>


        {/* STAFF */}

        <section className="government-detail-section">

          <div className="government-detail-heading">

            <span className="government-detail-icon">
              👨‍🏫
            </span>

            <div>

              <h2>Staff & Training Capacity</h2>

              <p>
                Compare staffing requirements with current
                availability.
              </p>

            </div>

          </div>

          <div className="government-detail-card">

            <div className="government-stat-grid">

              <div>
                <span>Required Staff</span>
                <strong>
                  {institute.requiredStaff}
                </strong>
              </div>

              <div>
                <span>Available Staff</span>
                <strong>
                  {institute.availableStaff}
                </strong>
              </div>

              <div>
                <span>Staff Capacity</span>
                <strong>
                  {institute.staff}%
                </strong>
              </div>

            </div>

            <div className="government-subsection">

              <h3>Current Staffing Gaps</h3>

              <ul>

                {institute.staffGaps.map(
                  (gap, index) => (
                    <li key={index}>{gap}</li>
                  )
                )}

              </ul>

            </div>

            <div className="government-warning-box">

              <strong>Staff Capacity Gap</strong>

              <p>
                Additional teaching and technical staff may
                be required to support current training capacity.
              </p>

            </div>

          </div>

        </section>


        {/* EQUIPMENT */}

        <section className="government-detail-section">

          <div className="government-detail-heading">

            <span className="government-detail-icon">
              🖥️
            </span>

            <div>

              <h2>Equipment & Training Resources</h2>

              <p>
                Compare required equipment with currently
                available resources.
              </p>

            </div>

          </div>

          <div className="government-detail-card">

            <div className="government-equipment-list">

              {institute.equipmentGaps.map(
                (equipment, index) => {

                  const shortage =
                    equipment.required -
                    equipment.available;

                  return (
                    <div
                      className="government-equipment-item"
                      key={index}
                    >

                      <span>!</span>

                      <div>

                        <strong>
                          {equipment.name}
                        </strong>

                        <p>
                          Required:{" "}
                          {equipment.required}
                          {" | "}
                          Available:{" "}
                          {equipment.available}
                          {" | "}
                          Shortage:{" "}
                          {shortage}
                        </p>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

            <div className="government-priority">

              <span>Recommended Priority</span>

              <strong>
                {institute.equipmentPriority}
              </strong>

            </div>

          </div>

        </section>


        {/* FACILITIES */}

        <section className="government-detail-section">

          <div className="government-detail-heading">

            <span className="government-detail-icon">
              🏢
            </span>

            <div>

              <h2>Facilities</h2>

              <p>
                Review available infrastructure and
                improvement requirements.
              </p>

            </div>

          </div>

          <div className="government-detail-card">

            <div className="government-facility-columns">

              <div>

                <h3>Available</h3>

                <ul className="government-available-list">

                  {institute.availableFacilities.map(
                    (facility, index) => (

                      <li key={index}>
                        <span>✓</span>
                        {facility}
                      </li>

                    )
                  )}

                </ul>

              </div>

              <div>

                <h3>Needs Improvement</h3>

                <ul className="government-gap-list">

                  {institute.facilityGaps.map(
                    (facility, index) => (

                      <li key={index}>
                        <span>!</span>
                        {facility}
                      </li>

                    )
                  )}

                </ul>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default GovernmentInstituteDetails;