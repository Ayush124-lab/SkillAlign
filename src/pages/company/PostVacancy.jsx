import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostVacancy.css";

const PostVacancy = () => {
  const navigate = useNavigate();

  const [vacancy, setVacancy] = useState({
    jobRole: "",
    jobDescription: "",
    requiredSkills: "",
    preferredSkills: "",
    location: "",
    experience: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVacancy((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prototype storage
    localStorage.setItem(
      "skillAlignVacancy",
      JSON.stringify(vacancy)
    );

    setSaved(true);
  };

  return (
    <div className="post-vacancy-page">

      {/* Navbar */}
      <nav className="post-vacancy-navbar">

        <button
          className="post-vacancy-back"
          onClick={() => navigate("/company/dashboard")}
        >
          ←
        </button>

        <div className="post-vacancy-logo">
          SkillAlign
        </div>

      </nav>


      {/* Main */}
      <main className="post-vacancy-main">

        <div className="post-vacancy-header">
          <h1>Post a Vacancy</h1>

          <p>
            Create a job opportunity and define the skills
            required for the role.
          </p>
        </div>


        {/* Form */}
        {!saved ? (

          <form
            className="vacancy-form"
            onSubmit={handleSubmit}
          >

            {/* Job Role */}
            <div className="vacancy-form-group">

              <label>
                Job Role
              </label>

              <input
                type="text"
                name="jobRole"
                placeholder="e.g. AI/ML Engineer"
                value={vacancy.jobRole}
                onChange={handleChange}
              />

            </div>


            {/* Job Description */}
            <div className="vacancy-form-group">

              <label>
                Job Description
              </label>

              <textarea
                name="jobDescription"
                placeholder="Describe the role, responsibilities and work..."
                value={vacancy.jobDescription}
                onChange={handleChange}
                rows="5"
              />

            </div>


            {/* Required Skills */}
            <div className="vacancy-form-group">

              <label>
                Required Skills
              </label>

              <textarea
                name="requiredSkills"
                placeholder="e.g. Python, SQL, Machine Learning, TensorFlow"
                value={vacancy.requiredSkills}
                onChange={handleChange}
                rows="4"
              />

              <span className="vacancy-hint">
                Separate multiple skills using commas.
              </span>

            </div>


            {/* Preferred Skills */}
            <div className="vacancy-form-group">

              <label>
                Preferred Skills
              </label>

              <textarea
                name="preferredSkills"
                placeholder="e.g. Docker, AWS, Git"
                value={vacancy.preferredSkills}
                onChange={handleChange}
                rows="3"
              />

            </div>


            {/* Location + Experience */}
            <div className="vacancy-two-column">

              <div className="vacancy-form-group">

                <label>
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Pune / Remote"
                  value={vacancy.location}
                  onChange={handleChange}
                />

              </div>


              <div className="vacancy-form-group">

                <label>
                  Experience
                </label>

                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. 0–2 years"
                  value={vacancy.experience}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* Actions */}
            <div className="vacancy-actions">

              <button
                type="button"
                className="vacancy-cancel-btn"
                onClick={() =>
                  navigate("/company/dashboard")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="vacancy-submit-btn"
              >
                Save Vacancy
              </button>

            </div>

          </form>

        ) : (

          /* Success */
          <div className="vacancy-success">

            <div className="vacancy-success-icon">
              ✓
            </div>

            <h2>
              Vacancy Saved Successfully
            </h2>

            <p>
              Your vacancy has been added to SkillAlign.
            </p>

            <button
              onClick={() =>
                navigate("/company/dashboard")
              }
            >
              Back to Dashboard
            </button>

          </div>

        )}

      </main>

    </div>
  );
};

export default PostVacancy;