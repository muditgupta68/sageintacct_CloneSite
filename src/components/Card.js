import React from "react";
import "../style/card.css";
function Card({ head, para, next }) {
  return (
    <div className="card">
      <div className="content">
        <p className="heading">{head}</p>
        <p className="para">{para}</p>
        {next && <p className="link">{next}</p>}
      </div>
    </div>
  );
}

export default Card;
