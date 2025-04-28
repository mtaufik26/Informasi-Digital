import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
