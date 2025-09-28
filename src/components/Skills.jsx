import React from 'react';

const frontendSkills = [
  { name: 'HTML5', icon: 'fab fa-html5', colorClass: 'html-icon' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', colorClass: 'css-icon' },
  { name: 'JavaScript', icon: 'fab fa-js', colorClass: 'js-icon' },
  { name: 'React', icon: 'fab fa-react', colorClass: 'react-icon' },
];

const backendSkills = [
  { name: 'Python', icon: 'fab fa-python', colorClass: 'python-icon' },
  { name: 'SQL', icon: 'fas fa-database', colorClass: 'sql-icon' },
  { name: 'Node.js', icon: 'fab fa-node-js', colorClass: 'node-icon' },
  { name: 'Django', icon: 'fas fa-server', colorClass: 'django-icon' }, // Using a generic server icon for Django
];

const SkillCard = ({ name, icon, colorClass }) => (
  <div className="skill-item glass-card">
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
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              {frontendSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              {backendSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;