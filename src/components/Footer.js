import React from "react";
import "../style/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer">
      <p>
        © Copyright 2022 Sage Intact, Inc. | Privacy Policy | Cookie Notice |
        Responsible Disclosure | Customer Terms | Site Map
      </p>
      <div className="icons">
        <FacebookIcon className="ic_ons" />
        <LinkedInIcon className="ic_ons" />
        <TwitterIcon className="ic_ons" />
        <YouTubeIcon className="ic_ons" />
        <InstagramIcon className="ic_ons" />
      </div>
      <p>
        Created with ❤ by{" "}
        <a className="author" href="">
          Mudit Gupta
        </a>
      </p>
    </div>
  );
}

export default Footer;
