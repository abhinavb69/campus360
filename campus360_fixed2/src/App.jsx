import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CampusProvider } from './context/CampusContext';
import Home from './pages/Home';
import BuildingSelection from './pages/BuildingSelection';
import FloorSelection from './pages/FloorSelection';
import FloorMapPage from './pages/FloorMapPage';
import PanoramaPage from './pages/PanoramaPage';

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="route-shell" key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildings" element={<BuildingSelection />} />
        <Route path="/buildings/mg-block" element={<FloorSelection />} />
        <Route path="/map" element={<FloorMapPage />} />
        <Route path="/panorama/:viewpointId" element={<PanoramaPage />} />
        <Route path="/room/:roomId" element={<PanoramaPage roomMode />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <CampusProvider>
      <AppRoutes />
    </CampusProvider>
  );
}
