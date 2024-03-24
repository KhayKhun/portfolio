import FixedContents from "./components/FixedContents";
import ThreeCanvas from "./components/ThreeCanvas";
import AboutMe from "./components/AboutMe";
import CustomLoadingScreen from "./components/CustomLoadingScreen";

function App() {

  return (
    <div className="App">
      {/* Canvas */}
      <ThreeCanvas />
      
      {/* Other fixed contents */}
      <FixedContents />
      <AboutMe />

      {/* Show loading at the start */}
      <CustomLoadingScreen/>
    </div>
  );
}

export default App;
