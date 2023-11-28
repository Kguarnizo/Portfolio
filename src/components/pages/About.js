import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div id="hi" className="animated bounce">
                    <h2>Hi, I'm Katherine :)</h2>
            </div>
            <div className="about-me-desc">
                <p>I am currently a student at Ada Developers Academy, a highly selective tuition-free full-stack software engineering program with an acceptance rate of less than 10%, dedicated to empowering women and gender-expansive individuals looking to break into the tech industry.</p>
                <br></br>
                <p>With over six years of experience as a Product Developer in the fashion industry, I seamlessly transitioned from developing women's apparel to crafting web solutions. My background goes beyond creativity; it involves a strategic and solution-oriented mindset as I previously worked extensively with cost, ensuring all product met costing targets. This experience honed my ability to think creatively about alternate solutions— a skill I find rewarding in programming, where there's always more than one solution to a problem.</p>
                <br></br>
                <p>My approach to work is grounded in teamwork, effective communication, and a commitment to continuous learning. I am excited to bring my creative yet analytical skills from my product development days to the tech industry, where I look forward to finding innovative solutions and making a meaningful impact by applying my technical skills and knowledge.</p>
                <br></br>
                <p>Outside of programming, I enjoy traveling and spending quality time with my dog Sunny.</p>
            </div>
        <div className="about-img-container">
            <ul>
                <li>
                <figure>
                <img src="/images/ada.png" alt="me" className="about-img"/>
                <figcaption>Ada Acceptance Letter</figcaption>
                </figure>
                </li>
                <li>
                    <figure>
                <img src="/images/travel.png" alt="me" className="about-img"/>
                    <figcaption>Exploring Ancient Egypt</figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                <img src="/images/sunny.png" alt="me" className="about-img"/>
                    <figcaption>Sunny at the Lake</figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default About;