import React, { useState } from 'react';
import { Canvas3D } from './components/Canvas3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { WorkflowAndFaq } from './components/WorkflowAndFaq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminDashboardModal } from './components/AdminDashboardModal';

export function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="portfolio-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* 3D WebGL Background Canvas */}
      <Canvas3D />

      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <WorkflowAndFaq />
        <Contact onOpenAdmin={() => setIsAdminOpen(true)} />
      </main>

      <Footer />

      {/* Local Frontend Admin Modal */}
      <AdminDashboardModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
    </div>
  );
}

export default App;
