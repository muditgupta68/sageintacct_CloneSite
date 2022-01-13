import React, { useState } from "react";
import "../style/trusted.css";
import CustomCards from "./CustomCards";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Trusted() {
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const handleClick = () => {
    setC1(!c1);
    setC2(!c2);
  };
  return (
    <div className="wrapper_div">
      <div className="wrap_data">
        <h1 className="left">Trusted by over 15,000 customers</h1>
        <div className="customCards">
          <span>
            <ChevronLeftIcon id="leftNav" onClick={handleClick} />
            <ChevronRightIcon id="rightNav" onClick={handleClick} />
          </span>
          <CustomCards
            img="https://www.sageintacct.com/sites/default/files/styles/customer-quote-slider/public/red-door-interactive-featured-customer.png"
            quote={`"The first time I pulled up Sage Intact Budgeting and Planning in our
          executive meeting, they were blown away by how quickly I was able to
          create a scenario, plug in what they were asking for, and show the
          results in real-time. Our leadership was impressed with how well the
          solution worked, saw its value off the bat, and now they want me to
          bring it every time they review budgets".`}
            credit="Natalie Bonczek"
            active={c1}
            num1={12}
            num2={85}
            num3={33}
            p1={"Improved profitability year over year"}
            p2={"Reduced overall budgeting and planning time"}
            p3={"Accelerated time to finalize budgets"}
          />
          <CustomCards
            img="https://www.sageintacct.com/sites/default/files/styles/customer-quote-slider/public/macon-bibb-county-industrial-authority-featured-customer.png"
            quote={`"Getting reputable system like Sage Intact in place has been a big win for us. We now have the ability to be transparent and show our mayor, our commission, and even our partners what we are doing with our funds. This has greatly increased our community’s trust".`}
            credit="Amy Tarpley "
            active={c2}
            num1={85}
            num2={92}
            num3={100}
            p1={"Increased overall finance efficiency"}
            p2={"Decreased audit cycle times"}
            p3={"Shifted to electronic processes and workflows"}
          />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
