import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Brain = () => {
  const brainRef = useRef();
  const { scene } = useGLTF("/brain/scene.gltf");

  const [mouseX, setMouseX] = useState(0);

  // Track the mouse movement to update the x position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
      setMouseX(mouseX); // Set the mouse position to state
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Set the scale of the brain
  useEffect(() => {
    if (scene) {
      scene.scale.set(2, 2, 2); // Adjust scale to make the brain larger
    }
  }, [scene]);

  // Rotate the brain based on mouse position with clamped boundaries
  useFrame(() => {
    if (brainRef.current) {
      const rotationLimit = Math.PI / 2; // 90 degrees in radians
      const rotationValue = THREE.MathUtils.lerp(
        brainRef.current.rotation.y,
        THREE.MathUtils.clamp(mouseX * rotationLimit, -rotationLimit, rotationLimit),
        0.1
      );
      brainRef.current.rotation.y = rotationValue; // Apply the clamped rotation
    }
  });

  return (
    <group ref={brainRef}>
      <primitive object={scene} />
    </group>
  );
};

const BrainCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <Brain />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default BrainCanvas;
