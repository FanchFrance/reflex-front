import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ButtonAction from "./Buttons/ButtonAction";
import "../App.css";

const Welcome = () => {
  const [Profile, setProfile] = useState({
    firstname: "François",
    lastname: "Yhuel",
  });

  return (
    <>
      <Header />
      <section className="ContainerBody">
        <h1>
          Bienvenue {Profile.firstname} {Profile.lastname}
        </h1>
        <h2>Aller à l'essentiel</h2>
        <p>
          Chez nous la communauté agit avec bienveillance pour vous aidez à
          consommer local. Vous pouvez consulter les bon plans, mais le mieux
          reste de vous creer un compte et partager vos bon plans.
        </p>
        <ButtonAction name="Démarrer >" display="Action" />
      </section>
    </>
  );
};

export default Welcome;
