import React from "react";
import "../style/banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner_item">
        <h1>The Leader in Accounting and Financial Management Software</h1>
        <p>
          Whether you’re a growing startup or an established public company,
          we’re the right partner for your long-term success.
        </p>
        <button>watch demo</button>
      </div>
      <div className="imgCard">
        <div className="banner_img">
          <img
            src="https://www.sageintacct.com/sites/default/files/accounting-financial-management-software-header.svg"
            alt="dashboard_img"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
