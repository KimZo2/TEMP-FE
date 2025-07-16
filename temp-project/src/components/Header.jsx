import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import SignUp from './users/SignUp';
import SignIn from './users/SignIn';
import Modal from './ui/Modal';
import Map from './Map';
import { LoginContext } from './users/LoginContext';

const Header = () => {

  const [modalType, setModalType] = useState(null); // signup, signin, null
  const [user, setUser] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const setLogin = useContext(LoginContext);

  // 로그인 성공 시 호출할 함수
  const handleLoginSuccess = (userData) => {
    setUser(userData);    // user 상태에 로그인 유저 정보 저장

    localStorage.setItem("token", userData.token);
    localStorage.setItem("nickname", userData.nickname);

    setLogin(true);
    
    closeModal();// 모달 닫기
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <header className='header'>
        <nav className='flex g-10'>
          {user ? (
            <button className="text-button" onClick={handleLogout}>로그아웃</button>
          ) : (
            <>
              <button className="text-button" onClick={() => openModal('signup')}>회원가입</button>
              <button className="text-button" onClick={() => openModal('signin')}>로그인</button>
            </>
          )}

          {modalType === 'signup' && createPortal(
            <Modal onClose={closeModal}>
              <SignUp onClose={closeModal} />
            </Modal>, document.body
          )}

          {modalType === 'signin' && createPortal(
            <Modal onClose={closeModal}>
              <SignIn onSuccess={handleLoginSuccess} />
            </Modal>, document.body
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

const navStyle = {
  display: 'flex',
  gap: '10px',
};