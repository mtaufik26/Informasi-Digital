import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Kalau scroll-nya lewat tinggi layar (bukan di section home), ubah navbar
      setIsScrolled(scrollTop > windowHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <span className={`${isScrolled ? "text-blue-500" : "text-blue-300"}`}>SMK</span>{" "}
              WIKRAMA{" "}
              <span className={`${isScrolled ? "text-blue-500" : "text-blue-300"}`}>BOGOR</span>
            </p>
          </div>

          {/* Menu Navigasi */}
          <ul className="flex space-x-8">
            {["Home", "Visi Kami", "Jurusan", "Tentang Kami", "Testimoni", "Biaya"].map((label, index) => {
              const hrefs = ["home", "visi", "jurusan", "tentang", "testimoni", "biaya"];
              return (
                <li key={label}>
                  <a
                    href={`#${hrefs[index]}`}
                    className={`text-base font-semibold hover:text-blue-500 transition ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Search */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <FiMenu 
                className={`absolute right-2 top-2 cursor-pointer text-sm ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
