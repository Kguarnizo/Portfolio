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
          I am a software engineer with a background in fashion as a Product
          Developer, bringing a unique blend of creative and analytical skills
          to craft innovative solutions. My experience in fashion sharpened my
          ability to think outside the box and explore alternate solutions—a
          skill that seamlessly translates into programming, where multiple
          solutions to a problem often exist.
        </p>
        <br></br>
        <p>
          I am proudly trained in full stack development at Ada Developers
          Academy, a highly selective tuition-free program with an acceptance
          rate of less than 10%. During my internship at Oracle, I gained
          hands-on experience contributing to projects, collaborating with
          cross-functional teams, and applying my skills in Java, API
          development, and React. This experience allowed me to further develop
          my problem-solving and technical abilities.
        </p>
        <br></br>
        <p>
          My approach to work is rooted in collaboration, effective
          communication, and a commitment to continuous learning. I look forward
          to finding innovative solutions and making a meaningful impact.
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
