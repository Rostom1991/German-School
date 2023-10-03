/* eslint-disable no-undef */

const { joinStudent } = require("../Controllers/joinController");

//JOIN STUDENT
const router = require("express").Router();

router.post("/", joinStudent);

module.exports = router;
