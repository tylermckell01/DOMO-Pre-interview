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
import bubbles from "../pictures/product-feature-mulitply-impact-avatar-icons-platform-2x.webp";
import forrester from "../pictures/forrester.png";
import gartner from "../pictures/recognition-cards/gartner.png";
import dresner from "../pictures/recognition-cards/dresner.png";
import gartnerPeer from "../pictures/recognition-cards/gartner-peer.png";
import nucleus from "../pictures/recognition-cards/nucleus.png";
import loveDomo1 from "../pictures/why-domo/why-love-domo1.webp";
import loveDomo2 from "../pictures/why-domo/why-love-domo2.webp";
import loveDomo3 from "../pictures/why-domo/why-love-domo3.webp";
import loveDomo4 from "../pictures/why-domo/why-love-domo4.webp";
import loveDomo5 from "../pictures/why-domo/why-love-domo5.webp";
import loveDomo6 from "../pictures/why-domo/why-love-domo6.webp";
// import loveDomo7 from "../pictures/why-domo/why-love-domo7.webp";

import Overview from "./carouselComponents/Overview";
import AppCreation from "./carouselComponents/AppCreation";
import BiAndAnalytics from "./carouselComponents/BiAndAnalytics";
import DataFoundation from "./carouselComponents/DataFoundation";
import Unilever from "./testimonialsComponents/Unilever";
import Taylormade from "./testimonialsComponents/Taylormade";
import Daltile from "./testimonialsComponents/Daltile";

const HomePage = () => {
  const [xpComponentToggle, setXpComponentToggle] = useState("overview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [<Unilever />, <Taylormade />, <Daltile />];

  const renderBlueLine = () => {
    return {
      color: "black",
      borderBottom: "solid 3px",
      borderBottomColor: "#99ccee",
    };
  };

  const renderCircleStyles = () => {
    return {
      backgroundColor: "rgb(85, 85, 85)",
      transition: "background-color 0.5s ease",
      padding: "6px 6px",
      borderRadius: "6px",
      boxShadow: "0px 1px 5px -1px rgb(0, 0, 0, 0.5)",
    };
  };

  const xpComponent = () => {
    if (xpComponentToggle === "overview") {
      return <Overview />;
    } else if (xpComponentToggle === "app-creation") {
      return <AppCreation />;
    } else if (xpComponentToggle === "bi-analytics") {
      return <BiAndAnalytics />;
    } else if (xpComponentToggle === "data-foundation") {
      return <DataFoundation />;
    }
  };

  const testimonialComponent = () => {
    return testimonials[currentIndex];
  };

  const handleBackClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleForwardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
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
              setXpComponentToggle("overview");
            }}
          >
            <div
              className="section-title"
              style={xpComponentToggle === "overview" ? renderBlueLine() : {}}
            >
              Overview
            </div>
          </div>
          <div
            className="xp-section"
            onClick={() => {
              setXpComponentToggle("app-creation");
            }}
          >
            <div
              className="section-title"
              style={
                xpComponentToggle === "app-creation" ? renderBlueLine() : {}
              }
            >
              App Creation
            </div>
          </div>
          <div
            className="xp-section"
            onClick={() => {
              setXpComponentToggle("bi-analytics");
            }}
          >
            <div
              className="section-title"
              style={
                xpComponentToggle === "bi-analytics" ? renderBlueLine() : {}
              }
            >
              BI and Analytics
            </div>
          </div>
          <div
            className="xp-section"
            onClick={() => {
              setXpComponentToggle("data-foundation");
            }}
          >
            <div
              className="section-title"
              style={
                xpComponentToggle === "data-foundation" ? renderBlueLine() : {}
              }
            >
              Data Foundation
            </div>
          </div>
        </div>
        <div className="xp-component second-row">{xpComponent()}</div>
      </div>
      <div className="multipliers">
        <div className="title">Create a company of multipliers</div>
        <div className="text">
          Fresh data and provocative insights are not just good for a select
          few. We believe everybody in your organization can use data
          experiences to multiply their impact on the business.
        </div>
      </div>
      <div className="empower">
        <div className="wording">
          <div>
            <div className="title">Empower All your Teams</div>
            <div className="text">
              Our unique user-centric approach makes the platform easy for
              anyone to use while still offering advanced capabilities that
              enable technical teams to respond quickly to business needs.
            </div>
          </div>
          <div>
            <div className="title">Let data drive your business.</div>
            <div className="text">
              Domo helps you foster a data-driven culture of curiosity that
              inspires bold questions and smart, fast, transformative action.
            </div>
            <div className="link">
              <Link>EXPLORE DOMO FOR YOUR ROLE</Link>
            </div>
          </div>
        </div>
        <div className="picture">
          <img src={bubbles} alt="" />
        </div>
      </div>
      <div className="testimonials-container">
        <div className="testimonial">{testimonialComponent()}</div>
        <div className="selector-wrapper">
          <button className="testimonial-selector" onClick={handleBackClick}>
            {"<"}
          </button>
          <div
            className="circle"
            style={currentIndex === 0 ? renderCircleStyles() : {}}
          ></div>
          <div
            className="circle"
            style={currentIndex === 1 ? renderCircleStyles() : {}}
          ></div>
          <div
            className="circle"
            style={currentIndex === 2 ? renderCircleStyles() : {}}
          ></div>
          <button className="testimonial-selector" onClick={handleForwardClick}>
            {">"}
          </button>
        </div>
      </div>
      <div className="roi">
        <div className="title">ROI that turns into leads</div>
        <div className="text">
          Analysts agree that Domo's solutions for BI and apps provide value in
          record time.
        </div>
        <div className="text-reference">ACCORDING TO</div>
        <img src={forrester} alt="" />
        <div className="roi-for">
          <div className="roi-section">
            <div className="line"></div>
            <div className="title">ROI for Small and Medium Businesses</div>
            <div className="info-cards">
              <div className="card">
                <div className="title">345%</div>
                <div className="text">ROI over 3 years</div>
              </div>
              <div className="card">
                <div className="title">Over $1M</div>
                <div className="text">in increased revenue</div>
              </div>
              <div className="card">
                <div className="title"> {"<6 month"}</div>
                <div className="text">payback period</div>
              </div>
            </div>
            <div className="link">READ THE REPORT</div>
          </div>
          <div className="roi-section">
            <div className="line"></div>
            <div className="title">ROI for Apps</div>
            <div className="info-cards">
              <div className="card">
                <div className="title">455%</div>
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
            <div className="link">READ THE REPORT</div>
            <div className="line"></div>
          </div>
          <div className="reference">
            Forrester Study: The Total Economic Impact™ of Domo For Small and
            Medium Businesses, March 2021 The Total Economic Impact™ of Domo,
            March 2022
          </div>
        </div>
      </div>
      <div className="recognized">
        <div className="title">
          Recognized by the industry's top analysts and thought leaders.
        </div>
        <div className="recognition-cards">
          <Link>
            <div className="recognition-card">
              <img src={gartner} alt="" className="gartner" />
              <div className="title">Gartner® Magic Quadrant™</div>
              <div className="text">
                Domo Named a Challenger in 2024 Gartner® Magic Quadrant™ for
                Analytics and BI Platforms
              </div>
              <div className="link">Read the Gartner Report</div>
            </div>
          </Link>
          <Link>
            <div className="recognition-card">
              <img src={dresner} alt="" className="dresner" />
              <div className="title">Dresner Adivsory Services</div>
              <div className="text">
                Domo Ranked #1 Vendor in Dresner Advisory Services' 2023
                Self-Service Business Intelligence Market Study
              </div>
              <div className="link">Read the Dresner Report</div>
            </div>
          </Link>
          <Link>
            <div className="recognition-card">
              <img src={gartnerPeer} alt="" className="gartner-peer" />
              <div className="title">Gartner® Peer Insights™</div>
              <div className="text">
                Domo Recognized as a Customer's Choice in Gartner® Peer
                Insights™ Voice of the Customer
              </div>
              <div className="link">Read the Peer Insights Report</div>
            </div>
          </Link>
          <Link>
            <div className="recognition-card">
              <img src={nucleus} alt="" className="nucleus" />
              <div className="title">Nucleus Research Report</div>
              <div className="text">
                Domo Recognized as a Leader in the 2023 Nucleus Research Report
                on Embedded Analytics
              </div>
              <div className="link">Read the Nucleus Report</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="why-love-domo">
        <div className="title">Why customers love Domo.</div>
        <div className="leader-container">
          <img src={loveDomo1} alt="" />
          <img src={loveDomo2} alt="" />
          <img src={loveDomo3} alt="" />
          <img src={loveDomo4} alt="" />
          <img src={loveDomo5} alt="" />
          <img src={loveDomo6} alt="" />
        </div>
      </div>
      <div className="accolade">
        <Link>VIEW ALL ACCOLADES</Link>
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
