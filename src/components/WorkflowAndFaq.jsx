import React, { useState } from 'react';
import { 
  FREELANCE_WORKFLOW, 
  FREELANCE_FAQS,
  PERSONAL_INFO 
} from '../data/portfolioData';
import { 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  CheckCircle, 
  Zap,
  Code2
} from 'lucide-react';

export const WorkflowAndFaq = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* 4-Step Freelance Workflow */}
      <section id="workflow" style={{ padding: '80px 0', position: 'relative' }}>
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
              Development Process
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px' }}>
              How We Work Together
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              A transparent, structured 4-phase framework guaranteeing seamless project delivery from concept to launch.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {FREELANCE_WORKFLOW.map((step, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: '32px 24px', position: 'relative' }}
              >
                <div style={{
                  fontSize: '2.4rem',
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'rgba(56, 189, 248, 0.25)',
                  marginBottom: '12px'
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: '80px 0', background: 'rgba(10, 16, 28, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <div style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              letterSpacing: '0.1em', 
              color: '#38bdf8', 
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              Got Questions?
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Everything you need to know about working with me on your next project.
            </p>
          </div>

          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FREELANCE_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="glass-card"
                  style={{ overflow: 'hidden', padding: 0 }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      color: 'inherit',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} color="#38bdf8" /> : <ChevronDown size={18} color="var(--text-dim)" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 22px',
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ paddingTop: '14px' }}>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
