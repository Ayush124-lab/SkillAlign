import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadSyllabus.css";

const UploadSyllabus = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prototype: no fields are compulsory
    const syllabusData = {
      fileName: file ? file.name : "No file uploaded",
      branch,
      targetRole: role,
    };

    localStorage.setItem(
      "skillAlignSyllabus",
      JSON.stringify(syllabusData)
    );

    navigate("/institute/curriculum-analysis");
  };

  return (
    <div className="upload-syllabus-page">

      {/* Navbar */}
      <nav className="upload-syllabus-navbar">

        <button
          className="upload-syllabus-back"
          onClick={() => navigate("/institute/dashboard")}
        >
          ←
        </button>

        <div className="upload-syllabus-logo">
          SkillAlign
        </div>

      </nav>


      {/* Main */}
      <main className="upload-syllabus-main">

        <div className="upload-syllabus-header">

          <h1>Upload Syllabus</h1>

          <p>
            Upload your existing curriculum so SkillAlign can
            compare it with current industry requirements.
          </p>

        </div>


        <form
          className="upload-syllabus-card"
          onSubmit={handleSubmit}
        >

          {/* Branch */}
          <div className="upload-form-group">

            <label>
              Branch / Program
            </label>

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">
                Select branch
              </option>

              <option value="Computer Engineering">
                Computer Engineering
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>

              <option value="Electronics and Telecommunication">
                Electronics and Telecommunication
              </option>
            </select>

          </div>


          {/* Target Role */}
          <div className="upload-form-group">

            <label>
              Target Industry Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">
                Select target role
              </option>

              <option value="AI/ML Engineer">
                AI/ML Engineer
              </option>

              <option value="Software Developer">
                Software Developer
              </option>

              <option value="Data Analyst">
                Data Analyst
              </option>

              <option value="Frontend Developer">
                Frontend Developer
              </option>
            </select>

          </div>


          {/* File Upload */}
          <div className="upload-form-group">

            <label>
              Syllabus File
            </label>

            <label className="syllabus-upload-box">

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />

              <span className="upload-icon">
                📄
              </span>

              <strong>
                {file
                  ? file.name
                  : "Click to upload syllabus"}
              </strong>

              <small>
                PDF, DOC or DOCX
              </small>

            </label>

          </div>


          {/* Submit */}
          <button
            type="submit"
            className="analyze-syllabus-btn"
          >
            Analyze Curriculum
          </button>

        </form>

      </main>

    </div>
  );
};

export default UploadSyllabus;