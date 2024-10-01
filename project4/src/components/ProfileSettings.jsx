import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import FindFriends from './FindFriends';
import { useUser } from '../components/UserContext';
import axios from 'axios';

export default function ProfileSettings() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const { userState: { user, token } } = useUser();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowFriends = () => setShowFriends(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('profilePicture', selectedImage);

    try {
      const response = await axios.post(
        'http://localhost:8000/user-profile/', // Update with the correct endpoint
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Profile picture updated:', response.data);
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  const handleCreateProfile = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/user-profile/', // Update with the correct endpoint
        {
          user: user,
          // Add your other fields here
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <button className="text-blue-500 hover:underline" id="back-btn">
          <FontAwesomeIcon id="icon" icon={faAngleLeft} size="2x" />
        </button>
        <FindFriends showFriends={showFriends} />
      </div>
      <div className="flex items-center mb-4">
        <button
          id='edit-profile-photo'
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleShow}
        >
          <FontAwesomeIcon id="icon" icon={faPenToSquare} size="xl" />
        </button>
      </div>

      <form className='mb-4' onSubmit={handleSubmit}>
        <label htmlFor="change-username-input" className='block text-lg font-bold mb-2'>Username:</label>
        <input
          type="text"
          id="change-username-input"
          placeholder="username"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        
        <label htmlFor="bio" className="block text-lg font-bold mb-2">Bio:</label>
        <textarea
          id="bio"
          rows={3}
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <button
          id="update"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md w-1/2">
            <h2 className="text-lg font-bold">Edit Your Profile Photo</h2>
            <form onSubmit={handleSubmit}>
              <label className="block text-lg font-bold mb-2">Profile photo:</label>
              <input
                type='file'
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300 rounded p-2 mb-4"
              />
              <button
                type="submit"
                id='update-profile-photo'
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update Profile Picture
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="ml-2 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
