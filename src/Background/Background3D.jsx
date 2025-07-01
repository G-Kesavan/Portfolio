import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Stars } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function BigCubeWithMoon({ position, size = 5 }) {
  const ref = useRef();
  const moonRef = useRef();

  useFrame(({ clock }) => {
    // rotate big cube slowly
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.002;

    // gentle floating movement
    ref.current.position.x = position[0] + Math.sin(clock.elapsedTime * 0.1) * 2;
    ref.current.position.y = position[1] + Math.cos(clock.elapsedTime * 0.1) * 2;

    // orbiting moon around big cube with slower speed
    const moonRadius = size * 1.5;
    const moonSpeed = clock.elapsedTime * 0.2; // slowed orbit
    moonRef.current.position.x =
      ref.current.position.x + Math.cos(moonSpeed) * moonRadius;
    moonRef.current.position.y =
      ref.current.position.y + Math.sin(moonSpeed) * moonRadius;
    moonRef.current.position.z = ref.current.position.z;
  });

  return (
    <>
      <RoundedBox
        ref={ref}
        args={[size, size, size]}
        radius={0.5}
        smoothness={6}
      >
        <meshStandardMaterial metalness={0.9} roughness={0.2} color="silver" />
      </RoundedBox>
      <mesh ref={moonRef}>
        <sphereGeometry args={[size * 0.4, 16, 16]} />
        <meshStandardMaterial metalness={0.9} roughness={0.2} color="silver" />
      </mesh>
    </>
  );
}

function TriangleShape({ position, size = 3 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.z += 0.002;
    ref.current.position.x = position[0] + Math.sin(clock.elapsedTime * 0.1) * 1;
    ref.current.position.y = position[1] + Math.cos(clock.elapsedTime * 0.1) * 1;
  });

  const shape = new THREE.Shape();
  shape.moveTo(0, size);
  shape.lineTo(-size, -size);
  shape.lineTo(size, -size);
  shape.lineTo(0, size);

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.5 });
  return (
    <mesh geometry={geometry} ref={ref} position={position}>
      <meshStandardMaterial metalness={0.9} roughness={0.2} color="silver" />
    </mesh>
  );
}

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bigCubePositions = isMobile
    ? [
        [-6, 6, 0],
        [6, 6, 0],
        [-6, -6, 0],
        [6, -6, 0],
        [0, 0, -5],
      ]
    : [
        [-12, 10, 0],
        [12, 10, 0],
        [-12, -10, 0],
        [12, -10, 0],
        [0, 0, -5],
      ];

  const trianglePositions = isMobile
    ? [
        [-6, 8, 0],
        [6, 8, 0],
        [-6, -8, 0],
        [6, -8, 0],
        [0, 10, 0],
      ]
    : [
        [-15, 12, 0],
        [15, 12, 0],
        [-15, -12, 0],
        [15, -12, 0],
        [0, 14, 0],
      ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "black",
      }}
    >
      <Canvas camera={{ position: [20, 10, 30], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          {/* big cubes with orbiting moons */}
          {bigCubePositions.map((pos, i) => (
            <BigCubeWithMoon key={`bigcube-${i}`} position={pos} size={5} />
          ))}

          {/* big triangle shapes moving gently */}
          {trianglePositions.map((pos, i) => (
            <TriangleShape key={`triangle-${i}`} position={pos} size={4} />
          ))}

          {/* star background */}
          <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}