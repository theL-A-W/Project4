import React, { useState } from 'react';


export default function MessageList(messages){
    const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div>
      <textarea value={message} onChange={handleInputChange} placeholder="Type your message..." />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};