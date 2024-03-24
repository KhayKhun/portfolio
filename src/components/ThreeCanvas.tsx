import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars} from "@react-three/drei";
import { Suspense } from "react";
import { Avatar, Blender, Cs, Css, Github, HtmlModel, Javascript, React, Tailwind, Typescript } from "./models/Models";
import { Lights } from "../assets/Helpers";
import { Vector3 } from "three";
import {Perf} from 'r3f-perf'
const _positionZ =
  window.innerWidth < 400 ? 5 : window.innerWidth < 600 ? 4 : 3;

const ThreeCanvas = () => {
  return (
    <Canvas
      className="border border-black bg-gradient-to-b from-[#000] to-[#010017] w-full h-full"
      camera={{
        // camera position-z is scaled by viewport width. Mobile uses will see models from furthur position
        position: [0, -1, _positionZ],
        fov: 40,
        near: 0.01,
      }}
    >
      <Perf/>
      <Suspense>

        <Lights />
        <Stars />
        <OrbitControls autoRotate rotateSpeed={2} enableZoom={false} />

        <Avatar position={new Vector3(0, -1, 0)} />
        <Blender position={new Vector3(1, 0.8, 1.2)} />
        <Github position={new Vector3(1.3, 1.3, -1)} />
        <Javascript position={new Vector3(1, -1, -1)} />
        <Typescript position={new Vector3(-1, 1, -1)} />
        <Tailwind position={new Vector3(1, -1.3, 1)} />
        <React position={new Vector3(-1, 0.2, 1)} />
        <Css position={new Vector3(-1.5, -1.2, -0.8)} />
        <HtmlModel position={new Vector3(1.8, 0.4, 1.2)} />
        <Cs position={new Vector3(-1.5, 0, -1.5)} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;
