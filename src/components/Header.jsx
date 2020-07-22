/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import homer from "../img/homer.jpg";
//import { authContext } from "../contexts/AuthContext";

const Header = () => {
  //   const { setAuthData, auth } = useContext(authContext);
  //   const [Profile, setProfile] = useState({
  //     firstname: "",
  //     lastname: "",
  //     photo: "",
  //   });

  //   useEffect(() => {
  //     axios({
  //       method: "post",
  //       url: "http://localhost:3000/api/auth",
  //       headers: {
  //         Authorization: `Bearer ${auth.data}`,
  //       },
  //     })
  //       .then((response) => response.data)
  //       .then((data) => setProfile(data.authData.admin[0]));
  //   }, []);

  const Logout = () => {
    //setAuthData(null);
  };

  return (
    <header>
      <div className="Header-container">
        <div className="Admin-brand col-md-3">
          <h1>Admin Tricky</h1>
        </div>
        <div className="Admin-board col-md-7">
          <span className="fas fa-search" />
          <span className="fas fa-bell" />
          <div className="Admin-name">Profile.firstname Profile.lastname</div>
          <div className="navbar-brand">
            <img src={homer} className="Img-admin" alt="Thomas" />
          </div>
          <div
            className="Disconnect"
            role="button"
            tabIndex={0}
            onClick={Logout}
          >
            <span className="fas fa-power-off" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
