
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set the initial theme based on user preference (e.g., from local storage)
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModeEnabled);
  }, []);

  // Update the theme when darkMode state changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* means */}
        <div class="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Students</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Course</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Attendance</a>
            </li>
            <div classname="mx-3">
            <button type="button" class="btn btn-outline-danger">Login</button>
            </div>
            <div class="form-check form-switch ms-5">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mood</label>
          </div>
          </ul>
        </div>
        {/*end */}
      </div>

      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="form-check form-switch ms-5">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>

      {/* Rest of your application */}
      <h1>{darkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}</h1>
      {/* Other components and content */}
    </div>

    </nav>
</>
  );
}

export default App;
