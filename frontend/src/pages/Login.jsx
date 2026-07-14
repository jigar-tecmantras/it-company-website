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
        error: ''
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.email?.[0] ||
        'Unable to authenticate at this time.';
      setStatus({ loading: false, message: '', error: message });
    }
  };

  return (
    <section className="auth-page">
      <h2>Login to your account</h2>
      {status.message && <div className="message-success">{status.message}</div>}
      {status.error && <div className="message-error">{status.error}</div>}
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
          {status.loading ? 'Authenticating…' : 'Login'}
        </button>
      </form>
      <p className="helper-text">We will only store your credentials securely for this session.</p>
    </section>
  );
};

export default Login;
