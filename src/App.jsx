import './App.css';
import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import ProgramList from './Components/ProgramList';
import ProgramDetails from './Components/ProgramDetails';
import SubjectList from './Components/SubjectList';
import SubjectDetails from './Components/SubjectDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState('choice'); 
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-page">
          <div className="brand-side">
            <h1 className="brand-name">Friendability</h1>
            <div className="sub-brand">FuncTheFunction</div>
            <p className="brand-tagline">Connections made simple. Accessibility made personal.</p>
          </div>

          <div className="form-side">
            <div className="form-container" key={authMode}>
              
              {/* CHOICE SCREEN */}
              {authMode === 'choice' && (
                <div className="fade-in" style={{ textAlign: 'center' }}>
                  <h2>Welcome</h2>
                  <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>Choose an option to continue</p>
                  <button className="btn-primary" onClick={() => setAuthMode('login')}>Sign In</button>
                  <button className="btn-outline" onClick={() => setAuthMode('register')}>Create Account</button>
                </div>
              )}

              {/* LOGIN FORM */}
              {authMode === 'login' && (
                <div className="fade-in">
                  <span onClick={() => setAuthMode('choice')} className="back-link">← Back</span>
                  <h2>Sign In</h2>
                  <form onSubmit={handleLogin}>
                    <div className="input-field">
                      <label>Email</label>
                      <input type="email" placeholder="you@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-field">
                      <label>Password</label>
                      <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn-primary">Sign In</button>
                    
                    <div className="separator"><span>or</span></div>
                    
                    <button type="button" className="google-btn">
                      <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google Logo" />Sign in with Google</button>
                  </form>
                </div>
              )}

              {/* REGISTRATION FORM */}
              {authMode === 'register' && (
                <div className="fade-in">
                  <span onClick={() => setAuthMode('choice')} className="back-link">← Back</span>
                  <h2>Create Account</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setAuthMode('login'); }}>
                    <div className="input-field">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="input-field">
                      <label>Email</label>
                      <input type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="input-field">
                      <label>Password</label>
                      <input type="password" placeholder="Create password" required />
                    </div>
                    <div className="input-field">
                      <label>Confirm Password</label>
                      <input type="password" placeholder="Repeat password" required />
                    </div>
                    <button type="submit" className="btn-primary">Register Now</button>
                  </form>
                </div>
              )}

          </div>
          </div>
        </div>
      ) : (
        /* DASHBOARD VIEW */
        <div className="main-layout">
          <div className="sidebar">
            <div className="sidebar-header">
              <h2 className="brand-name" style={{fontSize: '1.5rem'}}>Friendability</h2>
              <div className="sub-brand" style={{fontSize: '0.7rem'}}>FuncTheFunction</div>
            </div>
            <div className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => {setActiveTab('dashboard'); setSelectedItem(null)}}>Dashboard</div>
            <div className={`nav-item ${activeTab === 'programs' ? 'active' : ''}`} onClick={() => {setActiveTab('programs'); setSelectedItem(null)}}>Programs</div>
            <div className={`nav-item ${activeTab === 'subjects' ? 'active' : ''}`} onClick={() => {setActiveTab('subjects'); setSelectedItem(null)}}>Subjects</div>
            <div className="nav-item logout" onClick={() => {setIsLoggedIn(false); setAuthMode('choice');}}>Logout</div>
          </div>

          <div className="content-area">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'programs' && (selectedItem ? <ProgramDetails program={selectedItem} onBack={() => setSelectedItem(null)} /> : <ProgramList onSelect={setSelectedItem} />)}
            {activeTab === 'subjects' && (selectedItem ? <SubjectDetails subject={selectedItem} onBack={() => setSelectedItem(null)} /> : <SubjectList onSelect={setSelectedItem} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;