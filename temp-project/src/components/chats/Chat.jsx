import React, { useState } from 'react';

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

    // 제출 버튼 클릭 시, 공백이 아닌 value(input)을 기존 매시지 배열에 갱신
  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="chat-container">

        {/* 입력한 채팅 값을 보여주기 위한 부분 */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column-reverse',  // 아래에서부터 쌓이도록
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>
            {msg}
          </div>
        ))}
    </div>


      {/* 입력을 위한 폼 태그 */}
      <form onSubmit={handleSend} className="chat-form">
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button type="submit" className="chat-send">전송</button>
      </form>
    </div>
  );
}

export default Chat