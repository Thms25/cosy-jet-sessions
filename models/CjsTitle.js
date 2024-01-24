"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { a } from "@react-spring/three";

import { GLTFLoader } from "three-stdlib";

export default function CjsTitle(props) {
  const gltf = useLoader(GLTFLoader, "/assets/3d/cjs_title_4.gltf");
  // const gltf = useGLTF("/assets/3d/cjs_title_4.gltf");

  const cjsRef = useRef();
  const { nodes, materials } = useGLTF("/assets/3d/cjs_title_4.gltf");

  return (
    <mesh ref={cjsRef} {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
