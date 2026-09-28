import { useState } from 'react';

function RegisterForm({ role, roleLabel, fields, onSuccess }) {
  // Build initial form data from field definitions
  const initialData = {};
  fields.forEach((f) => {
    initialData[f.name] = '';
  });

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    fields.forEach((field) => {
      const value = formData[field.name];

      // Required check
      if (!value.trim()) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }

      // Email format
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors[field.name] = 'Enter a valid email address';
      }

      // Password length
      if (field.name === 'password' && value.length < 6) {
        newErrors[field.name] = 'Password must be at least 6 characters';
      }

      // Confirm password match
      if (field.name === 'confirmPassword' && value !== formData.password) {
        newErrors[field.name] = 'Passwords do not match';
      }
    });

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
    console.log(`[${roleLabel} Register]`, formData);
  };

  if (submitted) {
    return (
      <div className="auth-success">
        <span className="auth-success-icon">✓</span>
        <h3>Registration Successful</h3>
        <p>{roleLabel} account created. Dashboard coming soon.</p>
      </div>
    );
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      {fields.map((field) => (
        <div className="form-group" key={field.name}>
          <label htmlFor={`${role}-reg-${field.name}`} className="form-label">
            {field.label}
          </label>
          <input
            id={`${role}-reg-${field.name}`}
            name={field.name}
            type={field.type}
            className={`form-input ${errors[field.name] ? 'form-input--error' : ''}`}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
          />
          {errors[field.name] && (
            <span className="form-error">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <button type="submit" className="btn btn-primary btn-full">
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;
