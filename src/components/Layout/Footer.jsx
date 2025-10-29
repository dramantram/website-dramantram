// src/components/Footer.jsx

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/Footer.css";
import logo from "../../assets/images/biglogo.png"; // Make sure you have a logo image

const Footer = ({ className }) => {
  return (
    <footer className={`footer-section text-white py-5`}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Have a Project in Mind? */}
          <Col md={3}>
            <div className="text-content mb-4">
              <h1 className="have-a-project-text">HAVE A PROJECT IN MIND?</h1>
              <img src={logo} alt="Mask Logo" className="footer-logo mt-4" />
            </div>
          </Col>

          {/* Middle Column: Form Inputs */}
          <Col md={3} className="form-column">
            <Form className="form-contact">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className=" name-form"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Mail ID"
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Number"
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>How Did You Get to Know About Us?</Form.Label>
                <Form.Select className="form-select">
                  <option>Select option</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message here"
                  className="form-textarea"
                />
              </Form.Group>
            </Form>
          </Col>

          <Col md={3} className="checkboxes-column">
            <h5 className="mb-3 services-head">What Services Do You Need?</h5>
            <Form.Group className="mb-4">
              {/* Each radio button and its label are in a flexbox container */}
              <div className="d-flex justify-content-between mt-5">
                <Form.Label htmlFor="branding">Branding</Form.Label>
                <Form.Check type="radio" name="services" id="branding" />
              </div>

              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="animation">Animation</Form.Label>
                <Form.Check type="radio" name="services" id="animation" />
              </div>

              {/* Repeat for other options */}
              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="live-action">Live Action</Form.Label>
                <Form.Check type="radio" name="services" id="live-action" />
              </div>

              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="ui-ux">UI/UX</Form.Label>
                <Form.Check type="radio" name="services" id="ui-ux" />
              </div>

              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="others">Others</Form.Label>
                <Form.Check type="radio" name="services" id="others" />
              </div>
            </Form.Group>
          </Col>

          <Col md={3} className="checkboxes-column">
            <h5 className="mb-3 duration-head">When Do you Need It?</h5>
            <Form.Group className="mb-4 duration-option">
              {/* Each radio button and its label are in a flexbox container */}
              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="asap">ASAP</Form.Label>
                <Form.Check type="radio" name="duration" id="asap" />
              </div>

              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="15days">Within 15 Days</Form.Label>
                <Form.Check type="radio" name="duration" id="15days" />
              </div>

              {/* Repeat for other options */}
              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="month">Within a Month</Form.Label>
                <Form.Check type="radio" name="duration" id="month" />
              </div>

              <div className="d-flex justify-content-between">
                <Form.Label htmlFor="not-sure">Not Sure</Form.Label>
                <Form.Check type="radio" name="duration" id="not-sure" />
              </div>
            </Form.Group>
            {/* Submit Button */}
            <Button variant="warning" className="w-100 submit-button">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
