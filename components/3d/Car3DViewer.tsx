"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import GTR34Model from "./GTR34Model";

// Component to handle camera reset with GSAP
function CameraController({ onResetRef }: { onResetRef: any }) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);

  useImperativeHandle(onResetRef, () => ({
    resetCamera: () => {
      if (controlsRef.current) {
        const controls = controlsRef.current;
        
        // Animate camera position with GSAP (super smooth!)
        gsap.to(camera.position, {
          x: 4,
          y: 2,
          z: 6,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            controls.update();
          }
        });
        
        // Animate controls target to center of screen
        gsap.to(controls.target, {
          x: 1,
          y: -1,
          z: 0,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            controls.update();
          }
        });
      }
    }
  }));

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      minDistance={2}
      maxDistance={20}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      target={[1, -1, 0]}
      enableDamping={true}
      dampingFactor={0.05}
      autoRotate={true}
      autoRotateSpeed={-1.0}
    />
  );
}

const Car3DViewer = forwardRef((props, ref) => {
  const resetRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    resetCamera: () => {
      if (resetRef.current) {
        resetRef.current.resetCamera();
      }
    }
  }));

  return (
    <Canvas
      camera={{ position: [4, 2, 6], fov: 50 }}
      shadows
      className="bg-gradient-to-b from-slate-900 to-slate-800 cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[-10, 10, -5]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        {/* Environment */}
        <Environment preset="sunset" />

        {/* Car Model */}
        <GTR34Model />

        {/* Ground Shadow */}
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={15}
          blur={2.5}
          far={4}
        />

        {/* Camera Controller with GSAP */}
        <CameraController onResetRef={resetRef} />
      </Suspense>
    </Canvas>
  );
});

Car3DViewer.displayName = "Car3DViewer";

export default Car3DViewer;
