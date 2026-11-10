import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Sparkles,
  Database
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = ({ onOpenAdmin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleNeeded: 'Full Stack Web App',
    budget: '$500 - $1,500',
    timeline: '2 - 3 Weeks',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Save data directly in frontend localStorage
    const newInquiry = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      const existing = JSON.parse(localStorage.getItem('freelance_inquiries') || '[]');
      existing.unshift(newInquiry);
      localStorage.setItem('freelance_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.error("Error saving to localStorage:", err);
    }

    // 2. Confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);

    // 3. Construct WhatsApp and Email messages
    const emailSubject = encodeURIComponent(`Project Inquiry: ${formData.roleNeeded} - from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello NERISALA SIVA PRIYA,\n\nYou have received a new freelance project inquiry!\n\nClient Name: ${formData.name}\nClient Email: ${formData.email}\nService Needed: ${formData.roleNeeded}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope & Goals:\n${formData.details}\n\n---\nDispatched from Freelance Portfolio`
    );
    const mailtoUrl = `mailto:nspriya005@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    const waText = encodeURIComponent(
      `Hello NERISALA SIVA PRIYA! 👋\nI would like to hire you for a project:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Role / Service:* ${formData.roleNeeded}\n*Budget:* ${formData.budget}\n*Timeline:* ${formData.timeline}\n\n*Scope:* ${formData.details}`
    );
    const waUrl = `https://wa.me/918885023504?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    // Trigger email client in a background frame or prompt
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            letterSpacing: '0.1em', 
            color: '#38bdf8', 
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            Let's Collaborate
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px' }}>
            Ready to Build Your Next Web Project?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Tell me about your timeline and requirements. I'll review and respond within 24 hours with an actionable roadmap.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          
          {/* Direct Details & Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '32px 28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>
                Direct Communication
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                For quick consultations, project roadmapping, or instant quotes, feel free to reach out via WhatsApp or email directly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a 
                  href={PERSONAL_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    color: '#6ee7b7',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  <MessageSquare size={20} color="#10b981" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>WhatsApp Direct (Fastest)</div>
                    <div>{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#7dd3fc',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  <Mail size={20} color="#38bdf8" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Official Email</div>
                    <div>{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid var(--border-subtle)',
                  color: '#cbd5e1',
                  fontSize: '0.9rem'
                }}>
                  <MapPin size={20} color="#a855f7" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Location & Availability</div>
                    <div>Remote (Available Worldwide)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connects & Admin Panel Button */}
            <div className="glass-card" style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Professional Profiles:
                </div>

                {/* Admin Dashboard trigger */}
                <button
                  onClick={onOpenAdmin}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: '#38bdf8',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  title="View locally stored client contact submissions"
                >
                  <Database size={13} />
                  <span>View Admin Leads</span>
                </button>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href={PERSONAL_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <LinkedinIcon size={16} color="#0a66c2" />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href={PERSONAL_INFO.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Estimator / Inquiry Form */}
          <div className="glass-card" style={{ padding: '36px 32px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px' }}>
              Project Estimator & Inquiry
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>
              Fill in your project requirements and receive a structured quote and roadmap.
            </p>

            {submitted ? (
              <div style={{
                padding: '30px',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px'
              }}>
                <CheckCircle size={44} color="#10b981" style={{ margin: '0 auto 14px' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#6ee7b7', marginBottom: '8px' }}>
                  Inquiry Saved & Dispatched!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Thank you! Your details have been stored locally in the admin records and WhatsApp has opened to message directly. I will follow up promptly!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                  >
                    Send another inquiry
                  </button>
                  <button 
                    onClick={onOpenAdmin}
                    className="btn-primary"
                    style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                  >
                    View in Admin Dashboard
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    Your Name / Company *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. John Doe / MedTech Inc."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                      Service Needed
                    </label>
                    <select
                      value={formData.roleNeeded}
                      onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: '#0f172a',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Full Stack Web App">Full Stack Web App</option>
                      <option value="Frontend & UI/UX">Frontend & UI/UX</option>
                      <option value="Backend & APIs">Backend & APIs</option>
                      <option value="Payment Gateway (Razorpay/Stripe)">Razorpay / Stripe Payments</option>
                      <option value="AI Integration & n8n">AI Workflows & n8n</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: '#0f172a',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Urgent (1 Week)">Urgent (1 Week)</option>
                      <option value="2 - 3 Weeks">2 - 3 Weeks</option>
                      <option value="1 Month+">1 Month+</option>
                      <option value="Ongoing Retainer">Ongoing Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                    Project Details & Goals *
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Briefly describe what you are looking to build, any design references, or technical preferences..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '6px' }}
                >
                  <Send size={18} />
                  <span>Submit Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
