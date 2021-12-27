const express = require('express')
const path = require('path');
const app = express();
const ejs = require('ejs');

const port = 3000;
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/',(req,res)=> {
    res.render('index');
})
app.get("/about", (req, res) => {
    res.render('about');
  });
  
  app.get("/add_post", (req, res) => {
    res.render('add_post');
  });

app.listen(port,()=> {
    console.log("Port dinleniyor");
});

