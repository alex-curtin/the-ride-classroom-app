const express = require('express');
const app = express();
const cors = require('cors');

const datesRouter = require('./routes/api/dates').router;
const studentsRouter = require('./routes/api/students').router;
const desksRouter = require('./routes/api/desks').router;
const roomsRouter = require('./routes/api/rooms').router;

app.use(cors());

app.use('/api/dates', datesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/desks', desksRouter);
app.use('/api/rooms', roomsRouter);


app.get('/test', (req, res) => res.send('API running'));

module.exports = app;
