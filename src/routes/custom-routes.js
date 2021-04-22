'use strict';

const express = require('express');

const Thing = require('../models/thing.js');

const things = new Thing();

const router = express.Router();

//ReSTful routes

router.get('/things', getThings);
router.get('/things/:id', getOneThings);
router.post('/things', createThings);
router.put('/things/:id', updateThings);
router.delete('/things/:id', deleteThings);

function getThings(req, res) {
  let getAllThings = things.read();
  res.status(200).json(getAllThings);
}

function getOneThings(req, res) {
  const id = parseInt(req.params.id);
  let theThing = things.read(id);
  res.status(200).json(theThing);
}

function createThings(req, res) {
  let content = req.body;
  let createdThing = things.create(content);
  res.status(201).json(createdThing);
}

function updateThings(req, res) {
  //TODO
}

function deleteThings(req, res) {
  //TODO
}

module.exports = router;