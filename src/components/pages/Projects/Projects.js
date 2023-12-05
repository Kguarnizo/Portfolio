import React from 'react';
import Project from '../../Project/Project';
import './Projects.css';

const Projects = ({ projectList, getIconsJSX }) => {

    console.log("this is the list of projects", projectList)

    const getProjectListJSX = (projectList) => {
        return projectList.map((project, index) => {
            return (
                <div key={index}>
                    <Project 
                        title={project.title} 
                        description={project.description}
                        image={project.image}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                        techStack={project.techStack}
                        getIconsJSX={(techStack) => getIconsJSX(techStack)}
                    />
                </div>
            );
        });
    };

    return (
        <div className="projects-container">
            <h2 id="projects">My Projects</h2>
                <ul>{getProjectListJSX(projectList)}</ul>
        </div>
        );
}

export default Projects;