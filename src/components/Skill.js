import React from 'react';
import './Project.css';


const Skill = ({ type, techStack, getIconsJSX }) => {

    return (
        <li>
        <h3>{type}</h3>
        <div className="project-icons">
                {getIconsJSX({techStack})}
        </div>
        </li>
    );
}

export default Skill;