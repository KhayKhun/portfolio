import { Suspense } from "react";
import NavBar from "./components/NavBar";
import ThreeCanvas from "./components/ThreeCanvas";
import { Loader } from "@react-three/drei";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Suspense>
        <ThreeCanvas/>
      </Suspense>
      <Loader />
    </div>
  );
}

export default App;
