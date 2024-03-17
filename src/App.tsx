import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Environment, PresentationControls, Sky, Stars} from '@react-three/drei'
import { Mc } from './components/Mc';
import { useState } from 'react';
import { Vector3 } from 'three';
import NavBar from './components/NavBar';

          
function App() {
  // const coor = [-2,-1,0,1,2,3];
  const [modelHeight,setModelHeight] = useState(0);
  console.log(modelHeight);
  const coor = [-2,-1,0];
  return (
    <div className="App">
      <NavBar/>
      <Canvas className="border border-black bg-gradient-to-b from-black to-slate-900 w-full h-full">
        <Stars />
        <ambientLight intensity={1.3} />
        {coor.map((x) =>
          coor.map((c) => {
            return (
              <mesh key={`${x}-${c}`} position={[x, c, 0]}>
                <axesHelper />
                <sphereGeometry args={[0.1]} />
                <meshBasicMaterial color={"#000"} />
              </mesh>
            );
          })
        )}
        <PresentationControls enabled global speed={5}>
          <group position={[0, -modelHeight, 3]}>
            <Mc setHeight={setModelHeight} />
          </group>
        </PresentationControls>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default App
