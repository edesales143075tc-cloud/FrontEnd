import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Welcome to Friendability:", email);
  };

  return (
    <div className="login-page">
      {/* Visual Brand Section */}
      <div className="brand-side">
        <h1 className="brand-name">Friendability</h1>
        <p className="brand-tagline">
          Connections made simple. Accessibility made personal.
        </p>
      </div>

      {/* Clear Interaction Section */}
      <div className="form-side">
        <div className="form-container">
          <h2>Login</h2>
          <p>Securely access your Friendability account.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9rem' }}>
            <span style={{ color: '#8b949e' }}>Don't have an account? </span>
            <a href="#" style={{ color: '#00d2ff', textDecoration: 'none', fontWeight: 'bold' }}>Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;