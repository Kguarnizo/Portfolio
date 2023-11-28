import React from 'react';
import './Project.css';
import { FaPython, FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoDjango, BiLogoPostgresql, BiLogoTypescript} from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSqlalchemy } from "react-icons/si";

const iconsMap = {
    Python: <FaPython icon={FaPython} />,
    Django: <BiLogoDjango icon={BiLogoDjango} />,
    Postgresql: <BiLogoPostgresql icon={BiLogoPostgresql} />,
    TypeScript: <BiLogoTypescript icon={BiLogoTypescript} />,
    React: <FaReact icon={FaReact} />,
    Bootstrap: <FaBootstrap icon={FaBootstrap} />,
    HTML: <FaHtml5 icon={FaHtml5} />,
    CSS: <FaCss3Alt icon={FaCss3Alt} />,
    Javascript: <IoLogoJavascript icon={IoLogoJavascript} />,
    SQLAlchemy: <SiSqlalchemy icon={SiSqlalchemy} />
};


const Project = ({ title, description, image, demoLink, githubLink, techStack }) => {
    const getIconComponent = (icon) => {
        return iconsMap[icon];
    };

    const getIconsJSX = () => {
        return techStack.map((icon, index) => {
            return (
                <div key={index}>
                    {getIconComponent(icon)}
                </div>
            );
        });
    };
    
    
    return (
        <li className="project-item">
            <img src={image} alt="projects"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-icons">
                {getIconsJSX()}
            </div>
            <div className="project-links">
                <a 
                    id="demo"
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={demoLink}
                >
                Demo
                </a>
                <a
                    id="github"
                    target="_blank" 
                    rel="noopener noreferrer"
                    href={githubLink}
                >
                Github
                </a>
            </div>
            <div>

            </div>
        </li>
    );
}

export default Project;
