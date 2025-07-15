import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';

export default function PhaserBase() {
  const container = useRef(null);
  const gameRef   = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 300,
      parent: container.current,
      scene: {
        create() {
          this.add.text(20, 20, 'Hello, Phaser!', { font: '20px Arial', fill: '#ffffff' });
        }
      },
      backgroundColor: '#2d2d2d'
    };
    gameRef.current = new Phaser.Game(config);
    return () => gameRef.current.destroy(true);
  }, []);

  return <div ref={container} />;
}