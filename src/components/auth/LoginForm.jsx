import { useState } from 'react';

function LoginForm({ role, roleLabel, onSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prototype: no fields are compulsory
    if (onSuccess) {
      onSuccess();
      return;
    }

    setSubmitted(true);

    console.log(`[${roleLabel} Login]`, formData);
  };

  if (submitted) {
    return (
      <div className="auth-success">
        <span className="auth-success-icon">✓</span>

        <h3>Login Successful</h3>

        <p>
          Welcome back! {roleLabel} dashboard coming soon.
        </p>
      </div>
    );
  }

  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-group">
        <label
          htmlFor={`${role}-login-email`}
          className="form-label"
        >
          Email
        </label>

        <input
          id={`${role}-login-email`}
          name="email"
          type="email"
          className="form-input"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label
          htmlFor={`${role}-login-password`}
          className="form-label"
        >
          Password
        </label>

        <input
          id={`${role}-login-password`}
          name="password"
          type="password"
          className="form-input"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-full"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
