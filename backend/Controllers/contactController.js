/* eslint-disable no-undef */
const validator = require("validator");
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

module.exports = { addContact };
