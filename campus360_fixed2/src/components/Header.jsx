import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCampus } from '../context/CampusContext';

export default function Header() {
  const nav = useNavigate();
  const location = useLocation();
  const { data, currentViewpoint } = useCampus();

  const isViewer = location.pathname.startsWith('/panorama') || location.pathname.startsWith('/room');

  return (
    <header className="header">
      <button className="brand" onClick={() => nav('/')}>
        <span className="brand-icon">C</span>
        <span><b>CAMPUS 360°</b><small>VIT-AP VIRTUAL NAVIGATION</small></span>
      </button>
      <div className="header-crumb">{data.building.shortName} <i>/</i> {data.floor.label}{isViewer && <> <i>/</i> {currentViewpoint}</>}</div>
      <div className="header-actions">
        {location.pathname !== '/' && <button onClick={() => nav(-1)}>← Back</button>}
        {location.pathname !== '/map' && location.pathname !== '/' && <button onClick={() => nav('/map')}>⌖ Floor Map</button>}
      </div>
    </header>
  );
}
