import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';

export default function PlayerControl() {
  const container = useRef(null);
  const gameRef   = useRef(null);

  useEffect(() => {
    class MainScene extends Phaser.Scene {
      preload() {
        // public/assets/player.png 를 준비해 두세요
        this.load.image('player', '/assets/player.png');
      }
      create() {
        this.player = this.physics.add.sprite(200, 150, 'player');
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
      }
      update() {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)  this.player.setVelocityX(-150);
        if (this.cursors.right.isDown) this.player.setVelocityX(150);
        if (this.cursors.up.isDown)    this.player.setVelocityY(-150);
        if (this.cursors.down.isDown)  this.player.setVelocityY(150);
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