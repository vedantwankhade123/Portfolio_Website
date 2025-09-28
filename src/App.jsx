import React, { useState } from 'react';
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
import { projectsData, certificationsData } from './data';

function App() {
  const [isAllContentPopupOpen, setAllContentPopupOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects onViewAllClick={() => setAllContentPopupOpen(true)} />
        <Contact />
      </main>
      <Footer />
      <AllContentPopup 
        isOpen={isAllContentPopupOpen}
        onClose={() => setAllContentPopupOpen(false)}
        projects={projectsData}
        certifications={certificationsData}
      />
    </>
  );
}

export default App;