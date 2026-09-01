'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// ─── Palette ──────────────────────────────────────────────────────────────
const CYAN = '#00F0FF';
const VIOLET = '#8A2BE2';

// ─── Types ────────────────────────────────────────────────────────────────
interface NodeData {
  position: THREE.Vector3;
  size: number;
  color: string;
  isCore: boolean;
}

interface EdgeData {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
  speed: number;
  offset: number;
}

// ─── Procedural Network Generation ─────────────────────────────────────────
// One bright core node with satellites arranged on a loose sphere, plus a
// handful of cross-links between satellites so it reads as a circuit/board
// layout rather than a plain hub-and-spoke.
function generateNetwork(): { nodes: NodeData[]; edges: EdgeData[] } {
  const nodes: NodeData[] = [
    { position: new THREE.Vector3(0, 0, 0), size: 0.34, color: CYAN, isCore: true },
  ];

  const satelliteCount = 10;
  for (let i = 0; i < satelliteCount; i++) {
    const theta = (i / satelliteCount) * Math.PI * 2;
    const phi = Math.acos(1 - 2 * ((i + 0.5) / satelliteCount));
    const radius = 2.1 + (i % 3) * 0.45;
    const position = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta) * 0.75,
      radius * Math.cos(phi) * 0.9
    );
    nodes.push({
      position,
      size: 0.07 + (i % 3) * 0.02,
      color: i % 2 === 0 ? CYAN : VIOLET,
      isCore: false,
    });
  }

  const edges: EdgeData[] = [];

  // Spokes: core to every satellite
  for (let i = 1; i < nodes.length; i++) {
    edges.push({
      from: nodes[0].position,
      to: nodes[i].position,
      color: nodes[i].color,
      speed: 0.35 + Math.random() * 0.45,
      offset: Math.random(),
    });
  }

  // Cross-links: a few satellite-to-satellite traces for a "board" feel
  for (let i = 1; i < nodes.length; i++) {
    const next = ((i - 1 + 3) % (nodes.length - 1)) + 1;
    if (next !== i) {
      edges.push({
        from: nodes[i].position,
        to: nodes[next].position,
        color: '#ffffff',
        speed: 0.25 + Math.random() * 0.3,
        offset: Math.random(),
      });
    }
  }

  return { nodes, edges };
}

// ─── A single pulse of "data" traveling along one edge ─────────────────────
function DataPulse({ edge }: { edge: EdgeData }) {
  const ref = useRef<THREE.Mesh>(null!);
  const t = useRef(edge.offset);

  useFrame((_, delta) => {
    t.current = (t.current + delta * edge.speed * 0.25) % 1;
    if (ref.current) {
      ref.current.position.lerpVectors(edge.from, edge.to, t.current);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.032, 8, 8]} />
      <meshBasicMaterial color={edge.color} toneMapped={false} />
    </mesh>
  );
}

// ─── Scene contents ──────────────────────────────────────────────────────
function CircuitNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  const { nodes, edges } = useMemo(() => generateNetwork(), []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.1;
    groupRef.current.rotation.x = Math.sin(Date.now() * 0.00008) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {edges.map((edge, i) => (
        <Line
          key={`edge-${i}`}
          points={[edge.from, edge.to]}
          color={edge.color}
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}

      {edges.map((edge, i) => (
        <DataPulse key={`pulse-${i}`} edge={edge} />
      ))}

      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position}>
          <icosahedronGeometry args={[node.size, 0]} />
          <meshPhysicalMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={node.isCore ? 0.7 : 0.35}
            metalness={0.3}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 4, 4]} intensity={2} color={CYAN} />
      <directionalLight position={[-4, -3, -4]} intensity={1.3} color={VIOLET} />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#ffffff" />
    </>
  );
}

// ─── Exported Canvas ────────────────────────────────────────────────────
export default function CircuitNetworkCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Lights />
      <CircuitNetwork />
    </Canvas>
  );
}
