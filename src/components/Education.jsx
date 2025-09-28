import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">My Education</h2>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-university"></i>
            </div>
            <div className="timeline-content">
              <h3>B.Tech CSE</h3>
              <h4>G.H.Raisoni University, Amravati</h4>
              <p className="timeline-date">2023 - Present (2nd Year)</p>
              <p>Currently pursuing my Bachelor's degree in Computer Science with focus on web development and programming.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-school"></i>
            </div>
            <div className="timeline-content">
              <h3>Higher Secondary (12th)</h3>
              <h4>P.R.Pote Patil Junior College, Amravati</h4>
              <p className="timeline-date">2021 - 2023</p>
              <p>Completed Higher Secondary with focus on Science and Mathematics (Computer Science).</p>
              <div className="grade-badge">Grade: 61 %</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-book"></i>
            </div>
            <div className="timeline-content">
              <h3>Secondary School (10th)</h3>
              <h4>Prabodhan Mahavidyalaya, Daryapur</h4>
              <p className="timeline-date">2020 - 2021</p>
              <p>Completed Secondary School education with distinction.</p>
              <div className="grade-badge">Grade: 97 %</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;