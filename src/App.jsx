import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BrandingPage from "./pages/BrandingPage.jsx";
import Contact from "./pages/Contact.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import AdminLogin from "./pages/internal/AdminLogin.jsx";
import Management from "./pages/internal/Management.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import UpdateCaseStudy from "./pages/internal/UpdateCaseStudy.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branding" element={<BrandingPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/case-study/:slug" element={<CaseStudy />}></Route>
        <Route path="/login" element={<AdminLogin />}></Route>

        <Route path="/internal" element={<PrivateRoute />}>
          <Route path="create-case-study" element={<Management />}></Route>
          <Route path="case-studies" element={<CaseStudies />}></Route>
          <Route
            path="update-case-study/:slug"
            element={<UpdateCaseStudy />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
