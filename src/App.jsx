import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/case-study/:slug" element={<CaseStudy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
