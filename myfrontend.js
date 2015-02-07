/**
 * Created by Martin on 07/02/15.
 */

//var greeting = "Hello ";

// Gets the user's name and displays dialogue box with completed greeting
/*
var name = prompt("What's your name?")
var greetingMessage = greeting + name;
alert(greetingMessage);
*/


//  All below commented out as a block after starting to use express web server to prevent interference with form submission action="/booking" in Welcome.html

/*jQuery("#greeting-form").on("submit", function(event_details) {
    var greeting = "Hello ";
    var name = this.fullName.value;
    var emailAddress = this.emailAddress.value;
    var greetingMessage = greeting + name + " at " + emailAddress;

   *//* jQuery("#greeting-form").hide();
    // USe '$' shortcut instead of 'jQuery' - less typing :-)
    $("#greeting").append("<p>" + greetingMessage + "</p>");*//*

    // Use delayed fadeOut and fadeIn to engage attention
    $("#greeting-form").fadeOut(400);
    $("#greeting").append("<p>" + greetingMessage + "</p>").hide().delay(400).fadeIn(600);

    // alert(greetingMessage);

    // Stop page refresh to avoid showing the form being resubmitted with text field contents
    event_details.preventDefault();
})*/