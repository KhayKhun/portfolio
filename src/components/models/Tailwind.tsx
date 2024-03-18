/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../../types/global";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Tailwind(props:any) {
  const { nodes, materials } = useGLTF("models/tailwind.glb") as GLTFResult;
  const groupRef = useRef<any>();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.05;
      groupRef.current.rotation.z -= 0.03;
    }
  });
  return (
    <group
      {...props}
      dispose={null}
      position={props.position}
      scale={3}
      ref={groupRef}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials["back.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO.geometry}
          material={materials["logo.003"]}
          position={[-0.003, 0.657, 0.009]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/tailwind.glb");