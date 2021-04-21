'use strict';

const express = require('express');
const app = express();

const notfound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');


app.use(express.json());

app.use(logger);

app.get('/person/:name', nameCheck(req.query.name), (req, res) => {
  res.send('hey ${req.query.name}!')
});

function nameCheck(nameInput){
  return (req, res, next) => {
    if (typeof nameInput !== 'string'){
      res.status(500);
      next('not a string');
    } else {
      next();
    }
  }
}



//must go after routes
app.use('*', notFound);

app.use(errors);



module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
    console.log('server is up on port: ${port}');
    });
  }
}