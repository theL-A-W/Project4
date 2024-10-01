import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './UserContext';

export default function Navigation() {
  const { userState, signOut } = useUser(); // Access user context
  return (
    <nav className='navigation'>
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-md z-10">
        <div className="flex justify-around p-3">
          <a href="/" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <span className="text-xs">Home</span>
          </a>
          <a href="/StockSearch" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
            <span className="text-xs">Search</span>
          </a>
          <a href="/News" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
            <span className="text-xs">News</span>
          </a>
          <a href="/ProfileSettings" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <span className="text-xs">Profile</span>
          </a>
          {userState.token && (
                <button 
                    onClick={signOut} 
                    className="hidden lg:block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                    Sign Out
                </button>
            )}
        </div>
      </nav>
    </nav>
  );
}
