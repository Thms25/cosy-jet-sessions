"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LoadSimple from "./loaders/LoadSimple";

// ---------------------------------------------------------------------

export default function CanvasHome() {
  return (
    <Canvas
      className="h-screen w-full relative"
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<LoadSimple />}>
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  );
}
