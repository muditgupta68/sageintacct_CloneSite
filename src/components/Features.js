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
          />
          <Item
            id={2}
            head="Planning"
            desc="Free up more time to think strategically and guide your organization"
            p1="Slice and dice your data with real-time, multi-dimensional reporting"
            p2="Consolidate all your entities in minutes, no more spreadsheets"
            p3="Automate mundane accounting tasks to increase your efficiency up to 90%"
            p4="Free your teams to focus on higher value work with AI-powered solutions"
            value={p2Act}
          />
          <Item
            id={3}
            head="Analytics"
            desc="Free up more time to think strategically and guide your organization"
            p1="Slice and dice your data with real-time, multi-dimensional reporting"
            p2="Consolidate all your entities in minutes, no more spreadsheets"
            p3="Automate mundane accounting tasks to increase your efficiency up to 90%"
            p4="Free your teams to focus on higher value work with AI-powered solutions"
            value={p3Act}
          />
          <Item
            id={4}
            head="HR & Payroll"
            desc="Free up more time to think strategically and guide your organization"
            p1="Slice and dice your data with real-time, multi-dimensional reporting"
            p2="Consolidate all your entities in minutes, no more spreadsheets"
            p3="Automate mundane accounting tasks to increase your efficiency up to 90%"
            p4="Free your teams to focus on higher value work with AI-powered solutions"
            value={p4Act}
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
