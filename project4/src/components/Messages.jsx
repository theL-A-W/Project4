// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '../../Context/userContext';
// import MessageInput from './MessageInput';
// import MessageList from './MessageList';

// export default function Messages() {
//     const { userState: { token }, setUser } = useUser();
//     const [friends, setFriends] = useState([]);

//     console.log('User Token:', token);


//   const fetchFriends = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/friendship/', {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });

//       setFriends(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching friends:', error);
//     }
//   };

//   useEffect(() => {
//     fetchFriends();
//   }, [token]);

//   const sendMessage = (content) => {
//     // Send the message to the server and update the local state
//     // axios.post('/api/send-message/', { content }).then((response) => {
//     //   setMessages([...messages, response.data]);
//     // });
//   };

//   return (
//     <div className="messages">
//       <h2 id="message-title">Messages</h2>
//       <div id="messages">
//         <MessageList friends={friends} />
//         <MessageInput onSendMessage={sendMessage} />
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../Context/userContext';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function Messages() {
  const { userState: { token, user }, setUser } = useUser();
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null); // Track the selected friend
  const [friendshipId, setFriendshipId] = useState(null); // Track the selected friendship id

  const fetchFriends = async () => {
    try {
      const response = await axios.get('http://localhost:8000/friendship/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });


      setFriends(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, [token]);

  const sendMessage = (content) => {
    // You can update the state or perform any other actions after sending a message
    console.log('Message sent:', content);
  };

  const handleSelectFriend = (friendUsername, friendshipId) => {
    setSelectedFriend(friendUsername);
    setFriendshipId(friendshipId);
  };

  return (
    <div className="messages">
      <h2 id="message-title">Messages</h2>
      <div id="messages">
        <MessageList friends={friends} onSelectFriend={handleSelectFriend} />
        <MessageInput
          onSendMessage={sendMessage}
          selectedFriend={selectedFriend}
          friendshipId={friendshipId}
        />
      </div>
    </div>
  );
}
