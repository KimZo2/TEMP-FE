import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';
import { createGame, configure, terminate } from '@/game/util/TempWorldUtil'

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
      <div ref={container} id="map-div" className='map-container'>
        {children}
      </div>
      
    </>
  );
}