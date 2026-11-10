import React from 'react';
import { 
  Globe, 
  Layout, 
  Server, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';

const ICONS = {
  "full-stack": Globe,
  "frontend": Layout,
  "backend": Server,
  "ai-automation": Cpu
};

export const Services = () => {
  return (
    <section id="services" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            letterSpacing: '0.1em', 
            color: '#38bdf8', 
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            Freelance Services
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px' }}>
            What I Can Build For You
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Flexible freelance engagements tailored for startups, agencies, and businesses needing dedicated development execution.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {SERVICES.map((service) => {
            const IconComponent = ICONS[service.id] || Globe;
            return (
              <div 
                key={service.id} 
                className="glass-card" 
                style={{ 
                  padding: '32px 28px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.25)'
                }}>
                  {service.badge}
                </div>

                {/* Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  marginBottom: '20px'
                }}>
                  <IconComponent size={26} />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '6px' }}>
                  {service.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 500, marginBottom: '14px' }}>
                  {service.subtitle}
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px', flexGrow: 1, lineHeight: 1.6 }}>
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '18px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={15} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {service.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
