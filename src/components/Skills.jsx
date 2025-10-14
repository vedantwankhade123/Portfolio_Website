import React from 'react';
import { skills } from '../data.js';

const SkillCard = ({ name, icon, colorClass }) => (
  <div className="skill-item">
    <div className={`skill-icon ${colorClass}`}>
      <i className={icon}></i>
    </div>
    <h4>{name}</h4>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;