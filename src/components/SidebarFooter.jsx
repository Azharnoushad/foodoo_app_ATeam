import React from "react";
import Button from "./Button";

const SidebarFooter = () => {
  return (
    <div className="sidebar_footer">
      <div className="userimg_container">
        <div className="user_img">
          <img src="./images/portraits1.jpg" alt="" />
        </div>
        <div className="user_img">
          <img src="./images/portraits2.jpg" alt="" />
        </div>
        <div className="user_img">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
      
      <div className="footer_description">
        <p>Create a team and take part in TV show!</p>
      </div>
      <div className="premium_btn_container">
        <Button title="Go to Premium" />
      </div>
    </div>
  );
};

export default SidebarFooter;
