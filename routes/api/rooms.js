const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawData = fs.readFileSync('./data/roomData.json');
let rooms = JSON.parse(rawData);

/**
 * @route GET api/rooms
 * @description Get all rooms
 */
router.get('/', (req, res) => {
  res.json(rooms)
});

/**
 * @route GET api/rooms/:room_id
 */
router.get('/:room_id', (req, res) => {
  const room = rooms.find(el => el.roomId === req.params.room_id);
  res.json(room);
})

module.exports = router;
