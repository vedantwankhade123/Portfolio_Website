import React, { useEffect, useRef } from 'react';

const TimelineItem = ({ icon, title, subtitle, date, description, grade }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="timeline-item" ref={itemRef}>
      <div className="timeline-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p className="timeline-date">{date}</p>
        <p>{description}</p>
        {grade && <div className="grade-badge">Grade: {grade}</div>}
      </div>
    </div>
  );
};


const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">My Education</h2>
        <div className="education-timeline">
          <TimelineItem
            icon="fa-university"
            title="B.Tech CSE"
            subtitle="G.H.Raisoni University, Amravati"
            date="2023 - Present (2nd Year)"
            description="Currently pursuing my Bachelor's degree in Computer Science with focus on web development and programming."
          />
          <TimelineItem
            icon="fa-school"
            title="Higher Secondary (12th)"
            subtitle="P.R.Pote Patil Junior College, Amravati"
            date="2021 - 2023"
            description="Completed Higher Secondary with focus on Science and Mathematics (Computer Science)."
            grade="61 %"
          />
          <TimelineItem
            icon="fa-book"
            title="Secondary School (10th)"
            subtitle="Prabodhan Mahavidyalaya, Daryapur"
            date="2020 - 2021"
            description="Completed Secondary School education with distinction."
            grade="97 %"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;