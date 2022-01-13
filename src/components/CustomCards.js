import React from "react";
import "../style/trusted.css";
function CustomCards({
  img,
  quote,
  credit,
  active,
  num1,
  num2,
  num3,
  p1,
  p2,
  p3,
}) {
  return (
    <>
      {active && (
        <div className="custom">
          <div className="rightPart">
            <div className="imgCover">
              <img src={`${img}`} alt="cover image" />
            </div>
            <blockquote>{quote}</blockquote>
            <b>{credit}</b>
          </div>
          <div className="leftPart">
            <h2>Key Outcomes</h2>
            <div className="item_feature">
              <p className="number_data">{num1}%</p>
              <div className="desc_number">{p1}</div>
            </div>
            <div className="item_feature">
              <p className="number_data">{num2}%</p>
              <div className="desc_number">{p2}</div>
            </div>
            <div className="item_feature">
              <p className="number_data">{num3}%</p>
              <div className="desc_number">{p3}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomCards;
