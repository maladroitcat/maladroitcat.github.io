// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Update CSS variables when dark mode toggles
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--background', '#121212');
      root.style.setProperty('--text-color', '#e0e0e0');
      root.style.setProperty('--accent-color', 'var(--gold-accent)');
    } else {
      root.style.setProperty('--background', '#f5f5f5');
      root.style.setProperty('--text-color', '#333');
      root.style.setProperty('--accent-color', 'var(--bright-turquoise)');
    }
  }, [darkMode]);

  return (
    <Router>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
