import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "../Buttons/ButtonAction";
import Header from "../Header";

const ShopsUpdate = ({ match }) => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [show, handleShow] = useState(false);
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/customers/${id}`)
      .then((response) => response.data)
      .then((data) => setInputs(data));
  }, [id]);

  const submitForm = (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/api/customers/${id}`;
    axios
      .put(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        alert(`Erreur lors de la modification du client : ${e.message}`);
      });
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <Modal size="lg" show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            L&apos;utilisateur {inputs.firstname} {inputs.lastname} a bien été
            modifié !
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
          <div className="col-md-8">
            <h2 className="mb-8">
              Modifier le client {inputs.firstname} {inputs.lastname}
            </h2>
          </div>
          <div className="ActionPanel col-md-4">
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
                  Prénom <span className="Required">*</span>
                </Form.Label>
                <Form.Control
                  name="firstname"
                  required
                  value={inputs.firstname}
                />
              </Form.Group>
              <Form.Group onChange={onChange}>
                <Form.Label>
                  Nom <span className="Required">*</span>
                </Form.Label>
                <Form.Control
                  name="lastname"
                  required
                  value={inputs.lastname}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group onChange={onChange}>
            <Form.Label>
              Email <span className="Required">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              value={inputs.email}
            />
          </Form.Group>
          <Form.Group onChange={onChange}>
            <Form.Label>
              Mot de passe <span className="Required">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              value={inputs.password}
            />
          </Form.Group>

          <p className="Required">* Champs requis</p>
          <button
            className="ButtonAction AddUser"
            type="submit"
            onClick={() => handleShow(true)}
          >
            Modifier
          </button>
        </Form>
      </section>
    </>
  );
};

ShopsUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ShopsUpdate;
