/* eslint-disable no-undef */

const {
  addContact,
  getContacts,
  getContact,
} = require("../Controllers/contactController");

const router = require("express").Router();

//Add Contact Route
router.post("/", addContact);

//get contacts
router.get("/", getContacts);

//get contact
router.get("/:id", getContact);

module.exports = router;
