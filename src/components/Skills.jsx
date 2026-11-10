import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  CreditCard, 
  Cpu, 
  Wrench,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICONS = {
  "Layout": Layout,
  "Server": Server,
  "Database": Database,
  "CreditCard": CreditCard,
  "Cpu": Cpu,
  "Wrench": Wrench
};

export const Skills = () => {
  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            letterSpacing: '0.1em', 
            color: '#38bdf8', 
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            Technical Capability
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px' }}>
            Full-Stack & Web Ecosystem
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A battle-tested stack spanning client-side reactivity, hardened server architectures, database modeling, and AI workflows.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComp = ICONS[cat.icon] || Terminal;
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: '28px 24px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}>
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                    {cat.name}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="tech-badge"
                      style={{ 
                        padding: '6px 12px', 
                        fontSize: '0.82rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        borderColor: 'rgba(56, 189, 248, 0.15)'
                      }}
                    >
                      {skill}
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
