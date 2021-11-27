import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageIndex from './pages';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/app" element={<PageIndex />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
