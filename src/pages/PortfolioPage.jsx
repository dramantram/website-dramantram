import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/PortfolioPage.css";
import PortfolioSection from "../components/PortfolioSection";
import { Link } from "react-router-dom";
import ComesWith from "../components/ComesWith";

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="hero-portfolio">
        <div className="bg-grad" />
        <div className="container-fluid upper-container">
          {/* TOP GRID */}
          <div className="row g-0 hero-grid">
            {/* Col 1 */}
            <div className="col-12 col-md-3 panel panel--left">
              <div className="panel-inner">
                <h1 className="logo-word">PORTFOLIO</h1>
              </div>
            </div>

            {/* Col 2 */}
            <div className="col-12 col-md-3 panel">
              <div className="panel-inner">
                <h2 className="hero-title">
                  A locally set up
                  <br />
                  global creative
                  <br />
                  agency
                </h2>
              </div>
            </div>

            {/* Col 3 */}
            <div className="col-12 col-md-3 panel">
              <div className="panel-inner">
                <p className="body-copy">
                  Our secret is not our services but our
                  <br />
                  approach towards them.
                </p>
                <p className="body-strong">
                  Oops! Did we just disclose our secret?
                </p>
              </div>
            </div>

            {/* Col 4 (dark taper) */}
            <div className="col-12 col-md-3 panel panel--right">
              <div className="panel-inner">
                <Link className="btn-connect" to="/contact">
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>

          {/* FILTER ROW */}
          <div className="row g-0  p-0 filter-row">
            <div className="col-6 col-md-3">
              <button className="filter-pill">
                <span>Service</span>
                <span className="caret">ˇ</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="filter-pill">
                <span>Complexity</span>
                <span className="caret">ˇ</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="filter-pill">
                <span>Industry</span>
                <span className="caret">ˇ</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="filter-pill">
                <span>Duration</span>
                <span className="caret">ˇ</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <PortfolioSection />
      </section>

      <ComesWith />
    </Layout>
  );
};

export default PortfolioPage;
