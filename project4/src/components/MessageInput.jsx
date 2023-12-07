import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useUser } from '../../Context/userContext';

export default function MessageInput({ onSendMessage, selectedFriend, friendshipId, messages, users, sender }) {
  const [message, setMessage] = useState([]);
  const [allUsers, setAllUsers] = useState('');
  const { userState: { user, token } } = useUser();
  const [userMessages, setUserMessages] = useState([]);


  const fetchUserMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/messages/?friend=${selectedFriend.receiverUsername}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setUserMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {

  
    if (selectedFriend) {
      fetchUserMessages();
      console.log(selectedFriend);
    }
  }, [selectedFriend, token]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    console.log(selectedFriend)
 console.log(user)
      const response = await axios.post(
        'http://localhost:8000/messages/', // Update URL
        {
          sender: sender,
          receiver: selectedFriend.receiver,
          content: message,
          // friendshipId: friendshipId, // Include friendship ID
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
  console.log(response)

      // setMessage([...messages, response.data]); // Update messages state with new message
      console.log(message)
      setMessage('');
      fetchUserMessages()
  };

  return (
    <div className='message-input'>
      <h2 id="selected-user-name">{selectedFriend.receiverUsername}</h2>
      <div className='message-display-window'>
        {messages && userMessages.map((message) => (
          <div key={message.id}>
            <div>
              <li id="text-messages"><Card>{message.content}</Card></li>
            </div>
          </div>
        ))}
      </div>
      <div className='text-send'>
        <textarea id="message-input" value={message} onChange={handleInputChange} placeholder="Type your message..." />
        <button onClick={handleSendMessage} id="message-send-btn">Send</button>
      </div>
    </div>
  );
}