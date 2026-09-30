import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import roleConfig from './roleConfig';
import './AuthPage.css';

function AuthPage({ role, mode: modeProp }) {
  const navigate = useNavigate();

  const config = roleConfig[role];

  const mode = modeProp || 'login';
  const isLogin = mode === 'login';

  const dashboardPath =
    role === 'student'
      ? '/student/dashboard'
      : role === 'company'
        ? '/company/dashboard'
        : role === 'institute'
          ? '/institute/dashboard'
          : role === 'government'
            ? '/government/dashboard'
            : null;

  const handleSuccess = dashboardPath
    ? () => navigate(dashboardPath)
    : undefined;

  const switchMode = (newMode) => {
    navigate(`/${role}/${newMode}`, {
      replace: true,
    });
  };

  return (
    <div className="auth-page">
      <Navbar />

      <main className="auth-main">
        <div className="auth-container">

          <div className="auth-header">

            <span className="auth-role-icon">
              {config.icon}
            </span>

            <h1 className="auth-title">
              {config.label}{' '}
              {isLogin ? 'Login' : 'Registration'}
            </h1>

            <p className="auth-subtitle">
              {isLogin
                ? `Sign in to your ${config.label} account`
                : `Create a new ${config.label} account`}
            </p>

          </div>

          <div className="auth-toggle">

            <button
              className={`auth-toggle-btn ${
                isLogin ? 'auth-toggle-btn--active' : ''
              }`}
              onClick={() => switchMode('login')}
            >
              Login
            </button>

            <button
              className={`auth-toggle-btn ${
                !isLogin ? 'auth-toggle-btn--active' : ''
              }`}
              onClick={() => switchMode('register')}
            >
              Register
            </button>

          </div>

          {isLogin ? (
            <LoginForm
              role={role}
              roleLabel={config.label}
              onSuccess={handleSuccess}
            />
          ) : (
            <RegisterForm
              role={role}
              roleLabel={config.label}
              fields={config.fields}
              onSuccess={handleSuccess}
            />
          )}

          <p className="auth-switch">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  className="auth-link"
                  onClick={() => switchMode('register')}
                >
                  Register here
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  className="auth-link"
                  onClick={() => switchMode('login')}
                >
                  Login here
                </button>
              </>
            )}
          </p>

          {/* BACK TO ROLES */}
          <button
            className="auth-back-to-roles"
            onClick={() => navigate('/')}
          >
            ← Back to roles
          </button>

        </div>
      </main>
    </div>
  );
}

export default AuthPage;