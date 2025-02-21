import React from "react";

const WelcomeSection = () => {
    return (
      <div className="relative w-full h-screen flex items-center bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="welcome.jpg" // Pastikan path gambar benar
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
        </div>
  
        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl px-6 md:px-12 text-white">
          <h3 className="text-lg text-blue-300">Selamat Datang Di</h3>
          <h1 className="text-4xl font-bold leading-tight">
            SMK WIKRAMA BOGOR
          </h1>
          <p className="mt-4 text-lg">
            Sekolah komputer, bisnis manajemen, dan pariwisata yang mengutamakan
            pendidikan akhlak mulia untuk melahirkan pemimpin "berhati Mekah
            berotak Jerman" melek teknologi di era 4.0.
          </p>
  
          {/* Buttons */}
          {/* <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg">
              Daftar sekarang
            </button>
            <button className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-lg">
              Konsultasi
            </button>
          </div> */}
        </div>
      </div>
    );
  };
  
  export default WelcomeSection;
  