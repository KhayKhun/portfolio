import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import { Github } from "./models/Github";
import { Blender } from "./models/Blender";
import { Javascript } from "./models/Javascript";
import { Typescript } from "./models/Typescript";
import { Tailwind } from "./models/Tailwind";
import { Lights } from "../assets/Helpers";
import { React } from "./models/React";
import { Css } from "./models/Css";
import { Html } from "./models/Html";
import { Avatar } from "./models/Avatar";

const ThreeCanvas = () => {
  const [modelHeight, setModelHeight] = useState(0);
  const positionZ =
    window.innerWidth < 400 ? 5 : window.innerWidth < 600 ? 4 : 3.5;
  return (
    <Canvas
      className="border border-black bg-gradient-to-b from-[#000] to-[#150f1e] w-full h-full"
      camera={{
        position: [0, -1, positionZ],
        fov: 40,
        near: 0.001,
      }}
    >
      <Stars />
      <ambientLight intensity={2} />
      <OrbitControls
        autoRotate
        enableDamping
        autoRotateSpeed={2}
        rotateSpeed={2}
        enableZoom={false}
        enablePan={false}
        target={[0.2, -0.2, 0]}
      />
      <Lights />

      <Avatar setHeight={setModelHeight} position={[0, -modelHeight, 0]} />

      <Blender position={[1, 0.8, 1.2]} />
      <Github position={[1.3, 1.3, -1]} />
      <Javascript position={[1, -1, -1]} />
      <Typescript position={[-1, 1, -1]} />
      <Tailwind position={[1, -1.3, 1]} />
      <React position={[-1, 0.2, 1]} />
      <Css position={[-1.5, -1.2, -0.8]} />
      <Html position={[1.8, 0.4, 1.2]} />
    </Canvas>
  );
};

export default ThreeCanvas;
