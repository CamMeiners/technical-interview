import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import People from './characters/people';
import Worlds from './worlds/world';
import SinglePerson from './characters/SinglePerson';
import SinglePlanet from './worlds/SingleWorld';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/people" element={<People />} />
        <Route path="/worlds" element={<Worlds />} />
        <Route path="/worlds/:id" element={<SinglePlanet />} />
        <Route path="/people/:id" element={<SinglePerson />} />
      </Routes>
    </div>
  );
}

export default App;
