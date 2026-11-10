import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trash2, 
  Download, 
  MessageSquare, 
  Mail, 
  Clock, 
  Calendar,
  Search,
  CheckCircle,
  Database,
  Lock,
  KeyRound,
  ShieldAlert,
  LogOut,
  Eye,
  EyeOff
} from 'lucide-react';

const ADMIN_CREDENTIALS = {
  email: "nspriya005@gmail.com",
  password: "Nerisala@2005"
};

export const AdminDashboardModal = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  useEffect(() => {
    if (isOpen) {
      // Always require authentication for security
      setIsAuthenticated(false);
      setLoginError('');
      setLoginEmail('');
      setLoginPassword('');
    }
  }, [isOpen]);

  const loadContacts = () => {
    try {
      const data = JSON.parse(localStorage.getItem('freelance_inquiries') || '[]');
      setContacts(data);
    } catch (e) {
      console.error(e);
      setContacts([]);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginEmail.trim().toLowerCase() === ADMIN_CREDENTIALS.email.toLowerCase() &&
      loginPassword === ADMIN_CREDENTIALS.password
    ) {
      sessionStorage.setItem('admin_authenticated', 'true');
      setIsAuthenticated(true);
      setLoginError('');
      loadContacts();
    } else {
      setLoginError('Invalid credentials. Access restricted to administrator.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
    setLoginEmail('');
    setLoginPassword('');
  };

  const deleteContact = (id) => {
    if (window.confirm("Delete this contact inquiry?")) {
      const updated = contacts.filter(c => c.id !== id);
      localStorage.setItem('freelance_inquiries', JSON.stringify(updated));
      setContacts(updated);
    }
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to delete all contact inquiries stored in the browser?")) {
      localStorage.removeItem('freelance_inquiries');
      setContacts([]);
    }
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contacts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `freelance_contacts_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  const filtered = contacts.filter(c => {
    const matchSearch = 
      (c.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.details || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchRole = filterRole === 'All' || c.roleNeeded === filterRole;
    return matchSearch && matchRole;
  });

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: 'rgba(3, 5, 10, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div 
        className="glass-card" 
        style={{
          width: '100%',
          maxWidth: isAuthenticated ? '960px' : '440px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          border: '1px solid rgba(56, 189, 248, 0.3)',
          background: 'rgba(10, 15, 28, 0.98)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
          transition: 'max-width 0.3s ease'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8'
            }}>
              {isAuthenticated ? <Database size={18} /> : <Lock size={18} />}
            </div>
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                {isAuthenticated ? "Client Inquiries Admin Dashboard" : "Admin Authentication"}
              </h2>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>
                {isAuthenticated ? "Protected Storage • NERISALA SIVA PRIYA" : "Restricted Administrator Access"}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isAuthenticated && (
              <>
                <button
                  onClick={exportJSON}
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                  title="Export to JSON"
                >
                  <Download size={13} />
                  <span>Export</span>
                </button>
                <button
                  onClick={clearAll}
                  className="btn-secondary"
                  style={{ padding: '6px 10px', fontSize: '0.78rem', color: '#f87171' }}
                  title="Clear All Contacts"
                >
                  <Trash2 size={13} />
                </button>
                <button
                  onClick={handleLogout}
                  className="btn-secondary"
                  style={{ padding: '6px 10px', fontSize: '0.78rem' }}
                  title="Logout"
                >
                  <LogOut size={13} />
                </button>
              </>
            )}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#fff',
                padding: '7px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              title="Close Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content: Auth Gate or Admin Table */}
        {!isAuthenticated ? (
          <div style={{ padding: '32px 28px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
                margin: '0 auto 14px'
              }}>
                <KeyRound size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                Admin Portal Login
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Please sign in with administrator credentials to view and manage received client leads.
              </p>
            </div>

            {loginError && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#f87171',
                fontSize: '0.82rem',
                marginBottom: '18px'
              }}>
                <ShieldAlert size={16} style={{ flexShrink: 0 }} />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                  Admin Email
                </label>
                <input 
                  type="email"
                  required
                  placeholder="Enter administrator email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter admin password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 42px 10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px'
                    }}
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem', marginTop: '6px' }}
              >
                <Lock size={15} />
                <span>Unlock Dashboard</span>
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* Filters and Search Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              padding: '14px 24px',
              background: 'rgba(7, 10, 20, 0.6)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1, maxWidth: '380px' }}>
                <Search size={15} color="var(--text-dim)" />
                <input 
                  type="text"
                  placeholder="Search by name, email, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  Total Inquiries: <strong style={{ color: '#38bdf8' }}>{contacts.length}</strong>
                </span>
              </div>
            </div>

            {/* Contacts Table / Cards */}
            <div style={{
              padding: '20px 24px',
              overflowY: 'auto',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              {filtered.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '50px 20px',
                  color: 'var(--text-dim)'
                }}>
                  <CheckCircle size={38} color="rgba(56, 189, 248, 0.3)" style={{ margin: '0 auto 12px' }} />
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    {contacts.length === 0 ? "No client inquiries submitted yet." : "No results matching your search."}
                  </div>
                  <p style={{ fontSize: '0.82rem', maxWidth: '380px', margin: '6px auto 0' }}>
                    When visitors submit the contact form, their submissions appear here and dispatch to your WhatsApp and email.
                  </p>
                </div>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                      borderRadius: '12px',
                      padding: '16px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
                            {item.name}
                          </span>
                          <span className="tech-badge" style={{ fontSize: '0.72rem' }}>
                            {item.roleNeeded}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Mail size={13} color="#38bdf8" />
                            <a href={`mailto:${item.email}`} style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                              {item.email}
                            </a>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Calendar size={13} color="#a855f7" />
                            <span>{item.date || 'Recent'}</span>
                          </span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <a
                          href={`https://wa.me/918885023504?text=${encodeURIComponent(`Hi ${item.name}, I received your inquiry regarding "${item.roleNeeded}"!`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-whatsapp"
                          style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                        >
                          <MessageSquare size={13} />
                          <span>Reply WhatsApp</span>
                        </a>
                        <button
                          onClick={() => deleteContact(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-dim)',
                            cursor: 'pointer',
                            padding: '6px'
                          }}
                          onMouseEnter={(e) => e.target.style.color = '#f87171'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-dim)'}
                          title="Delete record"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>

                    {/* Scope / Message */}
                    <div style={{
                      background: 'rgba(7, 10, 20, 0.5)',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      lineHeight: 1.5,
                      whiteSpace: 'pre-wrap'
                    }}>
                      {item.details}
                    </div>

                    {/* Budget & Timeline info */}
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      <span>Budget: <strong style={{ color: '#34d399' }}>{item.budget}</strong></span>
                      <span>•</span>
                      <span>Timeline: <strong style={{ color: '#38bdf8' }}>{item.timeline}</strong></span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
