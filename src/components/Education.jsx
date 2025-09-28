import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../integrations/supabase/client.js';
import useScrollAnimation from '../hooks/useScrollAnimation.jsx';

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
  const [educationData, setEducationData] = useState([]);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    const fetchEducation = async () => {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) console.error('Error fetching education data:', error);
      else setEducationData(data);
    };

    fetchEducation();
  }, []);

  return (
    <section id="education" className="education scroll-animate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Education</h2>
        <div className="education-timeline">
          {educationData.map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;