import React, { useContext, useEffect, useState } from "react";
//import axios from "axios";
import Header from "./Header";
import ButtonAction from "./Buttons/ButtonAction";
import "./Home.css";
//import { authContext } from "../contexts/AuthContext";

const Welcome = () => {
  //   const { auth } = useContext(authContext);
  //   const [Profile, setProfile] = useState({
  //     firstname: "",
  //     lastname: "",
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

  return (
    <>
      <Header />
      <section className="ContainerBody">
        <h1>Bienvenue</h1>
        <h2>Aliquam eu lorem ultrices</h2>
        <p>
          Morbi non diam congue, volutpat quam non, cursus metus. Donec ut
          imperdiet velit.Cras vel imperdiet libero. Etiam Etiam Etiam fermentum
          leo at magna scelerisque, vehicula. non posuere tortor. Sed ornare
          felis neque, ac iaculis mauris dictum a. Vivamus quis metus magna.
          Suspendisse sit viverra est. Suspendisse suscipit, est quis laoreet
          efficitur, leo justo interdum ex, quis pharetra nunc sapien ut magna.
        </p>
        <h2>Praesent blandit tincidunt</h2>
        <p>
          Ut pellentesque velit purus, quis lacinia nisi ornare in. Integer
          suscipit venenatis purus in eleifend. Quisque eleifend dapibus
          aliquam. Sagittis ipsum suscipit semper. Aenean ultrices, dolor sed
          egestas interdum, ante dui tristique augue, vitae suscipit risus leo
          id est. Etiam id ligula aliquam, commodo metus ut, consequat sem.
          Integer et mi ut quam condimentum luctus vel vitae quam. Sed quis
          facilisis diam. Vestibulum elementum ante sed risus elementum ornare.
        </p>
        <ButtonAction name="Démarrer >" display="Action" />
      </section>
    </>
  );
};

export default Welcome;
