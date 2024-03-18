/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../../types/global";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Blender(props:any) {
  const { nodes, materials } = useGLTF("models/blender.glb") as GLTFResult;
  const groupRef = useRef<any>();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.03;
      groupRef.current.rotation.z += 0.03;
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
          material={materials["back.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO.geometry}
          material={materials["logo.001"]}
          position={[0.899, 0.649, 0.334]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO_1.geometry}
          material={materials.logo_1}
          position={[0.031, 0.649, 0.025]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/blender.glb");