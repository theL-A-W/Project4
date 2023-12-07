import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Dropdown, DropdownMenu, Button, DropdownToggle, DropdownItem, Accordion, CardHeader} from 'react-bootstrap';
import { useUser } from '../../Context/userContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export default function MessageInput({ onSendMessage, selectedFriend, friendshipId, messages, users, sender }) {
  const [message, setMessage] = useState([]);
  const [allUsers, setAllUsers] = useState('');
  const { userState: { user, token } } = useUser();
  const [userMessages, setUserMessages] = useState([]);
  const [isEditVisible, setEditVisibility] = useState(false);



  function CustomToggle({ children, eventKey }) {

    const decoratedOnClick = useAccordionButton(eventKey, () =>{
    if (isEditVisible == false){
      setEditVisibility(true)
    }else{
      setEditVisibility(false)
    }
    })
  
    return (
      <Button id='message-dropdown-btn'
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }
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
        'http://localhost:8000/messages/',
        {
          sender: sender,
          receiver: selectedFriend.receiver,
          content: message,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
  console.log(response)
      console.log(message)
      setMessage('');
      fetchUserMessages()
  };


  const handleDeleteMessage = async () => {
    console.log(selectedFriend)
 console.log(user)
      const response = await axios.delete(
        'http://localhost:8000/messages/', 
        {
          sender: sender,
          receiver: selectedFriend.receiver,
          content: message,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
  console.log(response)
      console.log(message)
      setMessage('');
      fetchUserMessages()
  };
  const handleEditMessage = async () => {
    console.log(selectedFriend)
 console.log(user)
      const response = await axios.put(
        'http://localhost:8000/messages/', 
        {
          sender: sender,
          receiver: selectedFriend.receiver,
          content: message,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
  console.log(response)
      console.log(message)
      setMessage('');
      fetchUserMessages()
  };









const handleMessageDetails = () => {
  if (isEditVisible == false){
  setEditVisibility(true)
}else{
  setEditVisibility(false)
}
}

  return (

    <div className='message-input'>
      <h2 id='selected-user-name'>{selectedFriend.receiverUsername}</h2>
      <div className='message-display-window'>
        {messages &&
          userMessages.map((message) => (
            <div key={message.id}>
              <div>
                <Accordion defaultActiveKey='0'>
                  <Card id='message-card'>
                    <li id='text-messages'>
                      <CustomToggle eventKey='0' onClick={handleMessageDetails} style={{ backgroundColor: message.user1 === selectedFriend.receiverId ? 'blue' : 'black' }}>
                        {message.content}
                      </CustomToggle>
                    </li>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body id='edit-dropdown' style={{ display: isEditVisible ? 'block' : 'none' }}>
                        <Button id="edit-btn" onClick={handleEditMessage}>Edit</Button>
                        <Button id="delete-btn" onClick={handleDeleteMessage}>Delete</Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          ))}
      </div>
      <div className='text-send'>
        <textarea
          id='message-input'
          value={message}
          onChange={handleInputChange}
          placeholder='Type your message...'
        />
        <button onClick={handleSendMessage} id='message-send-btn'>
          Send
        </button>
      </div>
    </div>
  );
}