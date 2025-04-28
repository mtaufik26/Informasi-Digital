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

const JurusanSection = () => {
  const jurusanList = [
    {
      title: "Teknik Jaringan Komputer dan Telekomunikasi",
      image: "/images/tjkt.jpg",
      careers: [
        "Technical Support",
        "Network Administrator",
        "IoT (Internet of Things) Engineer",
        "System Administrator",
        "Cloud Engineer",
        "Security Engineer",
      ],
    },
    {
      title: "Pengembangan Perangkat Lunak dan Gim",
      image: "/images/rpl.jpg",
      careers: [
        "System Designer",
        "Database Administrator",
        "Programmer",
        "Web Developer",
        "Mobile Programmer",
        "Security Engineer",
      ],
    },
    {
      title: "Pemasaran (digital marketing)",
      image: "/images/marketing.jpg",
      careers: [
        "Content Creator",
        "Admin Social Media",
        "Social Media Marketing",
        "SEO Specialist",
        "Ads Manager",
        "Marketing Manager",
      ],
    },
    {
      title: "Perhotelan (kepariwisataan)",
      image: "/images/hotel.jpg",
      careers: [
        "Guest Relationship Officer",
        "Call Center & Receptionist",
        "Front Officer",
        "Room & Public Area Attendant",
        "Laundry & Linen Staff",
        "Room Service",
      ],
    },
  ];

  return (
    <div id="jurusan" className="py-20 bg-gray-100 text-center">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Kompetensi Keahlian</h2>
        <p className="mt-2 text-gray-600">
          SMK bidang teknologi informasi, bisnis manajemen, dan pariwisata
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
        {jurusanList.map((jurusan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
            <img 
              src={jurusan.image} 
              alt={jurusan.title} 
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2 text-blue-800">{jurusan.title}</h3>
            <ul className="text-left text-sm text-gray-700 mb-4 px-2">
              {jurusan.careers.map((career, idx) => (
                <li key={idx} className="flex items-start mb-2">
                  <span className="text-green-500 mr-2 mt-1">•</span> 
                  <span>{career}</span>
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Selengkapnya →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const MotoSection = () => {
  return (
    <div id="moto" className="py-20 bg-white px-4 md:px-20">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">Moto</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-gray-600 mt-2">Ilmu yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mendidik dengan hati dan teknologi
          </h3>
          <p className="text-gray-700 mb-4">
            Visi kami: <br />
            Menjadi sekolah kejuruan <span className="font-semibold">teladan nasional</span> yang menghasilkan
            lulusan yang mampu memenuhi kebutuhan <span className="font-semibold">industri 4.0</span>, berkarakter
            <span className="font-semibold"> profil pelajar Pancasila</span>, dan berjiwa
            <span className="font-semibold"> kewirausahaan</span> pada tahun 2028, dengan berpedoman pada
            <span className="font-semibold"> Al Qur'an dan Hadist</span>.
          </p>

          {/* Tambahan: Karakter Utama */}
          <h4 className="text-lg font-bold text-gray-900 mb-2">Karakter Utama Insan Wikrama:</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Jujur</li>
            <li>Bersih</li>
            <li>Hemat</li>
            <li>Berjamaah</li>
            <li>Ikhlas Memberi</li>
          </ul>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
            Website sekolah
          </button>
        </div>

        {/* Right - Images */}
        <div className="flex-1 relative w-full h-full flex justify-center">
          <div className="relative w-96 h-64 rounded-lg shadow-lg overflow-hidden -top-10">
            <img
              src="/welcome.jpg"
              alt="Sekolah Wikrama"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-5 w-96 h-64 rounded-lg shadow-lg overflow-hidden border-4 border-white">
            <img
              src="/wik.jpg"
              alt="Kegiatan Wikrama"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TentangSection = () => (
  <div id="tentang" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
    <p className="max-w-4xl mx-auto text-gray-600">
      SMK Wikrama Bogor didirikan pada tahun 1996 oleh Ir. Itasia Dina Sulvianti dan Dr. H.RP Agus Lelana di bawah naungan Yayasan Prawitama. 
      Sekolah ini terus berkembang menjadi sekolah unggulan dengan berbagai prestasi di tingkat nasional dan internasional.
    </p>
  </div>
);

const TestimoniSection = () => (
  <div id="testimoni" className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka?</h2>
    <p className="max-w-2xl mx-auto text-gray-600 italic">
      "SMK Wikrama tidak hanya mengajarkan keterampilan teknis, tapi juga membentuk karakter dan kepribadian siswa. 
      Saya sangat berterima kasih atas pendidikan yang saya dapatkan di sini." 
      <span className="block mt-2 font-semibold not-italic">- Alumni PPLG Angkatan 2019</span>
    </p>
  </div>
);

const BiayaSection = () => (
  <div id="biaya" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Biaya Pendidikan</h2>
    <p className="max-w-4xl mx-auto text-gray-600 mb-8">
      SMK Wikrama Bogor menyediakan pendidikan berkualitas dengan biaya terjangkau. 
      Terdapat berbagai fasilitas penunjang pembelajaran yang modern dan lengkap.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
      Lihat Rincian Biaya
    </button>
  </div>
);

const Beranda = () => {
  return (
    <>
      <WelcomeSection />
      <VisiSection />
      <JurusanSection />
      <MotoSection />
      <TentangSection />
      <TestimoniSection />
      <BiayaSection />
    </>
  );
};

export default Beranda;