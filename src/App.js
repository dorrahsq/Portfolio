import React, { useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./app.css";
import { MdOutlineNightlight } from "react-icons/md";
import { BsSun } from "react-icons/bs";

function App() {
  const [nighttMode, setNighttMode] = useState(true);

  return (
    <div className={nighttMode ? "App" : "App-Light"}>
      <div className="modeContainer">
      <span
        className={nighttMode ? "mode nightMode" : "mode lightMode"}
        onClick={() => setNighttMode(!nighttMode)}
      >
        {nighttMode ? <MdOutlineNightlight /> : <BsSun />}
      </span>
      </div>
      <Home />
      <Projects />
      <Contact />
      <div className={nighttMode ? "backgroundStart" : "backgroundStartLight"}>
        <div className="shape1 animated"></div>
        <div className="shape2 animated"></div>
        <div className="shape3 animated"></div>
        <div className="shape4 animated"></div>
      </div>
    </div>
  );
}

export default App;
