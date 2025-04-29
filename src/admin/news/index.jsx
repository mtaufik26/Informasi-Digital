import { useState } from 'react';
import { FiSearch, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Category from './category';
import Layout from '../Layout';

export default function AlumniProfilePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [alumni, setAlumni] = useState([
    {
      id: 1,
      name: 'Ahmad Fauzi',
      jurusan: 'Teknik Informatika',
      tempatKerja: 'PT. Global Tech',
      category: 'Teknik',
      image: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Siti Rahma',
      jurusan: 'Manajemen Bisnis',
      tempatKerja: 'Bank Mandiri',
      category: 'Bisnis',
      image: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      jurusan: 'Akuntansi',
      tempatKerja: 'EY Indonesia',
      category: 'Bisnis',
      image: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      jurusan: 'Ilmu Komunikasi',
      tempatKerja: 'Metro TV',
      category: 'Komunikasi',
      image: '/api/placeholder/40/40'
    },
  ]);
  const navigate = useNavigate();
  
  const handleAddNewTask = () => {
    navigate('/admin/alumni/create');
  };

  const handleEditNews = (id) => {
    navigate(`/admin/alumni/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete alumni with ID: ${id}`);
  };

  const filteredAlumni = alumni.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profil Alumni</h1>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
          <Category />

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search alumni name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Add button */}
              <button
                onClick={handleAddNewTask}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <FiPlus className="h-4 w-4" />
                Add New Task
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white shadow overflow-hidden rounded-lg mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jurusan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tempat Kerja
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAlumni.map((alumnus) => (
                  <tr key={alumnus.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={alumnus.image}
                        alt={`${alumnus.name}'s profile`}                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{alumnus.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{alumnus.jurusan}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{alumnus.tempatKerja}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{alumnus.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="inline-flex rounded-lg border border-gray-300 bg-white">
                        <button 
                          onClick={() => handleEditNews(alumnus.id)}
                          className="px-3 py-2 hover:bg-gray-200 rounded-s-lg"
                        >
                          <FiEdit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <div className='border-r border-gray-300'></div>
                        <button 
                          onClick={() => handleDelete(alumnus.id)}
                          className="px-3 py-2 hover:bg-gray-200 rounded-e-lg"
                        >
                          <FiTrash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredAlumni.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      Alumni not found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
    </Layout>
  );
}