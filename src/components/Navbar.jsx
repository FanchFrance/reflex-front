import React from "react";
import { Link } from "react-router-dom";
import branch from "../img/branch.png";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="Nav-container">
      <div>
        <div className="Nav-logo">
          <Link to="/">
            <img src={branch} className="Img-logo" alt="Tricky" />
          </Link>
        </div>
        <ul>
          <Link to="/shops">
            <li className="brand-interface">
              <span className="fas fa-building" />
              Commerces
            </li>
          </Link>
          <Link to="/customers">
            <li className="brand-interface">
              <span className="fas fa-users" />
              Clients
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
