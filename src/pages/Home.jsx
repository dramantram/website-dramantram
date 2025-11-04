// src/pages/Home.jsx

import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Home.css"; // Your existing CSS
import "../styles/Animations.css"; // <-- Import the animation CSS
// import AnimatedLogo from "../assets/animatedElement.svg"; // <-- Import your SVG as a component
import HomePetalsSVG from "../components/HomePetalsSVG";
import { Link } from "react-router-dom";
import PortfolioSection from "../components/PortfolioSection";
import ClientsSection from "../components/Clients";

const packImg = "packaging.png";

const menu = [
  "Branding",
  "Animated Videos",
  "Live Action",
  "UI/UX",
  "Event Interactions",
  "Others",
];

const testimonials = [
  {
    name: "Remya Lakshmanan",
    role: "Sr. Assistant Vice President, Invest India",
    quote:
      "Great job guys! You exceed our expectations each time. Looking forward to many more projects with the Team Dramantram.",
    image: "/remya.png",
  },
  {
    name: "Praveen Dev",
    role: "Assistant Manager, Bharti Airtel",
    quote:
      "This team has done fantastic work from start to finish, putting in tremendous effort to deliver quality content in a short time. I would definitely recommend Dramantram for their quality and commitment.",
    image: "/praveen.png",
  },
  {
    name: "Deepanshu Pathak",
    role: "Project Coordinator",
    quote:
      "Dramantram was very patient with our requirements and had a great turnaround time. The ease with which they understood the context of the videos and brought them to life was commendable.",
    image: "/deepanshu.png",
  },
];

const Home = () => {
  const activeIndex = 0; // "Branding"

  return (
    <Layout>
      {/* Intro Section */}
      <section className="intro-section">
        <div className="main-content">
          <div className="left-side"></div>
          <div className="right-side">
            <p className="headText">
              Your Creative, Media & <br /> Technology Transformation Partner
            </p>
            <h1 className="heading">TRANSFORMING VISION TO VISUAL!</h1>
            <Link className="btn-connect">Let's Connect</Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio px-5">
        <PortfolioSection />
      </section>

      {/* Clients Section */}
      <section className="clients px-5">
        <ClientsSection />
      </section>

      {/* Specialization Section */}
      <section className="specialization-sec">
        {/* UPPER Section */}
        <section className="svc-band px-5">
          <div className="svc-inner">
            {/* LEFT: Big heading */}
            <h2 className="svc-title">SERVICES WE SPECIALIZE IN</h2>

            {/* RIGHT: Copy + metrics */}
            <div className="svc-right">
              <p className="svc-copy">
                We are humbled by the trust shown to us by our client partners{" "}
                <br />
                which helped us achieve more than
              </p>
            </div>
            <div className="svc-metrics">
              <div className="metric">
                <div className="num">1600+</div>
                <div className="label">Projects</div>
              </div>

              <div className="metric">
                <div className="num">100+</div>
                <div className="label">Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* LOWER Section */}
        <section className="cap-wrap px-5">
          {/* hairline top + vertical grid lines */}
          <div className="cap-grid">
            {/* LEFT: Visual */}
            <div className="cap-col cap-left">
              <img src={packImg} alt="Branding showcase" className="cap-hero" />
            </div>

            {/* MIDDLE: Menu */}
            <div className="cap-col cap-mid">
              <nav className="cap-menu" aria-label="Service categories">
                {menu.map((item, i) => (
                  <button
                    key={item}
                    className={`cap-menu-item ${
                      i === activeIndex ? "is-active" : ""
                    }`}
                    type="button"
                  >
                    <span>{item}</span>
                    {i === activeIndex && (
                      <i className="cap-underline" aria-hidden />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* RIGHT: Copy + bullets + CTA */}
            <div className="cap-col cap-right">
              <div className="cap-copy">
                <h3>
                  <span className="cap-strong">
                    With great design language comes
                    <br /> great Brand Recall.
                  </span>
                </h3>

                <ul className="cap-bullets">
                  <li>Brand Identity &amp; Design</li>
                  <li>Creating Logo</li>
                  <li>Branding Strategy</li>
                  <li>Defining Brand Style Guide</li>
                  <li>Social Media Branding</li>
                  <li>Re-Branding</li>
                  <li>Stationery Design</li>
                  <li>Catalogues &amp; Brochure Design</li>
                  <li>Packaging Design</li>
                </ul>
              </div>

              <a href="/services/branding" className="cap-cta">
                <span className="cap-cta-accent" />
                <span className="explore-btn">Explore More</span>
                <span className="cap-chev">›</span>
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Agency Intro */}
      <section className="ai-wrap">
        <div className="ai-grid">
          {/* LEFT: Word stack */}
          <div className="ai-col ai-left">
            <p className="ai-kicker fw-semibold">Dramantram is</p>
            <ul className="ai-stack">
              <li>BOLD</li>
              <li>LOCALLY GLOBAL</li>
              <li>ESSENTIALISM</li>
              <li>STORYTELLING</li>
              <li>UNDP ALIGNED</li>
            </ul>
          </div>

          {/* MIDDLE: Heading + copy + CTA */}
          <div className="ai-col ai-mid">
            <h2 className="ai-head">
              A locally set up <br />
              global creative {""}
              <br />
              agency
            </h2>

            <p className="ai-copy">
              You know us as a creative agency that works towards skyrocketing
              the client’s business.
            </p>

            <p className="ai-copy small">
              Our secret is not our services but our approach towards them.{" "}
              <strong>Oops! Did we just disclose our secret?</strong>
            </p>

            <a className="ai-cta" href="/about">
              <span className="ai-cta-accent" />
              <span>Explore More</span>
              <span className="ai-chev">›</span>
            </a>
          </div>

          {/* RIGHT: Metrics */}
          <div className="ai-col ai-right">
            <div className="ai-metric">
              <div className="num">70+</div>
              <div className="lbl">Identity Design</div>
            </div>

            <div className="ai-metric">
              <div className="num">200+</div>
              <div className="lbl">UI/UX Design</div>
            </div>

            <div className="ai-metric">
              <div className="num">
                98K+ <span className="unit">sec</span>
              </div>
              <div className="lbl">of Animated Video Creation</div>
            </div>

            <div className="ai-metric">
              <div className="num">
                800+ <span className="unit">min</span>
              </div>
              <div className="lbl">of Live Video Production</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section px-5">
        <div className="container-fluid">
          <div className="row g-0">
            {/* Left Section */}
            <div className="col-lg-3 col-md-6 col-12 left-section">
              <div className="content-wrapper">
                <h1 className="main-heading">
                  THE CENTRE
                  <br />
                  OF OUR
                  <br />
                  UNIVERSE
                </h1>
                <p className="subtitle">
                  More than who we are, what our client
                  <br />
                  partner says, defines us!
                </p>
                <p className="description">
                  See how businesses like yours found
                  <br />
                  solutions with Dramanrtam
                </p>
                <div className="quote-marks">
                  <img src="/Quote Symbol.png" alt="quotes" />
                </div>
              </div>
            </div>

            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-12 testimonial-card"
              >
                <div className="card-content">
                  <h2 className="card-name fw-semibold">{testimonial.name}</h2>
                  <p className="card-role">{testimonial.role}</p>
                  <p className="card-title">{testimonial.title}</p>
                  <div className="card-image-wrapper">
                    <div className="card-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                  </div>
                  <p className="card-quote">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
