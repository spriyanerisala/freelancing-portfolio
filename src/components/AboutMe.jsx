import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle, 
  Code2, 
  Terminal, 
  ShieldCheck, 
  Zap,
  GraduationCap,
  Sparkles,
  Layers,
  Cpu,
  Laptop
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutMe = ({ onNavigate }) => {
  return (
    <section style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        
        {/* Top Profile Spotlight */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
          
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 50%, #3b82f6 100%)',
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.45), 0 0 70px rgba(139, 92, 246, 0.25)'
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
                  bottom: '8px',
                  right: '8px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '3px solid #07090e',
                  boxShadow: '0 0 12px #10b981'
                }}
                title="Available for Projects Worldwide"
              />
            </div>
          </div>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 16px', 
            borderRadius: '30px', 
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            marginBottom: '20px'
          }}>
            <span className="status-dot"></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8' }}>
              Freelancer • Available for Remote Projects
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.4rem, 5vw, 4rem)', 
            fontWeight: 800, 
            lineHeight: 1.15, 
            marginBottom: '16px' 
          }}>
            Hi, I'm <span className="gradient-text">NERISALA SIVA PRIYA</span>
          </h1>

          <div style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#38bdf8',
            fontWeight: 600,
            marginBottom: '20px',
            fontFamily: "'Space Grotesk', sans-serif"
          }}>
            Freelance Full Stack, Frontend & Backend Web Developer
          </div>

          <p style={{ 
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', 
            color: 'var(--text-muted)', 
            maxWidth: '720px', 
            margin: '0 auto 36px',
            lineHeight: 1.7 
          }}>
            A passionate freelance web engineer specialized in turning ideas and business problems into production-grade, fast, and scalable digital solutions. With expertise across React.js, Next.js, Node.js, Express, Supabase, TypeScript, and AI automations, I build complete end-to-end web applications with realistic design systems and rock-solid architecture.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn-primary" 
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <span>Hire Me / Start Project</span>
              <ArrowRight size={17} />
            </button>
            <button 
              onClick={() => onNavigate('projects')}
              className="btn-secondary" 
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <span>View My Projects</span>
            </button>
            <a 
              href={PERSONAL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-whatsapp"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <MessageSquare size={17} />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginTop: '30px'
          }}>
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 800, 
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#38bdf8',
                  marginBottom: '2px'
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed About Me Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          
          {/* Card 1: Background & Philosophy */}
          <div className="glass-card" style={{ padding: '32px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8'
              }}>
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Background & Education
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '16px' }}>
              Final Year B.Tech student in Computer Science & Engineering at <strong>Siddartha Institute of Science and Technology</strong>, passionate about shipping clean, resilient, and accessible software.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>
              I combine rigorous computer science fundamentals (data structures, algorithms, system design) with modern hands-on development workflows to build web apps that scale.
            </p>
          </div>

          {/* Card 2: Engineering Philosophy */}
          <div className="glass-card" style={{ padding: '32px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8b5cf6'
              }}>
                <Laptop size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Freelance Delivery Approach
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '16px' }}>
              I don't just write code — I partner with clients to understand their business objectives, user journey friction points, and revenue funnels.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" />
                <span>Transparent bi-daily progress updates on Vercel preview links</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" />
                <span>Pixel-perfect Figma-to-code UI implementation</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" />
                <span>Production deployment, domain setup & full GitHub handover</span>
              </li>
            </ul>
          </div>

          {/* Card 3: What I Offer */}
          <div className="glass-card" style={{ padding: '32px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981'
              }}>
                <Cpu size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Full-Stack Capabilities
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '16px' }}>
              Equipped with deep proficiency in both frontend interactivity and backend server/database security:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Supabase", "MySQL", "MongoDB", "Razorpay", "Stripe", "n8n AI Workflows"].map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ fontSize: '0.74rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
