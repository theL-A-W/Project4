import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useUser } from '../../Context/userContext';

export default function MessageInput({ onSendMessage, selectedFriend, friendshipId }) {
  const [message, setMessage] = useState('');
  const { userState: { user, token } } = useUser();
  const [messages, setMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [friends, setFriends] = useState([]); // Initialize friends state

  useEffect(() => {
    // Fetch friends data when the component mounts
    const fetchFriends = async () => {
      try {
        const response = await axios.get('http://localhost:8000/friendship/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, [token]);




  useEffect(() => {
    // Fetch friends data when the component mounts
    const fetchUserMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/message/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setUserMessages(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchUserMessages();
    console.log(userMessages)
  }, [token]);






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
  const handleShowMessages = () => {

  }

  return (
    <div className='message-input'>
      <div className='message-display-window'>
        {/* Check if friends is defined before using map */}
        {friends && friends.map((friendship) => {
          // Extract usernames from the friendship object
          const [username1, username2] = friendship.usernames;
          // Determine the other user's username
          const otherUsername = username1 === user ? username2 : username1;
          // Check if the current user's username matches either username
          const isCurrentUserFriend = username1 === user || username2 === user;

          return (
            <div key={friendship.id}>
              {isCurrentUserFriend && (
                <div>
                  <Button id="friends-to-message" onClick={handleShowMessages}>
                    <li id="message-sender-list"><Card>{otherUsername}</Card></li>
                  </Button>
                </div>
              )}
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
