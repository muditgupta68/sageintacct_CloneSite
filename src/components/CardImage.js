import React from "react";
import "../style/partner.css";
function CardImage({ img, para }) {
  return (
    <div className="cardImage">
      <img src={img} alt="card img" />
      <p>{para}</p>
    </div>
  );
}

export default CardImage;
