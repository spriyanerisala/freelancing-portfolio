import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Star, 
  ArrowUpRight, 
  Code,
  Image,
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';

const CATEGORIES = ["All Projects", "Full Stack", "Frontend & UI/UX", "AI & Full Stack"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div style={{ 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            letterSpacing: '0.1em', 
            color: '#38bdf8', 
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            Portfolio & Case Studies
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px' }}>
            Featured Production Works
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Production-ready, realistic web applications showcasing full-stack engineering, FinTech payment gateways, luxury frontend UI/UX, and AI integrations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '24px',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: selectedCategory === cat ? '1px solid #38bdf8' : '1px solid var(--border-subtle)',
                background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.4)',
                color: selectedCategory === cat ? '#38bdf8' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Flagship Projects Spotlight (Avenue Hospital & Aura Bliss) */}
        {selectedCategory === "All Projects" && (
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '30px'
            }}>
              {PROJECTS.filter(p => p.isFlagship).map((project) => (
                <div 
                  key={project.id}
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(56, 189, 248, 0.28)',
                    background: 'linear-gradient(180deg, rgba(16, 26, 46, 0.85) 0%, rgba(10, 16, 30, 0.85) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  {/* Project Image Banner */}
                  <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.1) 0%, rgba(10, 16, 30, 0.95) 100%)'
                    }} />
                  </div>

                  <div style={{ padding: '24px 30px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Category */}
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '8px' }}>
                      {project.category}
                    </div>

                    {/* Title & Tagline */}
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px' }}>
                      {project.title}
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 600, marginBottom: '14px' }}>
                      {project.tagline}
                    </div>

                    {/* Description */}
                    <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div style={{
                      background: 'rgba(7, 11, 20, 0.6)',
                      borderRadius: '12px',
                      padding: '16px 18px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      marginBottom: '20px'
                    }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '10px' }}>
                        Key Engineering Highlights:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {project.highlights.map((h, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#e2e8f0' }}>
                            <CheckCircle size={15} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '8px' }}>
                        Technology Stack:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="tech-badge" style={{ fontSize: '0.75rem' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status Notice if applicable */}
                    {project.statusNotice && (
                      <div style={{
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        fontSize: '0.82rem',
                        color: '#fbbf24',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '20px',
                        lineHeight: 1.5
                      }}>
                        <AlertCircle size={16} color="#f59e0b" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{project.statusNotice}</span>
                      </div>
                    )}

                    {/* Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto', paddingTop: '10px' }}>
                      {project.imagesUrl ? (
                        <a 
                          href={project.imagesUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn-primary" 
                          style={{ flex: 1, padding: '10px 16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                          title="View Project Screenshots on GitHub"
                        >
                          <Image size={16} />
                          <span>Project Images</span>
                        </a>
                      ) : (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn-primary" 
                          style={{ flex: 1, padding: '10px 18px' }}
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {project.imagesUrl && project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn-secondary" 
                          style={{ padding: '10px 14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                          title="Visit Live Deployment"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-secondary" 
                        style={{ padding: '10px 16px' }}
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid with Images */}
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredProjects.filter(p => selectedCategory !== "All Projects" || !p.isFlagship).map((project) => (
              <div 
                key={project.id} 
                className="glass-card" 
                style={{ 
                  overflow: 'hidden',
                  display: 'flex', 
                  flexDirection: 'column' 
                }}
              >
                {/* Project Image */}
                <div style={{ position: 'relative', width: '100%', height: '170px', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.1) 0%, rgba(10, 16, 30, 0.9) 100%)'
                  }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                    <span className="tech-badge" style={{ fontSize: '0.72rem' }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                    {project.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', marginBottom: '12px', fontWeight: 500 }}>
                    {project.tagline}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '16px', flexGrow: 1 }}>
                    {project.description}
                  </p>

                  {/* Status Notice if applicable */}
                  {project.statusNotice && (
                    <div style={{
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: '8px',
                      padding: '9px 12px',
                      fontSize: '0.78rem',
                      color: '#fbbf24',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '16px',
                      lineHeight: 1.45
                    }}>
                      <AlertCircle size={15} color="#f59e0b" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{project.statusNotice}</span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                    {project.imagesUrl ? (
                      <a 
                        href={project.imagesUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-primary" 
                        style={{ flex: 1, padding: '8px 12px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                        title="View Project Screenshots on GitHub"
                      >
                        <Image size={14} />
                        <span>Project Images</span>
                      </a>
                    ) : (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-primary" 
                        style={{ flex: 1, padding: '8px 14px', fontSize: '0.82rem' }}
                      >
                        <span>View Live</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {project.imagesUrl && project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-secondary" 
                        style={{ padding: '8px 10px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        title="Visit Live Deployment"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-secondary" 
                      style={{ padding: '8px 12px', fontSize: '0.82rem' }}
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
