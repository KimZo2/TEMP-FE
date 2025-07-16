import { useState } from 'react';
import './SignUp.css';

export default function SignUp({onClose}) {

  // 유저 정보 초기화 (id, pw, nickname)
  const [form, setForm] = useState({ userId: '', userPw: '', nickname: '' });

  // 입력한 유저 정보가 form 값에 담긴다 
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
  };

  // '가입하기' (제출) 버튼 클릭 시, 백엔드 서버로 요청 보내기
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://192.168.1.31:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form) // userId, userPw, nickname 직렬화
      });

      const result = await response;

      if (response.ok) {
        alert('회원가입 성공!');
        onClose(); // 회원가입 성공 시 부모에게 알림 
      } else {
        alert(result.message || '회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 에러:', error);
      alert('서버 통신 오류');
    }
  };


  return (

    // 회원가입을 위한 폼 (input 태그들로 구성)
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-title">회원가입</h2>

      <div className="signup-field">
        <label>아이디</label>
        <input
          id="userId"
          name="userId"
          value={form.userId}
          onChange={handleChange}
          required
          autoComplete="username"
        />
      </div>

      <div className="signup-field">
        <label>비밀번호</label>
        <input
          id="userPw"
          type="password"
          name="userPw"
          value={form.userPw}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
      </div>

      <div className="signup-field">
        <label>닉네임</label>
        <input
          id="nickname"
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          required
        />
      </div>

      <button className="signup-button" type="submit">가입하기</button>
    </form>
  );
}
