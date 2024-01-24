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
    // <group {...props} ref={cjsRef} rotation={[1, 0, 0]}>
    //   <mesh
    //     geometry={nodes.fullLogo.geometry}
    //     material={materials["SVGMat.001"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-2"].geometry}
    //     material={materials["SVGMat.002"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-3"].geometry}
    //     material={materials["SVGMat.003"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-4"].geometry}
    //     material={materials["SVGMat.004"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-5"].geometry}
    //     material={materials["SVGMat.005"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-6"].geometry}
    //     material={materials["SVGMat.006"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-7"].geometry}
    //     material={materials["SVGMat.007"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-8"].geometry}
    //     material={materials["SVGMat.008"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-9"].geometry}
    //     material={materials["SVGMat.009"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-10"].geometry}
    //     material={materials["SVGMat.010"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-11"].geometry}
    //     material={materials["SVGMat.011"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-12"].geometry}
    //     material={materials["SVGMat.012"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-13"].geometry}
    //     material={materials["SVGMat.013"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-14"].geometry}
    //     material={materials["SVGMat.014"]}
    //     scale={21}
    //   />
    //   <mesh
    //     geometry={nodes["fullLogo-15"].geometry}
    //     material={materials["SVGMat.015"]}
    //     scale={21}
    //   />
    // </group>
  );
}
