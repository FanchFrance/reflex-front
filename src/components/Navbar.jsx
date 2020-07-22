import React from "react";
import { Link } from "react-router-dom";
//import tricky from '../img/tricky-logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Nav-container">
      <div>
        {/* <div className="Nav-logo">
          <Link to="/admin">
            <img src={tricky} className="Img-logo" alt="Tricky" />
          </Link>
        </div>
        <ul>
          <Link to="/admin/admin">
            <li className="brand-interface">
              <span className="fas fa-users-cog" />
              Admin
            </li>
          </Link> */}
        <ul>
          <Link to="/admin/companies">
            <li className="brand-interface">
              <span className="fas fa-building" />
              Entreprises
            </li>
          </Link>
          <Link to="/admin/users">
            <li className="brand-interface">
              <span className="fas fa-users" />
              Utilisateurs
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
