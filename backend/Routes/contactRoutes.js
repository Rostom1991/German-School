/* eslint-disable no-undef */

const { addContact } = require("../Controllers/contactController");

const router = require("express").Router();

//Add Contact Route
router.post("/", addContact);

module.exports = router;
