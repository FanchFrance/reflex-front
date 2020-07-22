import React from "react";
import { Link } from "react-router-dom";
import branch from "../img/branch.png";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="Nav-container">
      <div>
        <div className="Nav-logo">
          <Link to="/admin">
            <img src={branch} className="Img-logo" alt="Tricky" />
          </Link>
        </div>
        <ul>
          <Link to="/admin/admin">
            <li className="brand-interface">
              <span className="fas fa-users-cog" />
              Admin
            </li>
          </Link>

          <Link to="/admin/companies">
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
