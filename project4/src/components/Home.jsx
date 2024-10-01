import PinnedStocks from './PinnedStocks';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <Link to="./Messages" >
        <div className="absolute top-4 right-4">
          <button id="message-icon" className="mb-4">
            <FontAwesomeIcon
              id="icon"
              icon={faMessage}
              size="3x"
              className="text-blue-500 hover:text-blue-600"
            />
          </button>
        </div>
      </Link>
      <div className="home-body w-full max-w-4xl">
        <PinnedStocks />
      </div>
    </div>
  );
}
