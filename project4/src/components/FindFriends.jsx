import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../components/services/Auth'; // Import fetchWithAuth
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './UserContext';

export default function FindFriends() {
  const [showFriends, setShowFriends] = useState(false);
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]); // Initialize friends state
  const { userState: { user, token } } = useUser();

  const handleCloseFriends = () => setShowFriends(false);

  const fetchUsers = async () => {
    try {
      const response = await fetchWithAuth('http://localhost:8000/api/list-users/');
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    // Fetch friends data when the component mounts
    const fetchFriends = async () => {
      try {
        const response = await fetchWithAuth('http://localhost:8000/friendship/');
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, [token]);

  const handleShowFriends = () => {
    fetchUsers();
    setShowFriends(true);
  };

  const handleAddFriend = async (friendId) => {
    try {
      const response = await fetchWithAuth('http://localhost:8000/friendship/', {
        method: 'POST',
        body: JSON.stringify({
          user1: user,
          user2: friendId,
        }),
      });

      // Handle the response or update your state accordingly
      console.log('Friendship added:', response.data);
    } catch (error) {
      console.error('Error adding friendship:', error);
    }
  };

  return (
    <div>
      <button 
        className='text-blue-500 hover:underline' 
        id="find-friends-btn" 
        onClick={handleShowFriends}
      >
        Find Friends
      </button>
      {showFriends && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold" id="friends-list-title">Find User:</h2>
              <button onClick={handleCloseFriends} className="text-gray-500">
                &times;
              </button>
            </div>
            <div className="flex items-center mt-4 mb-2">
              <input 
                placeholder="Search friends" 
                id="search-friends" 
                className="border border-gray-300 rounded-l-lg p-2 flex-grow"
              />
              <button className="bg-blue-500 text-white rounded-r-lg px-4">Search</button>
            </div>
            <ul className="list-disc list-inside">
              {users.map(user => (
                <li key={user.username} className="flex justify-between items-center mb-2">
                  <span>{user.username}</span>
                  <button 
                    className="bg-green-500 text-white rounded-full p-2" 
                    onClick={() => handleAddFriend(user.username)}
                  >
                    <FontAwesomeIcon icon={faAdd} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
