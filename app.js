const express = require('express')
const Photo = require('./models/Photo');

const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = 3000;


app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.json())


mongoose.connect('mongodb://localhost/pcat-deneme-db',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index', {
    photos
  });
});
app.get("/about", (req, res) => {
    res.render('about');
  });
  
  app.get("/add_post", (req, res) => {
    res.render('add_post');
  });

  app.post('/photos', async (req, res) => {
    await Photo.create(req.body)  
    res.redirect('/')
  });

app.listen(port,()=> {
    console.log("Port dinleniyor");
});

