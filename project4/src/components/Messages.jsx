import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import axios from 'axios';

export default function Messages(){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch messages from the server or any other initialization logic
        // axios.get('/api/inbox/').then((response) => setMessages(response.data));
      }, []);
    
      const sendMessage = (content) => {
        // Send the message to the server and update the local state
        // axios.post('/api/send-message/', { content }).then((response) => {
        //   setMessages([...messages, response.data]);
        // });
      };


    return(
        <div className="messages">
            <h2 id="message-title">Messages</h2>
            <div id="messages">
                <MessageList messages={messages} />
                <MessageInput onSendMessage={sendMessage} />
            </div>
        </div>
    )
}