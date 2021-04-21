'use strict';

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

app.use(express.json());

app.use(logger);

app.get('/person/:name', (req, res) => {
  res.send(`hey!`)
});



//must go after routes
app.use('*', notFound);

app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
    console.log(`server is up on port: ${port}`);
    });
  }
}