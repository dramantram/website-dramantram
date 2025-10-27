// src/components/PortfolioItem.jsx

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/PortfolioSection.css";

const PortfolioItem = ({ imageSrc }) => {
  return (
    <div className="portfolio-item">
      <img src={imageSrc} alt="Portfolio" className="portfolio-img" />
      <div className="overlay">
        <Link to="/case-study" className="case-link">
          Case Study <span>›</span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
