import React from 'react';

export default function MessageList(messages){

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <strong>{message.sender.username}:</strong> {message.content}
        </li>
      ))}
    </ul>
  );
};

