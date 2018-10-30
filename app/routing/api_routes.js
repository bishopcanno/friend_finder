// needed files, that are then set to variables
var friendData = require('../data/friends.js');
var userData = require('../data/user.js');

module.exports = function (app){
    // get request for the friends.js file and the info there in
    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });
    // get request for the user.js file and the info there in
    app.get('/api/user', function(req, res){
        res.json(userData);
    });
    // post request, should populate the array within user.js, having trouble with this and data permanance 
    app.post("/api/user", function(req, res) {
        // console logs the json object and that the route is working
        console.log("post route is working...")
        console.log(req.body);
        
        // pushes the json to user.js array
        userData.push(req.body)
        
        // will be used for user auth stuff...
        if (userData.length > 0) {
            res.json(true);
            console.log('true')
            // res.redirect('/'); this is not working throwing a console log error. 
        } else {
            res.json(false);
        }        
    });
    
      // ---------------------------------------------------------------------------
      // I added this below code so you could clear out the table while working with the functionality.
      // Don"t worry about it!
    
    // app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = [];
    //     waitListData.length = [];

    //     res.json({ ok: true });
    // });
};
