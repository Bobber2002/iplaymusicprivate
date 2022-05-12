import Walkthrough1 from './components/walkthrough/Walkthrough1';
import Walkthrough2 from './components/walkthrough/Walkthrough2';
import Walkthrough3 from './components/walkthrough/Walkthrough3';
import './App.css';
import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/walkthrough-1" element={<Walkthrough1 />} />
        <Route path="/walkthrough-2" element={<Walkthrough2 />} />
        <Route path="/walkthrough-3" element={<Walkthrough3 />} />
      </Routes>
    </div>
  );
}

export default App;
