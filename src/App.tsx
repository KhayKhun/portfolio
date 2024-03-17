import "./App.css";
import { Canvas} from "@react-three/fiber";
import { PresentationControls, Stars } from "@react-three/drei";
import { Mc } from "./components/Mc";
import { useState } from "react";
import NavBar from "./components/NavBar";


function App() {
  const [modelHeight, setModelHeight] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <Canvas
        className="border border-black bg-gradient-to-b from-black to-slate-900 w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: 50,
          near: 0.01,
        }}
      >
        <Stars />
        <ambientLight intensity={1.3} />

        <PresentationControls enabled global speed={5} polar={[0, 0.5]}>
          <group position={[0, -modelHeight, 0]}>
            <boxGeometry />
            <Mc setHeight={setModelHeight} />
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
