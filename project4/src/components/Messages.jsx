// import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMessage } from '@fortawesome/free-solid-svg-icons'
// import React, { useState, useEffect } from 'react';
// import MessageInput from './MessageInput';
// import MessageList from './MessageList';
// import axios from 'axios';
// import { useUser } from '../../Context/userContext';


// export default function Messages(){
//     const [messages, setMessages] = useState([]);
//     const { state: { token } } = useUser();
//     const [friends, setFriends] = useState([]);

//         // Fetch messages from the server or any other initialization logic
//         // axios.get('/api/inbox/').then((response) => setMessages(response.data));



// // const fetchMessages = async () => {
// // try {
// //     const response = await axios.get('http://localhost:8000/friendship/');
// //     setUsers(response.data);
// //     console.log(response.data);
// // } catch (error) {
// //     console.error('Error fetching users:', error);
// // }
// // }
// const fetchFriends = async () => {
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



// useEffect(() => {
// fetchMessages()
// }, [])
//       const sendMessage = (content) => {
//         // Send the message to the server and update the local state
//         // axios.post('/api/send-message/', { content }).then((response) => {
//         //   setMessages([...messages, response.data]);
//         // });
//       };


//     return(
//         <div className="messages">
//             <h2 id="message-title">Messages</h2>
//             <div id="messages">
//                 <MessageList messages={messages} />
//                 <MessageInput onSendMessage={sendMessage} />
//             </div>
//         </div>
//     )
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../Context/userContext';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function Messages() {
    const { userState: { token }, setUser } = useUser();
    const [friends, setFriends] = useState([]);

    console.log('User Token:', token);


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
    // Send the message to the server and update the local state
    // axios.post('/api/send-message/', { content }).then((response) => {
    //   setMessages([...messages, response.data]);
    // });
  };

  return (
    <div className="messages">
      <h2 id="message-title">Messages</h2>
      <div id="messages">
        <MessageList friends={friends} />
        <MessageInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
}
