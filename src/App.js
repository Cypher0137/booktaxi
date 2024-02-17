import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Route path = "/" element={<Home />} />
        <Footer />
      </Routes>

    </div>
  );
}

export default App;
