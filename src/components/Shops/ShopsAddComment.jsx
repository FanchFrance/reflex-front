import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "../Buttons/ButtonAction";
import Header from "../Header";

const ShopsUpdate = ({ match }) => {
  const [inputs, setInputs] = useState({
    name: "",
    adress: "",
    photo: "",
    email: "",
    type: "",
    description: "",
  });

  const [show, handleShow] = useState(false);
  const { id } = match.params;
  console.log(typeof match.params.id);

  const submitForm = (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/api/shops/${Number(id)}`;
    axios
      .put(url, inputs)
      .then((res) => res.data)
      .catch((e) => {
        alert(`Erreur lors de la modification du commerce : ${e.message}`);
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
            Le commerce {inputs.name} a bien été modifié !
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/shops">
            <button type="button" className="ButtonAction Action">
              Ok
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
      <section className="ContainerBody">
        <div className="Panel">
          <div className="col-md-8">
            <h2 className="mb-8">Modifier le commerce {inputs.name}</h2>
          </div>
          <div className="ActionPanel col-md-4">
            <Link to="/shops">
              <ButtonAction name="Retour" display="Return" />
            </Link>
          </div>
        </div>
        <Form onSubmit={submitForm}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>
                  Nom <span className="Required">*</span>
                </Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="name"
                  required
                  value={inputs.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  Adresse<span className="Required">*</span>
                </Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="adress"
                  required
                  value={inputs.adress}
                />
              </Form.Group>
            </Col>
            <Col>
              <div className="Avatar"></div>
              <Form.Group onChange={onChange}>
                <Form.Label>Photo de profil</Form.Label>
                <Form.Control
                  type="text"
                  name="photo"
                  placeholder="http://"
                  value={inputs.photo}
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
              type <span className="Required">*</span>
            </Form.Label>
            <Form.Control name="password" required value={inputs.type} />
          </Form.Group>
          <Form.Group onChange={onChange}>
            <Form.Label>
              description <span className="Required">*</span>
            </Form.Label>
            <Form.Control
              name="description"
              required
              value={inputs.description}
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
