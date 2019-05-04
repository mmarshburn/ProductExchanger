import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/categories"
          className={window.location.pathname === "/Categories" ? "nav-link active" : "nav-link"}
        >
          Explore Products
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/buy"
          className={window.location.pathname === "/buy" ? "nav-link active" : "nav-link"}
        >
          Buy
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/sell"
          className={window.location.pathname === "/sell" ? "nav-link active" : "nav-link"}
        >
          Sell
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          My Profile
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
