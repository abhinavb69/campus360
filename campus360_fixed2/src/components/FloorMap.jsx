import React, { useState } from 'react';
import { useCampus } from '../context/CampusContext';

export default function FloorMap({ onSelect }) {
  const { data, currentViewpoint } = useCampus();
  const map = data.floorMap;
  const [hover, setHover] = useState(null);
  const path = map.corridorPath.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="map-shell">
      <svg viewBox={`0 0 ${map.width} ${map.height}`} className="map-svg">
        <defs>
          <filter id="shadow"><feDropShadow dx="0" dy="14" stdDeviation="12" floodOpacity=".25" /></filter>
          <filter id="glow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect x="30" y="30" width="940" height="560" rx="30" fill="#dce7ee" filter="url(#shadow)" />
        <g opacity=".2">
          {Array.from({length:20}, (_,i) => <line key={'v'+i} x1={60+i*45} y1="50" x2={60+i*45} y2="570" stroke="#6e8796" />)}
          {Array.from({length:12}, (_,i) => <line key={'h'+i} x1="50" y1={70+i*42} x2="950" y2={70+i*42} stroke="#6e8796" />)}
        </g>
        <path d={path} fill="none" stroke="#8fa4b0" strokeWidth="116" strokeLinecap="round" strokeLinejoin="round" />
        <path d={path} fill="none" stroke="#f8fbfd" strokeWidth="94" strokeLinecap="round" strokeLinejoin="round" />
        <path d={path} fill="none" stroke="#56a8d7" strokeWidth="3" strokeDasharray="9 12" opacity=".55" />

        {map.rooms.map(room => (
          <g key={room.id}>
            <rect x={room.x} y={room.y} width="105" height="68" rx="12" fill="#c5d4dd" stroke="#849ba9" strokeWidth="2" />
            <rect x={room.x+9} y={room.y+9} width="87" height="50" rx="8" fill="#edf4f7" />
            <text x={room.x+52} y={room.y+40} textAnchor="middle" className="room-text">ROOM {room.label}</text>
          </g>
        ))}

        {map.stairs.map(stair => (
          <g key={stair.id} transform={`translate(${stair.x} ${stair.y})`}>
            <rect x="-42" y="-28" width="84" height="56" rx="10" fill="#162a3a" />
            {[ -24,-12,0,12,24 ].map(x => <line key={x} x1={x} y1="-18" x2={x} y2="18" stroke="white" opacity=".7" />)}
            <text y="44" textAnchor="middle" className="small-label">STAIRCASE</text>
          </g>
        ))}

        <g transform={`translate(${map.start.x} ${map.start.y})`}>
          <circle r="18" fill="#102131"/><circle r="8" fill="#44d69b"/><text y="-27" textAnchor="middle" className="map-tag">START</text>
        </g>
        <g transform={`translate(${map.end.x} ${map.end.y})`}>
          <circle r="18" fill="#102131"/><circle r="8" fill="#ff7b86"/><text y="-27" textAnchor="middle" className="map-tag">END</text>
        </g>

        {map.viewpoints.map(p => (
          <g key={p.id} transform={`translate(${p.x} ${p.y})`} className="view-node"
             onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)} onClick={() => onSelect(p.id)}>
            {p.id === currentViewpoint && <circle r="28" fill="#1686ff" opacity=".14"><animate attributeName="r" from="20" to="34" dur="1.6s" repeatCount="indefinite"/><animate attributeName="opacity" from=".25" to="0" dur="1.6s" repeatCount="indefinite"/></circle>}
            <circle r="19" fill="#1686ff" opacity=".18" filter="url(#glow)" />
            <circle r="11" fill="#087dff" stroke="white" strokeWidth="3" />
            {p.id === currentViewpoint && <circle r="4" fill="white" />}
            {hover === p.id && <g transform="translate(18 -58)"><rect width="190" height="45" rx="10" fill="#081827"/><text x="13" y="19" className="tip-title">Viewpoint {p.id}</text><text x="13" y="35" className="tip-sub">Click to enter 360°</text></g>}
          </g>
        ))}
      </svg>
      <div className="map-caption"><span>● BLUE = 360° VIEWPOINT</span><span>PLACEHOLDER GEOMETRY · NOT TO SCALE</span></div>
    </div>
  );
}
