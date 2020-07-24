import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonAction from "../Buttons/ButtonAction";
import Header from "../Header";

const CustomersUpdate = ({ match }) => {
  const { id } = match.params;
  const [show, setShow] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    }
  );

  const getUsersData = () => {
    const url = `http://localhost:3000/api/companies/${id}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        delete data.start_date;
        console.log(data);
        setUserInput(data);
      })
      .catch();
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/companies/${id}`;
    axios
      .put(url, userInput)
      .then((res) => res.data)
      .catch((event) => {
        // eslint-disable-next-line no-alert
        alert(
          `Erreur lors de la modification de l'entreprise : ${event.message}`
        );
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  // console.log(CompanyName);
  console.log(userInput);
  return (
    <>
      <Header />
      <section className="ContainerBody">
        <div className="Panel">
          <div className="col-md-4">
            <h1 className="PanelTitle">
              Modifier l&apos;entreprise {userInput.name}{" "}
            </h1>
          </div>
          <div className="ActionPanel ContainerButton col-md-8">
            <Link to="/admin/companies">
              <ButtonAction name="Retour" display="Return" />
            </Link>
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formGroupName">
                <Form.Label>prenom</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  value={userInput.firstname}
                />
                <Form.Label>nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={userInput.lastname}
                />
              </Form.Group>

              <Form.Group controlId="formGroupCity">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={userInput.email}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPostCode">
                <Form.Label>Code Postal</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={userInput.password}
                />
              </Form.Group>
            </Col>
          </Row>
          <button
            type="submit"
            onClick={() => setShow(true)}
            className="ButtonAction AddUser"
          >
            Modifier
          </button>
        </Form>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Tricky Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            L&apos;entreprise {userInput.name} a été modifiée
          </Modal.Body>
          <Modal.Footer>
            <Link to="/admin/companies">
              <Button variant="primary" onClick={handleClose}>
                Fermer
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

CustomersUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default CustomersUpdate;
