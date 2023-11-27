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
                {/* <p id="">
                I am a student in Ada Developers Academy, a highly selective tuition-free full-stack software engineering program with an acceptance rate of less than 10%, dedicated to empowering women and gender-expansive individuals to break into the tech industry.                
                <br></br>
                With over six years of experience as a Product Developer in the fashion industry, I seamlessly transitioned from developing women's apparel to crafting web solutions. My background goes beyond creativity; it involves a strategic and solution-oriented mindset as I preciously worked extensively with cost, ensuring products met costing targets. This experience honed my ability to think creatively about alternate solutions—a skill I find particularly rewarding in programming, where there's always more than one solution to a problem.
                <br></br>
                As a full-stack developer, I specialize in Python, JavaScript, React, and more. My approach to work is grounded in teamwork, effective communication, and a commitment to continuous learning. I am excited to bring my creative yet analytical skills from my product development days to the tech industry, where I look forward to finding innovative solutions and making a meaningful impact by applying my technical skills and knowledge as well.




                </p> */}
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