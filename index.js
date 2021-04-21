'use strict'


//3rd part stuff first
const dotenv = require('dotenv');


//internal modules next
const server = require('./src/server.js');

dotenv.config();


const PORT = process.env.PORT || 3000;

server.start(PORT);