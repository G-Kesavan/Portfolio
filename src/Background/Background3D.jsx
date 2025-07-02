import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Stars, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function BigCube({ position, size = 15 }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.002;
  });

  return (
    <RoundedBox
      ref={ref}
      args={[size, size, size]}
      radius={2}
      smoothness={6}
      position={position}
    >
      <meshStandardMaterial metalness={1} roughness={0.05} color="silver" />
    </RoundedBox>
  );
}

function TriangleShape({ position, size = 24 }) { // increased by 20%
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.z += 0.002;
  });

  const shape = new THREE.Shape();
  shape.moveTo(0, size);
  shape.lineTo(-size, -size);
  shape.lineTo(size, -size);
  shape.lineTo(0, size);

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 2 });
  return (
    <mesh geometry={geometry} ref={ref} position={position}>
      <meshStandardMaterial metalness={1} roughness={0.05} color="silver" />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "black",
      }}
    >
      <Canvas camera={{ position: [40, 20, 60], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <Environment preset="studio" />
        <Suspense fallback={null}>
          {/* top left pair */}
          <BigCube position={[-80, 0, -3]} size={40} />
          <TriangleShape position={[-80, 20, 0]} size={52} />

          {/* bottom right pair */}
          <BigCube position={[30, 5, 5]} size={20} />
          <TriangleShape position={[40, -8, 1]} size={20} />

          {/* star background */}
          <Stars radius={150} depth={40} count={10000} factor={4} fade speed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
