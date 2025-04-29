import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUpload, FiTrash2 } from 'react-icons/fi';
import Layout from '../Layout';

export default function CreateAlumniPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    jurusan: '',
    tempatKerja: '',
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isOpenJurusan, setIsOpenJurusan] = useState(false);

  const jurusanOptions = [
    'Teknik Informatika',
    'Sistem Informasi',
    'Manajemen Bisnis',
    'Akuntansi',
    'Ilmu Komunikasi'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, image });
    alert('Data alumni berhasil disimpan!');
    setImagePreview(null);
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Tambah Alumni Baru</h1>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jurusan
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsOpenJurusan(!isOpenJurusan)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-left flex justify-between items-center hover:bg-gray-50/80"
                      >
                        <span className={formData.jurusan ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.jurusan || "Pilih Jurusan"}
                        </span>
                        <svg className={`w-5 h-5 text-gray-400 transition-transform ${isOpenJurusan ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpenJurusan && (
                        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 p-4">
                          <p className="text-sm font-medium text-gray-900 mb-3">Pilih Jurusan</p>
                          <div className="grid grid-cols-2 gap-2">
                            {jurusanOptions.map((jurusan) => (
                              <button
                                key={jurusan}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, jurusan });
                                  setIsOpenJurusan(false);
                                }}
                                className={`py-2 px-4 rounded-full text-sm transition-colors
                                  ${formData.jurusan === jurusan
                                    ? 'bg-blue-50 text-blue-600 border border-blue-200 font-medium'
                                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                                  }`}
                              >
                                {jurusan}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tempat Kerja
                    </label>
                    <input
                      type="text"
                      name="tempatKerja"
                      value={formData.tempatKerja}
                      onChange={handleChange}
                      placeholder="Masukkan tempat kerja"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Foto Alumni
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 bg-gray-50">
                      <div className="flex flex-col items-center justify-center gap-3">
                        {imagePreview ? (
                          <div className="relative w-full aspect-square">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="rounded-lg object-cover w-full h-full"
                            />
                            <button
                              onClick={() => {
                                setImage(null);
                                setImagePreview(null);
                              }}
                              className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white"
                            >
                              <FiTrash2 className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <FiUpload className="w-12 h-12 text-gray-400" />
                            <div className="text-center">
                              <label className="cursor-pointer">
                                <span className="text-blue-500 hover:text-blue-600">Pilih file</span>
                                <span className="text-gray-500"> atau drag and drop</span>
                                <input
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                              </label>
                              <p className="text-xs text-gray-500 mt-1">PNG, JPG (Maks. 2MB)</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => navigate('/admin/alumni/index')}
                    className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    Simpan Alumni
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
