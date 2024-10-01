import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../components/services/Auth'; // Import fetchWithAuth
import { useUser } from '../components/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function MessageInput({ onSendMessage, selectedFriend, friendshipId }) {
  const [message, setMessage] = useState('');
  const { userState: { token } } = useUser();
  const [userMessages, setUserMessages] = useState([]);
  const [messageId, setMessageId] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchUserMessages = async () => {
    try {
      const response = await fetchWithAuth(`http://localhost:8000/messages/?friend=${selectedFriend.receiverUsername}`);
      setUserMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    if (selectedFriend) {
      fetchUserMessages();
    }
  }, [selectedFriend, token]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      await fetchWithAuth('http://localhost:8000/messages/', {
        method: 'POST',
        body: JSON.stringify({
          sender: token.user,  // Adjust this if necessary
          receiver: selectedFriend.receiver,
          content: message,
        }),
      });
      setMessage('');
      fetchUserMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleDeleteMessage = async () => {
    try {
      await fetchWithAuth(`http://localhost:8000/message/${messageId}/`, {
        method: 'DELETE',
      });
      setMessageId(null);
      fetchUserMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const handleEditMessage = async () => {
    try {
      await fetchWithAuth(`http://localhost:8000/message/${messageId}/`, {
        method: 'PUT',
        body: JSON.stringify({
          user1: token.user,  // Adjust this if necessary
          user2: selectedFriend.receiver,
          content: messageContent,
        }),
      });
      setMessageId(null);
      setMessageContent('');
      fetchUserMessages();
      handleCloseEditModal();
    } catch (error) {
      console.error('Error editing message:', error);
    }
  };

  const changeMessage = (msgId, content) => {
    setMessageId(msgId);
    setMessageContent(content);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">{selectedFriend.receiverUsername}</h2>
      <div className="message-display-window mb-4">
        {userMessages.map((msg) => (
          <div key={msg.id} className="border-b py-2 flex justify-between items-center">
            <div className="flex-1">
              <p className="text-gray-700">{msg.content}</p>
            </div>
            <div className="flex space-x-2">
              <button 
                className="text-blue-500 hover:text-blue-700"
                onClick={() => changeMessage(msg.id, msg.content)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button 
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  setMessageId(msg.id);
                  handleDeleteMessage();
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <textarea
          className="border rounded p-2 flex-1 mr-2"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold">Edit Message</h3>
            <textarea
              className="border rounded p-2 w-full"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Edit your message..."
            />
            <div className="flex justify-end mt-4">
              <button 
                className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleCloseEditModal}
              >
                Close
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleEditMessage}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
