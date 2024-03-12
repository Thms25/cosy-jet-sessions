"use client";

// Hooks
import { useRef, useEffect } from "react";

// Motion
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
// import { a } from "@react-spring/three";
// import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three-stdlib";
import { motion } from "framer-motion-3d";

export default function CjsTitle({ progress, ...props }) {
  const cjsRef = useRef();
  const gltf = useLoader(GLTFLoader, "/assets/3d/cjs_title_4.gltf");

  const options = {
    damping: 20,
  };

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight + 1;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.mesh
      ref={cjsRef}
      {...props}
      // rotation-x={mouse.y}
      rotation-x={progress}
      rotation-z={mouse.x}
    >
      <primitive object={gltf.scene} />
    </motion.mesh>
  );
}
