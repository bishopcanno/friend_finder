// dependencies here
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// defines port here
var PORT = process.env.PORT || 8000;

//  initialize static method
app.use(express.static(path.join(__dirname, '/app/public')));

// bodyParser middleware initialized here so that we can more easily handle data
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



// listening on PORT
app.listen(PORT, function(){
    // informs the dev that the app is listening and what the port number its listening on
    console.log(`app is listening on PORT: ${PORT}`);
});
// the api routes here
require('./app/routing/api_routes')(app);

// the get routes are located on this file and the sever is requiring this file so it knows what to when it gets certain requests
require('./app/routing/html_routes')(app);
