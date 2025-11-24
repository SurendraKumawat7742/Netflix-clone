

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";   // add CSS file

function Header() {
  return (
    <div className="header-wrapper">

      {/* Background */}
      <div className="header-bg"></div>
      <div className="header-overlay"></div>

      {/* CONTENT (not blurred) */}
      <div className="header-content">

        {/* NAVBAR */}
        <div className="container p-5 mb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-danger m-0">NETFLIX</h1>

            <div className="d-flex align-items-center gap-3">
              <select className="form-select w-auto bg-dark text-white border-light">
                <option value="EN">English</option>
                <option value="HI">Hindi</option>
              </select>

              <button
                className="btn"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="text-white text-center middle-section">
          <h1 className="fw-bold" style={{ fontSize: "60px" }}>
            Unlimited movies,<br /> shows and more
          </h1>
          <h3 className="mt-4">Starts at ₹149. Cancel at any time.</h3>
          <p className="mt-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="d-flex gap-2 justify-content-center mt-4">
            <input
              className="form-control w-auto"
              type="text"
              placeholder="Email address"
            />
            <button className="btn" style={{ backgroundColor: "red" }}>
              Get Started
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
