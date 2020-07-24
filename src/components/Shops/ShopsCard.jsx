import React from "react";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function shop({ data }) {
  console.log(data);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={data.photo} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.adress} </Card.Text>
          <ButtonGroup className="mb-2">
            <Link to={`update-shops/${data.id}`}>
              <Button variant="primary" size="sm">
                Edit
              </Button>
              {""}
            </Link>
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
