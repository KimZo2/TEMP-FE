import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';
import Chat from './chats/Chat'
import { createGame, configure, terminate } from '@/canvas/TempWorldUtil'

export default function PlayerControl() {
  const container = useRef(null);
  const gameRef   = useRef(null);

  useEffect(() => {
    gameRef.current = createGame();

    return () => terminate(gameRef.current);
  }, []);

  return (
  <div>
    <div ref={container} />
    <Chat/>  
  </div>
  );
}