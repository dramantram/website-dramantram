// src/components/PortfolioSection.jsx
import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import "../styles/PortfolioSection.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  // API URL helper
  const apiUrl = import.meta.env.VITE_API_URL;

  const getAllCaseStudies = async () => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/api/v1/management/get-case-studies`
      );
      if (data?.success) {
        setCaseStudies(data.caseStudies);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCaseStudies();
  }, []);

  // Split data for the layout requirements
  // Row 1 needs 3 items, Row 2 needs 4 items
  const row1Data = caseStudies.slice(0, 3);
  const row2Data = caseStudies.slice(3);

  return (
    <div className="portfolio-section">
      <div className="container-fluid">
        <div className="row g-4 align-items-start col-md-12">
          {/* LEFT COLUMN (static text) */}
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

          {/* RIGHT COLUMN - UPPER ROW (First 3 items) */}
          <div className="col-md-9 right-col">
            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
              {loading ? (
                <p className="text-white">Loading...</p>
              ) : (
                row1Data.map((item) => (
                  <div key={item._id} className="col">
                    <Link to={`/case-study/${item.slug}`}>
                      <PortfolioItem
                        // Pass the dynamic API Image URL
                        imageSrc={`${apiUrl}/api/v1/management/get-thumbnail-image/${item._id}`}
                        // Pass title if your PortfolioItem component supports it
                        title={item.case_study_name}
                        slug={item.slug}
                      />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW (Next 4 items) - Spanning full width */}
        <div className="row g-4 mt-1 right-lower col-md-12 row-cols-md-4">
          {!loading &&
            row2Data.map((item) => (
              <div key={item._id} className="col">
                <Link to={`/case-study/${item.slug}`}>
                  <PortfolioItem
                    imageSrc={`${apiUrl}/api/v1/management/get-thumbnail-image/${item._id}`}
                    title={item.case_study_name}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
