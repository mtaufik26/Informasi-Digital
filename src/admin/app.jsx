import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
