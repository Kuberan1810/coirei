
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Enterprise from "./pages/Enterprise"
import Features from "./pages/Features/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;

