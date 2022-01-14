import React from "react";
import "../style/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const handleClick = () => {
    let menu = document.getElementsByClassName("menu")[0];
    menu.classList.toggle("visible");
  };

  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <img
        src="https://www.sageintacct.com/sites/default/files/sage-intacct-logo.svg"
        alt="logo"
        onClick={top}
      />

      <div className="menu">
        <div className="menu_opt">
          <div className="mobile">
            <img
              src="https://www.sageintacct.com/sites/default/files/sage-intacct-logo.svg"
              alt="logo"
            />
            <CloseIcon className="cross" onClick={handleClick}></CloseIcon>
          </div>
          <p>
            products <span>&#x2228;</span>
          </p>
          <p>
            Industries <span>&#x2228;</span>
          </p>
          <p>
            services <span>&#x2228;</span>
          </p>
          <p>
            partners <span>&#x2228;</span>
          </p>
          <p>
            resources <span>&#x2228;</span>
          </p>
          <p>
            company <span>&#x2228;</span>
          </p>
        </div>
        <button>get pricing</button>
      </div>
      <div className="menuBar" onClick={handleClick}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Navbar;
