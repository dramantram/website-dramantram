// src/components/PortfolioSection.jsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
      <Container fluid className="px-5">
        <Row className="g-4 align-items-start">
          {/* LEFT COLUMN */}
          <Col md={3} className="left-col">
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
          </Col>

          {/* RIGHT COLUMN Upper ROW*/}
          <Col md={8}>
            <Row className="g-4">
              {portfolioItemsRow1.map((item) => (
                <Col key={item.id} xs={12} sm={6} lg={4}>
                  <Link to={`/case-study/${item.slug}`}>
                    <PortfolioItem imageSrc={item.imageSrc} />
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>

          {/* RIGHT COLUMN LOWER ROW*/}
          <Col md={11} className="ms-auto right-lower">
            <Row className="g-4">
              {portfolioItemsRow2.map((item) => (
                <Col
                  key={item.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="item-row-2"
                >
                  <Link to="/case-study">
                    <PortfolioItem imageSrc={item.imageSrc} />
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioSection;
