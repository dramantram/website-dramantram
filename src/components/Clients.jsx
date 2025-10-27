// src/components/ClientsSection.jsx
import React from "react";
import "../styles/Clients.css";

// Replace these with real logo imports (SVG/PNG) or URLs.
// For now, use your own imports like: import deloitte from "../assets/logos/deloitte.svg";
const consulting = [
  { alt: "Deloitte", src: "/logos/clients/deloitte.png" },
  { alt: "EY", src: "/logos/clients/Ey.png" },
  { alt: "PwC", src: "/logos/clients/PWC.png" },
];

const international = [
  { alt: "United Nations", src: "/logos/clients/United Nations.png" },
  { alt: "Amazon", src: "/logos/clients/Amazon Logo.png" },
  { alt: "Walmart", src: "/logos/clients/Walmart.png" },
];

const fintech = [
  { alt: "NPCI", src: "/logos/clients/npci.png" },
  { alt: "Pine Labs", src: "/logos/clients/pine-labs.png" },
  { alt: "Razorpay", src: "/logos/clients/razorpay.png" },
];

const corporate = [
  { alt: "boAt", src: "/logos/clients/boat.png" },
  { alt: "Maruti Suzuki", src: "/logos/clients/suzuki.png" },
  { alt: "HCL", src: "/logos/clients/hcl.png" },
];

const government = [
  { alt: "Invest India", src: "/logos/clients/invest-india.png" },
];

const csr = [
  { alt: "Sehgal Foundation", src: "/logos/clients/sehgal.png" },
  { alt: "TRI", src: "/logos/clients/tri.png" },
  { alt: "Toilet Board Coalition", src: "/logos/clients/toilet-board.png" },
];

const LogoStack = ({ items }) => (
  <div className="logo-stack">
    {items.map((it, i) => (
      <img key={i} src={it.src} alt={it.alt} className="logo" />
    ))}
  </div>
);

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-grid">
        {/* Top-left Intro */}
        <div className="tile tile-intro">
          <h2 className="intro-title">
            Our Valued
            <br />
            Client Partners
          </h2>
          <p className="intro-copy">
            With more than 80% client retention rate, we have worked with all
            kinds of organizations across geography — from Multinational to
            startup, from Govt. to NGO/NPOs, and more.
          </p>
        </div>

        {/* Top row categories */}
        <div className="tile">
          <div className="tile-label">Consulting</div>
          <LogoStack items={consulting} />
        </div>

        <div className="tile">
          <div className="tile-label">International</div>
          <LogoStack items={international} />
        </div>

        <div className="tile">
          <div className="tile-label">Fintech</div>
          <LogoStack items={fintech} />
        </div>

        {/* Bottom row categories */}
        <div className="tile">
          <div className="tile-label">Corporate</div>
          <LogoStack items={corporate} />
        </div>

        <div className="tile">
          <div className="tile-label">Government</div>
          <LogoStack items={government} />
        </div>

        <div className="tile">
          <div className="tile-label">CSR</div>
          <LogoStack items={csr} />
        </div>

        {/* CTA gradient tile */}
        <div className="tile tile-cta">
          <div className="cta-accent" />
          <div className="cta-inner">
            <h3 className="cta-head">
              Check out the
              <br />
              full client list
            </h3>
            <a href="/clients" className="cta-link">
              <span>Complete List</span>
              <span className="chev">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
