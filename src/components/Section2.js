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
    let opt = document.getElementsByClassName("choice");
    console.log(e.target.getAttribute("value"));
    let val = e.target.getAttribute("value");
    console.log(compo.length);
    for (let i = 0; i < compo.length; i++) {
      compo[i].classList.remove("visible");
      opt[i].classList.remove("selected");
    }
    compo[val].classList.add("visible");
    opt[val].classList.add("selected");
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
          <Plate
            head="Healthcare"
            para="Sage Intact is the choice of growing, data driven healthcare organizations. Our cloud-based accounting solution is the only accounting software endorsed by the AICPA and designated,...  "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-healthcare.png?itok=1YhNWrAo"
            link="Healthcare industry"
          />
          <Plate
            head="Hospitality"
            para="Best-in-class financial management for multi-property hotels, resorts, restaurants, entertainment venues, clubs, and all other hospitality industry businesses. "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-hospitality.png?itok=TuH9r7wZ"
            link="Hospitality industry"
          />
          <Plate
            head="Nonprofits"
            para="Sage Intact Helping Nonprofits Achieve Greater Impact."
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-non-profits.png?itok=KD4eclUN"
            link="Nonprofit industry"
          />
          <Plate
            head="Professional Services"
            para="Don't manage projects using the rear-view mirror. Sage Intacct delivers operational and financial visibility for your entire business—not just finance— for improved automation, "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-professional-services.png?itok=wD8WXM73"
            link="Professional Services industry"
          />
          <Plate
            head="Subscription and SaaS"
            para="The #1 Subscription Billing & Financial Software for SaaS Companies. "
            img="https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-subscription-saas.png?itok=O1Yqxqxp"
            link="Subscription and SaaS industry"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
