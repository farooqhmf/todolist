const routes = require('./api/routes');
const express = require('express'),
    app = express(),
  port = process.env.PORT || 9000,
  mongoose = require('mongoose'),
   //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://farooq:farooq456@cluster0-ckrde.mongodb.net/test?retryWrites=true&w=majority');
require('./api/models/toDoList'); //created model loading here
// require('./api/models/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
