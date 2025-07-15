// components/ui/Body.jsx
import React from 'react';

export default function Body({ children }) {
  const bodyStyle = {
    paddingTop: '60px', // Header 높이만큼 여백 확보
    paddingLeft: '20px',
    paddingRight: '20px',
    boxSizing: 'border-box',
  };

  return (
    <main style={bodyStyle}>
      {children}
    </main>
  );
}
