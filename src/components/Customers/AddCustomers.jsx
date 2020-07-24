import React, { useState } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "../Buttons/ButtonAction";
import Header from "../Header";
import "../../App.css";

const AddCustomers = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [show, handleShow] = useState(false);
  const submitForm = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/api/customers";
    axios
      .post(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        alert(`erreur lors de l'ajout du client : ${e.message}`);
      });
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header />
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Le client {inputs.firstname} {inputs.lastname} a bien été ajouté !
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/customers">
            <button type="button" className="ButtonAction Action">
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
      <section className="ContainerBody">
        <div className="Panel">
          <div className="col-md-4">
            <h2 className="mb-5">S'enregistrer comme client</h2>
          </div>
          <div className="ActionPanel col-md-8">
            <Link to="/customers">
              <ButtonAction name="Retour" display="Return" />
            </Link>
          </div>
        </div>
        <Form onSubmit={submitForm}>
          <Row>
            <Col>
              <Form.Group onChange={onChange}>
                <Form.Label>
                  firstname <span className="Required">*</span>
                </Form.Label>
                <Form.Control name="firstname" required />
              </Form.Group>
              <Form.Group onChange={onChange}>
                <Form.Label>
                  lastname<span className="Required">*</span>
                </Form.Label>
                <Form.Control name="lastname" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group onChange={onChange}>
                <Form.Label>Photo de profil</Form.Label>
                <Form.Control type="text" name="photo" placeholder="http://" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group onChange={onChange}>
            <Form.Label>
              Email <span className="Required">*</span>
            </Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>
          <Form.Group onChange={onChange}>
            <Form.Label>
              Mot de passe <span className="Required">*</span>
            </Form.Label>
            <Form.Control type="password" name="password" required />
          </Form.Group>

          <p className="Required">* Champs requis</p>
          <button
            className="ButtonAction AddUser"
            type="submit"
            onClick={() => handleShow(true)}
          >
            Créer
          </button>
        </Form>
      </section>
    </div>
  );
};
export default AddCustomers;
