import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { building } from '../data/campus';

export default function BuildingSelection() {
  const nav = useNavigate();
  return <main className="page"><Header/><div className="content"><div className="eyebrow">CAMPUS DIRECTORY</div><h1>Select building</h1><p className="lead">Choose an available building to begin your virtual indoor journey.</p><button className="building-card" onClick={() => nav('/buildings/mg-block')}><div className="building-art"><div className="mini-building">{Array.from({length:12},(_,i)=><i key={i}/>)}</div></div><div className="building-info"><span className="available">● PROTOTYPE AVAILABLE</span><h2>{building.name}</h2><p>{building.university}</p><div className="meta">Central Block · 01 floor implemented</div></div><strong className="arrow">→</strong></button></div></main>;
}
