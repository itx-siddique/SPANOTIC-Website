'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// ─── Animated Mesh ────────────────────────────────────────────────────────────
function SpinningOctahedron({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Octahedron ref={meshRef} args={[1.2, 0]}>
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        metalness={0.1}
        roughness={0}
        transmission={0.6}
        thickness={1.2}
        ior={1.5}
        transparent
        opacity={0.85}
      />
    </Octahedron>
  );
}

// ─── Scene Lights ─────────────────────────────────────────────────────────────
function Lights({ color }: { color: string }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      {/* Primary colored key light */}
      <directionalLight position={[3, 3, 3]} intensity={3} color={color} />
      {/* Complementary fill light */}
      <directionalLight position={[-3, -2, -3]} intensity={1.5} color="#ffffff" />
      {/* Soft back rim */}
      <pointLight position={[0, -3, -4]} intensity={0.8} color={color} />
    </>
  );
}

// ─── Exported Canvas ──────────────────────────────────────────────────────────
interface Project3DCanvasProps {
  color: string;
}

export default function Project3DCanvas({ color }: Project3DCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Lights color={color} />
      <SpinningOctahedron color={color} />
    </Canvas>
  );
}
