import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function PanoramaViewer({ src, title, onForward, onBack, onRoom, onCorridor, roomLabel, roomMode }) {
  const mount = useRef(null);
  const [zoom, setZoom] = useState(75);
  const [error, setError] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    let alive = true;
    let lon = 0, lat = 0, dragging = false, startX = 0, startY = 0, startLon = 0, startLat = 0;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1100);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(100, 64, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial();
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const resize = () => {
      const w = Math.max(el.clientWidth, 1);
      const h = Math.max(el.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const loader = new THREE.TextureLoader();
    loader.load(src, texture => {
      if (!alive) return;
      texture.colorSpace = THREE.SRGBColorSpace;
      material.map = texture;
      material.needsUpdate = true;
      setError(false);
    }, undefined, () => alive && setError(true));

    const clamp = () => { lat = Math.max(-80, Math.min(80, lat)); };
    const down = e => { dragging = true; startX = e.clientX; startY = e.clientY; startLon = lon; startLat = lat; renderer.domElement.setPointerCapture?.(e.pointerId); };
    const move = e => { if (!dragging) return; lon = startLon - (e.clientX-startX)*0.12; lat = startLat + (e.clientY-startY)*0.12; clamp(); };
    const up = () => { dragging = false; };
    const wheel = e => { e.preventDefault(); setZoom(v => Math.max(45, Math.min(100, v + e.deltaY*0.04))); };

    renderer.domElement.addEventListener('pointerdown', down);
    renderer.domElement.addEventListener('pointermove', move);
    renderer.domElement.addEventListener('pointerup', up);
    renderer.domElement.addEventListener('pointercancel', up);
    renderer.domElement.addEventListener('pointerleave', up);
    renderer.domElement.addEventListener('wheel', wheel, { passive:false });

    let frame;
    const animate = () => {
      if (!alive) return;
      frame = requestAnimationFrame(animate);
      const phi = THREE.MathUtils.degToRad(90-lat);
      const theta = THREE.MathUtils.degToRad(lon);
      camera.fov = zoom;
      camera.updateProjectionMatrix();
      camera.lookAt(100*Math.sin(phi)*Math.cos(theta), 100*Math.cos(phi), 100*Math.sin(phi)*Math.sin(theta));
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      renderer.domElement.removeEventListener('pointerdown', down);
      renderer.domElement.removeEventListener('pointermove', move);
      renderer.domElement.removeEventListener('pointerup', up);
      renderer.domElement.removeEventListener('pointercancel', up);
      renderer.domElement.removeEventListener('pointerleave', up);
      renderer.domElement.removeEventListener('wheel', wheel);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      el.innerHTML = '';
    };
  }, [src, zoom]);

  return (
    <div className={fullscreen ? 'viewer fullscreen' : 'viewer'}>
      <div ref={mount} className="viewer-canvas" />
      <div className="viewer-shade" />
      <div className="viewer-top"><span>360° VIEW</span><b>{title}</b><span>DRAG / SCROLL</span></div>
      {error && <div className="viewer-error">Panorama image could not be loaded.<br/>Check <b>public/panoramas/sample-360.jpg</b>.</div>}
      {onBack && <button className="hotspot left" onClick={onBack}>‹ <small>BACK</small></button>}
      {onForward && <button className="hotspot right" onClick={onForward}>› <small>CONTINUE</small></button>}
      {onRoom && <button className="hotspot room" onClick={onRoom}>🚪 <small>ROOM {roomLabel}</small></button>}
      {onCorridor && <button className="hotspot corridor" onClick={onCorridor}>↩ <small>BACK TO CORRIDOR</small></button>}
      <div className="viewer-tools">
        <button onClick={() => setZoom(v => Math.max(45,v-8))}>−</button>
        <span>{Math.round(zoom)}°</span>
        <button onClick={() => setZoom(v => Math.min(100,v+8))}>+</button>
        <button onClick={() => setFullscreen(v => !v)}>{fullscreen ? '⤢' : '⛶'}</button>
      </div>
    </div>
  );
}
