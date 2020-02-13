const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawData = fs.readFileSync('./data/roomData.json');
let rooms = JSON.parse(rawData);

/**
 * Route handler for getting all rooms.
 * @param {object} req - request.
 * @param {object} res - response.
 */
const roomsRouteHandler = (req, res) => {
  res.json(rooms);
}

/**
 * @route GET api/rooms
 * @description Get all rooms
 */
router.get('/', roomsRouteHandler);

module.exports = { router, roomsRouteHandler };
