import React from 'react';
import Skill from '../Skill';

const Skills = ({skillList, getIconsJSX }) => {

    console.log("this is the list of projects", skillList)

    const getSkillListJSX = (skillList) => {
        return skillList.map((skill, index) => {
            return (
                <div key={index}>
                    <Skill 
                        type={skill.type}
                        techStack={skill.techStack}
                        getIconsJSX={(techStack) => getIconsJSX(techStack)}
                    />
                </div>
            );
        });
    };

    return (
        <div className="skills-container">
            <h2 id="skills"> My Technical Skills</h2>
            <ul>{getSkillListJSX(skillList)}</ul>
        </div>
    );
}

export default Skills;