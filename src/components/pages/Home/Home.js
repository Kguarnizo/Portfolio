import React from "react";
import { Link } from "react-router-dom";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { MdSimCardDownload } from "react-icons/md";
import { TbArrowBigRightLine } from "react-icons/tb";
import resume from "../../../Katherine.Guarnizo.Resume.pdf";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-desc">
          <h1 className="title">Katherine Guarnizo</h1>
          <p className="subtitle">Full-Stack Software Engineer</p>
          <div className="social-container">
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/-guarnizo-5-katherine-5-/"
                >
                  <BiLogoLinkedin className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kguarnizo"
                >
                  <BiLogoGithub className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="more-links">
            <Link to="/about" className="home-icons">
              Learn More
              <TbArrowBigRightLine />
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="home-icons"
            >
              View Resume
              <MdSimCardDownload />
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src="/images/me.png" alt="me" className="home-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
