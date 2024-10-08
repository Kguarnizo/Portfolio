import React from "react";
import Skill from "../../Skill/Skill";
import "./Skills.css";

const Skills = ({ skillList, getIconsJSXWithName }) => {
  console.log("this is the list of projects", skillList);

  const getSkillListJSX = (skillList) => {
    return skillList.map((skill, index) => {
      return (
        <div key={index} className="skill-list-item">
          <Skill
            type={skill.type}
            techStack={skill.techStack}
            getIconsJSXWithName={(techStack) => getIconsJSXWithName(techStack)}
          />
        </div>
      );
    });
  };

  return (
    <div className="skills-container">
      <h2 id="skills">Technical Skills</h2>
      <ul>{getSkillListJSX(skillList)}</ul>
    </div>
  );
};

export default Skills;
