import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';

export default function BouncingBall() {
  const container = useRef(null);
  const gameRef   = useRef(null);

  useEffect(() => {
    class BallScene extends Phaser.Scene {
      preload() {
        this.load.image('ball', '/assets/ball.png');
      }
      create() {
        // 공 생성
        const ball = this.physics.add.image(200, 150, 'ball');
        ball.setVelocity(120, 200);
        ball.setBounce(1, 1);
        ball.setCollideWorldBounds(true);

        // 바닥 하나 만들어 충돌 연출
        const ground = this.add.rectangle(200, 290, 400, 20, 0x6666ff);
        this.physics.add.existing(ground, true);
        this.physics.add.collider(ball, ground);
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 1200,
      height: 900,
      parent: container.current,
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 300 }, debug: true }
      },
      scene: BallScene
    };
    gameRef.current = new Phaser.Game(config);
    return () => gameRef.current.destroy(true);
  }, []);

  return <div ref={container} />;
}