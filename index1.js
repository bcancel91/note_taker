const fs = require("fs");

const express = require("express");

const path = require("path");

var app = express();

port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json())


app.get('/notes', function(req, res) {
    
    res.sendFile(`${__dirname}/public/notes.html`)
}) 

app.get('/api/notes', function(req, res) {
    fs.readFile(`${__dirname}/db/db.json`, 'utf8', (err, data) => {
        if (err) {
        //  console.error(err)
          return
        }
       // console.log(data)
       
        return res.json(JSON.parse(data))

      })

}) 
app.post('/api/notes', function(req, res){
 // console.log(req)
const requestData = req.body;

console.log(requestData);

fs.readFile(`${__dirname}/db/db.json`, 'utf8', (err, data) => {
    if (err) {
     // console.error(err);
    }
   let dataObject = JSON.parse(data);
  requestData.id = dataObject.length + "a";
   dataObject.push(requestData);
   let dataString = JSON.stringify(dataObject);
   fs.writeFile(`${__dirname}/db/db.json`, dataString, (err) => 
   {
   if(err){
   console.log(err);
   }
   return res.json(dataObject);
    } )
  })
})



app.get('/*', function(req, res) {
    res.sendFile(`${__dirname}/public/index.html`);

}) 



app.listen(port, () => console.log(`Example app listening on port ${port}!`));


