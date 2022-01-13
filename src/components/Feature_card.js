import React from "react";
import "../style/feature_card.css";
import Card from "./Card";
function Feature_card() {
  return (
    <div className="feature_card">
      <div className="wrap_div">
        <div className="wrap">
          <Card
            head="See Sage Intact in action"
            para="Learn what Sage Intact can offer you with a live demo followed by Q&A."
            next="Sign up Now"
          />
          <Card
            head="#1 for the 5th year in a row"
            para="Once again, Sage Intact received the highest product score in core financial for the lower midsize enterprises use case from Gartner"
            next="Read Report"
          />
          <Card
            head="Outgrowing QuickBooks?"
            para="Find out why thriving organizations say goodbye to QuickBooks and partner with Sage Intacct to power their growth."
            next="Learn why"
          />
        </div>
      </div>
    </div>
  );
}

export default Feature_card;
