import { OrbitControls, useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera, PointLightHelper } from "three";

export function ShowCoordinates({coors}: {coors : number[]}) {
  {
      return coors.map((x) =>
        coors.map((c) => {
          return (
            <mesh key={`${x}-${c}`} position={[x, c, 0]}>
              <axesHelper />
              <sphereGeometry args={[0.1]} />
              <meshBasicMaterial color={"#000"} />
            </mesh>
          );
        })
      );
  }
}
export function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}
export function CameraHelper() {
  const camera = new PerspectiveCamera();
  return <cameraHelper args={[camera]} />;
}

export function Lights() {
  const lightRef = useRef<any>();
  useHelper(lightRef, PointLightHelper, 1, "yellow");
  return (
    <pointLight
      intensity={200}
      color={"cyan"}
      position={[0, -6, 0]}
      ref={lightRef}
    />
  );
}