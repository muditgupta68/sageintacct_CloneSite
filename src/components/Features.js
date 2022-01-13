import React, { useState } from "react";
import "../style/feature.css";
import Item from "./Item";
function Features() {
  // const data = document.getElementsByClassName("item");
  // console.log(data);
  const [p1Act, setP1] = useState(true);
  const [p2Act, setP2] = useState(false);
  const [p3Act, setP3] = useState(false);
  const [p4Act, setP4] = useState(false);

  const func1 = () => {
    setP1(false);
    setP2(false);
    setP3(false);
    setP4(false);
    setP1(true);
  };
  const func2 = () => {
    setP1(false);
    setP2(false);
    setP3(false);
    setP4(false);
    setP2(true);
  };
  const func3 = () => {
    setP1(false);
    setP2(false);
    setP3(false);
    setP4(false);
    setP3(true);
  };
  const func4 = () => {
    setP1(false);
    setP2(false);
    setP3(false);
    setP4(false);
    setP4(true);
  };

  return (
    <div className="features">
      <h1>
        <strong>Thrive in today’s ever-changing, digital world </strong>
        with connected solutions that simply work
      </h1>
      <div className="selector">
        <img
          src="https://www.sageintacct.com/sites/default/files/intelligent-organization.svg"
          alt="leftImg"
        />
        <div className="option_selector">
          <Item
            id={1}
            head="Financial"
            desc="Free up more time to think strategically and guide your organization"
            p1="Slice and dice your data with real-time, multi-dimensional reporting"
            p2="Consolidate all your entities in minutes, no more spreadsheets"
            p3="Automate mundane accounting tasks to increase your efficiency up to 90%"
            p4="Free your teams to focus on higher value work with AI-powered solutions"
            value={p1Act}
            func={func1}
          />
          <Item
            id={2}
            head="Planning"
            desc="Enable your organization to budget, plan, and quickly adapt to ever-changing conditions"
            p1="Plan using live financial data via our native, bi-directional connector"
            p2="Get up and running in days on an intuitive solution, built for finance users"
            p3="Monitor performance in real-time with interactive reports and dashboards"
            p4="Reforecast your business in days with powerful what-if scenario modeling"
            value={p2Act}
            func={func2}
          />
          <Item
            id={3}
            head="Analytics"
            desc="Get instant, predictive insights to make data-driven decisions"
            p1="Plug-and-play, native analytics that use live financial and statistical data"
            p2="Choose from over 200 prebuilt visuals, edit them, or create your own"
            p3="Transform your decision-making using dimensional, predictive analytics"
            p4="Build new visuals and dashboards in minutes to explore data on the fly"
            value={p3Act}
            func={func3}
          />
          <Item
            id={4}
            head="HR & Payroll"
            desc="Empower your organization to take care of your greatest asset, your people"
            p1="Get instant visibility into your people data for your local or global workforce"
            p2="Run payroll in a few simple steps with the leading mid-market payroll solution"
            p3="Sync employee data to Sage Intacct in real-time, no duplicate data entry"
            p4="Use your dimensions to streamline posting and reporting for payroll journal entries"
            value={p4Act}
            func={func4}
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
