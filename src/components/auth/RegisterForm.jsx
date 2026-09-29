import { useState } from 'react';

function RegisterForm({ role, roleLabel, fields, onSuccess }) {
  const initialData = {};

  fields.forEach((field) => {
    initialData[field.name] = '';
  });

  const [formData, setFormData] = useState(initialData);
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

    console.log(`[${roleLabel} Register]`, formData);
  };

  if (submitted) {
    return (
      <div className="auth-success">
        <span className="auth-success-icon">✓</span>

        <h3>Registration Successful</h3>

        <p>
          {roleLabel} account created. Dashboard coming soon.
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
      {fields.map((field) => (
        <div
          className="form-group"
          key={field.name}
        >
          <label
            htmlFor={`${role}-reg-${field.name}`}
            className="form-label"
          >
            {field.label}
          </label>

          <input
            id={`${role}-reg-${field.name}`}
            name={field.name}
            type={field.type}
            className="form-input"
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}

      <button
        type="submit"
        className="btn btn-primary btn-full"
      >
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;
