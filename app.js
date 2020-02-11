const express = require('express');
const app = express();
const cors = require('cors');

const datesRouter = require('./routes/api/dates');
const studentsRouter = require('./routes/api/students');
const desksRouter = require('./routes/api/desks');
const roomsRouter = require('./routes/api/rooms');

app.use(cors());

app.use('/api/dates', datesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/desks', desksRouter);
app.use('/api/rooms', roomsRouter);


app.get('/test', (req, res) => res.send('API running'));

module.exports = app;
