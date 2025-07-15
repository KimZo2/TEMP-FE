import React, { useState } from 'react';
import PhaserBase      from './components/PhaserBase';
import PlayerControl   from './components/PlayerControl';
import BouncingBall    from './components/BouncingBall';

export default function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <button onClick={() => setStep(1)}>베이스</button>
      <button onClick={() => setStep(2)}>플레이어 이동</button>
      <button onClick={() => setStep(3)}>공 튕기기</button>

      {step === 1 && <PhaserBase />}
      {step === 2 && <PlayerControl />}
      {step === 3 && <BouncingBall />}
    </div>
  );
}