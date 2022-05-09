import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
