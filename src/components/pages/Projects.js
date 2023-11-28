import React from 'react';
import Project from '../Project';
import './Projects.css';

const Projects = ({projectList}) => {

    console.log("this is the list of projects", projectList)

    const getProjectListJSX = (projectList) => {
        return projectList.map((project, index) => {
            return (
                <div key={index}>
                    <Project 
                        // projectID={index}
                        title={project.title} 
                        description={project.description}
                        image={project.image}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                        techStack={project.techStack}
                    />
                </div>
            );
        });
    };
    return (
        <div className="projects-container">
            <h2 id="projects">My Projects</h2>
            <div className="projects-list-container">
                <ul>{getProjectListJSX(projectList)}</ul>
            </div>
        </div>
        );
}

export default Projects;