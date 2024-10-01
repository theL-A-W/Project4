import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function PinnedStocks() {
  return (
    <div className="pinned-stocks p-4">
      {/* Profile Image Card */}
      <div className="bg-gray-200 rounded-lg p-4 mb-4" id="profile-img-card">
        <div
          id="profile-img"
          className="w-32 h-32 bg-blue-300 rounded-full mx-auto"
        ></div>
      </div>

      {/* Header Card */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4" id="header-card">
        <div id="profile-name" className="text-center text-xl font-bold">
          John Doe
        </div>
        <h3 className="text-center text-lg mt-2">Pinned Stocks</h3>
      </div>

      {/* Pinned Stocks Cards */}
      {[...Array(8)].map((_, index) => (
        <Link
          to={`/StockDetails/TSLA`}
          key={index}
          className="block mb-4"
        >
          <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow duration-300" id="pinned-stock-card">
            <div className="text-center text-gray-700">Stock Name {index + 1}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
