import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import Onboarding1 from "./components/onboarding/Onboarding1";
import "./App.css";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/onboarding-1" element={<Onboarding1 />} />
      </Routes>
    </div>
  );
}

export default App;
