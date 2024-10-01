import PinnedStocks from './PinnedStocks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const handleSignOutUser = () => {
    // Your sign-out logic here
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <button
        id="sign-out-btn"
        onClick={handleSignOutUser}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign Out
      </button>
      <Link to="./Messages">
        <button id="message-icon" className="mb-4">
          <FontAwesomeIcon
            id="icon"
            icon={faMessage}
            size="3x"
            className="text-blue-500 hover:text-blue-600"
          />
        </button>
      </Link>
      <div className="home-body w-full max-w-4xl">
        <PinnedStocks />
      </div>
    </div>
  );
}
