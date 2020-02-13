const express = require('express');
const router = express.Router();
const fs = require('fs');

const rawData = fs.readFileSync('./data/dailyData.json');
const dates = JSON.parse(rawData);

/**
 * Route handler for getting all dates.
 * @param {object} req - request.
 * @param {object} res - response.
 */
const datesRouteHandler = (req, res) => {
  res.json(dates);
};

/**
 * @route GET api/dates
 * @description Get all dates
 */
router.get('/', datesRouteHandler);

module.exports = { router, datesRouteHandler };