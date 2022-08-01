import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="#portfolio" element={<Portfolio />} />
      <Route path="#skills" element={<Skills />} />
      <Route path="#contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
