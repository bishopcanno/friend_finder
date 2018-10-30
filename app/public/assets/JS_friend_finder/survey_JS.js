var userDataScoresArray = [];

// submit button event listener
$("#survey_submit").on('click', function(event){
    event.preventDefault();

    console.log("submit button is working")
    

        // gathers all the info from the survey and assigns it a variable or pushes it to an array
        var name = $("#name_form").val().trim();
        var photo = $("#photo_link_form").val().trim();

        userDataScoresArray.push($("#question_one").val().trim());
        userDataScoresArray.push($("#question_two").val().trim());
        userDataScoresArray.push($("#question_three").val().trim());
        userDataScoresArray.push($("#question_four").val().trim());
        userDataScoresArray.push($("#question_five").val().trim());
        userDataScoresArray.push($("#question_six").val().trim());
        userDataScoresArray.push($("#question_seven").val().trim());
        userDataScoresArray.push($("#question_eight").val().trim());
        userDataScoresArray.push($("#question_nine").val().trim());
        userDataScoresArray.push($("#question_ten").val().trim());
       
    // create new object based on the users input
    var newUserPost = {
        name: name,
        photo: photo,
        userDataScoresArray
      };
  
      console.log(newUserPost);
  
    // the post request, is working
    let currentUrl = window.location.origin


    $.post(`${currentUrl}/api/user`, newUserPost, function(data) {
       
        // Clear the form when submitting
        
    });    
});

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

// // userQuery is a GET function to get the JSON objects in users.js
// function userQuery (){
    
//     // uses the windows url and sets it to a variable and passes it down to the api GET request
//     let currentUrl = window.location.origin;

//     // api GET request
//     $.ajax ({url: `${currentUrl}/api/user`, method: "GET"})

//         .done(function(userData){
            
//             // sets the JSON object to userDataVariable so that its globaly accesable
//             userDataVariable = userData;
//             userDataScoresArray = userData.scores;
            
//         });
// };