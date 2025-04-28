import { FaUsers, FaNewspaper, FaEye, FaComments } from 'react-icons/fa';
import Layout from './Layout';

function Dashboard() {
  return (
    <Layout>
      <div className="p-6">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Users</p>
                <h2 className="text-3xl font-bold">1,234</h2>
              </div>
              <FaUsers className="text-3xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Posts</p>
                <h2 className="text-3xl font-bold">456</h2>
              </div>
              <FaNewspaper className="text-3xl text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Page Views</p>
                <h2 className="text-3xl font-bold">10.5k</h2>
              </div>
              <FaEye className="text-3xl text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Comments</p>
                <h2 className="text-3xl font-bold">789</h2>
              </div>
              <FaComments className="text-3xl text-orange-500" />
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-medium">New Post Published</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;