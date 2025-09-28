import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        <div className="certifications-grid">
          {/* Certification 1 */}
          <div className="certification-card">
            <div className="certification-header">
              <div className="certification-info">
                <h3>Beginner to Master Python Programming</h3>
                <div className="certification-meta">
                  <span className="issuer"><i className="fas fa-award"></i> Udemy</span>
                  <span className="date"><i className="far fa-calendar-alt"></i> April 2025</span>
                </div>
              </div>
              <button className="btn small-btn toggle-certificate">
                <span className="view-text">View Certificate</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="certificate-view">
              <img src="/images/Udemy.png" alt="Python Programming Certificate" className="certificate-image" />
            </div>
          </div>

          {/* Certification 2 */}
          <div className="certification-card">
            <div className="certification-header">
              <div className="certification-info">
                <h3>Full Stack Web Development</h3>
                <div className="certification-meta">
                  <span className="issuer"><i className="fas fa-award"></i> Udemy</span>
                  <span className="date"><i className="far fa-calendar-alt"></i> In Progress</span>
                </div>
              </div>
              <button className="btn small-btn toggle-certificate">
                <span className="view-text">View Certificate</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="certificate-view">
              <img src="/images/webdev.png" alt="Full Stack Web Development Certificate" className="certificate-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;