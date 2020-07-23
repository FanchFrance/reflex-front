const express = require("express");
const router = express.Router();
const shops = require("./shops");
const customers = require("./customers");
const auth = require("./auth");

router.use("/shops", shops);
router.use("/customers", customers);
router.use("/auth", auth);

module.exports = router;
