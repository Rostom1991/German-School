/* eslint-disable no-undef */
const validator = require("validator");
const mongoose = require("mongoose");
const Contact = require("../Models/contactModel");
const addContact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All Fields Are Required!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email Is Not Valid!" });
  }
  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });
    if (!contact) {
      return res.status(400).json({ error: "Error Sending The Message" });
    }
    res.status(201).json({ message: "Thank You For Connecting With Us!" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    if (!contacts) {
      res.status(404).json({ error: "Not Contact Found" });
    }
    res.status(200).json(contacts);
  } catch {
    res.status(400).json({ error: error.message });
  }
};
const getContact = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID is not valid!" });
  }
  const contact = await Contact.findOne({ _id: id });
  if (!contact) {
    return res.status(404).json({ error: "Contact doesn't exist!" });
  }
  res.status(200).json({ contact });
};

module.exports = { addContact, getContacts, getContact };
