import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SignUp from './users/SignUp';
import SignIn from './users/SignIn';
import Modal from './ui/Modal';


const Header = () => {
  
  // 모달 종류: 'signup' | 'signin' | null
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type); 
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
  <header style={headerStyle}>
    <nav style={navStyle}>
      <button className="text-button" onClick={() => openModal('signup')}>회원가입</button>
      <button className="text-button" onClick={() => openModal('signin')}>로그인</button>

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
    </nav>
  </header>
  );

}

export default Header

const headerStyle = {
  width: '100%',
  backgroundColor: '#222',
  color: 'white',
  padding: '10px 20px',
  position: 'fixed',
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: 1000,
};

const navStyle = {
  display: 'flex',
  gap: '10px',
};

