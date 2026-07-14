import React, { useState } from 'react';
import apiClient from '../api/httpClient';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [status, setStatus] = useState({ loading: false, message: '', error: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: '', error: '' });

    try {
      const response = await apiClient.post('/register', form);
      setStatus({
        loading: false,
        message: response.data?.message || 'Registration complete. Check your email for confirmation.',
        error: '',
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        Object.values(error.response?.data?.errors || {})?.flat()?.[0] ||
        'Unable to register right now. Please verify your information.';
      setStatus({ loading: false, message: '', error: message });
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-panel">
        <h2>Create your Atlas IT account</h2>
        <p>
          Provide a few details so we can build a secure workspace for your team. You will receive a
          confirmation email after registration.
        </p>
        {status.message && <div className="status-banner message-success">{status.message}</div>}
        {status.error && <div className="status-banner message-error">{status.error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm password"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status.loading}>
            {status.loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>
        <p className="helper-text">Passwords must match and be at least 8 characters long.</p>
      </div>
    </section>
  );
};

export default Register;
