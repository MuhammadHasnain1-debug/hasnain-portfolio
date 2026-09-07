"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Float,
  MeshDistortMaterial,
  Icosahedron,
} from "@react-three/drei";
import { useRef, type MutableRefObject } from "react";
import * as THREE from "three";

export type ScrollState = { progress: number };

function Blob({ scrollRef }: { scrollRef: MutableRefObject<ScrollState> }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const p = scrollRef.current.progress;
    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x = p * Math.PI * 1.1;
    ref.current.rotation.z = p * 0.7;
    const s = 1 + Math.sin(p * Math.PI) * 0.12;
    ref.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <Icosahedron ref={ref} args={[1.5, 8]}>
        <MeshDistortMaterial
          color="#294a94"
          emissive="#132a63"
          emissiveIntensity={0.35}
          metalness={0.9}
          roughness={0.18}
          distort={0.34}
          speed={1.4}
          envMapIntensity={2}
        />
      </Icosahedron>
    </Float>
  );
}

function CameraRig({ scrollRef }: { scrollRef: MutableRefObject<ScrollState> }) {
  useFrame((state) => {
    const p = scrollRef.current.progress;
    state.camera.position.z = 5.2 - p * 1.4;
    state.camera.position.x += (Math.sin(p * Math.PI) * 1.6 - state.camera.position.x) * 0.06;
    state.camera.position.y += (p * 0.6 - state.camera.position.y) * 0.06;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroCanvas({
  scrollRef,
}: {
  scrollRef: MutableRefObject<ScrollState>;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[6, 6, 6]} intensity={55} color="#5C8CFF" />
      <pointLight position={[-6, -4, 2]} intensity={35} color="#8B5CF6" />
      <pointLight position={[0, 2, 6]} intensity={20} color="#6EA0FF" />

      <Blob scrollRef={scrollRef} />
      <CameraRig scrollRef={scrollRef} />

      <Environment resolution={256}>
        <Lightformer form="circle" intensity={3} position={[0, 4, -6]} scale={6} color="#5C8CFF" />
        <Lightformer form="rect" intensity={2} position={[-6, 1, 1]} scale={[4, 6, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={1.4} position={[6, -1, 1]} scale={[4, 6, 1]} color="#8B5CF6" />
        <Lightformer form="circle" intensity={1.2} position={[0, -5, 2]} scale={4} color="#6EA0FF" />
      </Environment>
    </Canvas>
  );
}
