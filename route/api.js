var express = require('express');

const route = express.Router();

route.get('/:time', (req, res)=>{
    const d = new Date();
    const obj = {
      "unix":Date.now(),
      "utc":d.toUTCString()
  }
    res.send(obj);
})

module.exports = route;