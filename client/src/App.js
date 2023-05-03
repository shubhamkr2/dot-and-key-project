import { Navbar } from "./Components/Navbar";
import { NavigationBar } from "./Components/NavigationBar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div>
    <Navbar />
    <NavigationBar />
      <AllRoutes />
    </div>
  );
}

export default App;
