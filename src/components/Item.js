import React from "react";
import "../style/feature.css";
function Item({ id, head, desc, p1, p2, p3, p4, value,func }) {
  return (
    <div className="item" key={id}>
      <h3 onClick={func}>{head}</h3>
      <div className={`desc && ${value && "active"}`}>
        <p>{desc}</p>
        <ul>
          <li>{p1}</li>
          <li>{p2}</li>
          <li>{p3}</li>
          <li>{p4}</li>
        </ul>
      </div>
    </div>
  );
}

export default Item;
