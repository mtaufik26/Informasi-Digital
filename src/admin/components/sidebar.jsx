import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaNewspaper, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      {/* Logo Area */}
      <div className="text-2xl font-bold mb-8 text-center">
        Digital Info
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/admin/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaHome className="text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaUsers className="text-xl" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/posts" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaNewspaper className="text-xl" />
              <span>Posts</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
              <FaCog className="text-xl" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;