import React, { use, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/caseStudies.json";
import "../styles/CaseStudyPage.css";
import Layout from "../components/Layout/Layout";

const metaRow = (label, value) => (
  <div className="d-flex flex-column mb-2">
    <span className="cs-meta-label">{label}</span>
    <span className="cs-meta-value">{value || "—"}</span>
  </div>
);

// Collect any keys like "image-1", "image-2", ... into an ordered array
const collectImages = (cs) =>
  Object.keys(cs)
    .filter((k) => k.startsWith("image-"))
    .sort((a, b) => {
      const ai = parseInt(a.split("-")[1], 10);
      const bi = parseInt(b.split("-")[1], 10);
      return ai - bi;
    })
    .map((k) => cs[k])
    .filter(Boolean);

const CaseStudy = () => {
  const { slug } = useParams();
  const cs = useMemo(
    () => data.caseStudies.find((x) => x.slug === slug),
    [slug]
  );

  if (!cs) {
    return (
      <section className="container py-5">
        <h1>Case study not found</h1>
        <p className="text-muted">Check the URL or go back to the list.</p>
        <Link to="/">← Back home</Link>
      </section>
    );
  }

  const images = collectImages(cs);

  useEffect(() => {
    console.log(cs);
  }, []);

  return (
    <Layout>
      <section className="case-study-wrap">
        {/* GRID LINES BACKDROP */}
        <div className="cs-grid-lines" />

        {/* Top strip (arrows / breadcrumb optional) */}
        <div className="container-fluid cs-container">
          {/* <div className="row g-0 cs-topbar align-items-center">
            <div className="col-6 col-md-9 text-end">
              <span className="cs-pill-muted">Case Study</span>
            </div>
          </div> */}

          {/* HEADER: 3 columns */}
          <div className="row g-0 cs-header">
            {/* Col 1: Title + card image */}
            <div className="col-12 col-md-3 cs-col cs-col-left">
              <div className="cs-pad">
                <h1 className="cs-title">{cs.vision_statement}</h1>
                {cs["card_image"] && (
                  <figure className="cs-card-figure">
                    <img
                      src={cs["card_image"]}
                      className="img-fluid cs-card"
                      alt={cs.title}
                    />
                    {cs["card_text"] && (
                      <figcaption className="cs-card-overlay">
                        {cs["card_text"]}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            </div>

            {/* Col 2: Meta list */}
            <div className="col-12 col-md-3 cs-col">
              <div className="cs-pad">
                {metaRow("Client", cs.client)}
                {metaRow("Services", cs.services)}
                {metaRow("Complexity", cs.complexity)}
                {metaRow("Industry", cs.industry)}
                {metaRow("Duration", cs.duration)}
              </div>
            </div>

            {/* Col 3: Problem statement */}
            <div className="col-12 col-md-6 cs-col cs-col-right">
              <div className="cs-pad">
                <h2 className="cs-h2">
                  Bringing your brand vision to life <br /> through captivating
                  video content.
                </h2>
                <p className="cs-pill-muted">Case Study</p>
                <p className="cs-body">
                  {cs["problem"].split("\n").map((line, i) => (
                    <>
                      <div key={i} style={{ marginTop: "15px" }}>
                        {line}
                        <br />
                      </div>
                    </>
                  ))}
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE + SOLUTION SIDE BY SIDE */}
          {images[0] && (
            <div className="row g-0 cs-hero-solution-row">
              <div className="col-12 col-md-9 p-0">
                <div className="cs-hero-wrap">
                  <img src={images[0]} alt="Case main" className="cs-hero" />
                </div>
              </div>

              {/* Solution column (3/12 width) */}
              <div className="col-12 col-md-3 cs-solution-col">
                <div className="cs-pad">
                  <h3 className="cs-h3">Our Solution</h3>
                  <p className="cs-body">
                    {cs.solution.split("\n").map((line, i) => (
                      <>
                        <div key={i} style={{ marginTop: "15px" }}>
                          {line}
                          <br />
                        </div>
                      </>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* THUMBNAIL GALLERY */}
          {images.length > 1 && (
            <div className="row g-0 cs-gallery">
              {images.slice(1).map((src, i) => (
                <div className="col-md-12" key={i}>
                  <div className="cs-thumb-wrap">
                    <img
                      src={src}
                      alt={`page ${i + 2}`}
                      className="img-fluid cs-thumb"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
