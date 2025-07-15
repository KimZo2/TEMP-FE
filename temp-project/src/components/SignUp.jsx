import { useState } from 'react';
import './SignUp.css'; 

export default function SignUp() {
  const [form, setForm] = useState({ id: '', pw: '', nickname: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('회원가입 데이터:', form);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-title">회원가입</h2>

      <div className="signup-field">
        <label htmlFor="id">아이디</label>
        <input
          id="id"
          name="id"
          value={form.id}
          onChange={handleChange}
          required
          autoComplete="username"
        />
      </div>

      <div className="signup-field">
        <label htmlFor="pw">비밀번호</label>
        <input
          id="pw"
          type="password"
          name="pw"
          value={form.pw}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
      </div>

      <div className="signup-field">
        <label htmlFor="nickname">닉네임</label>
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
