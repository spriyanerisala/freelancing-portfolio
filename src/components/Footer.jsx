import React from 'react';
import { ArrowUp, Heart, MessageSquare, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      borderTop: '1px solid rgba(56, 189, 248, 0.12)', 
      background: 'rgba(5, 7, 12, 0.95)',
      padding: '60px 0 30px'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '420px', lineHeight: 1.6 }}>
              Freelancer • Full Stack • Frontend • Backend • Web Application Developer. Delivering high-conversion, production-ready web apps for clients worldwide.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={PERSONAL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            <a 
              href={PERSONAL_INFO.socials.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 14px' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a 
              href={PERSONAL_INFO.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 14px' }}
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '8px 14px' }}
              title="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '14px',
          paddingTop: '24px',
          fontSize: '0.82rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} Siva Priya Nerisala. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Engineered with React.js & Modern Web Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
