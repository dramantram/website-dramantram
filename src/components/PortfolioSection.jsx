// src/components/PortfolioSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import PortfolioItem from "./PortfolioItem";
import "../styles/PortfolioSection.css";

// Image imports
import img1 from "../assets/portfolio/doosra.png";
import img2 from "../assets/portfolio/logodesign.png";
import img3 from "../assets/portfolio/hand.png";
import img4 from "../assets/portfolio/boy.png";
import img5 from "../assets/portfolio/branding.png";
import img6 from "../assets/portfolio/girl.png";
import img7 from "../assets/portfolio/thoughts.png";

const portfolioItemsRow1 = [
  { id: 1, imageSrc: img1, slug: "doosra" },
  { id: 2, imageSrc: img2, slug: "caps-delivery" },
  { id: 3, imageSrc: img3, slug: "united-nation" },
];

const portfolioItemsRow2 = [
  { id: 4, imageSrc: img4 },
  { id: 5, imageSrc: img5 },
  { id: 6, imageSrc: img6 },
  { id: 7, imageSrc: img7 },
];

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <div className="container-fluid ">
        <div className="row g-4 align-items-start col-md-12">
          {/* LEFT COLUMN (static) */}
          <div className="col-md-3 left-col">
            <div className="intro-box">
              <h1>
                Portfolio &<br /> Case Studies
              </h1>
              <p>
                We're brand builders at heart, creators by design, tech
                enthusiasts in practice, and integrated at our core.
              </p>
              <Link to="/contact" className="connect-link">
                Let's Connect <span>›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN (both grids inside to align perfectly) */}
          <div className="col-md-9 right-col">
            {/* UPPER ROW: 1/2/3 columns at xs/sm/md+ */}
            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
              {portfolioItemsRow1.map((item) => (
                <div key={item.id} className="col">
                  <Link to={`/case-study/${item.slug}`}>
                    <PortfolioItem imageSrc={item.imageSrc} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row g-4 mt-1 right-lower col-md-12 row-cols-md-4">
          {portfolioItemsRow2.map((item) => (
            <div key={item.id} className="col">
              <Link to="/case-study">
                <PortfolioItem imageSrc={item.imageSrc} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
