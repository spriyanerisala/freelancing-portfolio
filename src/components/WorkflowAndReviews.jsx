import React, { useState } from 'react';
import { 
  FREELANCE_WORKFLOW, 
  CLIENT_TESTIMONIALS, 
  FREELANCE_FAQS,
  PERSONAL_INFO 
} from '../data/portfolioData';
import { 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  CheckCircle, 
  Quote,
  ShieldCheck,
  Zap,
  Code2
} from 'lucide-react';

export const WorkflowAndReviews = () => {
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
              A transparent, structured 4-phase framework guaranteeing seamless project delivery without ambiguity.
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

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '80px 0', background: 'rgba(10, 16, 28, 0.4)' }}>
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
              Social Proof
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px' }}>
              What Clients & Stakeholders Say
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Feedback from project deployments across healthcare, luxury hospitality, and AI SaaS applications.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {CLIENT_TESTIMONIALS.map((review, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}
              >
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Quote */}
                <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '24px', flexGrow: 1 }}>
                  "{review.text}"
                </p>

                {/* Author */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                      {review.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#38bdf8' }}>
                      {review.role}
                    </div>
                  </div>
                  <Quote size={24} color="rgba(56, 189, 248, 0.2)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Common questions clients ask before hiring me.
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
