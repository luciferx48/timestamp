var express = require('express');
const timestamp = require('../timestamp');
const route = express.Router();

route.get('/', (req, res)=>{
  const d = Date.now();
  res.send({
    "unix":d,
    "utc": new Date(d).toUTCString()
  });
})

route.get('/:time', (req, res)=>{
    res.send(timestamp(req.params.time));
})

module.exports = route;