import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiChevronLeft, FiChevronRight, FiFilter } from 'react-icons/fi';
import Layout from '../Layout';

function NewsIndex() {
  const [news] = useState([
    {
      id: 1,
      title: 'Judul Berita 1',
      description: 'Deskripsi berita pertama...',
      img: 'image1.jpg',
      category: 'Umum',
      date: '2024-01-20',
    },
    {
      id: 2,
      title: 'Judul Berita 1',
      description: 'Deskripsi berita pertama...',
      img: 'image1.jpg',
      category: 'Umum',
      date: '2024-01-20',
    },
  ]);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Berita</h1>
        
        {/* Filter and Add Button Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4 bg-white rounded-lg shadow-sm p-2">
            <div className="flex items-center px-4">
              <FiFilter className="w-5 h-5 text-gray-500" />
              <span className="ml-2">Filter By</span>
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <span>Date</span>
              <FiChevronLeft className="w-4 h-4" />
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <span>Order Type</span>
              <FiChevronLeft className="w-4 h-4" />
            </button>

            <button className="text-red-500 hover:text-red-600">
              Reset Filter
            </button>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
            Add New Task
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Img</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.img}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                          <FiEdit2 className="w-5 h-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 transition-colors duration-200">
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Separated Pagination */}
        <div className="  px-6 py-3 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 1-09 of 78
          </div>
            <div className="bg-slate-300 rounded-lg flex items-center space-x-1">
                {/* Tombol Panah Kiri */}
                <button className="p-1 rounded hover:bg-slate-400 transition-colors duration-200">
                    <FiChevronLeft className=" w-5 h-5 text-gray-600" />
                </button>
                {/* Garis Pemisah */}
                <div className="h-5 w-px bg-gray-500"></div>
                {/* Tombol Panah Kanan */}
                <button className="p-1 rounded hover:bg-slate-400 transition-colors duration-200">
                    <FiChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewsIndex;