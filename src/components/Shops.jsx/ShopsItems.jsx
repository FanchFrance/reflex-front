import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const GamesItem = (props) => {
  const [show, setShow] = useState(false);
  const { id, title, language, summary } = props;

  const handleClose = () => {
    setShow(false);
  };

  const deleteGame = () => {
    axios
      .delete(`http://localhost:3000/api/games/${id}`)
      .then(window.location.reload(false))
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`Erreur lors de la suppression de l'artiste : ${err.message}`);
      });
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={() => handleClose()} centered>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer le jeu {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer ce jeu de la liste ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => handleClose()}>
            Annuler
          </Button>
          <Button variant="outline-danger" onClick={deleteGame}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="ItemList">
        <div className="col-md-1 ActionTitle">
          <p>{id}</p>
        </div>
        <div className="col-md-3 ActionTitle">
          <h3>{title}</h3>
        </div>
        <div className="col-md-2  ActionInfos">
          <p>Langue : {language}</p>
        </div>
        <div className="col-md-4  ActionInfos">
          <p>Résumé : {summary}</p>
        </div>
        <div className="col-md-2 ActionIcons">
          <Link to={`/admin/update-games/${id}`}>
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

GamesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default GamesItem;
