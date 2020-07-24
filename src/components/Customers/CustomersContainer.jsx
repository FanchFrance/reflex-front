import React from "react";
import { Link } from "react-router-dom";
import ButtonAction from "../Buttons/ButtonAction";
import "../../App.css";
import SearchInput from "../SearchInput";
import CustomersList from "./CustomersList";
import Header from "../Header";
import Navbar from "../Navbar";

const CustomersContainer = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="ContainerBody">
        <div className="Panel">
          <div className="col-md-4">
            <h1 className="PanelTitle">Tous les clients</h1>
          </div>
          <div className="ActionPanel col-md-8">
            <SearchInput />
            <Link to="/add-customers">
              <ButtonAction name="Ajouter un utilisateur" display="AddUser" />
            </Link>
          </div>
        </div>
        <div>
          <div className="ItemTitle">
            <div className="col-md-1 ActionTitle ActionTitleFont">
              <p>ID</p>
            </div>
            <div className="col-md-4 ActionTitle ActionTitleFont">
              <p>Prénom et Nom</p>
            </div>
            <div className="col-md-3  ActionInfos ActionTitleFont">
              <p>Email</p>
            </div>
          </div>
        </div>
        <div>
          <CustomersList />
        </div>
      </section>
    </>
  );
};

export default CustomersContainer;
