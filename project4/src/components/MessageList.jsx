import React from 'react';
import { Card } from 'react-bootstrap';

export default function MessageList(messages){

  return (
    <div className='message-list'>
      <div>
        <ul>
          <li id="message-sender-list"><Card>Sender</Card></li>
          <li id="message-sender-list"><Card>Sender</Card></li>
          <li id="message-sender-list"><Card>Sender</Card></li>
          <li id="message-sender-list"><Card>Sender</Card></li>
        </ul>
      </div>
    <ul>
      {/* {messages.map((message) => (
        <li key={message.id}>
          <strong>{message.sender.username}:</strong> {message.content}
        </li>
      ))} */}
    </ul>
    </div>
  )
}

