// userDataVariable will become the userData JSON from the api_routes.js

var userDataVariable;
var userDataScoresArray;


userQuery();

// submit button event listener
$("#survey_submit").on('click', function(event){
    event.preventDefault();

    console.log("submit button is working")
    // put an if statement in so that you dont overwrite a logged in user
    if(!userDataVariable.isThereUser){
        
        var name = $("#name_form").val().trim();
        var photo = $("#photo_link_form").val().trim();
        var qOne = $("#question_one").val().trim();
        var qTwo = $("#question_two").val().trim();
        var qThree = $("#question_three").val().trim();
        var qFour = $("#question_four").val().trim();
        var qFive = $("#question_five").val().trim();
        var qSix = $("#question_six").val().trim();
        var qSeven = $("#question_seven").val().trim();
        var qEight = $("#question_eight").val().trim();
        var qNine = $("#question_nine").val().trim();
        var qTen = $("#question_ten").val().trim();

        userDataScoresArray.push( $("#question_one").val().trim());
        userDataScoresArray.push( $("#question_two").val().trim());
        userDataScoresArray.push( $("#question_three").val().trim());
        userDataScoresArray.push( $("#question_four").val().trim());
        userDataScoresArray.push( $("#question_five").val().trim());
        userDataScoresArray.push( $("#question_six").val().trim());
        userDataScoresArray.push( $("#question_seven").val().trim());
        userDataScoresArray.push( $("#question_eight").val().trim());
        userDataScoresArray.push( $("#question_nine").val().trim());
        userDataScoresArray.push( $("#question_ten").val().trim());
       
           // Here we grab the form elements
    var newUserPost = {
        name: name,
        photo: photo,
        isThereUser: true,
        userDataScoresArray
      };
  
      console.log(newUserPost);
  
      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.
      
      let currentUrl = window.location.origin


    $.post(`${currentUrl}/api/user`, newUserPost,
        function(data) {
  
          
  
          // Clear the form when submitting
        //   $("#reserve-name").val("");
        //   $("#reserve-phone").val("");
        //   $("#reserve-email").val("");
        //   $("#reserve-unique-id").val("");
  
        });
    }
})

//  selector form initialization
$(document).ready(function(){
    $('select').formSelect();
});

// auto complete form initialization
$(document).ready(function(){
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });
});

// userQuery is a GET function to get the JSON objects in users.js
function userQuery (){
    
    // uses the windows url and sets it to a variable and passes it down to the api GET request
    let currentUrl = window.location.origin;

    // api GET request
    $.ajax ({url: `${currentUrl}/api/user`, method: "GET"})

        .done(function(userData){
            
            // sets the JSON object to userDataVariable so that its globaly accesable
            userDataVariable = userData;
            userDataScoresArray = userData.scores;
            
        });
};