import React from "react";

import titleImg from "../../assets/title.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">
        <span>L</span>
        <span>
          <img className="img-title" src={titleImg} alt="" />
        </span>
        <span>V</span>
        <span>E</span>
        <span> CALCULATOR</span>
      </h1>
    </nav>
  );
};

export default Navbar;
