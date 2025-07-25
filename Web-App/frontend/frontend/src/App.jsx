import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import Weather from "./pages/Weather";
import Tractor from "./pages/Tractor";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/tractor" element={<Tractor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
