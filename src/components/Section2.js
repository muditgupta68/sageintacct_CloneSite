import React from "react";
import "../style/section2.css";
import Plate from "./Plate";
function Section2() {
  return (
    <div className="wrapper_div">
      <h2>
        Solutions for your <strong>industry’s specific needs</strong>
      </h2>
      <div className="industryBox">
        <div className="ind_menu">
          <div>For Any Industry</div>
          <div>Construction and Real Estate</div>
          <div>Financial Services</div>
          <div>Healthcare</div>
          <div>Hospitality</div>
          <div>Nonprofits</div>
          <div>Professional Services</div>
          <div>Subscription and SaaS</div>
        </div>
        <div className="ind_data">
          <Plate
            head="Construction and Real Estate"
            para="Sage Intact Construction is a native cloud solution that enables proactive job cost management with critical financial and operational metrics that drive increased efficiency, reduced audit time, and improved... "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-construction-real-estate.png?itok=ph2pgKZt"
            link="Construction and Real Estate industry"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
