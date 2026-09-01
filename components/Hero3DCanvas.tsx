'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ─── Animated Mesh ────────────────────────────────────────────────────────────
function FloatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Track mouse position in normalised device coords
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map screen coords → [-1, 1] range
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Slow auto-rotation
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;

    // Smoothly lerp target toward mouse
    target.current.x += (mouse.current.x - target.current.x) * 0.04;
    target.current.y += (mouse.current.y - target.current.y) * 0.04;

    // Subtle positional follow (scaled to viewport so it feels natural)
    meshRef.current.position.x = target.current.x * viewport.width * 0.12;
    meshRef.current.position.y = target.current.y * viewport.height * 0.08;
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.32, 200, 32]}>
      <MeshDistortMaterial
        color="#00F0FF"
        emissive="#00A8B5"
        emissiveIntensity={0.4}
        metalness={0.8}
        roughness={0.1}
        wireframe={false}
        distort={0.25}
        speed={1.5}
      />
    </TorusKnot>
  );
}

// ─── Scene Lights ─────────────────────────────────────────────────────────────
function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      {/* Neon Cyan key light */}
      <directionalLight
        position={[4, 4, 4]}
        intensity={2.5}
        color="#00F0FF"
      />
      {/* Electric Violet fill light */}
      <directionalLight
        position={[-4, -2, -4]}
        intensity={1.8}
        color="#8A2BE2"
      />
      {/* Subtle warm back rim */}
      <directionalLight
        position={[0, -4, -6]}
        intensity={0.6}
        color="#ffffff"
      />
    </>
  );
}

// ─── Exported Canvas ──────────────────────────────────────────────────────────
export default function Hero3DCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Lights />
      <FloatingKnot />
    </Canvas>
  );
}
