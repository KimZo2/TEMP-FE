import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PlayerControl from './components/PlayerControl';
import SignUp        from './components/SignUp';
import SignIn        from './components/SignIn';
import Modal         from './components/ui/Modal';
import Header from './components/ui/Header';
import Body from './components/Body';

import './App.css'; 
import './components/ui/Modal.css'; 




export default function App() {
  const [step, setStep] = useState(1);

  // 모달 종류: 'signup' | 'signin' | null
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type); 
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div>
      <Header>
        <button className="text-button" onClick={() => openModal('signup')}>회원가입</button>
        <button className="text-button" onClick={() => openModal('signin')}>로그인</button>
      </Header>

      <Body>
        {step === 1 && <PlayerControl />}

        {modalType === 'signup' && createPortal(
          <Modal onClose={closeModal}>
            <SignUp />
          </Modal>, document.body
        )}

        {modalType === 'signin' && createPortal(
          <Modal onClose={closeModal}>
            <SignIn />
          </Modal>, document.body
        )}
      </Body>
    </div>
  );
}
