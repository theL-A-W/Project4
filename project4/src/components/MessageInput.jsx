import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


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
    <div className='message-input'>
      <div className='message-display-window'>
        <div className='other-users-messages'>
          <Card>User1's Messages</Card>
        </div>
        <div className='current-users-messages'>
          <Card>User2's Messages</Card>
        </div>

      </div>
      <div className='text-send'>
      <textarea id="message-input" value={message} onChange={handleInputChange} placeholder="Type your message..." />
      <button onClick={handleSendMessage} id="message-send-btn">Send</button>
      </div>
    </div>
  );
};