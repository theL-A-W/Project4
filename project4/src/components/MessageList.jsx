
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
        const sender = friendship.user1_id
        const receiver = friendship.user2_id
        const otherUsername = username1 === user ? username2 : username1
        const isCurrentUserFriend = username1 === user || username2 === user;
console.log(receiver)
console.log(friendship)
        return (
          <div key={friendship.id}>
            {isCurrentUserFriend && (
              <div>
                <ul>
                    <li id="message-sender-list">
                      <Button id="friends-to-message" onClick={() => onSelectFriend(otherUsername, receiver, friendship.id, sender)}>{otherUsername}</Button>
                    </li>
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
