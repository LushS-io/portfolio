import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Troy Kirin's Portfolio.</p>
        <a
          className="App-link"
          href="https://github.com/troykirin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See GitHub Pages
        </a>
      </header>
    </div>
  );
}

export default App;
