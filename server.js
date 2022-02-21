const path = require("path");
const https = require('https');
const express = require("express");
const app = express();
// const token = require('./config.js');
const compression = require('compression')
// const mongoose = require('mongoose');
// try {
//   mongoose.connect(process.env.MONGODB_URI,  () => {
//     console.log('connected to cloud database')
//   });
// } catch {
//   mongoose.connect('mongodb://localhost/fetcher', () => { console.log('Connected to local MongoDB'); });
// }
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