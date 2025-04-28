import { Link, useLocation } from 'react-router-dom';
import { 
  FiGrid, FiFileText, FiUsers, FiAward,
  FiImage, FiMessageSquare, FiUser
} from 'react-icons/fi';

function Sidebar() {
  const location = useLocation();

  const mainMenuItems = [
    { path: '/admin/dashboard', icon: FiGrid, label: 'Dashboard' },
  ];

  const pageItems = [
    { path: '/admin/news/index', icon: FiFileText, label: 'Berita' },
    { path: '/admin/profil-alumni', icon: FiUsers, label: 'Profil Alumni' },
    { path: '/admin/prestasi', icon: FiAward, label: 'Prestasi' },
    { path: '/admin/galeri', icon: FiImage, label: 'Galeri' },
    { path: '/admin/testimoni', icon: FiMessageSquare, label: 'Testimoni' },
  ];

  const bottomItems = [
    { path: '/admin/user', icon: FiUser, label: 'User' },
  ];

  const renderMenuItem = (item) => {
    const isActive = location.pathname === item.path;

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`flex items-center px-6 py-3 text-sm rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-blue-500 text-white font-medium'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <item.icon className={`mr-3 ${isActive ? 'text-white' : 'text-gray-400'}`} />
        {item.label}
      </Link>
    );
  };

  return (
    <div className="bg-white w-64 min-h-screen p-4">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold text-blue-500">
          Digital Info
        </h1>
      </div>

      <nav className="space-y-2">
        {mainMenuItems.map(renderMenuItem)}

        <div className="pt-6 pb-2">
          <p className="px-6 text-xs font-medium text-gray-400 uppercase">Pages</p>
        </div>

        {pageItems.map(renderMenuItem)}

        <div className="pt-6">
          {bottomItems.map(renderMenuItem)}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;