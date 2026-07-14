import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' }
];

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo">Atlas IT Solutions</div>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={(navData) => (navData.isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} Atlas IT Solutions · Full-stack delivery, cloud, and security services.
        </p>
      </footer>
    </div>
  );
}

export default App;
