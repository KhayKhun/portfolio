import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Mc } from "./components/models/Mc";
import { useState } from "react";
import { Github } from "./components/models/Github";
import { Blender } from "./components/models/Blender";
import { Javascript } from "./components/models/Javascript";
import { Typescript } from "./components/models/Typescript";
import { Tailwind } from "./components/models/Tailwind";
import { Lights } from "./helpers/Helpers";
import { React } from "./components/models/React";
import { Css } from "./components/models/Css";

function App() {
  const [modelHeight, setModelHeight] = useState(0);
  return (
    <div className="App">
      <Canvas
        className="border border-black bg-gradient-to-b from-black to-slate-900 w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: 60,
          near: 0.001,
        }}
      >
        <Stars />
        <ambientLight intensity={1.4} />
        <group position={[0, -modelHeight, 0]}>
          <boxGeometry />
          <Mc setHeight={setModelHeight} />
        </group>
        <OrbitControls
          autoRotate
          enableDamping
          // reverseHorizontalOrbit
          autoRotateSpeed={3}
          rotateSpeed={2}
          enableZoom={true}
          target={[0,0.3,0]}
        />
        <Lights />

        <Blender position={[1, 0.8, 1.2]} />
        <Github position={[1, 1, -1]} />
        <Javascript position={[-1, 0.2, 1]} />
        <Typescript position={[-1, 1, -1]} />
        <Tailwind position={[1, -1.3, 1]} />
        <React position={[1, -1, -1]} />
        <Css position={[-1.5, -1.2, -0.8]} />
      </Canvas>
    </div>
  );
}

export default App;
