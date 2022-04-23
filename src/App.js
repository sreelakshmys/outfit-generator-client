import { Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./components/pages/Home";
import CreateOutfit from "./components/pages/CreateOutfit";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import OutfitForWomen from "./components/pages/OutfitForWomen";
import OutfitForMen from "./components/pages/OutfitForMen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surpriseme" element={<CreateOutfit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/surpriseme/women" element={<OutfitForWomen />} />
        <Route path="/surpriseme/men" element={<OutfitForMen />} />
      </Routes>
    </div>
  );
}

export default App;
