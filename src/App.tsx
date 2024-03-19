import { Suspense } from "react";
import NavBar from "./components/NavBar";
import ThreeCanvas from "./components/ThreeCanvas";
import { Loader } from "@react-three/drei";
import AboutMe from "./components/AboutMe";
// import CustomLoader from "./helpers/CustomLoader";

function App() {

  return (
    <div className="App">
      <NavBar />
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
