import React, { useState, useEffect } from 'react';

const Main = () => {
  const [stars, setStars] = useState([]);

  // 별 초기화 + 애니메이션
  useEffect(() => {
    const generateStars = () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1
      }));

    setStars(generateStars());

    const interval = setInterval(() => {
      setStars(prev =>
        prev.map(star => ({
          ...star,
          x: (star.x + star.speed) % 100,
          opacity: 0.2 + Math.sin(Date.now() * 0.001 + star.id) * 0.3
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleHover = (e, hover) => {
    e.target.style.transform = hover ? 'translateY(-2px)' : 'translateY(0)';
    e.target.style.boxShadow = hover
      ? '0 20px 25px rgba(0, 0, 0, 0.15)'
      : '0 10px 15px rgba(0, 0, 0, 0.1)';
  };

  const handleClick = () => alert('곧 만나요~!');

  return (
    <div style={styles.container}>
        
      {/* 별들 배경 */}
      <div style={styles.starField}>
        {stars.map(star => (
          <div
            key={star.id}
            style={{
              ...styles.star,
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.5)`
            }}
          />
        ))}
      </div>

      {/* 메인 화면 */}
      <div style={styles.content}>
        <div style={styles.textSection}>
          <div style={styles.mainTitle}>Learn Together, Live Together</div>
          <div style={styles.subtitle}>TEMP</div>
          <div style={styles.description}>
            단순한 채팅이 아니라, 같은 공간에 함께 있다는 존재감으로 학습 동기부여를 받아보세요!
          </div>
          <div style={styles.buttonContainer}>
            {['Sign Up', 'Sign In'].map((label, idx) => (
              <button
                key={idx}
                style={styles.button}
                onClick={handleClick}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @media (max-width: 768px) {
            .subtitle {
              font-size: 2.5rem !important;
            }
          }
        `
      }} />
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #edc872 0%, #445584 50%, #0c0b2e 100%)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  starField: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    pointerEvents: 'none'
  },
  star: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '50%',
    animation: 'pulse 2s infinite'
  },
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    alignItems: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    minHeight: '100vh'
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
    maxWidth: '800px'
  },
  mainTitle: {
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: '4rem',
    fontWeight: '900',
    lineHeight: '1.1',
    background: 'linear-gradient(90deg, #ffffff 0%, #d1d5db 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  description: {
    color: '#d1d5db',
    fontSize: '1.125rem',
    lineHeight: '1.6',
    maxWidth: '32rem'
  },
  buttonContainer: {
    paddingTop: '1rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    background: 'linear-gradient(90deg, #180b37 0%, #243871 100%)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s',
    overflow: 'hidden'
  }
};

export default Main;
