import { Suspense } from "react";
import FixedContents from "./components/FixedContents";
import ThreeCanvas from "./components/ThreeCanvas";
import { Loader } from "@react-three/drei";
import AboutMe from "./components/AboutMe";
// import CustomLoader from "./helpers/CustomLoader";

function App() {

  return (
    <div className="App">
      <FixedContents />
      <AboutMe/>
      {/* <CustomLoader/> */}
      <Suspense>
        <ThreeCanvas/>
      </Suspense>
      <Loader />
    </div>
  );
}

export default App;
