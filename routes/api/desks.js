const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawData = fs.readFileSync('./data/deskData.json');
let desks = JSON.parse(rawData);

/**
 * @route GET api/desks
 * @description Get all desks
 */
router.get('/', (req, res) => {
  res.json(desks)
});

/**
 * @route GET api/desk/:desk_id
 * @description Get one desk by id
 */
router.get('/:desk_id', (req, res) => {
  const desk = desks.find(el => el.id === req.params.desk_id);
  res.json(desk);
})

module.exports = router;
