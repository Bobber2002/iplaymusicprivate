import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
/* import Onboarding1 from "./components/onboarding/Onboarding1";
import Onboarding2 from "./components/onboarding/Onboarding2";
import Onboarding3 from "./components/onboarding/Onboarding3"; */
import "./App.css";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<Form />} />
        {/* <Route path="/onboarding-1" element={<Onboarding1 />} />
        <Route path="/onboarding-2" element={<Onboarding2 />} />
        <Route path="/onboarding-3" element={<Onboarding3 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
