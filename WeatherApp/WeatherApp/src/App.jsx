import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggle = (unit) => {
    setIsCelsius(unit === "C");
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard isCelsius={isCelsius} onToggle={handleToggle} />}
        />
        <Route
          path="/weather/:cityName"
          element={<WeatherCard isCelsius={isCelsius} />}
        />
      </Routes>
    </BrowserRouter>
  );
}