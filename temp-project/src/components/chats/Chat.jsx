import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([input,...messages]);
    setInput('');
  };

  return (
    <div
      className="chat-container"
      style={{
        width: '300px',
        height: '400px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      {/* 메시지 출력 영역 */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>
            {msg}
          </div>
        ))}
      </div>

      {/* 입력 폼 */}
      <form
        onSubmit={handleSend}
        style={{
          display: 'flex',
          borderTop: '1px solid #ddd',
          padding: '10px',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
          style={{
            flex: 1,
            padding: '6px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '8px',
            padding: '6px 12px',
            fontSize: '14px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default Chat;
