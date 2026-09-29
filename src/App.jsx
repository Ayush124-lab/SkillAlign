import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing/LandingPage';
import AuthPage from './components/auth/AuthPage';

import StudentDashboard from './pages/student/StudentDashboard';
import LearningRoadmap from "./pages/student/LearningRoadmap";
import RecommendedJobs from "./pages/student/RecommendedJobs";
import FutureOpportunities from "./pages/student/FutureOpportunities";

import CompanyDashboard from "./pages/company/CompanyDashboard";
import PostVacancy from "./pages/company/PostVacancy";
import FindCandidates from "./pages/company/FindCandidates";
import ApplicantInsights from "./pages/company/ApplicantInsights";
import InstituteDashboard from "./pages/institute/InstituteDashboard";
import UploadSyllabus from "./pages/institute/UploadSyllabus";
// import IndustrySkillDemand from "./pages/company/IndustrySkillDemand";
import CurriculumAnalysis from "./pages/institute/CurriculumAnalysis";
function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />


      {/* =========================
          STUDENT
      ========================= */}

      <Route
        path="/student"
        element={<AuthPage role="student" />}
      />

      <Route
        path="/student/login"
        element={
          <AuthPage
            role="student"
            mode="login"
          />
        }
      />

      <Route
        path="/student/register"
        element={
          <AuthPage
            role="student"
            mode="register"
          />
        }
      />

      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      <Route
        path="/student/roadmap"
        element={<LearningRoadmap />}
      />

      <Route
        path="/student/jobs"
        element={<RecommendedJobs />}
      />

      <Route
        path="/student/future-opportunities"
        element={<FutureOpportunities />}
      />


      {/* =========================
          COMPANY
      ========================= */}

      <Route
        path="/company"
        element={<AuthPage role="company" />}
      />

      <Route
        path="/company/login"
        element={
          <AuthPage
            role="company"
            mode="login"
          />
        }
      />

      <Route
        path="/company/register"
        element={
          <AuthPage
            role="company"
            mode="register"
          />
        }
      />

      <Route
        path="/company/dashboard"
        element={<CompanyDashboard />}
      />

      <Route
        path="/company/post-vacancy"
        element={<PostVacancy />}
      />

      <Route
        path="/company/candidates"
        element={<FindCandidates />}
      />


      {/* =========================
          INSTITUTE
      ========================= */}

      <Route
        path="/institute"
        element={<AuthPage role="institute" />}
      />

      <Route
        path="/institute/login"
        element={
          <AuthPage
            role="institute"
            mode="login"
          />
        }
      />

      <Route
        path="/institute/register"
        element={
          <AuthPage
            role="institute"
            mode="register"
          />
        }
      />


      {/* =========================
          GOVERNMENT
      ========================= */}

      <Route
        path="/government"
        element={<AuthPage role="government" />}
      />

      <Route
        path="/government/login"
        element={
          <AuthPage
            role="government"
            mode="login"
          />
        }
      />

      <Route
        path="/government/register"
        element={
          <AuthPage
            role="government"
            mode="register"
          />
        }
      />
      <Route
  path="/company/applicant-insights"
  element={<ApplicantInsights />}
/>
    <Route
      path="/institute/dashboard"
      element={<InstituteDashboard />}
    />
    <Route
      path="/institute/upload-syllabus"
      element={<UploadSyllabus />}
    />
    {/* <Route
    path="/company/skill-demand"
    element={<IndustrySkillDemand />}
  /> */}
  <Route
  path="/institute/curriculum-analysis"
  element={<CurriculumAnalysis />}
/>

    </Routes>
  );
}

export default App;