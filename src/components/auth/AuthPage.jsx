import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import roleConfig from './roleConfig';
import './AuthPage.css';

function AuthPage({ role, mode: modeProp }) {
  const navigate = useNavigate();
  const location = useLocation();

  const config = roleConfig[role];
  // Default to login when visiting /{role} directly
  const mode = modeProp || 'login';

  const isLogin = mode === 'login';

  // Roles that have a dashboard ready get an onSuccess callback
  const dashboardPath = role === 'student' ? `/${role}/dashboard` : null;
  const handleSuccess = dashboardPath ? () => navigate(dashboardPath) : undefined;

  const switchMode = (newMode) => {
    navigate(`/${role}/${newMode}`, { replace: true });
  };

  return (
    <div className="auth-page">
      <Navbar />

      <main className="auth-main">
        <div className="auth-container">
          {/* Header */}
          <div className="auth-header">
            <button className="auth-back" onClick={() => navigate('/')}>
              ← Back to roles
            </button>
            <span className="auth-role-icon">{config.icon}</span>
            <h1 className="auth-title">
              {config.label} {isLogin ? 'Login' : 'Registration'}
            </h1>
            <p className="auth-subtitle">
              {isLogin
                ? `Sign in to your ${config.label} account`
                : `Create a new ${config.label} account`}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="auth-toggle">
            <button
              className={`auth-toggle-btn ${isLogin ? 'auth-toggle-btn--active' : ''}`}
              onClick={() => switchMode('login')}
            >
              Login
            </button>
            <button
              className={`auth-toggle-btn ${!isLogin ? 'auth-toggle-btn--active' : ''}`}
              onClick={() => switchMode('register')}
            >
              Register
            </button>
          </div>

          {/* Form */}
          {isLogin ? (
            <LoginForm role={role} roleLabel={config.label} onSuccess={handleSuccess} />
          ) : (
            <RegisterForm
              role={role}
              roleLabel={config.label}
              fields={config.fields}
              onSuccess={handleSuccess}
            />
          )}

          {/* Switch Prompt */}
          <p className="auth-switch">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button className="auth-link" onClick={() => switchMode('register')}>
                  Register here
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="auth-link" onClick={() => switchMode('login')}>
                  Login here
                </button>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
