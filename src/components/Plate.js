import React from "react";
import "../style/section2.css";
function Plate({ img, para, head, link }) {
  return (
    <div className="plate">
      <h3>{head}</h3>
      <p>{para}</p>
      <a href="/">{link}</a>
      <img src={`${img}`} alt="option_img" />
    </div>
  );
}

export default Plate;
