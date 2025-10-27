import React from "react";

const Profile = ({ name, description }) => {
  return (
    <div className="profile_container">
      <div className="profile_image">
        <div className="image_wrapper">
          <img
            src="./profilePic/userProfileImage.png"
            alt="userProfileImage"
            className="image"
          />
        </div>
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
        <h3 className="description">{description}</h3>

        <div className="cart">
          <i className="fa-solid fa-bag-shopping"></i>
          <p>37</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
