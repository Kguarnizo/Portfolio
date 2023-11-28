import React from 'react';

const Project = ({ title, techStack, description, image, demoLink, githubLink }) => {
    return (
        <li className="project-item">
            <img src={image} alt="projects"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={demoLink}
                >
                Demo
                </a>
                <a
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={githubLink}
                >
                Github
                </a>
            </div>
        </li>
    );
}

export default Project;
