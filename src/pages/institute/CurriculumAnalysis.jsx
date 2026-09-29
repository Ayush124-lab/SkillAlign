import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CurriculumAnalysis.css";

/*
  Prototype analysis based on the SPPU Second Year
  Computer Engineering 2024 Pattern syllabus.

  IMPORTANT:
  Every item belongs to ONLY ONE category.
*/

const curriculumAnalysis = {
  overallMatch: 74,

  // --------------------------------------------------
  // CATEGORY 1 — RELEVANT
  // --------------------------------------------------

  relevant: [
    {
      title: "Data Structures & Algorithms",

      syllabusSubtopics: [
        "Searching and Sorting",
        "Time & Space Complexity",
        "Stacks, Queues, Trees and Graphs",
      ],

      industryNeed:
        "High",

      recommendation:
        "Keep this area as a core part of the curriculum. Reduce emphasis on rarely used search variants and shift more teaching time toward problem solving, implementation and complexity analysis.",

      subtopicChange: [
        {
          name: "Fibonacci Search & Indexed Sequential Search",
          change:
            "Teach these briefly as algorithmic concepts instead of spending large practical time on implementation. Use the time saved for practical searching problems and algorithm selection."
        },
        {
          name: "Sorting Algorithms",
          change:
            "Continue Bubble, Insertion, Selection, Quick and Merge Sort, but evaluate students through implementation, complexity comparison and choosing an appropriate algorithm for a given problem."
        },
        {
          name: "Case Studies",
          change:
            "Convert case studies into coding-based assignments where students actually implement and benchmark the solution."
        }
      ]
    },

    {
      title: "Object Oriented Programming & Java",

      syllabusSubtopics: [
        "Classes and Objects",
        "Inheritance and Polymorphism",
        "Exception Handling",
        "Multithreading",
      ],

      industryNeed:
        "High",

      recommendation:
        "Keep Java and OOP as a strong foundation, but teach them through application development rather than isolated syntax-based programs.",

      subtopicChange: [
        {
          name: "Basic Java Syntax Exercises",
          change:
            "Reduce repetitive syntax programs and replace them with small application modules that use multiple OOP concepts together."
        },
        {
          name: "Inheritance & Polymorphism",
          change:
            "Teach these through realistic software design problems so students understand when and why the concepts are used."
        },
        {
          name: "Exception Handling & Multithreading",
          change:
            "Use application-level examples instead of only demonstrating syntax. Students should handle real failure cases and concurrent tasks."
        }
      ]
    },

    {
      title: "Database Management & SQL",

      syllabusSubtopics: [
        "Database Design",
        "ER Modeling",
        "SQL",
        "Normalization",
        "Transactions",
      ],

      industryNeed:
        "High",

      recommendation:
        "Keep DBMS as a core subject, but connect database theory directly to applications that students build.",

      subtopicChange: [
        {
          name: "ER / EER Modeling",
          change:
            "Teach schema design using realistic systems such as e-commerce, hospital or education platforms instead of only diagram-based examination questions."
        },
        {
          name: "SQL",
          change:
            "Increase practical work with joins, nested queries, aggregation, indexes and real datasets."
        },
        {
          name: "PL/SQL Exercises",
          change:
            "Keep the concepts, but connect procedures, functions and triggers to actual application requirements rather than isolated database exercises."
        }
      ]
    },

    {
      title: "Web Development",

      syllabusSubtopics: [
        "HTML",
        "CSS",
        "JavaScript",
        "DOM",
        "Client-Server Architecture",
      ],

      industryNeed:
        "High",

      recommendation:
        "Keep the existing web fundamentals but move the practical outcome from individual webpages toward complete web applications.",

      subtopicChange: [
        {
          name: "Nested Tables & Image Maps",
          change:
            "Keep these as basic HTML knowledge but reduce practical emphasis. Use the time for semantic HTML, responsive layouts and application-oriented interfaces."
        },
        {
          name: "CSS & Bootstrap",
          change:
            "Teach responsive design through complete interfaces rather than isolated styling exercises."
        },
        {
          name: "JavaScript & DOM",
          change:
            "Use JavaScript for real user interactions, form validation, dynamic data and API-connected interfaces."
        }
      ]
    }
  ],

  // --------------------------------------------------
  // CATEGORY 2 — DE-EMPHASIZE
  // Completely different topics from Category 1
  // --------------------------------------------------

  deEmphasize: [
    {
      title: "Advanced 2D/3D Graphics Transformations",

      sourceArea: "Object Oriented Programming & Computer Graphics",

      reason:
        "For a general Computer Engineering curriculum, deep graphics-specific mathematical implementation is less central than the software-development foundation already provided by the OOP component.",

      action:
        "Keep the fundamental concept and one practical demonstration, but reduce the amount of curriculum time dedicated to advanced graphics transformation exercises."
    },

    {
      title: "8086 Instruction Set & Addressing Modes",

      sourceArea: "Computer Organization & Microprocessor",

      reason:
        "The 8086 architecture provides useful understanding of processors, but detailed device-specific instruction practice has narrower applicability than general processor and computer-architecture concepts.",

      action:
        "Retain 8086 as a representative architecture for learning fundamentals, but reduce detailed instruction-by-instruction practice and emphasize architecture concepts that transfer across processor families."
    },

    {
      title: "Detailed Logic-Family Theory",

      sourceArea: "Digital Electronics & Logic Design",

      reason:
        "Students need digital-logic fundamentals, but detailed theoretical treatment of individual logic-family characteristics has lower relevance for students primarily targeting software roles.",

      action:
        "Keep the fundamental concepts needed for digital systems and computer architecture, but reduce detailed memorization-oriented treatment."
    },

    {
      title: "Detailed OS Structural Models",

      sourceArea: "Operating Systems",

      reason:
        "Understanding OS structures is important, but spending excessive practical time comparing structural models such as monolithic, layered and microkernel designs provides less direct value than hands-on operating-system usage.",

      action:
        "Teach the models conceptually and shift more classroom activity toward Linux, processes, threads, scheduling, memory and practical system interaction."
    }
  ],

  // --------------------------------------------------
  // CATEGORY 3 — ADD
  // Completely new areas
  // --------------------------------------------------

  add: [
    {
      title: "Git & Version Control",

      topics: [
        "Git Basics",
        "Branches",
        "Commits",
        "Pull Requests",
      ],

      reason:
        "Students should learn how software projects are maintained collaboratively instead of keeping source code only on individual machines.",

      implementation:
        "Use Git from the first major programming project. Require students to maintain repositories and submit projects through version-controlled workflows."
    },

    {
      title: "REST APIs & Application Integration",

      topics: [
        "HTTP Requests",
        "REST APIs",
        "JSON",
        "API Integration",
      ],

      reason:
        "Modern applications commonly communicate between frontend, backend and external services through APIs.",

      implementation:
        "Add API-based assignments where students consume and create simple APIs and connect them to their web applications."
    },

    {
      title: "Software Testing & Debugging",

      topics: [
        "Test Cases",
        "Debugging",
        "Validation",
        "Basic Automated Testing",
      ],

      reason:
        "Students need to verify whether their software works correctly instead of focusing only on whether the program compiles.",

      implementation:
        "Introduce testing into existing programming and project assignments. Students should submit test cases and demonstrate how bugs were identified and fixed."
    },

    {
      title: "Cloud Deployment & CI/CD Basics",

      topics: [
        "Cloud Fundamentals",
        "Application Deployment",
        "Build Pipelines",
        "CI/CD Basics",
      ],

      reason:
        "A practical software project should expose students to the basic path from development to a deployed application.",

      implementation:
        "Add a small deployment component to final projects where students build, test and deploy their application and document the deployment process."
    }
  ]
};

const CurriculumAnalysis = () => {
  const navigate = useNavigate();
  const [generated, setGenerated] = useState(false);

  const generateAnalysis = () => {
    setGenerated(true);
  };

  return (
    <div className="curriculum-analysis-page">

      {/* Navbar */}
      <nav className="curriculum-navbar">

        <div
          className="curriculum-back"
          onClick={() =>
            navigate("/institute/dashboard")
          }
        >
          ←
        </div>

        <div className="curriculum-logo">
          SkillAlign
        </div>

      </nav>

      <main className="curriculum-main">

        {/* Header */}
        <section className="curriculum-header">

          <span className="analysis-label">
            INSTITUTE CURRICULUM REVIEW
          </span>

          <h1>
            Curriculum Analysis
          </h1>

          <p>
            SkillAlign identifies which parts of the current
            curriculum should be retained, refined or supplemented
            to improve industry relevance.
          </p>

        </section>

        {/* Generate Card */}
        {!generated && (
          <section className="generate-card">

            <div>
              <h2>
                Analyse Curriculum
              </h2>

              <p>
                Generate a focused industry-alignment report
                instead of reviewing every syllabus topic.
              </p>
            </div>

            <button
              className="generate-analysis-btn"
              onClick={generateAnalysis}
            >
              Generate Curriculum Analysis
            </button>

          </section>
        )}

        {/* Results */}
        {generated && (
          <>

            {/* Overall Match */}
            <section className="alignment-card">

              <div className="alignment-info">

                <span className="section-label">
                  OVERALL CURRICULUM ALIGNMENT
                </span>

                <h2>
                  Industry Match
                </h2>

                <p>
                  The current curriculum shows a
                  <strong> {curriculumAnalysis.overallMatch}% </strong>
                  alignment with the industry-oriented skill
                  areas considered in this prototype.
                </p>

              </div>

              <div className="alignment-circle">

                <span>
                  {curriculumAnalysis.overallMatch}%
                </span>

                <small>
                  Match
                </small>

              </div>

            </section>

            {/* Category Navigation */}
            <section className="category-overview">

              <div className="category-card relevant-category">
                <span>01</span>

                <h3>
                  Relevant
                </h3>

                <p>
                  4 core areas to retain and strengthen.
                </p>
              </div>

              <div className="category-card reduce-category">
                <span>02</span>

                <h3>
                  De-emphasize
                </h3>

                <p>
                  4 areas where depth or time can be reduced.
                </p>
              </div>

              <div className="category-card add-category">
                <span>03</span>

                <h3>
                  Add
                </h3>

                <p>
                  4 areas that can strengthen industry readiness.
                </p>
              </div>

            </section>

            {/* ------------------------------------ */}
            {/* RELEVANT */}
            {/* ------------------------------------ */}

            <section className="analysis-section">

              <div className="section-heading">

                <span className="status-badge relevant-badge">
                  RETAIN & STRENGTHEN
                </span>

                <h2>
                  Relevant Curriculum Areas
                </h2>

                <p>
                  These areas are directly useful and should remain
                  important parts of the curriculum. The focus should
                  be on improving how their lower-value subtopics are
                  taught.
                </p>

              </div>

              <div className="analysis-grid">

                {curriculumAnalysis.relevant.map(
                  (item, index) => (

                    <article
                      className="analysis-card"
                      key={index}
                    >

                      <div className="card-top">

                        <h3>
                          {item.title}
                        </h3>

                        <span className="need-high">
                          {item.industryNeed} Industry Need
                        </span>

                      </div>

                      <p className="card-recommendation">
                        {item.recommendation}
                      </p>

                      <div className="subtopic-heading">
                        Subtopics to refine
                      </div>

                      <div className="subtopic-list">

                        {item.subtopicChange.map(
                          (subtopic, subIndex) => (

                            <div
                              className="subtopic-item"
                              key={subIndex}
                            >

                              <strong>
                                {subtopic.name}
                              </strong>

                              <p>
                                {subtopic.change}
                              </p>

                            </div>

                          )
                        )}

                      </div>

                    </article>

                  )
                )}

              </div>

            </section>

            {/* ------------------------------------ */}
            {/* DE-EMPHASIZE */}
            {/* ------------------------------------ */}

            <section className="analysis-section">

              <div className="section-heading">

                <span className="status-badge reduce-badge">
                  DE-EMPHASIZE
                </span>

                <h2>
                  Areas Where Depth Can Be Reduced
                </h2>

                <p>
                  These are separate curriculum areas where the
                  institute can reduce depth or teaching time while
                  preserving the underlying academic concept.
                </p>

              </div>

              <div className="analysis-grid">

                {curriculumAnalysis.deEmphasize.map(
                  (item, index) => (

                    <article
                      className="analysis-card reduce-card"
                      key={index}
                    >

                      <span className="source-area">
                        {item.sourceArea}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <div className="reason-box">

                        <strong>
                          Why reduce the emphasis?
                        </strong>

                        <p>
                          {item.reason}
                        </p>

                      </div>

                      <div className="action-box">

                        <strong>
                          What should the institute do?
                        </strong>

                        <p>
                          {item.action}
                        </p>

                      </div>

                    </article>

                  )
                )}

              </div>

            </section>

            {/* ------------------------------------ */}
            {/* ADD */}
            {/* ------------------------------------ */}

            <section className="analysis-section">

              <div className="section-heading">

                <span className="status-badge add-badge">
                  ADD
                </span>

                <h2>
                  Industry Skills to Add
                </h2>

                <p>
                  These areas are additional layers that can be
                  introduced without removing the existing
                  Computer Engineering foundation.
                </p>

              </div>

              <div className="analysis-grid">

                {curriculumAnalysis.add.map(
                  (item, index) => (

                    <article
                      className="analysis-card add-card"
                      key={index}
                    >

                      <h3>
                        {item.title}
                      </h3>

                      <div className="topic-tags">

                        {item.topics.map((topic) => (
                          <span key={topic}>
                            {topic}
                          </span>
                        ))}

                      </div>

                      <div className="reason-box">

                        <strong>
                          Why add this?
                        </strong>

                        <p>
                          {item.reason}
                        </p>

                      </div>

                      <div className="action-box">

                        <strong>
                          How to introduce it
                        </strong>

                        <p>
                          {item.implementation}
                        </p>

                      </div>

                    </article>

                  )
                )}

              </div>

            </section>

            {/* Final Action Plan */}
            <section className="final-action-card">

              <span className="section-label">
                INSTITUTE ACTION PLAN
              </span>

              <h2>
                Make the existing curriculum more industry-oriented
              </h2>

              <p>
                The objective is not to replace the academic
                foundation. The institute should retain strong
                fundamentals, reduce excessive depth in selected
                low-priority areas, modernize practical teaching
                and introduce missing software-development skills.
              </p>

              <div className="action-points">

                <div>
                  <span>01</span>
                  <p>
                    Retain the four core relevant areas.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Reduce depth only where industry applicability
                    is comparatively limited.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Add practical development and deployment skills.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <p>
                    Convert more existing theory into project-based
                    implementation.
                  </p>
                </div>

              </div>

            </section>

          </>
        )}

      </main>

    </div>
  );
};

export default CurriculumAnalysis;