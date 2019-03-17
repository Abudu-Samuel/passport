import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="brand">
          Passenger-App
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/passengers" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
