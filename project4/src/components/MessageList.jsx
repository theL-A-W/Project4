
import { Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../Context/userContext';



export default function MessageList({ friends, onSelectFriend }) {
  const { userState: { user, token } } = useUser();

  return (
    <div className="message-list">
      {friends.map((friendship) => {
        const [username1, username2] = friendship.usernames;
        const otherUsername = username1 === user ? username2 : username1;
        const isCurrentUserFriend = username1 === user || username2 === user;

        return (
          <div key={friendship.id}>
            {isCurrentUserFriend && (
              <div>
                <ul>
                  <Button
                    id="friends-to-message"
                    onClick={() => onSelectFriend(otherUsername, friendship.id)}
                  >
                    <li id="message-sender-list">
                      <Card>{otherUsername}</Card>
                    </li>
                  </Button>
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}




// export default function MessageList(messages){
//   const { userState: { token, user }, setUser } = useUser();
//   const [friends, setFriends] = useState([]);
//   const currentUser = user
//   console.log(currentUser)
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

//   return (
//     <div className='message-list'>
//       <div>
//       {friends.map((friendship) => {
//         // Extract usernames from the friendship object
//         const [username1, username2] = friendship.usernames;
//         // Determine the other user's username
//         const otherUsername = username1 === currentUser ? username2 : username1;
//         // Check if the current user's username matches either username
//         const isCurrentUserFriend = username1 === currentUser || username2 === currentUser;
//         // Render the card based on the condition

//     const handleShowMessages = () => {
      
//     }


//         return (
//           <div key={friendship.id}>
//             {isCurrentUserFriend && (
//               <div>
//                 <ul>
//                   <Button id="friends-to-message" onClick={handleShowMessages}><li id="message-sender-list"><Card>{otherUsername}</Card></li></Button>
//                 </ul>
//                 {/* Render additional card content as needed */}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//       {/* <div>
//         <ul>
//           <li id="message-sender-list"><Card>Sender</Card></li>
//           <li id="message-sender-list"><Card>Sender</Card></li>
//           <li id="message-sender-list"><Card>Sender</Card></li>
//           <li id="message-sender-list"><Card>Sender</Card></li>
//         </ul>
//       </div> */}
//     </div>
//   )
// }
