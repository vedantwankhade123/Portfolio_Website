import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllContentPopup from './components/AllContentPopup';
import ResumePopup from './components/ResumePopup';
import { projectsData, certificationsData } from './data';

function App() {
  const [isAllContentPopupOpen, setAllContentPopupOpen] = useState(false);
  const [initialPopupTab, setInitialPopupTab] = useState('projects');
  const [isResumePopupOpen, setResumePopupOpen] = useState(false);

  const handleViewAllClick = (tab) => {
    setInitialPopupTab(tab);
    setAllContentPopupOpen(true);
  };

  const handleResumeClick = () => {
    setResumePopupOpen(true);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header onResumeClick={handleResumeClick} />
      <main>
        <Hero />
        <About onResumeClick={handleResumeClick} />
        <Education />
        <Skills />
        <Certifications onViewAllClick={() => handleViewAllClick('certifications')} />
        <Projects onViewAllClick={() => handleViewAllClick('projects')} />
        <Contact />
      </main>
      <Footer />
      <AllContentPopup 
        isOpen={isAllContentPopupOpen}
        onClose={() => setAllContentPopupOpen(false)}
        projects={projectsData}
        certifications={certificationsData}
        initialTab={initialPopupTab}
      />
      <ResumePopup 
        isOpen={isResumePopupOpen}
        onClose={() => setResumePopupOpen(false)}
      />
    </>
  );
}

export default App;