import React from 'react';
import { Link } from 'react-router-dom'; 
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import './Home.css'

const Home = () => {

    return (
        <div className="home-container">
            <div className="home-desc">
                <h1 id="self-name">Katherine Guarnizo</h1>
                <p id="self-title">Full-Stack Software Engineer </p>
                {/* <p id="self-desc">Forever Learner & Always Evolving</p> */}
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
                <div className="button-wrapper">
                <Link to="/about" className="button">
                    Learn More About Me
                </Link>
                </div>
            </div>
            <div className="home-img">
            <img src="/images/me.png" alt="me"/>
            </div>
        </div>
    );    
}

export default Home;