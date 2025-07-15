import { useState } from 'react';
import './SignIn.css'; 

export default function SignIn({ onSuccess }) {
  const [form, setForm] = useState({ id: '', pw: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('로그인 데이터:', form);
    onSuccess?.();
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h2 className="signin-title">로그인</h2>

      <div className="signin-field">
        <label>아이디</label>
        <input
          name="id"
          type="text"
          value={form.id}
          onChange={handleChange}
          required
        />
      </div>

      <div className="signin-field">
        <label>비밀번호</label>
        <input
          name="pw"
          type="password"
          value={form.pw}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="signin-button">로그인</button>
    </form>
  );
}
