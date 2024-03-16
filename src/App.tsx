import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Sky} from '@react-three/drei'
function App() {

  return (
    <div className='App'>
    <Canvas className='border border-black bg-gray-50 w-full h-full'>
      <Sky/>
      <mesh>
        <OrbitControls/>
        <boxGeometry args={[1,1,1]}/>
        <meshLambertMaterial/>
      </mesh>
    </Canvas>
    </div>
  )
}

export default App
