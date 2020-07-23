import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomersItem = (props) => {
  const [show, setShow] = useState(false);
  const { id, firstname, lastname, email } = props;

  const handleClose = () => {
    setShow(false);
  };

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:3000/api/customers/${id}`)
      .then(window.location.reload(false))
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`Erreur lors de la suppression du client : ${err.message}`);
      });
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={() => handleClose()} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Supprimer l&apos;admin {firstname} {lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes-vous sûr de vouloir supprimer cet admin ?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => handleClose()}>
            Annuler
          </Button>
          <Button variant="outline-danger" onClick={deleteCustomer}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="ItemList">
        <div className="col-md-1 ActionTitle">
          <p>{id}</p>
        </div>
        <div className="col-md-4 ActionTitle">
          <h3>
            {firstname} {lastname}
          </h3>
        </div>
        <div className="col-md-4  ActionInfos">
          <p>{email}</p>
        </div>

        <div className="col-md-3 ActionIcons">
          <Link to={`/update-customers/${id}`}>
            <span className="fas fa-pen" />
          </Link>
          <span
            className="fas fa-trash"
            onClick={() => setShow(true)}
            role="button"
            tabIndex="0"
            onKeyDown={handleClose}
            aria-label="Edit"
          />
        </div>
      </div>
    </>
  );
};

CustomersItem.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default CustomersItem;
