import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import { personalInfo } from './data/portfolioData';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  // Resume Download Handler
  const handleDownloadResume = (e) => {
    if (!e || !e.target || !e.target.closest('a[href]')) {
      const link = document.createElement('a');
      link.href = personalInfo.resumePath;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = 'muskanlohar-mern-resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    showToast('Resume download initiated!', 'info');
  };

  // Project Live Demo Click Handler
  const handleDemoClick = (project) => {
    if (project.liveDemoUrl && project.liveDemoUrl.trim() !== '') {
      window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
    } else {
      showToast(
        `Live Demo link for "${project.name}" is pending deployment. Update in src/data/portfolioData.js`,
        'info'
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      
      {/* Navbar */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Hero Section */}
      <Hero 
        onDownloadResume={handleDownloadResume} 
      />

      {/* About Section */}
      <About onDownloadResume={handleDownloadResume} />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects 
        onDemoClick={handleDemoClick} 
      />

      {/* Education Section */}
      <Education />

      {/* Dedicated Recruiter Resume CTA */}
      <ResumeCTA onDownloadResume={handleDownloadResume} />

      {/* Contact Section */}
      <Contact 
        showToast={showToast} 
      />

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Toast Feedback Popup */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}

    </div>
  );
}

export default App;
