
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Dropdown, DropdownMenu, Button, Modal, DropdownToggle, DropdownItem, Accordion, CardHeader} from 'react-bootstrap';
import { useUser } from '../../Context/userContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export default function MessageInput({ onSendMessage, selectedFriend, friendshipId, messages, users, sender }) {
  const [message, setMessage] = useState([]);
  const [allUsers, setAllUsers] = useState('');
  const { userState: { user, token } } = useUser();
  const [allMessagesForUser, setAllMessagesForUser] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [isEditVisible, setEditVisibility] = useState(false);
  const [messageId, setMessageId]= useState({})
  const [messageContent, setMessageContent]= useState('')
  const [messageSender, setMessageSender]= useState('')
  const [messageReceiver, setMessageReceiver]= useState('')
  const [showEditModal, setShowEditModal] = useState(false);


  function CustomToggle({ children, eventKey, messageId, setMessageId, messageContent, setMessageContent }) {

    const decoratedOnClick = useAccordionButton(eventKey, () => {
      if (isEditVisible === false) {
        setEditVisibility(true);
        setMessageId(messageId); // Set the messageId when the button is clicked
      } else {
        setEditVisibility(false);
        setMessageId({}); // Clear the messageId when the button is clicked again
      }
    });
  
    return (
      <Button id='message-dropdown-btn' type="button" onClick={decoratedOnClick}>
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
      console.log(response)
      console.log(userMessages)
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




  // DELETE MESSAGE
const handleDeleteMessage = async () => {

  const response = await axios.delete(
     `http://localhost:8000/message/${messageId}/`, 
     {
       headers: {
         Authorization: `Token ${token}`,
       },
     }
  );
  // setMessage('');
  setMessageId({});
  setMessageContent('');
  fetchUserMessages()
 };

 const handleEditMessage = async () => {
    const response = await axios.put(
      `http://localhost:8000/message/${messageId}/`,
      {
        user1: sender,
        user2: selectedFriend.receiver,
        content: messageContent,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log(message)
    setMessageId(null);
    setMessageContent('');
    fetchUserMessages();
    handleCloseEditModal();
  };

  const changeMessage = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };


console.log(selectedFriend)
console.log(sender)
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
                        <CustomToggle
                          // className={message.user2_username === selectedFriend.receiverUsername ? 'whiteBackground' : 'blueBackground' }
                          data-id="{{ message.id }}"
                          eventKey='0'
                          messageId={message.id}
                          setMessageId={setMessageId}
                          messageContent={message.content}
                          setMessageContent={setMessageContent}
                          messageSender={message.user1}
                          setMessageSender = {messageSender}
                          messageReceiver={message.user2}
                          setMessageReceiver = {messageReceiver}
                          className={message.user1 !== sender ? 'whiteBackground' : ''}
                        >
                          {message.content}
                        </CustomToggle>
                      </li>
                      <Accordion.Collapse eventKey='0'>
                        <Card.Body id='edit-dropdown' style={{ display: isEditVisible ? 'block' : 'none' }}>
                          <Button id="edit-btn" onClick={changeMessage}>Edit</Button>
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

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            placeholder='Edit your message...'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleEditMessage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
