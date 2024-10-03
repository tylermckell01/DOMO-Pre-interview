import React, { useState } from "react";
import { Link } from "react-router-dom";

import domoLogo from "../pictures/Domo-Logo.png";
import heroPicture from "../pictures/product-feature-mulitply-your-impact-data-experiences-customers-2x.webp";
import uniLever from "../pictures/unilever logo.webp";
import BBVA from "../pictures/bbva logo.webp";
import CAE from "../pictures/CAE logo.png";
import NBA from "../pictures/nba logo.png";
import taylorMade from "../pictures/TaylorMade logo.png";
import emerson from "../pictures/emerson logo.png";

import Overview from "./carouselComponents/Overview";
import AppCreation from "./carouselComponents/AppCreation";
import BiAndAnalytics from "./carouselComponents/BiAndAnalytics";
import DataFoundation from "./carouselComponents/DataFoundation";

const HomePage = () => {
  const [componentToggle, setComponentToggle] = useState("");

  const renderBlueLine = () => {
    return { borderBottom: "solid 3px", borderBottomColor: "#99ccee" };
  };

  const xpComponent = () => {
    if (componentToggle === "overview") {
      return (
        <div>
          <Overview />
        </div>
      );
    } else if (componentToggle === "app-creation") {
      return (
        <div>
          <AppCreation />
        </div>
      );
    } else if (componentToggle === "bi-analytics") {
      return (
        <div>
          <BiAndAnalytics />
        </div>
      );
    } else if (componentToggle === "data-foundation") {
      return (
        <div>
          <DataFoundation />
        </div>
      );
    }
  };

  return (
    <div className="home-page">
      <div className="sub-header">
        <Link>
          Attend a Connections Tour Near You | Explore Locations {">"}
        </Link>
      </div>
      <div className="hero-section">
        <div className="hero-wording">
          <div className="title">
            Put AI-powered data to work and help everyone multiply their impact.
          </div>
          <div className="text">
            Move from basic charts and graphs to data experiences that fuel
            "Aha!" insights and action in the moments that matter.
          </div>
          <div className="buttons">
            <button className="button try-free">TRY FREE</button>
            <button className="button watch-demo">WATCH DEMO</button>
          </div>
        </div>
        <div className="hero-picture">
          <img src={heroPicture} alt="hero" />
        </div>
      </div>
      <div className="data-section">
        <div className="data-card">
          <div>
            <div className="title">Apps and Automation</div>
            <div className="text">
              Build role-specific solutions for your business that drive smarter
              decisions and automate processes.
            </div>
          </div>
          <div className="link">Discover Apps</div>
        </div>
        <div className="data-card">
          <div>
            <div className="title">Bi and Analytics</div>
            <div className="text">
              Use intuitive dashboards, reporting, and AI-generated insights to
              see what’s going on in your business and make the next right move.
            </div>
          </div>
          <div className="link">See BI and Analytics</div>
        </div>
        <div className="data-card">
          <div>
            <div className="title">Data Foundation</div>
            <div className="text">
              Build data experiences on a secure, flexible foundation that can
              integrate real-time data from anywhere.
            </div>
          </div>
          <div className="link">Explore Foundation</div>
        </div>
        <div className="data-card">
          <div>
            <div className="title">Domo.AI</div>
            <div className="text">
              From data prep to analysis to automation, stay connected with
              AI-powered chat and guidance within your flow of work.
            </div>
          </div>
          <div className="link">Explore Domo.AI</div>
        </div>
      </div>
      <div className="trusted-by">
        <div className="title">TRUSTED BY</div>
        <div className="logos">
          <div className="logo">
            <img src={uniLever} alt="unilever" />
          </div>
          <div className="logo">
            <img src={BBVA} alt="BBVA" />
          </div>
          <div className="logo">
            <img src={CAE} alt="CAE" />
          </div>
          <div className="logo">
            <img src={NBA} alt="NBA" />
          </div>
          <div className="logo">
            <img src={taylorMade} alt="TaylorMade" />
          </div>
          <div className="logo">
            <img src={emerson} alt="Emerson" />
          </div>
        </div>
      </div>
      <div className="xp-platform">
        <div className="title">Domo Data Experience Platform</div>
        <div className="xp-sections">
          <div
            className="xp-section"
            onClick={() => {
              setComponentToggle("overview");
            }}
          >
            <div
              className="section-title"
              style={componentToggle === "overview" ? renderBlueLine() : {}}
            >
              Overview
            </div>
          </div>
          <div
            className="xp-section"
            onClick={() => {
              setComponentToggle("app-creation");
            }}
          >
            <div
              className="section-title"
              style={componentToggle === "app-creation" ? renderBlueLine() : {}}
            >
              App Creation
            </div>
          </div>
          <div
            className="xp-section"
            onClick={() => {
              setComponentToggle("bi-analytics");
            }}
          >
            <div
              className="section-title"
              style={componentToggle === "bi-analytics" ? renderBlueLine() : {}}
            >
              BI and Analytics
            </div>
          </div>
          <div
            className="xp-section"
            onClick={() => {
              setComponentToggle("data-foundation");
            }}
          >
            <div
              className="section-title"
              style={
                componentToggle === "data-foundation" ? renderBlueLine() : {}
              }
            >
              Data Foundation
            </div>
          </div>
        </div>
        <div className="xp-component second-row">{xpComponent()}</div>
      </div>
      <div className="client-testimonal-card">
        <div className="text">
          <div className="quote"> "domo allows us....</div>
          <div className="client"></div>
          <div className="client-credentials"></div>
        </div>
        <div className="client-picture">picture</div>
      </div>
      <div className="multipliers">
        <div className="title">Create a Company of Multipliers</div>
        <div className="text">Fresh data and provocative...</div>
      </div>
      <div className="empower">
        <div className="wording">
          <div>
            <div className="title">Empower All your Teams</div>
            <div className="text">Our unique user-centric...</div>
          </div>
          <div>
            <div className="title">let data drive your business</div>
            <div className="text">domo helps you foster...</div>
            <div className="link">Explore DOMO for yourself</div>
          </div>
        </div>
        <div className="picture"></div>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div className="title">Unilever</div>
          <div className="quote">We've seen the game-changing impact....</div>
          <div className="head-shot">
            <img src="" alt="head shot" />
          </div>
          <div className="name">Alessandro Ventura</div>
          <div className="title">Chief Information Officaer, Unilever</div>
        </div>
        <div className="testimonial-selector">selector component</div>
      </div>
      <div className="roi">
        <div className="title">ROI that turns into leads</div>
        <div className="text">Analysts agree that ....</div>
        <div className="text-reference">
          According to
          <h2>Forrester</h2>
        </div>
        <div className="roi-for">
          <div className="roi-section">
            <div className="title">ROI for small and medium businesses</div>
            <div className="info-cards">
              <div className="card">
                <div className="title">345%</div>
                <div className="text">ROI over 3 years</div>
              </div>
              <div className="card">
                <div className="title">Over $1M</div>
                <div className="text">In Increased Revenue</div>
              </div>
              <div className="card">
                <div className="title"> {"<6 month"}</div>
                <div className="text">Payback Period</div>
              </div>
            </div>
            <div className="link">Read the Report</div>
          </div>
          <div className="roi-section">
            <div className="title">ROI for apps</div>
            <div className="info-cards">
              <div className="card">
                <div className="title">455%%</div>
                <div className="text">ROI over 3 years</div>
              </div>
              <div className="card">
                <div className="title">$16M</div>
                <div className="text">Benefits Present Value</div>
              </div>
              <div className="card">
                <div className="title">$13.2M</div>
                <div className="text">net present value</div>
              </div>
            </div>
            <div className="link">Read the Report</div>
          </div>
          <div className="reference">
            Forrester Study: The Total Economic Impact™ of Domo For Small and
            Medium Businesses, March 2021 The Total Economic Impact™ of Domo,
            March 2022
          </div>
        </div>
      </div>
      <div className="recognized">
        <div className="title"></div>
        <div className="recognition-cards">
          <div className="recognition-card"></div>
          <div className="recognition-card"></div>
          <div className="recognition-card"></div>
          <div className="recognition-card"></div>
        </div>
      </div>
      <div className="why-love-domo">
        <div>
          background image
          <div className="title"></div>
          <div className="picture"></div>
        </div>
        <div className="link">view all accolades</div>
      </div>
      <div className="explore">
        <div className="explore-card">
          background image
          <div className="text">Go from data meh...</div>
          <div className="link-container">
            <div className="link">explore by industry</div>
            <div className="link">explore by department</div>
          </div>
        </div>
        <div className="explore-card">
          background image
          <div className="text">Connect, share, and learn...</div>
          <div className="link-container">
            <div className="link">join the community</div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <img src={domoLogo} alt="domo logo" />
        <div className="links-container">
          <div className="links-section">
            <div className="title">Product</div>
            <div className="links">
              <div className="link">OverView</div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
            </div>
          </div>
          <div className="links-section">
            <div className="title">Solutions</div>
            <div className="links">
              <div className="link">DOMO for enterprise</div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
            </div>
          </div>
          <div className="links-section">
            <div className="title">Resources</div>
            <div className="links">
              <div className="link">Try Free</div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
            </div>
          </div>
          <div className="links-section">
            <div className="title">DOMO Central</div>
            <div className="links">
              <div className="link">DOMO Central OverView</div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
            </div>
          </div>
          <div className="links-section">
            <div className="title">Company</div>
            <div className="links">
              <div className="link">OverView</div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
              <div className="link"></div>
            </div>
          </div>
        </div>
        <div className="language-selector">
          <input type="drop-down" defaultValue="English" />
        </div>
      </div>
      <div className="footer">
        <div className="social-links">
          <div className="link">FB</div>
          <div className="link">X</div>
          <div className="link">LinkedIn</div>
          <div className="link">IG</div>
        </div>
        <div>
          <div className="copyright"></div>
          <div className="copyright-links">
            <div className="link">Domo Cookies</div>
            <div className="link">Privacy Notice</div>
            <div className="link">Data Privacy Framework</div>
            <div className="link">Patents</div>
            <div className="link">
              CA do not sell or share my personal information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
