import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import AuthPage from './components/auth/AuthPage';
import StudentDashboard from './pages/student/StudentDashboard';
import LearningRoadmap from "./pages/student/LearningRoadmap";
import RecommendedJobs from "./pages/student/RecommendedJobs";
import FutureOpportunities from "./pages/student/FutureOpportunities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Student */}
      <Route path="/student" element={<AuthPage role="student" />} />
      <Route path="/student/login" element={<AuthPage role="student" mode="login" />} />
      <Route path="/student/register" element={<AuthPage role="student" mode="register" />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />

      {/* Company */}
      <Route path="/company" element={<AuthPage role="company" />} />
      <Route path="/company/login" element={<AuthPage role="company" mode="login" />} />
      <Route path="/company/register" element={<AuthPage role="company" mode="register" />} />

      {/* Institute */}
      <Route path="/institute" element={<AuthPage role="institute" />} />
      <Route path="/institute/login" element={<AuthPage role="institute" mode="login" />} />
      <Route path="/institute/register" element={<AuthPage role="institute" mode="register" />} />

      {/* Government */}
      <Route path="/government" element={<AuthPage role="government" />} />
      <Route path="/government/login" element={<AuthPage role="government" mode="login" />} />
      <Route path="/government/register" element={<AuthPage role="government" mode="register" />} />
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
    </Routes>
  );
}

export default App;
