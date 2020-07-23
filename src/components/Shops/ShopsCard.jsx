import React, { useState } from "react";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function shop({ data }) {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1566897819059-db42e135fa69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.adress} </Card.Text>
          <ButtonGroup className="mb-2">
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Link href="update-shops/:id" />
            {""}
            <Button variant="danger" size="sm">
              Delete
            </Button>{" "}
            <Button variant="success" size="sm">
              Message
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default shop;
