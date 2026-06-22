import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function SpinningCube() {
  const cubeRef = useRef<any>(null);

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function HeroScene() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />

        <SpinningCube />
      </Canvas>
    </div>
  );
}

export default HeroScene;
