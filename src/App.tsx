import FixedContents from "./components/FixedContents";
import ThreeCanvas from "./components/ThreeCanvas";
import { Loader } from "@react-three/drei";
import AboutMe from "./components/AboutMe";

function App() {

  return (
    <div className="App">
      {/* Canvas */}
      <ThreeCanvas />
      
      {/* Other fixed contents */}
      <FixedContents />
      <AboutMe />

      {/* Show loading at the start */}
      <Loader />
    </div>
  );
}

export default App;
