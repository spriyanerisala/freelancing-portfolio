import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle, 
  Download, 
  ExternalLink, 
  Code2, 
  Terminal, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

const ROLES = [
  "Freelancer",
  "Full Stack Developer",
  "AI & Workflow Automation Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Web Application Developer"
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section style={{ position: 'relative', paddingTop: '140px', paddingBottom: '90px', overflow: 'hidden' }}>
      <div className="hero-grid"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Profile Photo Spotlight */}
          <div style={{ marginBottom: '22px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '136px',
              height: '136px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 50%, #3b82f6 100%)',
              boxShadow: '0 0 35px rgba(56, 189, 248, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)'
            }}>
              <img 
                src="/profile.jpg" 
                alt="NERISALA SIVA PRIYA" 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  border: '3px solid #07090e'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '6px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '3px solid #07090e',
                  boxShadow: '0 0 10px #10b981'
                }}
                title="Available for Client Projects"
              />
            </div>
          </div>

          {/* Status Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 16px', 
            borderRadius: '30px', 
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            marginBottom: '24px'
          }}>
            <span className="status-dot"></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', letterSpacing: '0.02em' }}>
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', 
            fontWeight: 800, 
            lineHeight: 1.15, 
            marginBottom: '20px' 
          }}>
            Empowering Modern Businesses with Production-Grade <br />
            <span className="gradient-text">{displayText}</span>
            <span style={{ color: '#38bdf8', animation: 'pulseGlow 1s infinite' }}>|</span>
          </h1>

          {/* Subtitle */}
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.22rem)', 
            color: 'var(--text-muted)', 
            maxWidth: '680px', 
            margin: '0 auto 36px',
            lineHeight: 1.6
          }}>
            Hi, I'm <strong style={{ color: '#f8fafc' }}>{PERSONAL_INFO.name}</strong>. I transform startup concepts, brand visions, and business workflows into fast, scalable, and beautifully designed web applications.
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '14px', 
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            <a href="#contact" className="btn-primary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
              <span>Hire Me / Start Project</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href={PERSONAL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-whatsapp"
              style={{ padding: '14px 26px', fontSize: '1rem' }}
            >
              <MessageSquare size={18} />
              <span>Instant WhatsApp Chat</span>
            </a>

            <a href="#projects" className="btn-secondary" style={{ padding: '14px 24px', fontSize: '1rem' }}>
              <span>Explore Client Projects</span>
            </a>
          </div>

          {/* Client Trust Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            color: 'var(--text-dim)',
            fontSize: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span style={{ color: '#cbd5e1' }}>100% Verified Deliveries</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} color="#38bdf8" />
              <span style={{ color: '#cbd5e1' }}>Fast 1–3 Week Turnaround</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={16} color="#a855f7" />
              <span style={{ color: '#cbd5e1' }}>Clean Code & Full GitHub Handover</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="glass-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.4rem', 
                fontWeight: 800, 
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#38bdf8',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
