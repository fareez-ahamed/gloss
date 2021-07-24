import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";

function App() {
  const [number, setNumber] = useState<{ data: number }>();

  return (
    <div className="App">
      <p className={styles.test}>Test line</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
