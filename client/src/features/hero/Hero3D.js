"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image as DreiImage } from "@react-three/drei";

/**
 * Arranges each slide's product image as a textured plane on a shallow ring
 * facing the camera, then animates the whole ring's rotation toward the
 * active slide with a per-frame lerp - genuine WebGL rotation, not a CSS
 * transform standing in for one. Only ever mounted client-side, after the
 * caller has already confirmed WebGL support and that the visitor hasn't
 * asked for reduced motion.
 */
function Ring({ images, activeIndex }) {
  const group = useRef(null);
  const radius = 2.6;
  const count = images.length;

  useFrame((_, delta) => {
    if (!group.current) return;
    // Negative: card i sits at local angle (i/count)*2PI, so rotating the
    // group by -that amount is what brings card `activeIndex` to face the
    // camera (angle 0) instead of some other card ending up there.
    const targetY = -(activeIndex / count) * Math.PI * 2;
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, delta * 4);
  });

  return (
    <group ref={group}>
      {images.map((url, i) => {
        const angle = (i / count) * Math.PI * 2;
        const isActive = i === activeIndex;
        return (
          <group
            key={url}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, angle, 0]}
          >
            <Suspense fallback={null}>
              <DreiImage
                url={url}
                scale={isActive ? 2.35 : 1.9}
                radius={0.14}
                transparent
                opacity={isActive ? 1 : 0.45}
                toneMapped={false}
              />
            </Suspense>
          </group>
        );
      })}
    </group>
  );
}

export default function Hero3D({ images, activeIndex }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 5.6], fov: 38 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Ring images={images} activeIndex={activeIndex} />
    </Canvas>
  );
}
