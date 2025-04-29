import { useEffect, useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handSubmit = () => {
    navigate('/admin/dashboard', { replace: true });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsScrolled(scrollTop > windowHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/10"
      }`}
    >
      <nav className="py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Sekolah */}
          <div className="flex items-center space-x-4">
            <img src="wikrama.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <p className={`font-bold leading-tight ${isScrolled ? "text-black" : "text-white"}`}>
              <span className={isScrolled ? "text-blue-500" : "text-blue-300"}>SMK</span>{" "}
              WIKRAMA{" "}
              <span className={isScrolled ? "text-blue-500" : "text-blue-300"}>BOGOR</span>
            </p>
          </div>

          {/* Menu Navigasi */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "Visi Kami", "Jurusan", "Tentang Kami", "Testimoni", "Biaya", "Kontak"].map((label, index) => {
              const hrefs = ["home", "visi", "jurusan", "tentang", "testimoni", "biaya", "kontak"];
              return (
                <li key={label}>
                  <a
                    href={`#${hrefs[index]}`}
                    className={`text-base font-semibold transition ${
                      isScrolled
                        ? "text-black hover:text-blue-500"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Dropdown Menu untuk Mobile */}
          <div className="flex items-center space-x-3 relative md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition ${
                isScrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {isMenuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>

            {/* Dropdown Content */}
            {isMenuOpen && (
              <div className={`absolute right-0 top-12 w-48 rounded-md shadow-lg py-1 ${
                isScrolled ? "bg-white" : "bg-gray-800"
              } z-50`}>
                {["Home", "Visi Kami", "Jurusan", "Tentang Kami", "Testimoni", "Biaya"].map((label, index) => {
                  const hrefs = ["home", "visi", "jurusan", "tentang", "testimoni", "biaya"];
                  return (
                    <a
                      key={label}
                      href={`#${hrefs[index]}`}
                      className={`block px-4 py-2 text-sm transition ${
                        isScrolled
                          ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          : "text-white hover:bg-gray-700 hover:text-blue-300"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </a>
                  );
                })}
                <div className={`border-t ${
                  isScrolled ? "border-gray-200" : "border-gray-700"
                } my-1`}></div>
                <button
                  onClick={handSubmit}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center transition ${
                    isScrolled
                      ? "text-blue-600 hover:bg-blue-50"
                      : "text-blue-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <FiUser className="mr-2" />
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
