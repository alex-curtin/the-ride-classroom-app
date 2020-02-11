const express = require('express');
const router = express.Router();
const fs = require('fs');

const rawData = fs.readFileSync('./data/dailyData.json');
const dates = JSON.parse(rawData);

/**
 * @route GET api/dates
 * @description Get all dates
 */
router.get('/', (req, res) => {
  res.json(dates);
})

/**
 * @route  GET api/dates/:date
 * @description Get one date by date
 */
router.get('/:date', (req, res) => {
  const date = datesData.find(el => el.date === parseInt(req.params.date));
  res.json(date);
})


module.exports = router;