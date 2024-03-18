import "./App.css";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Stars, useHelper } from "@react-three/drei";
import { Mc } from "./components/Mc";
import { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import { PointLightHelper } from "three";
// import {useControls} from 'leva'

function Lights(){
  const lightRef = useRef<any>();
  useHelper(lightRef, PointLightHelper, 1, "yellow");
  return <pointLight intensity={200} color={'cyan'} position={[0, -6, 0]} ref={lightRef}/>;
}

function App() {
  const [modelHeight, setModelHeight] = useState(0);
  // const {animation} = useControls({
  //   animation :{
  //     value : "Floating",
  //     options : ["Falling","Floating"]
  //   }
  // })

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
        <ambientLight intensity={1} />

        {/* <PresentationControls enabled global speed={5} polar={[0, 0.5]}> */}
        <group position={[0, -modelHeight, 0]}>
          <boxGeometry />
          <Mc
            setHeight={setModelHeight}
            // animation={animation}
          />
        </group>
        {/* </PresentationControls> */}
        <OrbitControls
          autoRotate // Enable auto rotation
          enableDamping
          autoRotateSpeed={1} // Set rotation speed
          rotateSpeed={3}
          enableZoom={false}
        />
        <Lights />
      </Canvas>
    </div>
  );
}

export default App;
