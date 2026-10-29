import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { building } from '../data/campus';

export default function FloorSelection() {
  const nav = useNavigate();
  return <main className="page"><Header/><div className="content"><div className="eyebrow">{building.shortName} · LEVELS</div><h1>Select floor</h1><p className="lead">The prototype currently includes one mapped floor with connected panorama viewpoints.</p><div className="floor-grid"><button className="floor-card" onClick={() => nav('/map')}><span className="floor-no">01</span><span className="available">● AVAILABLE</span><div className="u-shape"><i/><i/><i/></div><div className="floor-bottom"><div><h2>Floor 1</h2><p>Virtual tour available</p></div><b>→</b></div></button><div className="coming"><b>＋</b><h3>More floors</h3><p>Additional levels can be added when their geometry and panorama data are supplied.</p><small>COMING SOON</small></div></div></div></main>;
}
