import { useState } from "react";
import { FaSearch, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="w-full shadow-md">
      {/* Navbar Atas */}
      {/* <div className="bg-[#001E42] text-white text-sm py-2 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span>🕒 Operasional 07.00 - 20.00</span>
          <span>📧 info@smkwikrama1garut.sch.id</span>
          <span>📞 Hotline: (+62) 813 233 14430</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Ikuti kami:</span>
          <FaFacebook className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
        </div>
      </div> */}

      {/* Navbar Utama */}
      <nav className="bg-white py-4 px-8 border-b border-gray-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Sekolah */}
          <div className="flex items-center space-x-4">
            <img src="wikrama.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <p className="text-[#001E42] font-bold text leading-tight">
              SMK WIKRAMA <br/> BOGOR
            </p>

          </div>

          {/* Menu Navigasi */}
          <ul className="flex space-x-8">
            <li><a href="#" className="text-[#001E42] text-base font-semibold hover:text-blue-600">Beranda</a></li>
            <li><a href="#" className="text-[#001E42] text-base font-semibold hover:text-blue-600">PPDB</a></li>

            {/* Dropdown Profil */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("profil")}
                className="text-[#001E42] text-base font-semibold hover:text-blue-600"
              >
                Profil +
              </button>
              {dropdownOpen === "profil" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sejarah</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Visi & Misi</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Struktur Organisasi</a></li>
                </ul>
              )}
            </li>

            {/* Dropdown Jurusan */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("jurusan")}
                className="text-[#001E42] text-base font-semibold hover:text-blue-600"
              >
                Jurusan +
              </button>
              {dropdownOpen === "jurusan" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">RPL</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">TKJ</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Multimedia</a></li>
                </ul>
              )}
            </li>

            {/* Dropdown Program */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("program")}
                className="text-[#001E42] text-base font-semibold hover:text-blue-600"
              >
                Program +
              </button>
              {dropdownOpen === "program" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Asrama</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Magang</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Beasiswa</a></li>
                </ul>
              )}
            </li>

            {/* Dropdown Sumber Daya */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("sumberdaya")}
                className="text-[#001E42] text-base font-semibold hover:text-blue-600"
              >
                Sumber Daya +
              </button>
              {dropdownOpen === "sumberdaya" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Fasilitas</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tenaga Pendidik</a></li>
                </ul>
              )}
            </li>

            <li><a href="#" className="text-[#001E42] text-base font-semibold hover:text-blue-600">Berita</a></li>
            <li><a href="#" className="text-[#001E42] text-base font-semibold hover:text-blue-600">Tentang Kami</a></li>
          </ul>

          {/* Search & Daftar */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari"
                className="px-3 py-1 w-32 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-2 top-2 text-gray-500 cursor-pointer text-sm" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-base font-semibold">
              Daftar
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
