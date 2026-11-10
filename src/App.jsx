import React, { useState } from 'react';
import { Canvas3D } from './components/Canvas3D';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { WorkflowAndFaq } from './components/WorkflowAndFaq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminDashboardModal } from './components/AdminDashboardModal';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* 3D WebGL Background Canvas */}
      <Canvas3D />

      <Navbar 
        activeTab={activeTab} 
        onTabChange={handleNavigate} 
        onOpenAdmin={() => setIsAdminOpen(true)} 
      />
      
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 1, minHeight: '80vh' }}>
        {activeTab === 'home' && (
          <AboutMe onNavigate={handleNavigate} />
        )}

        {activeTab === 'services' && (
          <div style={{ paddingTop: '70px' }}>
            <Services />
          </div>
        )}

        {activeTab === 'projects' && (
          <div style={{ paddingTop: '70px' }}>
            <Projects />
          </div>
        )}

        {activeTab === 'skills' && (
          <div style={{ paddingTop: '70px' }}>
            <Skills />
          </div>
        )}

        {activeTab === 'workflow' && (
          <div style={{ paddingTop: '70px' }}>
            <WorkflowAndFaq />
          </div>
        )}

        {activeTab === 'contact' && (
          <div style={{ paddingTop: '70px' }}>
            <Contact onOpenAdmin={() => setIsAdminOpen(true)} />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Local Frontend Admin Modal */}
      <AdminDashboardModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
    </div>
  );
}

export default App;
