import React from "react";
import "./Project.css";

const Project = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  techStack,
  getIconsJSX,
}) => {
  return (
    <li className="project-item">
      <img src={image} alt="projects" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-icons">{getIconsJSX({ techStack })}</div>
      <div className="project-links">
        <a
          className="project-link-buttons"
          target="_blank"
          rel="noopener noreferrer"
          href={demoLink}
        >
          Demo
        </a>
        <a
          className="project-link-buttons"
          target="_blank"
          rel="noopener noreferrer"
          href={githubLink}
        >
          Github
        </a>
      </div>
    </li>
  );
};

export default Project;
