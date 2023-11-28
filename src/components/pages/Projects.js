import React from 'react';
import Project from '../Project';

const Projects = ({projectList}) => {

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
                    />
                </div>
            );
        });
    };
    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-list-container">
                <ul>{getProjectListJSX(projectList)}</ul>
            </div>
        </div>
        );
}

export default Projects;