import React from "react";
import "../style/section2.css";
import Plate from "./Plate";
function Section2() {
  window.addEventListener("load", () => {
    let compo = document.getElementsByClassName("plate")[0];
    console.log(compo);
    compo.classList.add("visible");
  });

  const handleClick = (e) => {
    let compo = document.getElementsByClassName("plate");
    console.log(e.target.getAttribute("value"));
    let val = e.target.getAttribute("value");
    console.log(compo.length);
    for (let i = 0; i < compo.length; i++) {
      compo[i].classList.remove("visible");
    }
    compo[val].classList.add("visible");
  };
  return (
    <div className="wrapper_div">
      <h2>
        Solutions for your <strong>industry’s specific needs</strong>
      </h2>
      <div className="industryBox">
        <div className="ind_menu">
          <div onClick={handleClick} className="choice" value={0}>
            For Any Industry
          </div>
          <div onClick={handleClick} className="choice" value={1}>
            Construction and Real Estate
          </div>
          <div onClick={handleClick} className="choice" value={2}>
            Financial Services
          </div>
          <div onClick={handleClick} className="choice" value={3}>
            Healthcare
          </div>
          <div onClick={handleClick} className="choice" value={4}>
            Hospitality
          </div>
          <div onClick={handleClick} className="choice" value={5}>
            Nonprofits
          </div>
          <div onClick={handleClick} className="choice" value={6}>
            Professional Services
          </div>
          <div onClick={handleClick} className="choice" value={7}>
            Subscription and SaaS
          </div>
        </div>
        <div className="ind_data">
          <Plate
            head="For Any Industry"
            para="The smart cloud accounting solution to unleash the potential of your business. Learn why industry leaders choose Sage Intact—rated #1 in customer satisfaction by G2. "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-any-industry.png?itok=o2aG6oOu"
            link="For Any Industry"
          />
          <Plate
            head="Construction and Real Estate"
            para="Sage Intact Construction is a native cloud solution that enables proactive job cost management with critical financial and operational metrics that drive increased efficiency, reduced audit time, and improved... "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-construction-real-estate.png?itok=ph2pgKZt"
            link="Construction and Real Estate industry"
          />
          <Plate
            head="Financial Services"
            para="The #1 accounting software provider trusted by leading firms across the financial services industry, including: wealth and asset management, real estate, insurance, lending and fintech. Learn more about Sage Intacct,...  "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-financial-services.png?itok=s1wVQqGI"
            link="Financial Services industry"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
