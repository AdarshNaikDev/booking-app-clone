import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import SingleHotel from "./pages/singleHotel/SingleHotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/hotels" element={<List/>} />
        <Route  path="/hotels/:id" element={<SingleHotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
