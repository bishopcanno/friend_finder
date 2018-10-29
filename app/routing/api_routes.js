var friendData = require('../data/friends.js');
var userData = require('../data/user.js');

module.exports = function (app){
    app.get('/api/friends', function(req, res){
        res.json(friendData);
    })
    app.get('/api/user', function(req, res){
        res.json(userData);
    })

    app.post("/api/user", function(req, res) {

        userData.push(req.body)
        res.json(true);
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        // if (tableData.length < 5) {
        //   tableData.push(req.body);
        //   res.json(true);
        // }
        // else {
        //   waitListData.push(req.body);
        //   res.json(false);
        // }
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
