import React from "react";
import { FaBuilding, FaUserGraduate, FaChalkboardTeacher, FaLeaf } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div id="home" className="relative w-full h-screen flex items-end justify-start bg-gray-100 font-poppins pb-56 pl-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="wk.jpg"
          alt=""
          className="w-full h-full object-bottom brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 text-white">
        <h1 className="text-4xl font-bold leading-tight">
          <span className="text-white">SMK</span>{" "}
          <span className="text-cyan-400">Wikrama</span>{" "}
          <span className="text-white">Bogor</span>
        </h1>
        <h2 className="text-4xl font-bold leading-tight mt-1">
          <span className="text-white">Sekolah</span>{" "}
          <span className="text-cyan-400">Adiwiyata</span>{" "}
          <span className="text-white">Mandiri</span>
        </h2>
        <p className="mt-6 text-lg text-white">
          Sekolah komputer, bisnis manajemen, dan pariwisata yang mengutamakan
          pendidikan akhlak mulia untuk melahirkan pemimpin "berhati Mekah
          berotak Jerman" melek teknologi di era 4.0.
        </p>
      </div>
    </div>
  );
};

const VisiSection = () => (
  <div id="visi" className="py-20 bg-gray-100 px-4 md:px-20">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Kiri - Teks */}
      <div className="max-w-xl text-left">
        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          SMK Wikrama Bogor
        </span>
        <h2 className="text-4xl font-bold mt-4 text-gray-900">
          Mendidik dengan hati dan teknologi
        </h2>
        <p className="mt-3 text-gray-700">
          Solusi pendidikan berkualitas di era 4.0.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
          Download brosur →
        </button>
      </div>

      {/* Kanan - Grid Icon Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="text-blue-600 text-3xl mb-3">
            <FaUserGraduate />
          </div>
          <h3 className="font-bold text-lg mb-1">Lulusan</h3>
          <p className="text-gray-600 text-sm">
            Lulusan diminati oleh dunia kerja dan lolos perguruan tinggi
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="text-blue-600 text-3xl mb-3">
            <FaBuilding />
          </div>
          <h3 className="font-bold text-lg mb-1">Akhlak</h3>
          <p className="text-gray-600 text-sm">
            Mencetak pribadi <em>qur'ani</em> dengan Profil Pelajar Pancasila
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="text-blue-600 text-3xl mb-3">
            <FaChalkboardTeacher />
          </div>
          <h3 className="font-bold text-lg mb-1">Pendidik</h3>
          <p className="text-gray-600 text-sm">
            Guru-guru inspiratif yang menjadi teman belajar siswa
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="text-blue-600 text-3xl mb-3">
            <FaLeaf />
          </div>
          <h3 className="font-bold text-lg mb-1">Lingkungan</h3>
          <p className="text-gray-600 text-sm">
            Atmosfer pendidikan yang ramah anak
          </p>
        </div>
      </div>
    </div>
  </div>
);

const JurusanSection = () => (
  <div id="jurusan" className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Jurusan</h2>
    <img 
      src="/path-to-your-image.jpg" 
      alt="Jurusan" 
      className="mx-auto w-48 h-auto rounded-lg shadow-md"
    />
  </div>
);


const TentangSection = () => (
  <div id="tentang" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
    <p>
      SMK Wikrama berdiri sejak tahun 1996 dan terus berkembang menjadi sekolah unggulan.
    </p>
  </div>
);

const TestimoniSection = () => (
  <div id="testimoni" className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Testimoni</h2>
    <p>
      "Sekolah ini membentuk karakter dan kemampuan saya menjadi lebih baik!" – Alumni
    </p>
  </div>
);

const BiayaSection = () => (
  <div id="biaya" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Biaya</h2>
    <p>
      Informasi lengkap biaya pendaftaran dan pendidikan tersedia di sini.
    </p>
  </div>
);

const Beranda = () => {
  return (
    <>
      <WelcomeSection />
      <VisiSection />
      <JurusanSection />
      <TentangSection />
      <TestimoniSection />
      <BiayaSection />
    </>
  );
};

export default Beranda;