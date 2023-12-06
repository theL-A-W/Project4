import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useUser } from '../../Context/userContext';

export default function MessageInput({ onSendMessage, selectedFriend, friendshipId, messages }) {
  const [message, setMessage] = useState('');
  const { userState: { user, token } } = useUser();
  // const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [friends, setFriends] = useState([]); // Initialize friends state

  useEffect(() => {
    const fetchUserMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/messages/?friend=${selectedFriend}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
  
        setUserMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    // Check if a friend is selected before making the API call
    if (selectedFriend) {
      fetchUserMessages();
    }
  }, [selectedFriend, token]);
  

  



  useEffect(() => {
    const fetchUserMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/messages/?friend=${selectedFriend}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
  
        setUserMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
  
    // Check if a friend is selected before making the API call
    if (selectedFriend) {
      fetchUserMessages();
    }
  }, [selectedFriend, token]);

    // // Fetch friends data when the component mounts
    // const fetchUserMessages = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:8000/message/', {
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //     });
    //     setUserMessages(response.data);
    //     console.log(response.data)
    //   } catch (error) {
    //     console.error('Error fetching friends:', error);
    //   }
    // };



  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Perform the API call to send the message and update the messages state
      axios.post('http://localhost:8000/messages/', {
        sender: user,
        receiver: selectedFriend,
        content: message,
        friendship_id: friendshipId,
      }, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setMessages([...messages, response.data]);
        onSendMessage(response.data); // Callback to inform parent about the new message
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });

      setMessage('');
    }
  };


  return (
    <div className='message-input'>
      <div className='message-display-window'>
        {messages && userMessages.map((message) => {

          return (
            <div key={message.user1}>
                <div>
                    <li id="message-sender-list"><Card>{message.content}</Card></li>
                </div>
            </div>
          );
        })}
      </div>
      <div className='text-send'>
        <textarea id="message-input" value={message} onChange={handleInputChange} placeholder="Type your message..." />
        <button onClick={handleSendMessage} id="message-send-btn">Send</button>
      </div>
    </div>
  );
}


// export default function MessageList(messages){
//     const [message, setMessage] = useState('');

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   return (
//     <div className='message-input'>
//       <div className='message-display-window'>
//         <div className='other-users-messages'>
//           <Card>User1's Messages</Card>
//         </div>
//         <div className='current-users-messages'>
//           <Card>User2's Messages</Card>
//         </div>

//       </div>
//       <div className='text-send'>
//       <textarea id="message-input" value={message} onChange={handleInputChange} placeholder="Type your message..." />
//       <button onClick={handleSendMessage} id="message-send-btn">Send</button>
//       </div>
//     </div>
//   );
// };
