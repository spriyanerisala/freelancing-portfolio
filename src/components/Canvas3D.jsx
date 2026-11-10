import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Canvas3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 1. Particle Starfield / Grid of Constellations
    const particlesCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color('#38bdf8'); // cyan
    const color2 = new THREE.Color('#8b5cf6'); // purple
    const color3 = new THREE.Color('#3b82f6'); // blue

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mixed = Math.random();
      const c = mixed < 0.4 ? color1 : (mixed < 0.75 ? color2 : color3);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create a circular texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(56,189,248,0.8)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.85,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 2. Interactive Floating 3D Geometric Nodes (Torus & Icosahedron Wireframes)
    const torusGeo = new THREE.TorusGeometry(8, 1.8, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(12, 4, -8);
    scene.add(torus);

    const icoGeo = new THREE.IcosahedronGeometry(6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(-14, -6, -10);
    scene.add(ico);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0006;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse camera parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 12;
      camera.position.y = -targetY * 12;
      camera.lookAt(0, 0, 0);

      // Rotating wireframes
      torus.rotation.x = elapsedTime * 0.15;
      torus.rotation.y = elapsedTime * 0.2;
      torus.position.y = 4 + Math.sin(elapsedTime * 0.6) * 1.5;

      ico.rotation.x = -elapsedTime * 0.2;
      ico.rotation.z = elapsedTime * 0.25;
      ico.position.y = -6 + Math.cos(elapsedTime * 0.5) * 1.2;

      // Subtle particle cloud drift
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }} 
    />
  );
};
