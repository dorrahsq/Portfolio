import React, { useState } from "react";
import "./style.css";
import "./../../../node_modules/react-modal-video/scss/modal-video.scss";
import { TiExport } from "react-icons/ti";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import Tooltip from "@mui/material/Tooltip";
import ModalVideo from "react-modal-video";
import coderImage from "./../../photos/coder.png";
import frameItImage from "./../../photos/insta.png";
import perfectViewImage from "./../../photos/perfectView.png";
import coderVideo from "./../../videos/coder.mp4";
import frameItVideo from "./../../videos/framIt.mp4";
import perfectViewVideo from "./../../videos/perfectView.mp4";

const Projects = () => {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState(coderVideo);

  const projects = {
    projeect1: {
      headLine: "Coder Website",
      websiteDescription: "An online learning and teaching marketplace",
      usedTech: "HTML, CSS, JavaScript, jQuery",
      image: coderImage,
      videoUrl: coderVideo,
    },
    projeect2: {
      headLine: "FramIt Website",
      websiteDescription:
        "An online photo-sharing website that allows users to upload and like images.",
      usedTech: "React, Express, MongoDB, Firebase",
      image: frameItImage,
      videoUrl: frameItVideo,
    },
    projeect3: {
      headLine: "PerfectView Website",
      websiteDescription:
        "Real estate website, Buyers can preview homes from the comfort of their couch. Home sellers win too; their home’s features and pictures are viewed.",
      usedTech: "React, Express, MongoDB, Firebase",
      image: perfectViewImage,
      videoUrl: perfectViewVideo,
    },
  };
  return (
    <>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={video}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div className="projectsContainer">
        <Fade direction="down">
          <h1>Projects</h1>
        </Fade>

        <Fade>
          <div className="leftProject">
            <div className="text1">
              <div className="headLine">
                <h2>{projects.projeect1.headLine}</h2>
                <span>
                  <a href="https://dorrahsq.github.io/U01P01/">
                    <Tooltip title="VIEW DEMO" arrow>
                      <button className="iconBtn">
                        <TiExport className="icon" />
                      </button>
                    </Tooltip>
                  </a>
                </span>
              </div>
              <p className="websiteDescription">
                {projects.projeect1.websiteDescription}
              </p>
              <p className="techP">Tech: {projects.projeect1.usedTech}</p>
            </div>
            <div>
              <button
                className="btn-primary"
                onClick={() => {
                  setOpen(true);
                  setVideo(projects.projeect1.videoUrl);
                }}
              >
                <BsFillPlayCircleFill />
              </button>

              <img className="websiteImage" src={projects.projeect1.image} alt=""/>
              <div className="shadow"></div>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="rightProject">
            <div className="text">
              <div className="headLineRight">
                <span>
                  <a href="https://frameit-website.netlify.app/">
                    <Tooltip title="VIEW DEMO" arrow>
                      <button className="iconBtn">
                        <TiExport className="icon" />
                      </button>
                    </Tooltip>
                  </a>
                </span>
                <h2>{projects.projeect2.headLine}</h2>
              </div>
              <p className="websiteDescription">
                {projects.projeect2.websiteDescription}
              </p>
              <p className="techP">Tech: {projects.projeect2.usedTech} </p>
            </div>
            <div>
              <button
                className="btn-primary2"
                onClick={() => {
                  setOpen(true);
                  setVideo(projects.projeect2.videoUrl);
                }}
              >
                <BsFillPlayCircleFill />
              </button>
              <img className="websiteImage" src={projects.projeect2.image} alt="" />
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="leftProject">
            <div className="text1">
              <div className="headLine">
                <h2>{projects.projeect3.headLine}</h2>
                <span>
                  <a href="https://perfectview.netlify.app">
                    <Tooltip title="VIEW DEMO" arrow>
                      <button className="iconBtn">
                        <TiExport className="icon" />
                      </button>
                    </Tooltip>
                  </a>
                </span>
              </div>
              <p className="websiteDescription">
                {projects.projeect3.websiteDescription}
              </p>
              <p className="techP">Tech: {projects.projeect3.usedTech}</p>
            </div>
            <div>
              <button
                className="btn-primary"
                onClick={() => {
                  setOpen(true);
                  setVideo(projects.projeect3.videoUrl);
                }}
              >
                <BsFillPlayCircleFill />
              </button>
              <img className="websiteImage" src={projects.projeect3.image} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
