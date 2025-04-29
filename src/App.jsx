import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './components/Beranda';
import Dashboard from './admin/dashboard';
import Berita from './admin/news/index';
import CreateBerita from './admin/news/create';
import EditBerita from './admin/news/edit';
import Alumni from './admin/alumni/index';
import CreateAlumni from './admin/alumni/create';
import EditAlumni from './admin/alumni/edit';

function App() {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<Beranda />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Berita */}
        <Route path="/admin/news/index" element={<Berita />} />
        <Route path="/admin/news/create" element={<CreateBerita />} />
        <Route path="/admin/news/edit/:id" element={<EditBerita />} />

        {/* Profil Alumni */}
        <Route path="/admin/alumni/index" element={<Alumni />} />
        <Route path="/admin/alumni/create" element={<CreateAlumni />} />
        <Route path="/admin/alumni/edit/:id" element={<EditAlumni />} />
      </Routes>
    </Router>
  );
}

export default App;