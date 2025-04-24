import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/30">
      <nav className="py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Sekolah */}
          <div className="flex items-center space-x-4">
            <img src="wikrama.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <p className="text-white font-bold leading-tight">
              SMK WIKRAMA <br /> BOGOR
            </p>
          </div>

          {/* Menu Navigasi */}
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-white text-base font-semibold hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#visi" className="text-white text-base font-semibold hover:text-blue-300">
                Visi Kami
              </a>
            </li>
            <li>
              <a href="#jurusan" className="text-white text-base font-semibold hover:text-blue-300">
                Jurusan
              </a>
            </li>
            <li>
              <a href="#tentang" className="text-white text-base font-semibold hover:text-blue-300">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#testimoni" className="text-white text-base font-semibold hover:text-blue-300">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#biaya" className="text-white text-base font-semibold hover:text-blue-300">
                Biaya
              </a>
            </li>
          </ul>

          {/* Search */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari"
                className="px-3 py-1 w-32 border border-white bg-transparent rounded-md text-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaSearch className="absolute right-2 top-2 text-white cursor-pointer text-sm" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
