import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="inner-one">
          <div className="content" id="content-1">
            <img src={logo} className="logo" />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="content"></div>
          <div className="content" id="content-3">
            <p>Our Technologies</p>
            <div className="footer-nav">
              <Link to="/" className="links">
                ReactJS
              </Link>
              <Link to="/" className="links">
                Gatsby
              </Link>
              <Link to="/" className="links">
                NextJS
              </Link>
              <Link to="/" className="links">
                NodeJS
              </Link>
              <Link to="/" className="links">
                GraphQL
              </Link>
              <Link to="/" className="links">
                Laravel
              </Link>
            </div>
          </div>
          <div className="content" id="content-4">
            <p>Our Services</p>
            <div className="footer-nav">
              <Link to="/" className="links">
                Social media Marketing
              </Link>
              <Link to="/" className="links">
                Web & Mobile App
                <br /> Development
              </Link>
              <Link to="/" className="links">
                Data & Analytics
              </Link>
              <Link to="/" className="links">
                Google Marketing solutions
              </Link>
              <Link to="/" className="links">
                Search Engine Optimization
              </Link>
            </div>
          </div>
        </div>
        <div className="inner-two">
          <div className="copyright-div">
            <Link to="/" className="links">
              Privacy Policy
            </Link>
            <p>|</p>
            <Link to="/gallery" className="links">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
