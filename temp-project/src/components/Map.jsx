import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';
import Chat from './chats/Chat'
import { createGame, configure, terminate } from '@/canvas/TempWorldUtil'

export default function Map() {
  const container = useRef(null);
  const gameRef   = useRef(null);

  useEffect(() => {
    gameRef.current = createGame();

    return () => terminate(gameRef.current);
  }, []);

  return (
  <div>
    <div ref={container} id="map-container"/>
    <Chat/>  
  </div>
  );
}