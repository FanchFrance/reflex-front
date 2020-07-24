import React, { useState } from "react";
import "../App.css";
import marsha from "../img/marsha_johnson2.jpeg";

const Header = () => {
  const [Profile] = useState({
    firstname: "François",
    lastname: "Yhuel",
    photo: "",
  });

  return (
    <header>
      <div className="Header-container">
        <div className="Admin-brand col-md-4">
          <h1>Vos commerces qui agissent</h1>
        </div>
        <div className="Admin-board col-md-6">
          <span className="fas fa-search" />
          <span className="fas fa-bell" />
          <div className="Admin-name">
            {Profile.firstname} {Profile.lastname}
          </div>
          <div className="navbar-brand">
            <img src={marsha} className="Img-admin" alt="Thomas" />
          </div>
          <button type="button" className="Disconnect" onClick="" tabIndex={0}>
            <span className="fas fa-power-off" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
