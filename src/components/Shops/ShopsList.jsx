import React, { useState, useEffect } from "react";
import { CardColumns, Nav } from "react-bootstrap";

import ShopsCard from "./ShopsCard";
import axios from "axios";

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/shops`)
      .then((response) => response.data)
      .then((data) => setShops(data));
  }, []);

  return (
    <div className="ShopList">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Page d'accueil</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/customers">utilisateurs</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/add-shops">Ajouter un magasin</Nav.Link>
        </Nav.Item>
      </Nav>
      <CardColumns>
        {shops.map((element, index) => (
          <ShopsCard key={index} data={element} />
        ))}
      </CardColumns>
    </div>
  );
};
export default ShopList;
