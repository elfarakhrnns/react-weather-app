import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://inspiring-puppy-8608c9.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Elfara Khairunnisa
          </a>{" "}
          and is open-sourced in{" "}
          <a
            href="https://github.com/elfarakhrnns/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
