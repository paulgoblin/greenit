'use strict';

const express = require('express')
    , Topic   = require('../models/topic')
    , authmiddleware = require('../util/authmiddleware');

let router = express.Router();

router.get('/', (req, res) => {
  Topic.find({}, (err, topics) => {
    res.status( err ? 400 : 200).send(err || topics)
  });
});

router.post('/', authmiddleware, (req, res) => {
  Topic.createNewTopic(req.body, req.userId, (err, topic) => {
    res.status( err ? 400 : 200).send(err || topic);
  });
});

module.exports = router;