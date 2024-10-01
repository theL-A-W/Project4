import { useUser } from '../../Context/userContext';

export default function MessageList({ friends, onSelectFriend }) {
  const { userState: { user } } = useUser();

  return (
    <div className="message-list p-4 bg-white rounded shadow-md">
      {friends.map((friendship) => {
        const [username1, username2] = friendship.usernames;
        const sender = friendship.user1_id;
        const receiver = friendship.user2_id;
        const otherUsername = username1 === user ? username2 : username1;
        const isCurrentUserFriend = username1 === user || username2 === user;

        return (
          <div key={friendship.id} className="mb-2">
            {isCurrentUserFriend && (
              <div>
                <ul>
                  <li>
                    <button
                      className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => onSelectFriend(otherUsername, receiver, friendship.id, sender)}
                    >
                      {otherUsername}
                    </button>
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
