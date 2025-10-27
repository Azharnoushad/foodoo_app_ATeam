import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <i className="fa-solid fa-book"></i>
            <span>Recipes</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <i className="fa-solid fa-heart"></i>
            <span>Favorites</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <i className="fa-solid fa-bowl-food"></i>
            <span>Courses</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/community"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <i className="fa-solid fa-users"></i>
            <span>Community</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
