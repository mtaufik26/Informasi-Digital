import React from "react";

const WelcomeSection = () => {
  return (
    <div id="home" className="relative w-full h-screen flex items-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="welcome.jpg"
          alt=""
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 text-white">
        <h3 className="text-lg text-blue-300">Selamat Datang Di</h3>
        <h1 className="text-4xl font-bold leading-tight">SMK WIKRAMA BOGOR</h1>
        <p className="mt-4 text-lg">
          Sekolah komputer, bisnis manajemen, dan pariwisata yang mengutamakan
          pendidikan akhlak mulia untuk melahirkan pemimpin "berhati Mekah
          berotak Jerman" melek teknologi di era 4.0.
        </p>
      </div>
    </div>
  );
};

const VisiSection = () => (
  <div id="visi" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Visi Kami</h2>
    <p className="text-gray-700">
      Menjadi sekolah unggulan dalam pendidikan berbasis karakter dan teknologi.
    </p>
  </div>
);

const JurusanSection = () => (
  <div id="jurusan" className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Jurusan</h2>
    <p>TKJ, RPL, Multimedia, dan lainnya.</p>
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
