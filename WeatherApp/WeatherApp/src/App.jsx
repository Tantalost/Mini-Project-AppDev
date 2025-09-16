import React from "react";
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <BrowserRouter>
      <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/weather">Weather Card</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/weather" element={<WeatherCard />} />
      </Routes>
  </BrowserRouter>
   );
}

export default App;