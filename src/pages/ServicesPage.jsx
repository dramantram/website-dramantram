import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/ServicesPage.css";
import Process from "../components/Process";
import PortfolioSection from "../components/PortfolioSection";
import ComesWith from "../components/ComesWith";

const ServicesPage = () => {
  const clients = [
    { alt: "Deloitte", src: "/logos/clients/deloitte.png" },
    { alt: "EY", src: "/logos/clients/Ey.png" },
    { alt: "PwC", src: "/logos/clients/PWC.png" },
    { alt: "United Nations", src: "/logos/clients/United Nations.png" },
    { alt: "Amazon", src: "/logos/clients/Amazon Logo.png" },
    { alt: "Walmart", src: "/logos/clients/Walmart.png" },
    { alt: "NPCI", src: "/logos/clients/npci.png" },
    { alt: "Razorpay", src: "/logos/clients/razorpay.png" },
    { alt: "boAt", src: "/logos/clients/boat.png" },
    { alt: "HCL", src: "/logos/clients/hcl.png" },
  ];

  return (
    <Layout>
      <section className="brand-wrap container-fluid service-intro">
        {/* TOP SECTION */}
        <section className="row gx-0 brand-grid align-items-center mb-5">
          {/* LEFT VISUAL */}
          <div className="col-lg-6 px-4 px-lg-5 brand-col d-flex flex-column align-items-start">
            <div className="mask-card w-100 mb-4">
              <img src="/dramantram.png" alt="Dramantram" />
            </div>
          </div>

          {/* RIGHT COPY */}
          <div className="col-lg-6 px-4 px-lg-5 brand-col mid-copy d-flex flex-column justify-content-center">
            <small className="pill mb-2">Branding</small>
            <h2 className="hero mb-4">
              WITH GREAT DESIGN LANGUAGE
              <br />
              COMES GREAT BRAND RECALL
            </h2>
            <p className="lede mb-4">
              Branding is the right choice of visuals along with the
              differentiator… <strong>you, the X factor.</strong>
            </p>
            <a className="connect-link" href="#contact">
              Let’s Connect <i>›</i>
            </a>
          </div>
        </section>

        {/* SERVICES + LOGOS ROW */}
        <section className="row gx-0 align-items-start lower-section">
          {/* LEFT SERVICE LISTS */}
          <div className="col-lg-6 px-4 px-lg-5">
            <div className="row row-cols-1 row-cols-md-2 g-4 service-lists">
              <div className="col">
                <ul className="service-list">
                  <li>Brand Identity &amp; Design</li>
                  <li>Creating Logo</li>
                  <li>Branding Strategy</li>
                  <li>Defining Brand Style Guide</li>
                  <li>Social Media Branding</li>
                </ul>
              </div>
              <div className="col">
                <ul className="service-list">
                  <li>Re-Branding</li>
                  <li>Stationery Design</li>
                  <li>Catalogues &amp; Brochure Design</li>
                  <li>Packaging Design</li>
                </ul>
                <button className=" btn-cta connect-btn">
                  Let’s Connect <span>›</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT LOGOS */}
          <div className="col-lg-6 px-4 px-lg-5">
            <p className="logos-title mb-4">
              Proud to work with the biggest brands in India &amp; Abroad
            </p>
            <div className="logos-grid">
              {clients.map((client) => (
                <div key={client.alt} className="logo-item">
                  <img src={client.src} alt={client.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <Process />
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <PortfolioSection />
      </section>

      {/* Comes With Section */}
      <ComesWith />
    </Layout>
  );
};

export default ServicesPage;
