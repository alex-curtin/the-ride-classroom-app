const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawData = fs.readFileSync('./data/studentData.json');
let students = JSON.parse(rawData);

/**
 * Route handler for getting all students.
 * @param {object} req - request
 * @param {object} res - response
 */
const studentsRouteHandler = (req, res) => {
  res.json(students);
}

/**
 * @route GET api/students
 * @description Get all students
 */
router.get('/', studentsRouteHandler);

module.exports = { router, studentsRouteHandler };
