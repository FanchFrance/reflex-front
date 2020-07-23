const express = require("express");
const router = express.Router();
const connection = require("../config");

// ajout d"une donnée
router.post("/", (req, res) => {
  const data = req.body;

  connection.query("INSERT INTO shops SET ?", data, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// récupération de liste
router.get("/", (req, res) => {
  connection.query("SELECT * FROM shops", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// récupération d"une donnée
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query("SELECT * shops WHERE id = ?", idParams, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.json(results);
    }
  });
});

// modification d"une donnée
router.put("/:id", (req, res) => {
  const idParams = req.params.id;
  const data = req.body;

  connection.query(
    "UPDATE shops SET ? WHERE id = ?",
    [data, idParams],
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// suppression d"une donnée
router.delete("/:id", (req, res) => {
  const idParams = req.params.id;

  connection.query(
    "DELETE FROM shops WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// recupération liste de donnée par rapport à une jointure
router.get("/:idShops/customers", (req, res) => {
  const idUser = req.params.idShops;

  connection.query(
    "SELECT * FROM customers_shops as cs JOIN customers as c ON c.id = cs.idCustomers JOIN shops as s ON s.id = cs.idShops WHERE s.id = ? ",
    idUser,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
