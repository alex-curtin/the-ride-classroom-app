const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawData = fs.readFileSync('./data/deskData.json');
let desks = JSON.parse(rawData);

/**
 * Route handler for getting all desks.
 * @param {object} req - request.
 * @param {object} res - response.
 */
const desksRouteHandler = (req, res) => {
  res.json(desks)
}

/**
 * @route GET api/desks
 * @description Get all desks
 */
router.get('/', desksRouteHandler);

module.exports = { router, desksRouteHandler };
