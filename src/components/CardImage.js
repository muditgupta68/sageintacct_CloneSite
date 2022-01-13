import React from "react";

function CardImage({ img, para }) {
  return (
    <div className="cardImage">
      <img src={img} alt="card img" />
      <p>{para}</p>
    </div>
  );
}

export default CardImage;
