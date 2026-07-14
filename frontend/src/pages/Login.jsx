import React, { useState } from 'react';
import apiClient from '../api/httpClient';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ loading: false, message: '', error: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: '', error: '' });

    try {
      const response = await apiClient.post('/login', form);
      setStatus({
        loading: false,
        message: response.data?.message || 'Login successful.',
        error: '',
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.email?.[0] ||
        'Unable to authenticate at this time. Please verify your credentials.';
      setStatus({ loading: false, message: '', error: message });
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-panel">
        <h2>Welcome back</h2>
        <p>Sign in with your work email to access project dashboards, invoices, and operational reports.</p>
        {status.message && <div className="status-banner message-success">{status.message}</div>}
        {status.error && <div className="status-banner message-error">{status.error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          <button type="submit" disabled={status.loading}>
            {status.loading ? 'Authenticating…' : 'Continue'}
          </button>
        </form>
        <p className="helper-text">Password must be at least 8 characters. Use a secure password manager for best results.</p>
      </div>
    </section>
  );
};

export default Login;
