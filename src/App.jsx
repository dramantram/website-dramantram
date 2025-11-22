import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import AdminLogin from "./pages/internal/AdminLogin.jsx";
import Management from "./pages/internal/Management.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";

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
        <Route path="/internal/login" element={<AdminLogin />}></Route>
        <Route path="/internal/management" element={<Management />}></Route>
        <Route path="/case-studies" element={<CaseStudies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
