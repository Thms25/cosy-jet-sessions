"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import LoadSimple from "./loaders/LoadSimple";

// models
import CjsTitle from "@/models/CjsTitle";

// ---------------------------------------------------------------------

export default function CanvasHome() {
  const [isRotating, setIsRotating] = useState(false);
  return (
    <div className="h-screen w-full p-16">
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={`${isRotating ? "cursor-grabbing" : "cursor-grab"} w-full`}
      >
        <Suspense fallback={<LoadSimple />}>
          <ambientLight intensity={1} />
          {/* <spotLight
            position={[3, 1, 2]}
            angle={0.45}
            penumbra={1}
            intensity={10}
          /> */}
          {/* <pointLight position={[5, 5, 5]} /> */}
          <directionalLight position={[1, 2, 10]} intensity={0.3} />
          <hemisphereLight intensity={0.4} />

          <CjsTitle
            rotation={[1.5, 0, 0]}
            scale={[1, 1, 1]}
            position={[-2.5, -1, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
