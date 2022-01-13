import React from "react";
import "../style/partner.css";
import CardImage from "./CardImage";
function Partner() {
  return (
    <div className="wrapper_div inc">
      <h2>Your partner for the long-term</h2>
      <p>
        We’re obsessed with ensuring your success. From our Customer for Life™
        program to our proven, connected products that you won’t outgrow; we’ll
        be with you every step of the way.
      </p>
      <div className="card_div">
        <CardImage
          img="https://www.sageintacct.com/sites/default/files/sage-intacct-customer-for-life.png"
          para="You get a partner that’s invested in your success"
        />
        <CardImage
          img="https://www.sageintacct.com/sites/default/files/aicpa-preferred-financial-management-solution.png"
          para="You get the best, proven technology for your organization"
        />
        <CardImage
          img="https://www.sageintacct.com/sites/default/files/grow-scale-with-sage-intacct.png"
          para="You won’t outgrow us; we’ll scale with you every step of the way"
        />
      </div>
    </div>
  );
}

export default Partner;
