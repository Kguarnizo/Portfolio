import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIsLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-me-desc">
        <div id="hi" className="animated bounce">
          <h3>Hi, I'm Katherine :)</h3>
        </div>
        <p>
          I am a full-stack software engineer with a background in fashion as a
          Product Developer, combining creative and analytical skills to deliver
          innovative solutions. My experience in fashion sharpened my ability to
          think outside the box and explore alternate solutions, skills I now
          apply in programming, where there is never just one solution to a
          problem.
        </p>
        <br></br>
        <p>
          I proudly trained at Ada Developers Academy, a highly selective,
          tuition-free program with an acceptance rate of less than 10%. During
          my recent internship at Oracle OCI (Oracle Cloud Infrastructure), I
          optimized a tier zero service portal, gaining hands-on experience with
          Java, Spring, Maven, TypeScript, and React. Currently, I am a
          Hack.Diversity 2025 SWE Fellow, selected as one of 15 software
          engineers from over 400+ applicants to gain hands-on experience,
          participate in career-building opportunities, and receive mentorship
          from industry professionals.
        </p>
        <br></br>
        <p>
          My approach to work is grounded in collaboration, effective
          communication, and a commitment to continuous learning. I am eager to
          contribute and grow within a collaborative team, where I can build
          impactful solutions.
        </p>
        <br></br>
        <p>
          Outside of programming, I enjoy traveling and spending quality time
          with my dog Sunny.
        </p>
      </div>
      <div className="about-img-container">
        <ul>
          <li>
            <figure>
              <img
                src="/images/ada.png"
                alt="me"
                className="about-img"
                onLoad={() => handleIsLoaded()}
              />
              {isLoaded ? <figcaption>Ada's Acceptance</figcaption> : null}
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="/images/travel.png"
                alt="me"
                className="about-img"
                onLoad={() => handleIsLoaded()}
              />
              {isLoaded ? <figcaption>Ancient Egypt</figcaption> : null}
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="/images/sunny.png"
                alt="me"
                className="about-img"
                onLoad={() => handleIsLoaded()}
              />
              {isLoaded ? <figcaption>Sunny at the Lake</figcaption> : null}
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
