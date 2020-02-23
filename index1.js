const fs = require("fs");

const express = require("express");

const path = require("path");

var app = express();

port = 3000;

app.use(express.static('public'));


app.get('/notes', function(req, res) {
    
    res.sendFile(`${__dirname}/public/notes.html`)
}) 

app.get('/api/notes', function(req, res) {
    fs.readFile(`${__dirname}/db/db.json`, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })

}) 
app.get('/*', function(req, res) {
    res.sendFile(`${__dirname}/public/index.html`)
}) 







app.listen(port, () => console.log(`Example app listening on port ${port}!`));














