import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FloorMap from '../components/FloorMap';
import { useCampus } from '../context/CampusContext';

export default function FloorMapPage() {
  const nav = useNavigate();
  const { data, currentViewpoint, setCurrentViewpoint } = useCampus();
  const select = id => { setCurrentViewpoint(id); nav('/panorama/'+id); };
  return <main className="page map-page"><Header/><div className="content wide"><div className="eyebrow">DIGITAL TWIN · LEVEL 01</div><div className="map-heading"><div><h1>{data.building.shortName} <span>/</span> Floor 1</h1><p className="lead">Click a glowing blue viewpoint to enter the 360° corridor.</p></div><span className="system">● SYSTEM READY · 05 VIEWPOINTS</span></div><div className="map-layout"><aside><div className="side-card"><small>CURRENT LOCATION</small><strong>{currentViewpoint}</strong><span>{data.viewpoints[currentViewpoint]?.label}</span><button onClick={() => nav('/panorama/'+currentViewpoint)}>Enter current view →</button></div><div className="side-card"><small>NAVIGATION</small><p>Blue nodes are panorama locations. Room markers appear where a room panorama is available.</p></div><div className="side-card legend"><small>LEGEND</small><p>🔵 360° Viewpoint</p><p>🟢 Start</p><p>🔴 End</p><p>🚪 Room</p><p>▣ Staircase</p></div></aside><FloorMap onSelect={select}/></div><p className="disclaimer">Placeholder geometry — not to scale. Replace with verified VIT-AP measurements later.</p></div></main>;
}
