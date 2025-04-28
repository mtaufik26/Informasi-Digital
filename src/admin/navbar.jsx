import { FiSearch, FiMenu, FiChevronDown, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white px-6 py-3 flex items-center justify-between relative">
      {/* Left side - Menu and Search */}
      <div className="flex items-center flex-1">
        <button className="p-2 hover:bg-gray-100 rounded-lg mr-2 transition-colors duration-200">
          <FiMenu className="text-gray-500 text-xl hover:rotate-180 transition-transform duration-300" />
        </button>
        <div className="max-w-xl w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400 hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* Right side - User Profile */}
      <div className="flex items-center space-x-3 relative">
        <img
          src="/avatar.jpg"
          alt="User"
          className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-200"
        />
        <div>
          <p className="text-sm font-medium">Moni Roy</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <FiChevronDown 
            className={`text-gray-500 transition-transform duration-200 ${
              showDropdown ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg py-1 z-50 animate-fadeIn">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <FiLogOut className="mr-2 hover:rotate-12 transition-transform duration-200" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;