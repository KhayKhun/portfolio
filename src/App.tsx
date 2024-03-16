import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Sky} from '@react-three/drei'
import { Mc } from './components/Mc';

function App() {
  return (
    <div className="App">
      <Canvas className="border border-black bg-gray-50 w-full h-full">
        <Sky />
        <ambientLight intensity={0.8} />
        <OrbitControls />
        <group position={[0,0,3]}>
          <Mc />
        </group>
      </Canvas>
    </div>
  );
}

export default App
