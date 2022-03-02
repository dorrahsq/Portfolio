import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Contact />
      <div className="backgroundStart">
        <div className="shape1 animated"></div>
        <div className="shape2 animated"></div>
        <div className="shape3 animated"></div>
        <div className="shape4 animated"></div>
      </div>
    </div>
  );
}

export default App;
