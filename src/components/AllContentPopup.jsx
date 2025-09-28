import React, { useState, useEffect } from 'react';
import CertificatePopup from './CertificatePopup';
import ProjectDetailPopup from './ProjectDetailPopup';

const AllContentPopup = ({ isOpen, onClose, projects, certifications, initialTab }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [popupCert, setPopupCert] = useState({ src: null, title: null });
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab);
        }
    }, [isOpen, initialTab]);

    if (!isOpen) return null;

    const handleViewCert = (src, title) => {
        setPopupCert({ src, title });
    };

    const closeCertPopup = () => {
        setPopupCert({ src: null, title: null });
    };

    const handleViewProject = (project) => {
        setSelectedProject(project);
    };

    const closeProjectPopup = () => {
        setSelectedProject(null);
    };

    return (
        <div className="all-content-popup active" onClick={onClose}>
            <div className="all-content-popup-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="close-popup main-close-btn">&times;</button>
                <div className="all-content-sidebar">
                    <h2>Explore</h2>
                    <ul>
                        <li>
                            <button 
                                className={`sidebar-btn ${activeTab === 'projects' ? 'active' : ''}`}
                                onClick={() => setActiveTab('projects')}
                            >
                                <i className="fas fa-briefcase"></i> Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                className={`sidebar-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                                onClick={() => setActiveTab('certifications')}
                            >
                                <i className="fas fa-award"></i> Certifications
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="all-content-main">
                    {activeTab === 'projects' && (
                        <div className="content-grid projects-grid">
                            {projects.map((project, index) => (
                                <div className="popup-project-card" key={index} onClick={() => handleViewProject(project)}>
                                    <div className="popup-project-video">
                                        <video autoPlay loop muted playsInline>
                                            <source src={project.videoSrc} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="popup-project-info">
                                        <h4>{project.title}</h4>
                                        <div className="popup-project-links">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                                            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'certifications' && (
                        <div className="content-grid certs-grid">
                            {certifications.map((cert, index) => (
                                <div className="popup-cert-card" key={index}>
                                    <img src={cert.imageUrl} alt={cert.title} />
                                    <div className="popup-cert-overlay">
                                        <h5>{cert.title}</h5>
                                        <button onClick={() => handleViewCert(cert.imageUrl, cert.title)} className="btn primary-btn">View</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <CertificatePopup 
                src={popupCert.src} 
                title={popupCert.title} 
                onClose={closeCertPopup} 
            />
            <ProjectDetailPopup 
                project={selectedProject}
                onClose={closeProjectPopup}
            />
        </div>
    );
};

export default AllContentPopup;