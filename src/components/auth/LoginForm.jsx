import { useState } from 'react';

function LoginForm({ role, roleLabel, onSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If onSuccess is provided, skip validation and navigate directly
    if (onSuccess) {
      onSuccess();
      return;
    }
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    // Placeholder — no real auth yet
    console.log(`[${roleLabel} Login]`, formData);
  };

  if (submitted) {
    return (
      <div className="auth-success">
        <span className="auth-success-icon">✓</span>
        <h3>Login Successful</h3>
        <p>Welcome back! {roleLabel} dashboard coming soon.</p>
      </div>
    );
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor={`${role}-login-email`} className="form-label">
          Email
        </label>
        <input
          id={`${role}-login-email`}
          name="email"
          type="email"
          className={`form-input ${errors.email ? 'form-input--error' : ''}`}
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor={`${role}-login-password`} className="form-label">
          Password
        </label>
        <input
          id={`${role}-login-password`}
          name="password"
          type="password"
          className={`form-input ${errors.password ? 'form-input--error' : ''}`}
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="form-error">{errors.password}</span>}
      </div>

      <button type="submit" className="btn btn-primary btn-full">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
