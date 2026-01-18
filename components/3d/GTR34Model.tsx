"use client";

import { useCarStore } from "@/lib/store";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Group } from "three";

// Preload the model
useGLTF.preload("/nissan_skyline_r34_gt-r.glb");

export default function GTR34Model() {
  const groupRef = useRef<Group>(null);
  const [animateScale, setAnimateScale] = useState(1);
  const originalColors = useRef<Map<string, THREE.Color>>(new Map());
  
  // Load the actual GTR R34 model
  const { scene } = useGLTF("/nissan_skyline_r34_gt-r.glb");
  
  const {
    color,
    bodyKit,
    wheels,
    spoiler,
    hood,
    lights,
    exhaust,
    windowTint,
  } = useCarStore();

  // Trigger subtle animation when parts change
  useEffect(() => {
    setAnimateScale(0.98);
    const timeout = setTimeout(() => setAnimateScale(1), 200);
    return () => clearTimeout(timeout);
  }, [bodyKit, wheels, spoiler, hood, lights, exhaust]);

  // Parse color - check if it's the default blue (original color)
  const carColor = useMemo(() => new THREE.Color(color), [color]);
  const isDefaultColor = color === "#2e5f8f"; // Bayside Blue default

  // Window tint opacity
  const windowOpacity = useMemo(() => {
    switch (windowTint) {
      case "light":
        return 0.7;
      case "medium":
        return 0.5;
      case "dark":
        return 0.3;
      default:
        return 0.95; // clear
    }
  }, [windowTint]);

  // Save original colors and apply custom colors (BODY PAINT ONLY)
  useEffect(() => {
    if (scene) {
      // Log all mesh and material names once for debugging
      const meshInfo: any[] = [];
      
      scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          const meshName = child.name || 'unnamed';
          const matName = child.material.name || 'unnamed';
          const color = child.material.color;
          meshInfo.push({
            mesh: meshName,
            material: matName,
            r: color ? color.r.toFixed(2) : 'N/A',
            g: color ? color.g.toFixed(2) : 'N/A',
            b: color ? color.b.toFixed(2) : 'N/A',
            metalness: child.material.metalness?.toFixed(2) || 'N/A',
            transparent: child.material.transparent ? 'yes' : 'no'
          });
        }
      });
      
      // Group by similarity for easier reading
      console.log('🚗 GTR R34 Model Structure (WITH RGB):');
      console.table(meshInfo);
      
      console.log('\n📊 Starting color application');
      console.log('Selected color:', color, '| Is default?', isDefaultColor);
      
      scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          const material = child.material;
          const meshName = (child.name || '').toLowerCase();
          const matName = material.name ? material.name.toLowerCase() : '';
          
          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Save original color ONCE (only on first render)
          if (!originalColors.current.has(child.uuid) && material.color) {
            originalColors.current.set(child.uuid, material.color.clone());
          }
          
          // Get original color for identification
          const originalColor = originalColors.current.get(child.uuid);
          
          // STRICT: Paint ONLY Object_2 (the blue car body)
          // Identify by: EXACT blue color (b:0.56, metalness:1.0)
          const isCarBody = originalColor && 
            originalColor.r < 0.05 && 
            originalColor.g < 0.1 && 
            originalColor.b > 0.5 && 
            originalColor.b < 0.6 &&
            material.metalness === 1.0;
          
          // If it's default color, restore original
          if (isDefaultColor && originalColor && material.color) {
            material.color.copy(originalColor);
            material.needsUpdate = true;
            console.log('🔄 RESTORED:', child.name);
          } 
          // Paint ONLY the exact blue car body (Object_2)
          else if (isCarBody && material.color && !isDefaultColor) {
            console.log('🎨 PAINTING:', child.name, '→', material.name || 'unnamed',
              `[original rgb:(${originalColor.r.toFixed(2)},${originalColor.g.toFixed(2)},${originalColor.b.toFixed(2)}), m:${material.metalness}]`
            );
            material.color.copy(carColor);
            material.needsUpdate = true;
          } else {
            console.log('⏭️  Skip:', child.name, 
              `[r:${originalColor?.r.toFixed(2)}, g:${originalColor?.g.toFixed(2)}, b:${originalColor?.b.toFixed(2)}, m:${material.metalness?.toFixed(2)}]`
            );
          }

          // Apply window tint separately
          if (
            meshName.includes("window") ||
            meshName.includes("glass") ||
            meshName.includes("windshield") ||
            matName.includes("glass") ||
            matName.includes("window")
          ) {
            if (Array.isArray(material)) {
              material.forEach((mat) => {
                mat.transparent = true;
                mat.opacity = windowOpacity;
                mat.needsUpdate = true;
              });
            } else {
              material.transparent = true;
              material.opacity = windowOpacity;
              material.needsUpdate = true;
            }
          }
        }
      });
      
      if (isDefaultColor) {
        console.log('✅ Restored original colors');
      } else {
        console.log('✅ Applied custom color:', carColor.getHexString());
      }
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    }
  }, [scene, carColor, windowOpacity, isDefaultColor, color]);

  // Smooth scale animation and rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.lerp(
        new THREE.Vector3(animateScale, animateScale, animateScale),
        0.1
      );
      groupRef.current.rotation.y = Math.sin(Date.now() * 0.0002) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.05, 0]} scale={1.2}>
      <primitive object={scene.clone()} />
      
      {/* Visual feedback for color changes */}
      <mesh position={[0, 3, 0]} visible={false}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color={carColor} />
      </mesh>
    </group>
  );
}

// Credits: 
// 3D Model by Lexyc16 from Sketchfab
// https://sketchfab.com/3d-models/nissan-skyline-r34-gt-r-ff8fb2251dfa4bb9979e7022c5a6666c
// License: CC Attribution
