import React, { useState } from "react";
import "./style.css";

const Home = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  setTimeout(() => {
    setAnimationFinished(true);
  }, 3500);

  return (
    <>
      <div className="homeContainer">
        <div className="Container">
          <div className={animationFinished ? "firstLine" : "hideElements"}>
            Hi there !
          </div>
          <div className={animationFinished ? "secondLine" : "hideElements"}>
            I'm <span className="myName">Dorrah Alqwifel</span>
          </div>
          <div className={animationFinished ? "thirdLine" : "hideElements"}>
            a Full Stack Developer
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
