/* eslint-disable no-undef */

const {
  joinStudent,
  getStudent,
  getStudents,
} = require("../Controllers/joinController");

const router = require("express").Router();

//JOIN STUDENT
router.post("/", joinStudent);

//GET STUDENT
router.get("/:id", getStudent);

//GET STUDENTS
router.get("/", getStudents);

module.exports = router;
