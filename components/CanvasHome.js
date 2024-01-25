"use client";

// Hooks
import { Suspense, useState, useRef } from "react";

// Motion
import { Canvas } from "@react-three/fiber";
import LoadSimple from "./loaders/LoadSimple";
import { OrbitControls } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";

// Models
import CjsTitle from "@/models/CjsTitle";

// ---------------------------------------------------------------------

export default function CanvasHome() {
  const [isRotating, setIsRotating] = useState(false);
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.5, 3]),
    { damping: 20 }
  );

  return (
    <div className="h-[150vh] w-full" ref={container}>
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <Canvas
          camera={{ near: 0.1, far: 1000 }}
          className={`${isRotating ? "cursor-grabbing" : "cursor-grab"} w-full`}
        >
          <Suspense fallback={<LoadSimple />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              onStart={() => setIsRotating(true)}
              onEnd={() => setIsRotating(false)}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 10]} intensity={0.5} />
            <hemisphereLight intensity={0.4} />

            <CjsTitle
              rotation={[1.5, 0, 0]}
              scale={[0.7, 0.7, 0.7]}
              position={[-1.5, -1, 0]}
              progress={smoothProgress}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
