console.log('home_js.js is loading')
// userDataVariable will become the userData JSON from the api_routes.js
var userDataVariable;
// differenceTotal is the total difference between the user and potential friends
var differenceTotal = 0;

// friendQuery is a GET function to get the JSON objects in friends.js
function friendQuery (){

    // uses the windows url and sets it to a variable and passes it down to the api GET request
    let currentUrl = window.location.origin;

    // api Get request
    $.ajax ({url: `${currentUrl}/api/friends`, method: "GET"})

        .done(function(friendData){

            // for loop that goes over each object in friendsArray in friends.js
            for (let x = 0; x < friendData.length; x++){
                
                // initializes scorePrinter and passes friendData[x] and userDataVariable as arguments
                scorePrinter(friendData[x], userDataVariable);
            }
        });
};

// userQuery is a GET function to get the JSON objects in users.js
function userQuery (){
    
    // uses the windows url and sets it to a variable and passes it down to the api GET request
    let currentUrl = window.location.origin;

    // api GET request
    $.ajax ({url: `${currentUrl}/api/user`, method: "GET"})

        .done(function(userData){
            
            // sets the html in friend_head3 to the users name
            $("#friend_head3").html(`<h3>${userData.name}</h3>`);
            
            // sets the JSON object to userDataVariable so that its globaly accesable
            userDataVariable = userData;

        });
};

// scorePrinter function will take each friendData object as an argument as well as the userData object
function scorePrinter(friendDataAtX, userData){
    // used to make sure that the user has logged in.
    if(userData.isThereUser){
        // runs a for loop over the scores array in each friends object
        for (let y = 0; y < friendDataAtX.scores.length; y++){

            // compares each value at the same index for the user and the potential friend
            var compare = friendDataAtX.scores[y] - userData.scores[y];
            
            // runs an if statement that checks to make sure that the difference is a positive number and if it's not multiply it by -1 to make it positive
            // then adds the difference to the differenceTotal
            if(compare < 0){
                compare = compare * -1;
                differenceTotal = differenceTotal + compare;
            } else {
                differenceTotal = differenceTotal + compare;
            }       
        }
        // appends each user along with the total difference between them and the user to the profile card
        $("#friend_post").append(`<h4>${friendDataAtX.name} || ${differenceTotal} </h4>`);
        
        // resets the differenceTotal to zero so the next friend can be compared against the user
        differenceTotal = 0;
    }    
}

// initializes the userQuery function
userQuery();
// initializes the friendQuery function
friendQuery();


