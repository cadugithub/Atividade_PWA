const express = require('express');
const router = require('./router')
const app = express();
const bodyParser = require('body-parser')

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router);
app.set('views', 'views');
app.set('view engine', 'ejs');

app.listen(port, ()=>console.log('conectado'));
