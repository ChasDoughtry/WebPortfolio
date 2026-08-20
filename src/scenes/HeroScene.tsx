import { useRef } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { randFloat } from "three/src/math/MathUtils.js";
import * as THREE from "three";

import "../styles/Hero.css";

function SpinningOctahedron() {
  const octahedronRef = useRef<THREE.Mesh>(null);

  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });

  // Current drag velocity
  const dragVelocity = useRef({
    x: 0,
    y: 0,
  });

  const rotationSpeed = useRef({
    x: randFloat(0.1, 0.5),
    y: randFloat(0.1, 0.5),
  });

  useFrame((_, delta) => {
    if (!octahedronRef.current) return;

    if (isDragging.current) {
      // Rotation is controlled by the mouse while dragging
      octahedronRef.current.rotation.y +=
        dragVelocity.current.x;

      octahedronRef.current.rotation.x +=
        dragVelocity.current.y;

      return;
    }

    // Apply momentum after releasing
    octahedronRef.current.rotation.y +=
      dragVelocity.current.x;

    octahedronRef.current.rotation.x +=
      dragVelocity.current.y;

    // Gradually reduce momentum
    dragVelocity.current.x *= 0.95;
    dragVelocity.current.y *= 0.95;

    // Once momentum is almost gone, return to automatic rotation
    if (
      Math.abs(dragVelocity.current.x) < 0.01 &&
      Math.abs(dragVelocity.current.y) < 0.01
    ) {
      dragVelocity.current.x = 0;
      dragVelocity.current.y = 0;

      octahedronRef.current.rotation.x +=
        delta * rotationSpeed.current.x;

      octahedronRef.current.rotation.y +=
        delta * rotationSpeed.current.y;
    }
  });

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();

    isDragging.current = true;

    previousMouse.current = {
      x: event.clientX,
      y: event.clientY,
    };

    // Stop previous momentum when grabbing the object
    dragVelocity.current.x = 0;
    dragVelocity.current.y = 0;
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging.current) return;
    if (!octahedronRef.current) return;

    const deltaX =
      event.clientX - previousMouse.current.x;

    const deltaY =
      event.clientY - previousMouse.current.y;

    const sensitivity = 0.01;

    const velocityX = deltaX * sensitivity;
    const velocityY = deltaY * sensitivity;

    // Rotate immediately
    octahedronRef.current.rotation.y += velocityX;
    octahedronRef.current.rotation.x += velocityY;

    // Store the most recent movement as momentum
    dragVelocity.current.x = velocityX;
    dragVelocity.current.y = velocityY;

    previousMouse.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <mesh
      ref={octahedronRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <octahedronGeometry args={[2.5, 0]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

{/* spinning cube function

  function SpinningCube() {
    const cubeRef = useRef<any>(null);

    useFrame((state, delta) => {
      cubeRef.current.rotation.x += delta * randFloat(.5,1);
      cubeRef.current.rotation.y += delta * randFloat(.5,1);
    });

    return (
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  }


  */}

{/* Spinning Laptop function
function Laptop() {
  const laptopRef = useRef<any>(null);
  const { scene } = useGLTF("laptop2.glb");

  useFrame((state, delta) => {
    //laptopRef.current.rotation.y += delta * 0.5;
    //laptopRef.current.rotation.x += delta;
    laptopRef.current.rotation.y += delta;
  });

  return (
    <primitive
      ref={laptopRef}
      object={scene}
      scale={2}
    />
  );
  }

  */}

function HeroScene() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <SpinningOctahedron />
      </Canvas>
    </div>
  );
  }
export default HeroScene;
