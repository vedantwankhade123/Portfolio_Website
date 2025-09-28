import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon"><i className="fab fa-html5"></i></div>
                <h4>HTML5</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon"><i className="fab fa-css3-alt"></i></div>
                <h4>CSS3</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon"><i className="fab fa-js"></i></div>
                <h4>JavaScript</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon"><i className="fab fa-react"></i></div>
                <h4>React</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon"><i className="fab fa-python"></i></div>
                <h4>Python</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon"><i className="fas fa-database"></i></div>
                <h4>SQL</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon"><i className="fab fa-node-js"></i></div>
                <h4>Node.js</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon"><i className="fas fa-server"></i></div>
                <h4>Django</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;