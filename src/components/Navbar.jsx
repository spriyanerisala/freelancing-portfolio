import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Database,
  Home,
  Briefcase,
  Layers,
  Wrench,
  HelpCircle,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar = ({ activeTab, onTabChange, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", name: "About Me", icon: Home },
    { id: "services", name: "Services", icon: Briefcase },
    { id: "projects", name: "Projects", icon: Layers },
    { id: "skills", name: "Skills & Tech", icon: Wrench },
    { id: "workflow", name: "Workflow & FAQ", icon: HelpCircle },
    { id: "contact", name: "Contact & Hire", icon: Mail }
  ];

  const handleNavClick = (id) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 14, 0.9)' : 'rgba(7, 9, 14, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.12)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        
        {/* Brand */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            cursor: 'pointer'
          }}
        >
          <div style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '2px solid rgba(56, 189, 248, 0.5)',
            boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)'
          }}>
            <img 
              src="/profile.jpg" 
              alt="NERISALA SIVA PRIYA" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontWeight: 800, fontSize: '1.02rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
              <span>NERISALA</span>
              <span style={{ color: '#38bdf8' }}>SIVA PRIYA</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'nowrap' }}>
              Freelancer & Web Engineer
            </div>
          </div>
        </div>

        {/* Desktop Nav Tabs */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: isActive ? '#38bdf8' : '#cbd5e1',
                  background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.28)' : '1px solid transparent',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Action / Availability / Admin */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* Admin Dashboard Button */}
          <button
            onClick={onOpenAdmin}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#38bdf8',
              cursor: 'pointer'
            }}
            className="admin-badge-desktop"
            title="Open locally saved leads and inquiries"
          >
            <Database size={13} />
            <span>Admin Leads</span>
          </button>

          <button 
            onClick={() => handleNavClick('contact')}
            className="btn-primary" 
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(10, 15, 28, 0.98)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  color: isActive ? '#38bdf8' : '#e2e8f0',
                  background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                {item.name}
              </button>
            );
          })}
          <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Database size={16} />
              <span>Admin Leads Dashboard</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1200px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .admin-badge-desktop { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
