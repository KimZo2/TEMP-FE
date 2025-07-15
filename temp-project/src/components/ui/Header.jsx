// Header.jsx
import React from 'react';

export default function Header({ children }) {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {children}
      </nav>
    </header>
  );
}

const headerStyle = {
  width: '100%',
  backgroundColor: '#222',
  color: 'white',
  padding: '10px 20px',
  position: 'fixed',
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: 1000,
};

const navStyle = {
  display: 'flex',
  gap: '10px',
};

