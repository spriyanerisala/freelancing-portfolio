import React from 'react';

export const GithubIcon = ({ size = 18, color = "currentColor", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 18, color = "currentColor", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const FreelancerIcon = ({ size = 18, color = "currentColor", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M14.07 0L8.71 5.92H1.94L0 7.86l7.03 2.72L1.87 24l13.68-12.83 8.45.69-2.22-3.1-6.1-.5 4.37-4.83L24 2.82 20.47 0h-6.4zM9.54 7.64l3.16-3.5h3.81l-3.32 3.68-.03.04-3.62-.22zM8.33 11.5l3.96 4.35-7.5 7.03 4.29-10.74.07-.15-.82-.49z" />
  </svg>
);

export const UpworkIcon = ({ size = 18, color = "currentColor", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.794 0-5.838 2.508-6.46 4.654l-.49-2.316h-3.36v7.35c0 1.954-1.59 3.544-3.544 3.544-1.954 0-3.544-1.59-3.544-3.544V7.356H0v7.35c0 3.793 3.087 6.88 6.88 6.88 3.793 0 6.88-3.087 6.88-6.88v-1.78c.846 1.053 1.942 1.83 3.23 2.222l-2.02 9.539h3.393l1.458-6.887c.725.143 1.48.223 2.257.223 4.418 0 8.01-3.593 8.01-8.01 0-4.42-3.592-8.013-8.01-8.013z" />
  </svg>
);
