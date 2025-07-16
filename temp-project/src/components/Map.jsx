import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';
import { createGame, configure, terminate } from '@/canvas/TempWorldUtil'

export default function Map({ children }) {

  const container = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {

    const config = configure(container.current);

    gameRef.current = createGame(config);

    return () => terminate(gameRef.current);
  }, []);

  return (
    <>
      {children}
      <div ref={container} id="map" className="flex-none w-full h-[600px] bg-black"></div>
    </>
  );
}