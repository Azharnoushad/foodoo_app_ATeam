import React from "react";
import Button from "./Button";

const MainNav = () => {
  return (
    <div className="nav_container">
      <div className="search_box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Enter your search request..." />
      </div>
      <div className="premium_btn_container">
        <i class="fa-solid fa-arrow-up-wide-short"></i>
        <Button title="Go to Premium" />
      </div>
    </div>
  );
};

export default MainNav;
