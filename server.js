
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

task = require('./api/models/toDoList'); //created model loading here
user = require('./api/models/user');   //created model loading here

const routes = require('./api/routes');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://farooq:farooq456@cluster0-ckrde.mongodb.net/test?retryWrites=true&w=majority');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
