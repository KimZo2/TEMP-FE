import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

export default function Game() {
  const gameContainer = useRef(null);
  const phaserGame = useRef(null);

  useEffect(() => {
    // Phaser 설정 객체
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameContainer.current,    // 이 div 안에 렌더링
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 300 } }
      },
    };

    // Phaser.Game 인스턴스 생성
    phaserGame.current = new Phaser.Game(config);

    // 언마운트 시 Phaser 리소스 정리
    return () => {
      phaserGame.current.destroy(true);
    };
  }, []);

  function preload() {
    this.load.image('sky', '/assets/sky.png');
    // ... 필요한 에셋 추가
  }

  function create() {
    this.add.image(400, 300, 'sky');
    // ... 초기 씬 구성
  }

  function update(time, delta) {
    // 매 프레임 로직
  }

  return (
    // 게임이 렌더될 div
    <div
      ref={gameContainer}
      style={{ width: 800, height: 600, margin: '0 auto' }}
    />
  );
}