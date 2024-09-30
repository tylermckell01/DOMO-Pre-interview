import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import ContactSales from "./components/ContactSales";
import WatchDemo from "./components/WatchDemo";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import Resources from "./components/Resources";
import Solutions from "./components/Solutions";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Product from "./components/Product";
import TryFree from "./components/TryFree";
import SignIn from "./components/SignIn";
// import "./styles/App.scss";
import "./styles/Main.scss";

import domoLogo from "../src/pictures/Domo-Logo.png";

function App() {
  return (
    <Router>
      <div className="header">
        <div className="left-section">
          <Link to="/">
            <img src={domoLogo} alt="domo logo" />
          </Link>
          <Link to="/product">Product</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="right-section">
          <div className="top">
            <Link to="/search-page" className="magnify">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </Link>
            <Link to="/sign-in">
              <FontAwesomeIcon icon={faUser} className="icon" />
              Sign-in
            </Link>
            <Link to="/contact-sales">
              <FontAwesomeIcon icon={faMessage} className="icon" />
              Contact Sales
            </Link>
          </div>
          <div className="bottom">
            <Link to="/watch-demo">Watch Demo</Link>
            <Link to="/try-free">Try Free</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/watch-demo" element={<WatchDemo />} />
        <Route path="/try-free" element={<TryFree />} />
      </Routes>
    </Router>
  );
}

export default App;
