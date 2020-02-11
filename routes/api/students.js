const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawData = fs.readFileSync('./data/studentData.json');
let students = JSON.parse(rawData);

/**
 * @route GET api/students
 * @description Get all students
 */
router.get('/', (req, res) => {
  res.json(students);
});

/**
 * @route GET api/students/:student_id
 * @description Get one student by id
 */
router.get('/:student_id', (req, res) => {
  const student = students.find(el => el.id === req.params.student_id);
  res.json(student);
})

module.exports = router;
