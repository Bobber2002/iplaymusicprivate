import Walkthrough1 from "./components/walkthrough/Walkthrough1";
import Walkthrough2 from "./components/walkthrough/Walkthrough2";
import Walkthrough3 from "./components/walkthrough/Walkthrough3";
import Events from "./Pages/Events";
import Form from "./components/form/Form";
import Category from "./components/category/Category";
import PlayList from "./components/playlist/PlayList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/walkthrough-1" element={<Walkthrough1 />} />
        <Route path="/walkthrough-2" element={<Walkthrough2 />} />
        <Route path="/walkthrough-3" element={<Walkthrough3 />} />
        <Route path="/events" element={<Events />} />
        <Route path="/category" element={<Category />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </div>
  );
}

export default App;
