var path = require('path');


// exports these gets to the server.js file so it knows what to do when it gets a url request, probably need to build a 404 page at some point
module.exports = function(app){
    // takes the user to the survey page 
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    // takes the user to the home page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    // is another way to directly send the user to the home page regardless of what url they punch in, could be confusing and best practice would be to give a 404 error page.
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}