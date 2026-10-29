import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav = useNavigate();
  return <main className="home">
    <header className="home-header"><button className="brand" onClick={() => nav('/')}><span className="brand-icon">C</span><span><b>CAMPUS 360°</b><small>VIT-AP VIRTUAL NAVIGATION</small></span></button><span className="status">● PROTOTYPE · MG BLOCK</span></header>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow">DIGITAL CAMPUS EXPERIENCE</span><h1>Explore VIT-AP<br/><em>from anywhere.</em></h1><p>An interactive 360° virtual navigation experience for exploring campus buildings, corridors and rooms.</p><div className="actions"><button className="primary" onClick={() => nav('/buildings')}>Explore Campus →</button><button className="secondary" onClick={() => document.getElementById('how')?.scrollIntoView({behavior:'smooth'})}>How It Works</button></div><div className="metrics"><span><b>360°</b>Immersive views</span><span><b>01</b>Prototype floor</span><span><b>05</b>Viewpoints</span></div></div>
      <div className="hero-art"><div className="grid"/><div className="building"><div className="roof">MG BLOCK<br/><small>FLOOR 01</small></div><div className="face front">{Array.from({length:12},(_,i)=><i key={i}/>)}</div><div className="face side">{Array.from({length:8},(_,i)=><i key={i}/>)}</div><div className="nodes">{Array.from({length:5},(_,i)=><b key={i}/>)}</div></div><span className="float one">◉ 360° Navigation</span><span className="float two">◇ Virtual Tour</span><span className="float three">✦ Indoor Exploration</span></div>
    </section>
    <section id="how" className="how"><span className="eyebrow">SIMPLE BY DESIGN</span><h2>From floor plan to <em>presence.</em></h2><div className="steps"><article><b>01</b><h3>Select a block</h3><p>Start with Mahatma Gandhi Block.</p></article><article><b>02</b><h3>Pick a viewpoint</h3><p>Choose a blue 360° node on the floor map.</p></article><article><b>03</b><h3>Explore in 360°</h3><p>Move through corridors and enter rooms.</p></article></div></section>
  </main>;
}
