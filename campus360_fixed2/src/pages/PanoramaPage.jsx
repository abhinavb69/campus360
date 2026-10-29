import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import PanoramaViewer from '../components/PanoramaViewer';
import { useCampus } from '../context/CampusContext';

export default function PanoramaPage({ roomMode=false }) {
  const nav = useNavigate();
  const { viewpointId, roomId } = useParams();
  const { data, currentViewpoint, setCurrentViewpoint, returnViewpoint, setReturnViewpoint } = useCampus();
  const room = roomMode ? data.rooms[roomId] : null;
  const vp = data.viewpoints[viewpointId || currentViewpoint];

  if (roomMode && !room) return <main className="page"><Header/><div className="error-page"><h2>Room not found</h2><button onClick={() => nav('/map')}>Back to Floor Map</button></div></main>;

  const activeId = roomMode ? room.entryViewpoint : (viewpointId || currentViewpoint);
  const active = roomMode ? room : vp;
  if (!active) return <main className="page"><Header/><div className="error-page"><h2>Viewpoint not found</h2><button onClick={() => nav('/map')}>Back to Floor Map</button></div></main>;

  const go = id => { setCurrentViewpoint(id); nav('/panorama/'+id); };
  const enterRoom = id => { setReturnViewpoint(activeId); nav('/room/'+id); };
  const backCorridor = () => { setCurrentViewpoint(returnViewpoint); nav('/panorama/'+returnViewpoint); };

  return <main className="viewer-page"><Header/><div className="viewer-area"><PanoramaViewer src={active.panorama} title={roomMode ? active.name : active.label} onBack={!roomMode && active.previous ? () => go(active.previous) : null} onForward={!roomMode && active.next ? () => go(active.next) : null} onRoom={!roomMode && active.rooms?.[0] ? () => enterRoom(active.rooms[0]) : null} roomLabel={!roomMode && active.rooms?.[0]} onCorridor={roomMode ? backCorridor : null} roomMode={roomMode}/></div><div className="viewer-footer"><span>● {roomMode ? 'ROOM VIEW' : 'CORRIDOR VIEW'} · {activeId}</span><button onClick={() => nav('/map')}>⌖ Floor Map</button></div></main>;
}
