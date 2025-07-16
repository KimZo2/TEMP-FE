import { useState } from 'react';
import './SignIn.css';

export default function SignIn({ onSuccess }) {

  // 유저 정보 초기화
  const [form, setForm] = useState({ userId: '', userPw: '' });

  // 정보 입력 시, 유저 정보가 form에 들어온다
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // 제출 ('로그인') 시, 서버로 유저 정보 전송
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://192.168.1.31:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form) // id, pw 직렬화
      });

      const result = await response;

      if (response.ok) {
        console.log('로그인 성공:', result);
        onSuccess?.(result); // 로그인 성공 시 부모에게 알림 
      } else {
        alert(result.message || '로그인 실패');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('서버 통신 오류');
    }
  };


  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h2 className="signin-title">로그인</h2>

      <div className="signin-field">
        <label>아이디</label>
        <input
          id="userId"
          name="userId"
          type="text"
          value={form.id}
          onChange={handleChange}
          required
          autoComplete="username"
        />
      </div>

      <div className="signin-field">
        <label>비밀번호</label>
        <input
          id="userPw"
          name="userPw"
          type="password"
          value={form.pw}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
      </div>

      <button type="submit" className="signin-button">로그인</button>
    </form>
  );
}
