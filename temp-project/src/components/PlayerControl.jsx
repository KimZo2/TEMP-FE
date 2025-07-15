import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';

export default function PlayerControl() {
  const container = useRef(null);
  const gameRef   = useRef(null);

  useEffect(() => {
    class MainScene extends Phaser.Scene {
      preload() {
        // public/assets/player.png 를 준비해 두세요
        this.load.image('player', '/assets/example-icon.png');
      }
      create() {
        this.player = this.physics.add.sprite(200, 150, 'player').setScale(0.3);
        this.player.setCollideWorldBounds(true);

        this.nickname = this.add.text(0, 0, '닉네임: Zoey', {
            fontSize: '14px',
            fill: '#fff',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: { x: 5, y: 2 },
            align: 'center'
          });

          this.status = this.add.text(0, 0, '상태: Online', {
            fontSize: '12px',
            fill: '#0f0',
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: { x: 4, y: 2 },
            align: 'center'
          });

        this.cursors = this.input.keyboard.createCursorKeys();
      }
      update() {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)  this.player.setVelocityX(-150);
        if (this.cursors.right.isDown) this.player.setVelocityX(150);
        if (this.cursors.up.isDown)    this.player.setVelocityY(-150);
        if (this.cursors.down.isDown)  this.player.setVelocityY(150);

        // 닉네임과 상태 텍스트 위치 업데이트 (캐릭터 위)
        this.nickname.setPosition(this.player.x - this.nickname.width / 2, this.player.y - 80);
        this.status.setPosition(this.player.x - this.status.width / 2, this.player.y - 62);
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 300,
      parent: container.current,
      physics: { default: 'arcade' },
      scene: MainScene
    };
    gameRef.current = new Phaser.Game(config);
    return () => gameRef.current.destroy(true);
  }, []);

  return <div ref={container} />;
}