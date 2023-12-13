/* eslint-disable no-undef */

const { addContact, getContacts } = require("../Controllers/contactController");

const router = require("express").Router();

//Add Contact Route
router.post("/", addContact);

//get contacts
router.get("/", getContacts);

module.exports = router;
