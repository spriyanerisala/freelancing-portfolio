import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  MessageSquare,
  Database
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar = ({ onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Skills & Tech", href: "#skills" },
    { name: "Workflow & FAQ", href: "#workflow" },
    { name: "Hire Me", href: "#contact" }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56, 189, 248, 0.12)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        {/* Brand */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div style={{
            position: 'relative',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '2px solid rgba(56, 189, 248, 0.4)',
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
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>NERISALA</span>
              <span style={{ color: '#38bdf8' }}>SIVA PRIYA</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
              Freelancer & Web Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#38bdf8'}
              onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action / Availability / Admin */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Admin Dashboard Button in Nav */}
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

          <div 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#34d399'
            }}
            className="status-badge-desktop"
          >
            <span className="status-dot"></span>
            <span>Available for Hire</span>
          </div>

          <a 
            href="#contact" 
            className="btn-primary" 
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={15} />
          </a>

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
          background: 'rgba(10, 15, 26, 0.98)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '6px 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Database size={16} />
              <span>Admin Leads Dashboard</span>
            </button>

            <a 
              href={PERSONAL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .status-badge-desktop { display: flex !important; }
          .admin-badge-desktop { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
