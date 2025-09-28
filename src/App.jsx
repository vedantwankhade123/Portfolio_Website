import React, { useState, useEffect } from 'react';
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
import { supabase } from './integrations/supabase/client.js';

function App() {
  const [isAllContentPopupOpen, setAllContentPopupOpen] = useState(false);
  const [initialPopupTab, setInitialPopupTab] = useState('projects');
  const [isResumePopupOpen, setResumePopupOpen] = useState(false);
  
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('display_order', { ascending: true });
      if (error) console.error('Error fetching projects:', error);
      else setProjects(data);
    };

    const fetchCertifications = async () => {
      const { data, error } = await supabase.from('certifications').select('*').order('display_order', { ascending: true });
      if (error) console.error('Error fetching certifications:', error);
      else setCertifications(data);
    };

    const fetchPersonalInfo = async () => {
      const { data, error } = await supabase.from('personal_info').select('*').single();
      if (error) console.error('Error fetching personal info:', error);
      else setPersonalInfo(data);
    };

    fetchProjects();
    fetchCertifications();
    fetchPersonalInfo();
  }, []);

  useEffect(() => {
    if (personalInfo) {
      document.title = `${personalInfo.name} | ${personalInfo.role || 'Portfolio'}`;

      const favicon = document.querySelector("link[rel='icon']");
      
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f97316;" /><stop offset="100%" style="stop-color:#ea580c;" /></linearGradient></defs><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Poppins, sans-serif" font-size="90" font-weight="700" fill="url(#logoGradient)">V</text></svg>`;

      const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svgIcon)}`;
      
      if (favicon) {
        favicon.href = faviconUrl;
      }
    }
  }, [personalInfo]);

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
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} onResumeClick={handleResumeClick} />
        <Education />
        <Skills />
        <Certifications 
          certifications={certifications} 
          onViewAllClick={() => handleViewAllClick('certifications')} 
        />
        <Projects 
          projects={projects} 
          onViewAllClick={() => handleViewAllClick('projects')} 
        />
        <Contact />
      </main>
      <Footer personalInfo={personalInfo} />
      <AllContentPopup 
        isOpen={isAllContentPopupOpen}
        onClose={() => setAllContentPopupOpen(false)}
        projects={projects}
        certifications={certifications}
        initialTab={initialPopupTab}
      />
      <ResumePopup 
        isOpen={isResumePopupOpen}
        onClose={() => setResumePopupOpen(false)}
        personalInfo={personalInfo}
      />
    </>
  );
}

export default App;