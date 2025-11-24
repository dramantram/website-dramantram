import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/CaseStudyPage.css";
import Layout from "../components/Layout/Layout";

// Helper component for meta fields
const MetaRow = ({ label, value }) => (
  <div className="d-flex flex-column mb-2">
    <span className="cs-meta-label">{label}</span>
    <span className="cs-meta-value">{value || "—"}</span>
  </div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const [cs, setCs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // API URL
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch Data
  const getCaseStudy = async () => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/api/v1/management/get-case-study/${slug}`
      );
      if (data?.success) {
        setCs(data.caseStudy);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCaseStudy();
  }, [slug]);

  // Loading State
  if (loading) {
    return (
      <Layout>
        <section
          className="container py-5 text-white"
          style={{ minHeight: "80vh" }}
        >
          <h1>Loading Case Study...</h1>
        </section>
      </Layout>
    );
  }

  // Error State
  if (error || !cs) {
    return (
      <Layout>
        <section
          className="container py-5 text-white"
          style={{ minHeight: "80vh" }}
        >
          <h1>Case study not found</h1>
          <p className="text-muted">Check the URL or go back to the list.</p>
          <Link to="/" className="text-danger">
            ← Back home
          </Link>
        </section>
      </Layout>
    );
  }

  // --- IMAGE URL CONSTRUCTION ---
  const thumbnailSrc = `${apiUrl}/api/v1/management/get-thumbnail-image/${cs._id}`;
  const heroImageSrc = `${apiUrl}/api/v1/management/get-image-1/${cs._id}`;
  const galleryImageSrc = `${apiUrl}/api/v1/management/get-image-2/${cs._id}`;

  return (
    <Layout>
      <section className="case-study-wrap">
        {/* GRID LINES BACKDROP */}
        <div className="cs-grid-lines" />

        <div className="container-fluid cs-container">
          {/* HEADER: 3 columns */}
          <div className="row g-0 cs-header">
            {/* Col 1: Title + Thumbnail Card */}
            <div className="col-12 col-md-3 cs-col cs-col-left">
              <div className="cs-pad">
                {/* Main Heading */}
                <h1 className="cs-title">{cs.case_study_name}</h1>

                <figure className="cs-card-figure">
                  <img
                    src={thumbnailSrc}
                    className="img-fluid cs-card"
                    alt={cs.case_study_name}
                    onError={(e) => {
                      e.target.style.display = "none"; // Hide if broken
                    }}
                  />
                  {/* Thumbnail Text Overlay */}
                  {cs.thumbnail_text && (
                    <figcaption className="cs-card-overlay">
                      {cs.thumbnail_text}
                    </figcaption>
                  )}
                </figure>
              </div>
            </div>

            {/* Col 2: Meta list */}
            <div className="col-12 col-md-3 cs-col">
              <div className="cs-pad">
                <MetaRow label="Client" value={cs.client} />
                <MetaRow label="Services" value={cs.services} />
                <MetaRow label="Complexity" value={cs.complexity} />
                <MetaRow label="Industry" value={cs.industry} />
                <MetaRow label="Duration" value={cs.duration} />
              </div>
            </div>

            {/* Col 3: Problem statement */}
            <div className="col-12 col-md-6 cs-col cs-col-right">
              <div className="cs-pad">
                <h2 className="cs-h2">
                  {cs.case_study_description ||
                    "Bringing your brand vision to life."}
                </h2>
                <p className="cs-pill-muted">Case Study</p>

                <div className="cs-body">
                  {/* Safely split problem text by newlines */}
                  {cs.problem?.split("\n").map((line, i) => (
                    <p key={i} style={{ marginTop: "10px", marginBottom: "0" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE (Image 1) + SOLUTION SIDE BY SIDE */}
          <div className="row g-0 cs-hero-solution-row">
            <div className="col-12 col-md-9 p-0">
              <div className="cs-hero-wrap">
                <img
                  src={heroImageSrc}
                  alt="Case Study Hero"
                  className="cs-hero"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Solution column (Right Side) */}
            <div className="col-12 col-md-3 cs-solution-col">
              <div className="cs-pad">
                <h3 className="cs-h3">Our Solution</h3>
                <div className="cs-body">
                  {/* Safely split solution text */}
                  {cs.solution?.split("\n").map((line, i) => (
                    <p key={i} style={{ marginTop: "10px", marginBottom: "0" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GALLERY IMAGE (Image 2) */}
          <div className="row g-0 cs-gallery">
            <div className="col-md-12">
              <div className="cs-thumb-wrap">
                <img
                  src={galleryImageSrc}
                  alt="Gallery view"
                  className="img-fluid cs-thumb"
                  onError={(e) => {
                    e.target.closest(".cs-gallery").style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
