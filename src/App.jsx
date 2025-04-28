import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './components/Beranda';
import Dashboard from './admin/dashboard';
import Berita from './admin/news/index';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Beranda /> */}
        <Route path="/" element={<Beranda />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/news/index" element={<Berita />} />
      </Routes>
    </Router>
  );
}

export default App;
