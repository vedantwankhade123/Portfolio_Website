import React, { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client.js';
import useScrollAnimation from '../hooks/useScrollAnimation.jsx';

const SkillCard = ({ name, icon, colorClass }) => (
  <div className="skill-item">
    <div className={`skill-icon ${colorClass}`}>
      <i className={icon}></i>
    </div>
    <h4>{name}</h4>
  </div>
);

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) console.error('Error fetching skills:', error);
      else setSkills(data);
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="skills scroll-animate" ref={sectionRef}>
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