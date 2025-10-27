import React from "react";
import Button from "./Button";

const MainNav = ({ setShowSideNav, showSideNav }) => {
  const handleMenu = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <div className="nav_container">
      <div className="search_box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Enter your search request..." />
      </div>
      <div className="premium_btn_container">
        <i className="fa-solid fa-arrow-up-wide-short"></i>
        <Button title="Go to Premium" />
      </div>
      <div className="menu" onClick={handleMenu}>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default MainNav;
