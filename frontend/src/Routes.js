import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Universities from './pages/Universities';
import Contact from './pages/Contact';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/universities" element={<Universities />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesComponent;
