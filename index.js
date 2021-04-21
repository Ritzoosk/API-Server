'use strict'


//3rd part stuff first
const dotenv = require('dotenv');


//internal modules next
const server = require('./src/server.js');
const PORT = process.env.PORT || 3000;

dotenv.config();



server.start(PORT);