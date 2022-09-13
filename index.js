// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { json } = require('express');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname+'/views/index.html');
});


// your first API endpoint... 
app.get("/api", function (req, res) {
  const d = new Date();
  res.json({
    "unix": d.getTime(),
    "utc": d.toUTCString()
  });
});

app.get("/api/:timestamp", function (req, res) {
  const time = req.params.timestamp;
  var d = new Date(Number(time));
  if(!isNaN(d.getTime())){
    res.json({
      "unix": d.getTime(),
      "utc": d.toUTCString()
    })
    res.end();
  }
  d = new Date(time);
  if(String(d)==="Invalid Date"){
    res.json({
      "error":"Invalid Date"
    })
    res.end()
  }else{
    res.json({
      "unix":d,
      "utc":d.toUTCString()
    })
    res.end();
  }


});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});