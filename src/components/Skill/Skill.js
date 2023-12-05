import React from 'react';
import './Skill.css';


const Skill = ({ type, techStack, getIconsJSXWithName }) => {

    const getIconsWithNameResult = getIconsJSXWithName({techStack});

    return (
        <li className="skill-item">
        <h3>{type}</h3>
        <div className="skill-icons-container">
            {getIconsWithNameResult.map((techIconName, index) => (
            <div key={index} className="icon-container">
            {techIconName}
            </div>
            ))}
        </div>
        </li>
    );
}

export default Skill;
