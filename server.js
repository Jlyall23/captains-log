const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Log = require('./Models/logs')
require('dotenv').config()

//Mongoose info
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
console.log('connected to mongo');
});

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//Routes
app.get('/', (req,res)=>{
    res.send('Captains Log')
})
app.get('/logs', (req, res) => {
    res.render('Index')
})
//put
app.get('/logs/new', (req, res) => {
	res.render('New')
});
app.post('/logs', (req, res) => {
  console.log(req.body);
  const log = new Log(req.body)
  console.log(log)
  res.send(req.body);
});
//delete
app.get('/logs/edit', (req, res) => {
    res.render('Edit')
})
app.listen(3232,() => {
    console.log('listening');
});