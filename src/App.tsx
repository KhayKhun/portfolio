import "./App.css";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Mc } from "./components/models/Mc";
import { useState } from "react";
import { Github } from "./components/models/Github";
import { Blender } from "./components/models/Blender";
import { Javascript } from "./components/models/Javascript";
import { Typescript } from "./components/models/Typescript";
import { Tailwind } from "./components/models/Tailwind";
import { Lights } from "./helpers/Helpers";

function App() {
  const [modelHeight, setModelHeight] = useState(0);

  return (
    <div className="App">
      <Canvas
        className="border border-black bg-gradient-to-b from-black to-slate-900 w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: 60,
          near: 0.01,
        }}
      >
        <Stars />
        <ambientLight intensity={1} />
        <group position={[0, -modelHeight, 0]}>
          <boxGeometry />
          <Mc
            setHeight={setModelHeight}
          />
        </group>
        <OrbitControls
          autoRotate
          enableDamping
          // reverseHorizontalOrbit
          autoRotateSpeed={3}
          rotateSpeed={2}
          enableZoom={false}
        />
        <Lights />

        <Blender position={[1,-1,1]}/>
        <Github position={[1,1,-1]} />
        <Javascript position={[-1,1,1]} />
        <Typescript position={[1,1,1]} />
        <Tailwind position={[-1,-1,-1]} />

      </Canvas>
    </div>
  );
}

export default App;
