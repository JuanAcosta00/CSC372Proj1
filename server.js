const path = require("path");
const https = require('https');
const express = require("express");
const app = express();
const compression = require('compression')

// serves the static client page
app.use(compression())
app.use(express.static(path.join(__dirname, "client/dist")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('init');
})

console.log('Server started on port 3000');
app.listen(3000);